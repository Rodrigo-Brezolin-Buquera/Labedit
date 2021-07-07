import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export const StyledCard = styled(Card)`
    width: 80%;
    display:flex;
`
export const StyledCardContent = styled(CardContent)`
  width: 80%;
  word-wrap: break-word;
`
export const RedArrowHover = styled.div`
  &:hover {
    cursor: pointer;
    color: red;
  }
`
export const GreenArrowHover = styled.div`
  &:hover {
    cursor: pointer;
    color: green;
  }
`