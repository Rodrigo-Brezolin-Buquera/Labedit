import styled from "styled-components"
import { secundaryColor } from "../../constants/colors"

export const MainContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
padding-top: 1em;
`
export const LoginForm = styled.form`
display: flex;
flex-direction:column;
align-items:center;
gap: 1em;
`
export const BoxContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
padding: 1em;
background-color: ${secundaryColor};
margin-top: 2em;
border-radius:25px;
`
export const Input = styled.input`
font-size: 1em;
padding: 0.5em;
margin: 0.5em;
background: white;
border: none;
border-radius: 3px;
`