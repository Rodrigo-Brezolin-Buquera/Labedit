import React,{useState} from 'react'
import useForm from '../../hooks/useForm'
import { createComment } from '../../services/posts'
import CircularProgress from '@material-ui/core/CircularProgress'
import {CreateContainer, CommentForm, Input} from "./styled"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CreateCommentForm = (props) => {
    const [form, onChange, cleanFields] = useForm({ body: "" })
    const [isLoading, setIsLoading] =useState(false)

    const onSubmitForm = (e) => {
        e.preventDefault()
        createComment(form, props.id, cleanFields, setIsLoading)
    }

    return (
        <CreateContainer>
            <Typography variant="h6" component="h2"> Deixe seu comentário</Typography>
            <CommentForm onSubmit={onSubmitForm} >
                
                <Input
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    required
                    placeholder="Texto"
                    size="30"
                >
                </Input>

                <Button type={"submit"} variant={"contained"} color={"primary"}>{isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Comentar </>}</Button>
            </CommentForm>
        </CreateContainer>
    )
}

export default CreateCommentForm

