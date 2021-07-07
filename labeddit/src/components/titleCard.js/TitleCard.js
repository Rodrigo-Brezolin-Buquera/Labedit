import React from 'react';
import Typography from '@material-ui/core/Typography';
import { StyledCard, RedArrowHover, GreenArrowHover, StyledCardContent } from "./styled"
import CardActions from '@material-ui/core/CardActions';
import { votePostUp, votePostDown, deletePostVote } from '../../services/posts';
import { ImArrowDown, ImArrowUp } from 'react-icons/im'
import CorrectDate from '../correctDate/CorrectDate';

const TitleCard = (props) => {

    const voteUp = (id) => {
        if (props.userVote) {
            deletePostVote(id)
        } else {
            votePostUp(id)
        }
    }

    const voteDown = (id) => {
        if (props.userVote) {
            deletePostVote(id)
        } else {
            votePostDown(id)
        }
    }

    return (
        <StyledCard >
            <CardActions>
                <GreenArrowHover>
                    <ImArrowUp onClick={() => voteUp(props.id)} />
                </GreenArrowHover>

                <Typography variant="body2" component="p">
                    {props.voteSum ? props.voteSum : "0"}
                </Typography>

                <RedArrowHover>
                    <ImArrowDown onClick={() => voteDown(props.id)} />
                </RedArrowHover>
            </CardActions>

            <StyledCardContent>

                <Typography variant="body2" component="p">
                    {props.username}
                </Typography>

                <Typography variant="h5" component="h2">
                    {props.title}
                </Typography>

                <Typography variant="body2" component="p">
                    {props.body}
                </Typography>

                <CorrectDate createdAt={props.createdAt}  />
            </StyledCardContent>            
        </StyledCard>
    );
}

export default TitleCard
