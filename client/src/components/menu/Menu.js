import {React} from 'react';
import {Link} from 'react-router-dom'
import './menu.css'

const Menu = () => {
    const abrirMenu = () => {
        const btnMn = document.querySelector('.botao-menu')
            const linksMobile = document.querySelector('#links-mobile')

            if (btnMn.id == 'd'){
                btnMn.setAttribute('id', 'a')
                linksMobile.style.transform = 'translateY(0px)'
            }
            else{
                btnMn.setAttribute('id', 'd')
                linksMobile.style.transform = 'translateY(-300px)'
            }
    }

    return(
        <div>
            <div className="menu-pc">
                <nav>
                    <h1>Belle Escrita</h1>
                    <div className="links">
                        <Link to="/home" className='link'>Ínicio</Link>
                        <Link to="/perfil" className='link'>Perfil</Link>
                        <Link to="/redacoes" className='link'>Redações</Link>
                        <Link to="/turma" className='link'>Turma</Link>
                    </div>
                </nav>
            </div>

            <div className="menu-mobile">
                <div className="menu">
                    <button className="botao-menu" id="d" onClick={abrirMenu}>
                        <span className="linha"></span>
                        <span className="linha"></span>
                        <span className="linha"></span>
                    </button>
                    <h1>Belle Escrita</h1>
                </div>
                <div class="links" id="links-mobile">
                    <Link to="/home" className='link'>Ínicio</Link>
                    <Link to="/perfil" className='link'>Perfil</Link>
                    <Link to="/redacoes" className='link'>Redações</Link>
                    <Link to="/turma" className='link'>Turma</Link>
                </div>
            </div>
        </div>
    )
}

export default Menu