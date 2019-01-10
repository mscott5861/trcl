import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import { ViewArticle, ViewLogin } from 'views'

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
  constructor() {
    super();
    this.state = {
      submitted: false
    }
  }

  onSubmit = (form) => {
    console.log(form);
    this.setState({
      submitted: true
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        { !this.state.submitted ?
          <ViewLogin
            onSubmit={this.onSubmit}/> :
          <ViewArticle/> }
      </ThemeProvider>
    );
  }
}

export default App;
