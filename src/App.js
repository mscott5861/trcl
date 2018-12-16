import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import { MainContent, Sidebar, SingleColumnWithSidebar } from './components'
import { ViewCopy, ViewLeaflet } from './views'
import { EightPtGrid } from './design'



const colors = {
  primary: 'grey',
  secondary: 'red',
  tertiary: 'blue',
  copy: '#111',
  headers: '#fff'
}

const typography = {
  copy: 'Arial',
  headers: 'Times New Roman',
}

const theme = {
  cardTitlebarColor: colors.primary,
  copyFont: typography.copy,
  copyFontColor: colors.copy,
  titlebarFont: typography.headers,
  titlebarFontColor: colors.headers
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
        <SingleColumnWithSidebar>
          <Sidebar/>
          <MainContent>
            <ViewCopy/>
            <ViewLeaflet/>
          </MainContent>
        </SingleColumnWithSidebar>
        <EightPtGrid/>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
