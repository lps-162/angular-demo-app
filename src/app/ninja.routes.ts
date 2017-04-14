import { Routes } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { NinjaDetailComponent } from './ninja-detail/ninja-detail.component';


export const NINJA_ROUTES: Routes = 
    [
        {
        path: 'directory',
            children: [
                {
                    path: '',
                    component: DirectoryComponent
                },
                {
                    path: ':name',
                    component: NinjaDetailComponent
                }
            ]
        }
    ];