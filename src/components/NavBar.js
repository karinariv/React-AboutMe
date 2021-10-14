import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Main from '../pages/Main';
import Education from '../pages/Education';
import Hobbies from '../pages/Hobbies';
import Funfacts from '../pages/FunFacts';

function NavBar() {
    return (
        <div>
            <nav>
            <ul>
                <li><Link to="/" exact="true">Main</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/hobbies">Hobbies</Link></li>
                <li><Link to="/funfacts">Fun Facts</Link></li>
                <Switch>
                    <Route path="/" exact={true} component= { Main }></Route>
                    <Route path="/education" component= { Education }></Route>
                    <Route path="/hobbies" component= { Hobbies }></Route>
                    <Route path="/funfacts" component= { Funfacts }></Route>
                </Switch>
            </ul>
            </nav>
        </div>
    );
}

export default NavBar;