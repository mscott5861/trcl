import React from 'react'
import styled from 'styled-components'

const ParallaxGroup = styled.div`
  position: relative; 
  transform-style: preserve-3d;
  height: 100vh;
    
  & :nth-child(1) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: ${props => props.pageOrientation === 'portrait' ? 'scroll' : 'initial'};
    overflow-x: ${props => props.pageOrientation === 'portrait' ? 'initial' : 'scroll'};
    transform: ${props => props.depth ? 'translateZ(' + props.depth + 'px) scale(' + (1 + (props.depth * -1)) + ') !important' :
                'translateZ(-0.5px) scale(1.5) !important'};
    z-index: -10;
  }
}`


export const withParallax = (WrappedComponent, depth, pageOrientation = 'portrait') => {
  return class extends React.Component {
    constructor() {
      super();
      let style = document.createElement('style');
      style.type = 'text/css';
      style.id = 'withParallaxHOC';
      style.innerHTML = `.plx { 
        perspective: 1px;
        height: 100vh;
        overflow-x: ` + (pageOrientation === 'portrait' ? 'hidden;' : 'scroll;') +
       `overflow-y: ` + (pageOrientation === 'portrait' ? 'scroll;' : 'hidden;') +
       `}
      html {
        overflow: hidden;
      }`;
      
      let styleSheet = document.getElementById('withParallaxHOC');
      styleSheet === null && document.getElementsByTagName('head')[0].appendChild(style);
    }

    componentWillMount() {
      document.body.classList.add('plx');
    }

    componentWillUnmount() {
      document.body.classList.remove('plx');
    }

    render() {
      return(
        <ParallaxGroup
          depth={-1 * depth}
          pageOrintation={pageOrientation}>
          <WrappedComponent
            {...this.props} />
        </ParallaxGroup>
      );
    }
  }
}

const StRelativeContainer = styled.div`
  position: relative;
`

const StDuotoneContainer = styled.div`
  &::before,
  &::after {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
  }

  &::before {
    background-color: #F00E2E;
    mix-blend-mode: darken;
  }

  &::after {
    background-color: #192550;
    mix-blend-mode: lighten;
  }
`

export const withDuotone = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return(
        <StRelativeContainer>
          <StDuotoneContainer>
            <WrappedComponent
              {...this.props} />
          </StDuotoneContainer>
        </StRelativeContainer>
      );
    }
  }
}
