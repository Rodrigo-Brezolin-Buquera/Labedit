import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import { MainContainer, LoginForm, BoxContainer, Input } from "./styled"
import Button from '@material-ui/core/Button';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { signUp } from '../../services/users';
import { useHistory } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography';

const RegisterPage = ({ setRightButtonText }) => {
    useUnprotectedPage()
    const [form, onChange, cleanFields] = useForm({ name: "", email: "", password: "" })
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (e) => {
        e.preventDefault()
        signUp(form, cleanFields, history, setRightButtonText, setIsLoading)

    }

    return (
        <MainContainer>
            <Typography variant="h5" component="h2"> Crie seu cadastro</Typography>

            <BoxContainer>
                <LoginForm onSubmit={onSubmitForm} >

                    <Input
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        required
                        placeholder="Nome"
                        pattern={"^.{3,}"}
                        title={"O nome deve ter no mínimo 3 caracteres"}
                        size="30"
                    ></Input>

                    <Input
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        type="email"
                        required
                        placeholder="E-mail"
                        size="30"
                    ></Input>

                    <Input
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        type="password"
                        required
                        placeholder="Password"
                        size="30"
                    ></Input>

                    <Button
                        type={"submit"}
                        variant={"contained"}
                        color={"primary"}
                    >{isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Criar Cadastro </>}</Button>
                </LoginForm>
            </BoxContainer>
        </MainContainer>
    )
}

export default RegisterPage
