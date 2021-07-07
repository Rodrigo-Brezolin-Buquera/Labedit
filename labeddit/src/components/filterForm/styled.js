import styled from "styled-components"
import { secundaryColor } from "../../constants/colors"

export const FilterContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
padding: 1em;
background-color: ${secundaryColor};
border-radius:25px;
`
export const Form = styled.form`
display: flex;
align-items:center;
gap: 0.5em;

@media(max-width: 800px) {
    flex-direction: column;
  }

`
export const Input = styled.input`
font-size: 1em;
padding: 0.5em;
margin: 0.5em;
background: white;
border: none;
border-radius: 3px;
`