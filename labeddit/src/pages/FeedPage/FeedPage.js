import React, { useState } from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import PostCard from '../../components/postCard/PostCard'
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from '../../constants/URL'
import CreactePostForm from "../../components/createPostForm/createPostForm"
import { goToPost } from '../../routes/coordinator'
import { useHistory } from "react-router-dom"
import { FeedContainer } from './styled'
import Typography from '@material-ui/core/Typography';
import CircularLoading from '../../components/circularLoading/CircularLoading'
import useForm from '../../hooks/useForm'
import FilterForm from '../../components/filterForm/FilterForm'
import PagesList from '../../components/pagesList/PagesList'

const FeedPage = () => {
    useProtectedPage()
    const [page, SetPage] = useState(1)
    const posts = useRequestData([], `${BASE_URL}/posts/?page=${page}&size=50`)
    const [form, onChange, cleanFields] = useForm({ title: "", body: "" })
    const history = useHistory()

    const onClickPost = (id) => {
        goToPost(history, id)
    }

    const postsList = posts
        .filter(post => post.title.toLowerCase().includes(form.title.toLowerCase()))
        .filter(post => post.body.toLowerCase().includes(form.body.toLowerCase()))
        .sort((a, b) => { return Number(b.voteSum) - Number(a.voteSum) })
        .map((post) => {
            return (
                <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    commentCount={post.commentCount}
                    voteSum={post.voteSum}
                    userVote={post.userVote}
                    username={post.username}
                    createdAt={post.createdAt}
                    onClick={() => onClickPost(post.id)}
                />
            )
        })

        if( (form.title !=="" || form.body !=="") && postsList.length === 0 ){

        }

    return (
        <FeedContainer>
            <Typography variant="h5" component="h2"> Bem vindo(a) ao seu feed </Typography>

            <CreactePostForm />

            <FilterForm
                form={form}
                onChange={onChange}
                cleanFields={cleanFields}
            />

            <PagesList SetPage={SetPage} page={page} posts={posts}/>
            
            {postsList.length ? 
            postsList 
            : 
            ((form.title !=="" || form.body !=="")  ?         
            <Typography variant="h6" component="h2"> Nenhum resultado encontrado</Typography> 
            :
            <CircularLoading />
             )}

        </FeedContainer>
    )
}

export default FeedPage
