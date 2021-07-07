import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { ImArrowDown, ImArrowUp } from 'react-icons/im'
import { votePostUp, votePostDown, deletePostVote } from '../../services/posts';
import { StyledCardContent, StyledCard, RedArrowHover, GreenArrowHover, TypographyHover } from "./styled"
import ShareButtons from '../../components/shareButtons/ShareButtons'
import CorrectDate from '../correctDate/CorrectDate';

export default function PostCard(props) {

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
            <StyledCardContent onClick={props.onClick}>
                <Typography variant="body2" component="p">{props.username} </Typography>

                <Typography variant="h5" component="h2"> {props.title} </Typography>

                <Typography variant="body2" component="p">{props.body} </Typography>
            </StyledCardContent>
            <hr />
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

                <TypographyHover variant="body2" component="p" onClick={props.onClick} >
                    {props.commentCount ? props.commentCount : "0"} Comentários
                </TypographyHover>

                <CorrectDate createdAt={props.createdAt} />

                <ShareButtons
                    title={props.title}
                />
            </CardActions>
        </StyledCard>
    );
}