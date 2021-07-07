import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

export const StyledCardContent = styled(CardContent)`
  word-wrap: break-word;
    &:hover {
    cursor: pointer;
  }
`
export const StyledCard = styled(Card)`
    width: 80%;
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

export const TypographyHover = styled(Typography)`
  &:hover {
    cursor: pointer;
  }
`