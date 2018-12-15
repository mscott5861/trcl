import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import { MainContent, Sidebar, SingleColumnWithSidebar } from './components'
import { ViewCopy, ViewLeaflet } from './views'



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
        <SingleColumnWithSidebar>
          <Sidebar/>
          <MainContent>
            <ViewCopy/>
            <ViewLeaflet/>
          </MainContent>
        </SingleColumnWithSidebar>
      </ThemeProvider>
    );
  }
}

export default App;
