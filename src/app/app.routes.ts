import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { AboutComponent } from './about/about.component';
import { NinjaDetailComponent } from './ninja-detail/ninja-detail.component';
import { NINJA_ROUTES } from './ninja.routes'; 

export const APP_ROUTES: Routes = [
   {
     path: '',
     component: HomeComponent
   },
   {
     path: 'home',
     component: HomeComponent,
   },
   ...NINJA_ROUTES,
   {
     path: 'about',
     component: AboutComponent
   },
   {
       path: '**',
       component: HomeComponent
   }
];