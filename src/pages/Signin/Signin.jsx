import React, { useState } from 'react';
import { Input } from '../../components/Input/style';
import { Button } from '../../components/Button/style';
import * as C from './style';
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Signin = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }

        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home");
    };

    return(
        <C.Container>
            <C.Label>Sistema de Login</C.Label>
            <C.Content>
                <Input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <C.labelError>{error}</C.labelError>
                <Button onClick={handleLogin}>Entrar</Button>
                <C.LabelSignup>
                    Não tem conta?
                    <C.Strong>
                        <Link to="/signup"> Registre-se</Link>
                    </C.Strong>
                </C.LabelSignup>
            </C.Content>
        </C.Container>
    )
};

export default Signin;