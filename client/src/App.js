import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './components/loginPage/Login';
import Home from './components/homePage/Home';
import Register from './components/registerPage/Register';
import Perfil from './components/perfilPage/Perfil';
import Redacoes from './components/redacoesPage/Redacoes';
import Turma from './components/turmaPage/Turma';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route Component={Login} path='/' exact/>
        <Route Component={Home} path='/home'/>
        <Route Component={Register} path='/register'/>
        <Route Component={Perfil} path='/perfil'/>
        <Route Component={Redacoes} path='/redacoes'/>
        <Route Component={Turma} path='/turma'/>
      </Routes>
    </div>
  );
}

export default App;
