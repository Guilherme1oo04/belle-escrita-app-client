import {React} from 'react';
import './modalDeveloper.css';
import QrCodeLinkedin from '../../assets/linkedin-guilherme.png';
import GithubIcon from '../../assets/github-icon.png';
import InstagramIcon from '../../assets/instagram-icon.png';
import LinkedinIcon from '../../assets/linkedin-icon.png';

const Modal = ({open, setModalOpen}) => {

    if (open) {
        return (
            <div className='background-modal'>
                <div className='modal'>

                    <div className='modal-body'>
                        
                        <div className='menu-modal'>
                            <div className='links-dev'>
                                <a href='https://github.com/Guilherme1oo04' target='_blank'><button className='link-dev'><img src={GithubIcon} /> Guilherme1oo04</button></a>
                                <a href='https://www.instagram.com/guichaves20/' target='_blank'><button className='link-dev'><img src={InstagramIcon} /> @guichaves20</button></a>
                            </div>

                            <button className='bt-close-modal' onClick={setModalOpen}>X</button>
                        </div>

                        <div className='modal-dev-info'>
                            <p className='label-dev'>Nome</p>
                            <p className='info-dev'>Guilherme da Silva Chaves</p>
                            <p className='label-dev'>Trabalho</p>
                            <p className='info-dev'>Full Stack Developer and Software Engineer</p>
                            
                            <a className='link-qrCode-linkedin' href='https://www.linkedin.com/in/guilherme-chaves-b25866274/' target='_blank'><img className='qrCode-linkedin' src={QrCodeLinkedin}/></a>
                            
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }

    else { return null}

}

export default Modal;