import {React, useState} from 'react';
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import axios from 'axios';
import './redacoes.css'
import Menu from '../menu/Menu'

const Redacoes = () => {
    const user = localStorage.getItem("nomeusuariologado")
    const email = localStorage.getItem("emailusuariologado")
    const idAutor = localStorage.getItem("idusuariologado")

    const envioRedacao = (values) => {
        axios.post("http://localhost:8081/enviarredacao", {
            email: email,
            idAutor: idAutor,
            tema: values.tema,
            introducao: values.introducao,
            desenvolvimento1: values.desenvolvimento1,
            desenvolvimento2: values.desenvolvimento2,
            conclusao: values.conclusao,
        }).then((response) => {
            if (response.data.statusEnvio === "Redação enviada com sucesso! Aguarde alguns dias pela correção!"){
                window.location.assign("http://localhost:3000/redacoes")
                alert(response.data.statusEnvio)
            }
            else{
                window.location.assign("http://localhost:3000/redacoes")
                alert(response.data.statusEnvio)
            }
        });
    }

    const validacaoRedacao = yup.object().shape({
        tema: yup
        .string()
        .required("O tema é obrigatório"),
        introducao: yup
        .string()
        .max(3000, 'A introdução tem que ter no máximo 3000 caracteres')
        .required("A introdução é necessária"),
        desenvolvimento1: yup
        .string()
        .max(3000, 'O desenvolvimento 1 tem que ter no máximo 3000 caracteres')
        .required("O desenvolvimento 1 é necessário"),
        desenvolvimento2: yup
        .string()
        .max(3000, 'O desenvolvimento 2 tem que ter no máximo 3000 caracteres')
        .required("O desenvolvimento 2 é necessário"),
        conclusao: yup
        .string()
        .max(3000, 'A conclusão tem que ter no máximo 3000 caracteres')
        .required("A conclusão é necessária"),
    })

    if (user){
        return(
            <div>
                <Menu/>

                <h2>Envie sua redação para nós!</h2>
                <p>Basta preencher os campos abaixo com a sua redação.</p>
                <p>Após realizada a correção, é enviado para seu e-mail cadastrado um pdf com todas as correções realizadas e a nota que recebeu.</p>

                <Formik
                initialValues={{}}
                onSubmit={envioRedacao}
                validationSchema={validacaoRedacao}
            >
                <Form className="redacao-form">

                    <div className="redacao-form-group">
                        <Field name="tema" className="form-field" placeholder="Tema da redação"/>

                        <ErrorMessage
                        component="span"
                        name="tema"
                        className="form-error"
                        />
                    </div>

                    <div className="redacao-form-group">
                        <Field component="textarea" name='introducao' placeholder='Introdução' className='form-field-area'/>

                        <ErrorMessage
                        component="span"
                        name="introducao"
                        className="form-error"
                        />
                    </div>

                    <div className="redacao-form-group">
                    <Field component='textarea' name='desenvolvimento1' placeholder='Desenvolvimento 1' className='form-field-area'/>

                        <ErrorMessage
                        component="span"
                        name="desenvolvimento1"
                        className="form-error"
                        />
                    </div>

                    <div className="redacao-form-group">
                    <Field component='textarea' name='desenvolvimento2' placeholder='Desenvolvimento 2' className='form-field-area'/>

                        <ErrorMessage
                        component="span"
                        name="desenvolvimento2"
                        className="form-error"
                        />
                    </div>

                    <div className="redacao-form-group">
                    <Field component='textarea' name='conclusao' placeholder='Conclusão' className='form-field-area'/>

                        <ErrorMessage
                        component="span"
                        name="conclusao"
                        className="form-error"
                        />
                    </div>

                    <button className="button-submit" type="submit">
                        Enviar
                    </button>
                </Form>
            </Formik>
    
            </div>
        )
    }
    else{
        window.location.assign("http://localhost:3000/")
        alert("Faça login para entrar na página!")
    }
}

export default Redacoes