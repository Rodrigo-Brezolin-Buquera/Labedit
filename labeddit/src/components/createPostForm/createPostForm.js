import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import { createPost } from '../../services/posts'
import CircularProgress from '@material-ui/core/CircularProgress'
import { CreateContainer, PostForm, Input } from "./styled"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CreatePostForm = () => {
    const [form, onChange, cleanFields] = useForm({ title: "", body: "" })
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (e) => {
        e.preventDefault()
        createPost(form, cleanFields, setIsLoading)
    }

    return (
        <CreateContainer>
            <Typography variant="h6" component="h2"> O que você está pensando? </Typography>
            <PostForm onSubmit={onSubmitForm}>
                
                <Input
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    required
                    placeholder="Título"
                    size="30"
                >
                </Input>

                <Input
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    required
                    placeholder="Texto"
                    size="30"                    
                >
                </Input>

                <Button variant={"contained"} color={"primary"} type={"submit"}>{isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Postar </>}</Button>
            </PostForm>
        </CreateContainer>
    )
}

export default CreatePostForm

