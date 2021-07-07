import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import { MainContainer, LoginForm, BoxContainer,Input } from "./styled"
import Button from '@material-ui/core/Button';
import { goToRegister } from '../../routes/coordinator';
import { useHistory } from "react-router-dom"
import { login } from '../../services/users';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography';

const LoginPage = ({ setRightButtonText }) => {
    useUnprotectedPage()
    const [form, onChange, cleanFields] = useForm({ email: "", password: "" })
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (e) => {
        e.preventDefault()
        login(form, cleanFields, history, setRightButtonText, setIsLoading)
    }

    return (
        <MainContainer>
            <Typography variant="h5" component="h2"> Faça Login</Typography>
            <BoxContainer>
                <LoginForm onSubmit={onSubmitForm} >
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
                    >{isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Login </>}</Button>
                </LoginForm>

                <Button variant={"text"} onClick={() => goToRegister(history)}> Cadastre-se</Button>
            </BoxContainer>
        </MainContainer>
    )
}

export default LoginPage
