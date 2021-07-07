import React from 'react'
import {ErrorContainer} from "./styled"
import Typography from '@material-ui/core/Typography';

const ErrorPage = () => {
    return (
        <ErrorContainer>
            <Typography variant="h5" component="h2"> Error 404: página não encontrada</Typography>
            <img src="https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif" alt="imagem erro"/>
        </ErrorContainer>
    )
}

export default ErrorPage
