import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './nav';
import Home from './home';
import AboutUs from './about_us';
import SecretDocs from './secret_docs';
import OperativesList from './operatives_list';
import { Route } from 'react-router-dom';
import auth from '../HOC/auth'

const App = () => (
    <div className='container'>
        <Nav />
        <Route exact path='/' component = {Home}/>
        <Route path='/about-us' component = {AboutUs}/>
        <Route path='/secret-docs' component = {auth(SecretDocs)}/>
        <Route path='/operatives-list' component = {OperativesList}/>
    </div>
);

export default App;
