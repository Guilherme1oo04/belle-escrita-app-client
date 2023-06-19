import {React} from 'react';
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import axios from 'axios';
import { Link } from 'react-router-dom';
import './register.css'

const Register = () => {

    const validationsRegister = yup.object().shape({
        nomeCompleto: yup
            .string()
            .required("O nome completo é obrigatório"),
        apelido: yup
            .string()
            .required("O apelido é obrigatório"),
        email: yup
            .string()
            .email("E-mail inválido")
            .required("O e-mail é obrigatório"),
        password: yup
            .string()
            .min(8, "A senha deve ter pelo menos 8 caracteres")
            .required("A senha é obrigatória"),
        confirmation: yup
            .string()
            .oneOf([yup.ref("password"), null], "As senhas são diferentes")
            .required("A confirmação da senha é obrigatória"),
      });

      const handleRegister = (values) => {
        axios.post("http://localhost:8081/register", {
            nome: values.nomeCompleto,
            apelido: values.apelido,
            email: values.email,
            password: values.password,
        }).then((response) => {
            if (response.data.msg === 'Usuário Cadastrado!'){
                window.location.assign("http://localhost:3000/")
                alert(response.data.msg)
            }
            else{
                window.location.assign("http://localhost:3000/register")
                alert(response.data.msg)
            }
        });
        };

    return(
        <div>
            <h1 className='titulo-belle-escrita'>Belle Escrita</h1>
            <h2>Página de Cadastro</h2>
            <Formik
                initialValues={{}}
                onSubmit={handleRegister}
                validationSchema={validationsRegister}
            >
                <Form className="register-form">

                    <div className="register-form-group">
                        <Field name="nomeCompleto" className="form-field" placeholder="Nome completo"/>

                        <ErrorMessage
                        component="span"
                        name="nomeCompleto"
                        className="form-error"
                        />
                    </div>

                    <div className="register-form-group">
                        <Field name="apelido" className="form-field" placeholder="Apelido"/>

                        <ErrorMessage
                        component="span"
                        name="apelido"
                        className="form-error"
                        />
                    </div>

                    <div className="register-form-group">
                        <Field name="email" className="form-field" placeholder="E-mail" />

                        <ErrorMessage
                        component="span"
                        name="email"
                        className="form-error"
                        />
                    </div>

                    <div className="register-form-group">
                        <Field name="password" className="form-field" placeholder="Senha" type="password"/>

                        <ErrorMessage
                        component="span"
                        name="password"
                        className="form-error"
                        />
                    </div>

                    <div className="register-form-group">
                        <Field
                        name="confirmation"
                        className="form-field"
                        placeholder="Confirmar Senha"
                        type="password"
                        />

                        <ErrorMessage
                        component="span"
                        name="confirmation"
                        className="form-error"
                        />
                    </div>

                    <button className="button-submit" type="submit">
                        Cadastrar
                    </button>
                </Form>
            </Formik>

            <p className='login'>Já tem uma conta? <Link to="/">Entre na nossa página</Link></p>
        </div>
    )
}

export default Register