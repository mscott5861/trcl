import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StLeaflet = styled.div`
  position: relative;
  display: ${props => props.display};
  opacity: ${props => props.isVisible ? '1' : '0'};
  transform: ${props => props.isVisible ? 'scale(1)' : 'scale(.5)'};
  background-color: #FFF;
  color: ${props => props.theme.copyFontColor};
  border-radius: 3px;
  box-shadow: 0 0 1.0125rem rgba(0, 0, 0, 0.25);
  
  column-count: ${props => props.columnCount ? props.columnCount : 'initial'};
  column-gap: ${props => props.columnGap ? props.columnGap : 'initial'};
  column-rule: ${props => props.columnRule ? props.columnRule : 'initial'};
 
  width: ${props => props.fitContent ? 'fit-content' : 'initial'};
  transition: all .2s linear;
  font-family: ${props => props.theme.copyFont};
  font-size: 1rem;

  padding: 2rem;
  padding-top: ${props => props.title && props.titlebarPosition !== 'bottom' ? '5rem' : '2rem'};
  padding-bottom: ${props => props.title && props.titlebarPosition === 'bottom' ? '5rem' : '2rem'};

  margin-bottom: 2rem;

  &:before {
    box-sizing: border-box;
    position: absolute;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    content: ${props => props.title ? "\"" + props.title + "\"" : ''};
    font-size: 2rem;
    font-family: ${props => props.theme.titlebarFont};
    top: ${props => props.title && props.titlebarPosition !== 'bottom' ? '0' : 'initial'};
    bottom: ${props => props.title && props.titlebarPosition === 'bottom' ? '0' : 'initial'};
    left: 0;
    height: 4rem;
    width: calc(100%);
    background-color: ${props => props.theme.cardTitlebarColor};
    color: ${props => props.theme.titlebarFontColor};
    }
`

StLeaflet.defaultProps = {
  theme: {
    cardTitlebarColor: 'red',
    copyFont: 'sans-serif',
    copyFontColor: '#000',
    titlebarFont: 'sans-serif',
    titlebarFontColor: '#000',
  }
}

const CloseButton = styled.span`
  position: absolute;
  top: ${props => props.position !== 'bottom' ? '1.5rem' : 'unset'};
  bottom: ${props => props.position === 'bottom' ? '1.5rem' : 'unset'};
  right: 2rem;
  height: 1rem;
  width: 1rem;
  cursor: pointer;
 
  &:hover:before,
  &:hover:after {
    opacity: 0.5;
  }

  &:before,
  &:after {
    position: absolute;
    content: ' ';
    height: 1rem;
    width: 2px;
    background-color: #FFF;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`

export default class Leaflet extends React.Component {
  constructor() {
    super();

    this.state = {
      isVisible: true,
      display: 'block'
    }
  }

  toggleVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });

    setTimeout(() => {
      this.setState({
        display: 'none'
      });
    }, 250);
  }

  render() {
    return (
      <StLeaflet
        display={this.state.display}
        fitContent={this.props.fitContent}
        title={this.props.title}
        titlebarBGColor={this.props.titlebarBGColor}
        titlebarPosition={this.props.titlebarPosition}
        titlebarTextColor={this.props.titlebarTextColor}
        columnGap={this.props.columnGap}
        columnRule={this.props.columnRule}
        columnCount={this.props.columnCount}
        isVisible={this.state.isVisible}>
        { this.props.dismissable && 
            <CloseButton
              onClick={this.toggleVisibility}
              position={this.props.titlebarPosition}/>
        }
        { this.props.children }
      </StLeaflet>
    );
  }
}

Leaflet.propTypes = {
  dismissable: PropTypes.bool,
  fitContent: PropTypes.bool,
  title: PropTypes.string,
  titlebarBGColor: PropTypes.string,
  titlebarPosition: PropTypes.string,
  titlebarTextColor: PropTypes.string,
  columnGap: PropTypes.string,
  columnRule: PropTypes.string,
  columnCount: PropTypes.number,
}
