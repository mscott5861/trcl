import React from 'react'
import styled from 'styled-components'

const StyledEightPtGrid = styled.div`
  position: fixed;
  display: grid;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  grid-template-columns: repeat(auto-fit, 8px);
  grid-template-rows: repeat(auto-fit, 8px);
  height: 100vh;
  width: 100vw;
  background-color: grey;
  pointer-events: none;
  z-index: -1;

  .eight-pt-grid-cell {
    background-color: #fff;
    box-sizing: border-box;
    border: .5px solid #f2f2f2;
  }
`

export default class EightPtGrid extends React.Component {
  componentWillMount() {
  }

  componentDidMount() {
    window.addEventListener('resize', this.generateRowsAndColumns);
    this.generateRowsAndColumns();
  }

  generateRowsAndColumns = () => {
    let eightPtGrid = document.getElementById('eight-pt-grid');
    while (eightPtGrid.firstChild) {
      eightPtGrid.removeChild(eightPtGrid.firstChild);
    }

    for (let i = 0; i < (window.innerWidth / 8); i++) {
      for (let j = 0; j < (window.innerHeight / 8); j++) {
        let div = document.createElement('DIV');
        div.className='eight-pt-grid-cell';
        document.getElementById('eight-pt-grid').appendChild(div);
      }
    }
  }

  render() {
    return (
      <StyledEightPtGrid id='eight-pt-grid'/>
    );
  }
}
