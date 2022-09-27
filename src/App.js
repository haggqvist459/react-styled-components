import './App.css';
import logo from './logo.svg'
import StyledButton, { FancyButton, SubmitButton } from './components/button/button';
import { DarkButton } from './components/button/button.styles';
import { AnimatedLogo } from './components/animation/animation.js'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  dark: {
    primary: '#000',
    text: '#fff'
  },
  light: {
    primary: '#fff',
    text: '#000'
  },
  fontFamily: 'Segoe UI',
}

const GlobalStyle = createGlobalStyle`

  button {
    font-family: ${(props) => props.theme.fontFamily};
  }

`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <div className="App">
          <AnimatedLogo src={logo} />
          <div>
            <br />
          </div>
          <StyledButton>Styled Button</StyledButton>
          <div>
            <br />
          </div>
          <StyledButton variant='outline' >Styled Button</StyledButton>
          <div>
            <br />
          </div>
          <FancyButton>Fancy Button</FancyButton>
          <div>
            <br />
          </div>
          <SubmitButton>Submit Button</SubmitButton>
          <div>
            <br />
          </div>
          <DarkButton>Dark Button</DarkButton>
          <div>
            <br />
          </div>
        </div>
    </ThemeProvider>
  );
}

export default App;

