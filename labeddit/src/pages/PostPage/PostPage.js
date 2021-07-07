import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from "react-router-dom"
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/URL'
import CommentCard from '../../components/CommentCard/CommentCard'
import CreateCommentForm from '../../components/createCommentForm/CreateCommentForm'
import { CommentsContainer } from "./styled"
import TitleCard from '../../components/titleCard.js/TitleCard'
import Typography from '@material-ui/core/Typography';
import CircularLoading from '../../components/circularLoading/CircularLoading'
import ShareButtons from '../../components/shareButtons/ShareButtons'

const PostPage = () => {
    useProtectedPage()
    const params = useParams()

    const posts = useRequestData([], `${BASE_URL}/posts/?size=100000000`)
    const currentPost = posts
        .filter(post => post.id === params.id)
        .map((post) => {
            return (
                <TitleCard
                    key={post.id}
                    title={post.title}
                    body={post.body}
                    voteSum={post.voteSum}
                    id={post.id}
                    userVote={post.userVote}
                    username={post.username}
                    createdAt={post.createdAt}

                />
            )
        })

    const postComments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments/?size=100`)
    const comments = postComments
        .sort((a, b) => { return Number(b.voteSum) - Number(a.voteSum) })
        .map((comment) => {
            return (
                <CommentCard
                    key={comment.id}
                    id={comment.id}
                    body={comment.body}
                    voteSum={comment.voteSum}
                    userVote={comment.userVote}
                    username={comment.username}
                    createdAt={comment.createdAt}
                />
            )
        })
    
    return (
        <CommentsContainer>

            {currentPost.length ? currentPost : <CircularLoading />}

            <Typography variant="h6" component="h2"> Compartilhe este post:</Typography>

            {currentPost.length ? <ShareButtons title={currentPost[0].props.title} /> : "" }

            <CreateCommentForm id={params.id} />

            {comments.length ? comments : <Typography variant="h5" component="h2"> Não há comentários </Typography>}

        </CommentsContainer>
    )
}

export default PostPage
