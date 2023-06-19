import {React} from 'react';
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import axios from 'axios';
import './login.css'
import { Link } from 'react-router-dom';

const Login = () => {

    const validationsLogin = yup.object().shape({
        email: yup
          .string()
          .email("E-mail inválido")
          .required("O e-mail é obrigatório"),
        password: yup
          .string()
          .min(8, "A senha deve ter pelo menos 8 caracteres")
          .required("A senha é obrigatória"),
      });

      const handleLogin = (values) => {
        axios.post("http://localhost:8081/login", {
          email: values.email,
          password: values.password
        }).then((response) => {
          if (response.data.resultado){
            console.log(response.data.resultado[0])
            localStorage.setItem("idusuariologado", response.data.resultado[0]['id'])
            localStorage.setItem("usuariologado", response.data.resultado[0]['apelido'])
            localStorage.setItem("nomeusuariologado", response.data.resultado[0]['nome'])
            localStorage.setItem("emailusuariologado", response.data.resultado[0]['email'])
            window.location.assign("http://localhost:3000/home")
          }
          else{
            window.location.assign("http://localhost:3000/")
            alert("Este e-mail não está cadastrado!")
          }
        });
      };

    return(
        <div className='container'>
            <h1 className='titulo-belle-escrita'>Belle Escrita</h1>
            <Formik
                initialValues={{}}
                onSubmit={handleLogin}
                validationSchema={validationsLogin}
            >
                <Form className="login-form">
                <div className="login-form-group">
                    <Field name="email" className="form-field" placeholder="E-mail" />

                    <ErrorMessage
                    component="span"
                    name="email"
                    className="form-error"
                    />
                </div>
                <div className="login-form-group">
                    <Field name="password" className="form-field" placeholder="Senha" type="password"/>

                    <ErrorMessage
                    component="span"
                    name="password"
                    className="form-error"
                    />
                </div>

                <button className="button-submit" type="submit">
                    Login
                </button>
                </Form>
            </Formik>

            <p className='cadastro'>Ainda não têm uma conta? <Link to="/register" className='link-cad'>Cadastre-se</Link></p>
        </div>
    )
}

export default Login