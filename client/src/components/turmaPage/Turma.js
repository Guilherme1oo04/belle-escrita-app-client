import {React, useEffect, useState} from 'react'
import ImagemPerfil from '../../assets/img-aluno.png'
import Menu from '../menu/Menu'
import './turma.css'
import axios from 'axios'

const Turma = () => {
    const user = localStorage.getItem("nomeusuariologado")
    const emailUser = localStorage.getItem("emailusuariologado")

    const [data, setData] = useState([])

    const pegaTurma = async () => {
        axios.post("http://localhost:8081/turma").then((response) => {
            setData(response.data.resultado)
            console.log(response.data.resultado)
        })
    }

    useEffect(() => {
        pegaTurma()
    }, [])

    if (user){
        
        return(
            <div>
                <Menu/>
                <main className='corpo'>
                    <h2 className='sua-turma'>Sua Turma</h2>

                    {Object.values(data).map(pessoa => (
                        <div className='pessoas-turma'>
                            <img src={ImagemPerfil}></img>
                            <div className='info'>
                                <h2>{pessoa.nome}</h2>
                                <p>{pessoa.email}</p>
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        )
    }
    else{
        window.location.assign("http://localhost:3000/")
        alert("Faça login para entrar na página!")
    }
}

export default Turma