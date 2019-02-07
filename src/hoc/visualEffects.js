import React from 'react'
import styled from 'styled-components'

const ParallaxGroup = styled.div`
  position: relative; 
  transform-style: preserve-3d;
    
  & :nth-child(1) {
    position: absolute;
    -webkit-transform-origin-x: 100%;
    transform-origin-x: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: scroll;
    transform: translateZ(-0.05px) scale(1.05) !important;
    z-index: 10;
  }
}`


export const withParallax = (WrappedComponent, depth) => {
  return class extends React.Component {
    constructor() {
      super();
      let style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = `.plx { 
        perspective: 1px;
        -webkit-perspective-origin-x: 100%;
        perspective-origin-x: 100%;
        -webkit-overflow-scrolling: touch;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: scroll;
      }`;
 
      document.getElementsByTagName('head')[0].appendChild(style);
    }

    componentWillMount() {
      document.body.classList.add('plx');
    }

    componentWillUnmount() {
      document.body.classList.remove('plx');
    }

    render() {
      return(
        <ParallaxGroup>
          <WrappedComponent
            {...this.props} />
        </ParallaxGroup>
      );
    }
  }
}

