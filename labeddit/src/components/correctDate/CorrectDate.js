import React from 'react'
import Typography from '@material-ui/core/Typography';

const CorrectDate = ({createdAt}) => {
    const creationDate = createdAt.split("T")
    const date = creationDate[0].split("-")
    const year = date[0]
    const month = date[1]
    const day = date[2]
    const creationHour = creationDate[1].split(".")
    const hour = creationHour[0]

    return (
        <Typography variant="body2" component="p">
            {day}/{month}/{year} - {hour}
        </Typography>
    )
}

export default CorrectDate
