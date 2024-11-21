import { Routes } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PortalComponent } from './components/portal/portal.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TimesComponent } from './components/times/times.component';

// export const routes: Routes = [
//     {path: 'movies', component: MovieComponent},
//     {path: 'movies/search/:query', component: MovieComponent},
//     {path: 'movies/:movieType', component: MovieComponent},
//     {path: 'movie/:movieId', component: MovieDetailsComponent},
//     {path: '', redirectTo: '/movies', pathMatch: 'full'},
//     {path: '**', redirectTo: '', pathMatch: 'full'},
// ];

export const routes: Routes = [
    {path: 'inicio', component: PortalComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'dashboard/times', component: TimesComponent},
    {path: 'inicio/search/:query', component: MovieComponent},
    {path: 'inicio/:movieType', component: MovieComponent},
    {path: 'inicio/:movieId', component: MovieDetailsComponent},
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: '**', redirectTo: 'inicio', pathMatch: 'full'},
];
