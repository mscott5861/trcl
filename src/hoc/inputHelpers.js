import React from 'react'
import styled from 'styled-components'
import { isRequired } from 'utilities'



//----------------------------------------------------------------------------------
// Swappable input helper HOCs for standard input functionality (typeahead, vali-
// dation, error state handling, disabling/enabling, etc.)
//----------------------------------------------------------------------------------
export const withMask = (WrappedInput, mask = isRequired('mask is a required parameter for the withMask HOC.')) => {
  return class extends React.Component {
    maskInput = (inputReceived) => {
      let displayValue = mask.repeat(inputReceived.length);
      return displayValue;
    }

    render() {
      return (
        <WrappedInput
          maskInput={this.maskInput}
          {...this.props} />
      );
    }
  }
}

const StContainer = styled.div`
  position: relative;
  z-index: 20;
`

const StSuggestionBox = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #DDD;
  background: #FFF;
  padding: 1rem;
  z-index: 20;
`

const StSuggestion = styled.p`
  padding: .5rem 0;
  background: ${props => props.active ? '#DDD' : '#FFF'};
`

export const withTypeahead = (WrappedInput) => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        typeaheadValue: '',
        suggestionIdx: -1,
        suggestions: [],
      }
      this.input = React.createRef();
    }


    //------------------------------------------------------------------
    // A DP implementation of the Levenshtein distance.
    // Courtesy of https://gist.github.com/andrei-m/982927
    //------------------------------------------------------------------
    getLevenshteinDistance = (realValue, datum) => {
      let m = [],
          i = 0,
          j = 0;

      if (!(realValue && datum)) {
        return (realValue || datum).length;
      }

      for (i = 0; i <= datum.length; m[i] = [i++]);
      for (j = 0; j <= realValue.length; m[0][j] = j++);

      for (i = 1; i <= datum.length; i++) {
        for (j = 1; j <= realValue.length; j++) {
          m[i][j] = datum.charAt(i - 1) === realValue.charAt(j - 1)
            ? m[i - 1][j - 1]
            : m[i][j] = Math.min(
              m[i - 1][j - 1] + 1,
              Math.min(m[i][j - 1] + 1, m[i - 1][j] + 1))
        }
      }

      return m[datum.length][realValue.length];
    }

    getData = () => {
      return ['Toiletries', 'Medical expenses', 'Electricity', 'Cats', 'Cars'];
    }

    handleTypeaheadKeydown = (e) => {
      let suggestionIdx = this.state.suggestionIdx,
          typeaheadValue = '';

      if (e.key === "Tab") {
        this.input.current.tabComplete(this.state.suggestions[this.state.suggestionIdx]);
        this.setState({
          suggestions: []
        })
        //e.preventDefault();
        //e.stopPropagation();

      } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.key === "ArrowDown" && this.state.suggestionIdx < (this.state.suggestions.length - 1) && suggestionIdx++;
        e.key === "ArrowUp" && this.state.suggestionIdx > -1 && suggestionIdx--;
          
        e.preventDefault();
        e.stopPropagation();

        typeaheadValue = this.state.suggestions[suggestionIdx];
    
        this.setState({
          suggestionIdx,
          typeaheadValue,
        });
      }
    }

    handleTypeaheadInput = (realValue) => {
      let acceptableLevenshteinDistance = 3,
          levenshteinDistance = 0,
          suggestions = [];

      this.getData().forEach(datum => {
        levenshteinDistance = this.getLevenshteinDistance(realValue, datum);

        if (levenshteinDistance <= acceptableLevenshteinDistance) {
          suggestions.push(datum);
        }
      });

      this.setState({
        suggestions,
      });
    }

    render() {
      return (
        <StContainer>
          <WrappedInput
            ref={this.input}
            handleTypeaheadKeydown={this.handleTypeaheadKeydown}
            handleTypeaheadInput={this.handleTypeaheadInput}
            typeaheadValue={this.state.typeaheadValue}
            {...this.props}/>
            { this.state.suggestions.length > 0 &&
              <StSuggestionBox>
                { this.state.suggestions.map((suggestion, idx) => {
                  return (
                    <StSuggestion
                      key={'suggestion-' + idx}
                      active={this.state.suggestionIdx === idx}>
                      { suggestion }
                    </StSuggestion>
                  )
                })}
              </StSuggestionBox>
            }
        </StContainer>
      );
    }
  }
}


const StStatusBlock = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 35px;
  background: ${props => props.valid === null || props.inputIsEmpty ? 'transparent' : props.valid ? 'linear-gradient(to right, rgba(0, 255, 0, 0), rgba(0, 255, 0, 0.1))' : 'linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,0.1))'};

linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))
  transition: background .15s linear;
`

const StValidationIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0.5rem;

  & span {
    position: absolute;
    height: 1px;
    width: calc(100% - 1rem);
    transition: all .15s linear;
    box-sizing: border-box;
    border-radius: 3px;
  }

  & span:nth-child(1) {
    top: ${props => props.status === 'empty' ? '50%' : 
                    props.status === 'hasError' ? 'initial' :
                    '55%'};
    left: ${props => props.status === 'empty' ? '50%' : 'initial'};
    transform: ${props => props.status === 'empty' ? 'translateY(-50%) translateX(-50%)' : 'rotate(45deg)'};
    background-color: ${props => props.status === 'empty' ? '#777' :
                                 props.status === 'hasError' ? '#C45256' :
                                 '#55C452'};
    width: ${props => props.status === 'empty' ? '0%' :
             (props.status === 'valid' ? '0.55rem' : 'calc(100% - 1rem)')};
  }

  & span:nth-child(2) {
    background-color: ${props => props.status === 'empty' ? '#777' :
                                 props.status === 'hasError' ? '#C45256' :
                                 '#55C452'};
    top: initial;
    width: ${props => props.status === 'empty' ? '0' : props.status === 'valid' && '1rem'};
    left: ${props => props.status === 'valid' && '0.75rem'};
    transform: ${props => props.status === 'empty' ? 'rotate(90deg)' : 
                 props => props.status === 'hasError' ? 'rotate(-45deg)' :
                 'rotate(-45deg)'};
    }
  }

`

const ValidationIcon = function(props) {
  return (
    <StValidationIcon
      status={props.status}>
      <span/>
      <span/> 
    </StValidationIcon>
  );
}


export const withValidation = (WrappedInput, schemaPackage = isRequired('schemaPackage is a required object for the withValidation HOC.')) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        valid: null,
        inputIsEmpty: true,
        errorMessage: '',
      }
    }

    validateInput = (inputReceived) => {
      let regex = new RegExp(schemaPackage.schema),
          valid = regex.test(inputReceived);

      this.setState({
        valid,
        inputIsEmpty: (inputReceived.length === 0),
        errorMessage: (!valid ? schemaPackage.errorMessage : ''),
      });

      return inputReceived;
    }

    render() {
      return (
        <WrappedInput
          errorMessage={this.state.errorMessage}
          validateInput={this.validateInput}
          {...this.props}>
          <StStatusBlock
            valid={this.state.valid}
            inputIsEmpty={this.state.inputIsEmpty}>
            <ValidationIcon
              status={this.state.inputIsEmpty ? 'empty' : (this.state.errorMessage && this.state.errorMessage.length > 0 ?
                      'hasError' : 'valid')}/>
          </StStatusBlock>
        </WrappedInput>
      );
    }
  }
}
