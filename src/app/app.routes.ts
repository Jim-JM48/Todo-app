import { Routes } from '@angular/router';
import { Account } from './components/user/account/account';
import { Todo } from './components/user/todo/todo';
import { Quest } from './components/user/quest/quest';
import { Dashbord } from './components/user/dashbord/dashbord';
import { Login } from './components/sign/login/login';
import { Signup } from './components/sign/signup/signup';
import { Home } from './components/core/home/home';
import { Notfound } from './components/core/notfound/notfound';
import { AuthGuard ,redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo('/');

export const routes: Routes = [
    {path : '',component : Home},
    {path : 'login' ,component : Login},
    {path : 'signup' ,component : Signup},
    {path : 'dashboard' ,component : Dashbord ,children : [
        {path : 'account' ,component : Account},
        {path : 'todo' ,component : Todo},
        {path : 'quests' ,component : Quest}
    ] ,data: {authGuardPipe : redirectUnauthorizedToHome} ,canActivate : [AuthGuard],},
    {path : '**' ,component : Notfound}
];
