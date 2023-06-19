import {React} from 'react';
import Menu from '../menu/Menu'
import './home.css'
import Cronograma from '../../assets/cronograma-belle-escrita.pdf'

const Home = () => {
    const user = localStorage.getItem("usuariologado")

    if (user){
        return(
            <div>
                <Menu/>

                <main>
                    <h1>Bem vindo á páginna do Belle Escrita {user}!</h1>

                    <p>O projeto Belle Escrita tem como objetivo auxiliar os alunos participantes na escrita, tentando trazer um melhor domínio sobre redações, que é uma habilidade tão requisitada no Enem e em vestibulares.</p>

                    <p>Clique no botão abaixo para baixar o cronograma do Belle Escrita.</p>

                    <a href={Cronograma} download="Cronograma do Belle Escrita">Cronograma</a>
                </main>
    
            </div>
        )
    }
    else{
        window.location.assign("http://localhost:3000/")
        alert("Faça login para entrar na página!")
    }
}

export default Home