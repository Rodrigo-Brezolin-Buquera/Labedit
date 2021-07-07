import styled from "styled-components"
import { secundaryColor } from "../../constants/colors"


export const CreateContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
padding: 1em;
background-color: ${secundaryColor};
margin-top: 0.3em;
border-radius:25px;
`
export const CommentForm = styled.form`
display: flex;
flex-direction:column;
align-items:center;
gap: 0.3em;
`
export const Input = styled.input`
font-size: 1em;
padding: 0.5em;
margin: 0.5em;
background: white;
border: none;
border-radius: 3px;
`
