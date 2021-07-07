import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

const CircularLoading = () => {
    return (
        <Container>
            <CircularProgress/>
        </Container>
    )
}

export default CircularLoading
