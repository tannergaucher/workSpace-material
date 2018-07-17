import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './components/Router';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
// import black from '@material-ui/core/colors/black';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    type: 'light',
  },
  typography: {
    fontSize: 16,
    fontFamily: 'Inconsolata, monospace',
  }
});

function ThemedApp(){
  return(
    <MuiThemeProvider theme={theme}>
      <Router/>
    </MuiThemeProvider>
  )
}

ReactDOM.render(<ThemedApp />, document.getElementById('root'));
