import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { ImArrowDown, ImArrowUp } from 'react-icons/im'
import { voteCommentUp, voteCommentDown, deleteCommentVote } from '../../services/posts';
import { StyledCard, RedArrowHover, GreenArrowHover, VertDiv } from "./styled"
import CorrectDate from '../correctDate/CorrectDate';

const CommentCard = (props) => {

    const voteUp = (id) => {
        if (props.userVote) {
            deleteCommentVote(id)
        } else {
            voteCommentUp(id)
        }
    }

    const voteDown = (id) => {
        if (props.userVote) {
            deleteCommentVote(id)
        } else {
            voteCommentDown(id)
        }
    }

    return (
        <StyledCard  >
            <CardActions>
                <GreenArrowHover>
                    <ImArrowUp onClick={() => voteUp(props.id)} />
                </GreenArrowHover>

                <Typography variant="h5" component="h2">
                    {props.voteSum ? props.voteSum : "0"}
                </Typography>

                <RedArrowHover>
                    <ImArrowDown onClick={() => voteDown(props.id)} />
                </RedArrowHover>

                <VertDiv>
                    <Typography variant="body2" component="p">
                        {props.username}
                    </Typography>

                    <Typography variant="h6" component="h2">
                        {props.body}
                    </Typography>

                    <CorrectDate createdAt={props.createdAt}/>
                </VertDiv>

            </CardActions>
        </StyledCard>
    );
}

export default CommentCard
