import {React} from 'react'
import ImagemPerfil from '../../assets/img-aluno.png'
import Menu from '../menu/Menu'
import './perfil.css'

const Perfil = () => {
    const user = localStorage.getItem("nomeusuariologado")
    const apelido = localStorage.getItem("usuariologado")
    const email = localStorage.getItem("emailusuariologado")

    const removendoUsers = () => {
        localStorage.removeItem("usuariologado")
        localStorage.removeItem("emailusuariologado")
        localStorage.removeItem("nomeusuariologado")
        localStorage.removeItem("idusuariologado")
        window.location.assign("http://localhost:3000/")
    }

    if (user){
        return(
            <div>
                <Menu/>
    
                <div className='perfil-aluno'>
                    <img src={ImagemPerfil} className='foto'></img>
                    <h2 className='campos'>Nome Completo</h2>
                    <p className='valores-login'>{user}</p>
                    <h2 className='campos'>Apelido</h2>
                    <p className='valores-login'>{apelido}</p>
                    <h2 className='campos'>E-mail</h2>
                    <p className='valores-login'>{email}</p>
    
                    <button onClick={removendoUsers} className='botao-sair'>Sair da conta</button>
                </div>
            </div>
        )
    }
    else{
        window.location.assign("http://localhost:3000/")
        alert("Faça login para entrar na página!")
    }
}

export default Perfil