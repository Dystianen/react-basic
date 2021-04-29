import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Login } from '../component/user/Login.js';
import { Home } from '../component/user/Home.js';
import { About } from '../component/user/About.js';
import { Video } from '../component/Layouts/Video.js';

export const AppRoute = () => {
    return <Switch>
        <Route path={"/home"}>
            <Home />
        </Route>
        <Route path={"/about"}>
            <About />
        </Route>
    </Switch>

}