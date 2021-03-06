import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { goToFeed, goToLogin } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import { StyledToolBar } from './styled';

const Header = ({rightButtonText, setRightButtonText}) => {
  const history = useHistory()
  const token = localStorage.getItem("token")
 
  const logout = () => {
    localStorage.removeItem("token")
  }
  
  const rightButtonAction = () => {
    if (token) {
      logout()
      setRightButtonText("Login")
      goToLogin(history)
    } else {
      goToLogin(history) 
    }
  }
  
  return (

    <AppBar position="static">
      <StyledToolBar>
        <Button onClick={() => goToFeed(history)} color="inherit">   Labeddit   </Button>
        <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
      </StyledToolBar>
    </AppBar>

  );
}

export default Header
