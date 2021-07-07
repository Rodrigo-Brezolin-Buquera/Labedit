import Router from "./routes/Router";
import { BrowserRouter} from "react-router-dom"
import Header from "./components/header/Header";
import React, {useState} from "react";
import { ThemeProvider } from '@material-ui/core/styles'
import theme from "./constants/theme"

function App() {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
        <Router setRightButtonText={setRightButtonText}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App; 
