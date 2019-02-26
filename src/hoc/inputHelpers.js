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
  z-index: ${props => props.zIndex ? props.zIndex : 10};
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

const StTypeaheadValue = styled.p`
  position: absolute;
  left: 1rem;
  color: #888;
  font-size: .75rem;
  letter-spacing: .025rem;
  line-height: 2rem;
  pointer-events: none;
`

const StBold = styled.span`
  font-weight: 800;
  color: red;
`

const StRegular = styled.span`
  font-weight: 400;
`

const StSuggestion = styled.p`
  padding: .5rem 0;
  background: ${props => props.active ? '#DDD' : '#FFF'};
  cursor: pointer;
  &:hover {
    background: #DDD;
  }
`

export const withTypeahead = (WrappedInput, data = isRequired('data is a required parameter for the withTypeahead HOC.')) => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        typeaheadValue: '',
        suggestionPrefix: '',
        suggestionIdx: -1,
        suggestions: [],
        zIndex: 0,
      }
      this.input = React.createRef();
    }
    
    handleTypeaheadKeydown = (e) => {
      let suggestionIdx = this.state.suggestionIdx,
          typeaheadValue = '';

      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.key === "ArrowDown" && this.state.suggestionIdx < (this.state.suggestions.length - 1) && suggestionIdx++;
        e.key === "ArrowUp" && this.state.suggestionIdx > -1 && suggestionIdx--;
          
        e.preventDefault();
        e.stopPropagation();

        typeaheadValue = this.state.suggestions[suggestionIdx];
    
        this.setState({
          suggestionIdx,
          typeaheadValue,
        });
      } else if (e.key === 'Backspace') {
        if (this.input.current.state.realValue.length === 1) {
          this.setState({
            suggestions: [],
            suggestionIdx: -1,
            suggestionPrefix: '',
            typeaheadValue: '',
          })
        }
      } else if (e.key === 'Tab') {
        if (this.state.suggestionIdx !== -1) {
          this.input.current.tabComplete(this.state.suggestions[this.state.suggestionIdx]);
          this.cleanup();
        }
      }
    }

    cleanup = () => {
      this.setState({
        suggestions: [],
        suggestionIdx: -1,
        suggestionPrefix: '',
        typeaheadValue: '',
      })
    }

    getSuggestions = (realValue) => {
      let suggestions = [],
          suggestionPrefix = '';

      data.forEach((datum) => {
        if (realValue.toLowerCase() === datum.substring(0, realValue.length).toLowerCase()) {
          suggestions.push(datum);
          suggestionPrefix = datum.substring(0, realValue.length);
        }
      });

      if (suggestions.length > 0) {
        this.setState({
          suggestionPrefix,
        })
      }
      return suggestions;
    }

    handleSuggestionClick = () => {
      this.state.suggestionIdx !== -1 && this.input.current.tabComplete(this.state.suggestions[this.state.suggestionIdx]);
      this.cleanup();
    }

    handleOnMouseEnter = (e) => {
      let typeaheadValue = this.state.suggestions[e.target.id];
      this.setState({
        suggestionIdx: e.target.id,
        typeaheadValue,
      });
    }

    handleOnMouseLeave = (e) => {
      /*this.setState({
        suggestionIdx: -1,
      }, () => {
        this.cleanup();
      })*/
    }

    handleTypeaheadInput = (realValue = '') => {
      let suggestions = [],
          suggestionIdx = -1,
          typeaheadValue = '';

      suggestions = realValue.length > 0 && this.getSuggestions(realValue);

      if (suggestions.length === 0) {
        this.setState({
          suggestionIdx,
          typeaheadValue,
        })
      } else if (suggestions.length === 1) {
        typeaheadValue = suggestions[0];
        suggestionIdx = 0;

        this.setState({
          suggestionIdx,
          typeaheadValue,
        })
      }

      this.setState({
        suggestions,
      });
    }

    render() {
      return (
        <StContainer
          zIndex={this.props.zIndex}>
          <WrappedInput
            ref={this.input}
            cleanup={this.cleanup}
            handleTypeaheadKeydown={this.handleTypeaheadKeydown}
            handleTypeaheadInput={this.handleTypeaheadInput}
            typeaheadValue={this.state.typeaheadValue}
            {...this.props}>
            <StTypeaheadValue>
              { this.state.typeaheadValue && this.state.typeaheadValue }
            </StTypeaheadValue>
          </WrappedInput>
            { this.state.suggestions.length > 0 &&
              <StSuggestionBox>
                { this.state.suggestions.map((suggestion, idx) => {
                  return (
                    <StSuggestion
                      id={idx}
                      key={'suggestion-' + idx}
                      active={this.state.suggestionIdx === idx}
                      onClick={this.handleSuggestionClick}
                      onMouseEnter={this.handleOnMouseEnter}
                      onMouseLeave={this.handleOnMouseLeave}>
                      <StBold>
                        { this.state.suggestionPrefix }
                      </StBold>
                      <StRegular>
                        { suggestion.substring(this.state.suggestionPrefix.length, suggestion.length) }
                      </StRegular>
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
