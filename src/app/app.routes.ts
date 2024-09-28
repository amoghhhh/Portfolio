import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';

export const routes: Routes = [
    {path: 'about', component:AboutComponent},
    {path: 'home', component:HomeComponent},
    {path: '', component:HomeComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'navbar', component:NavbarComponent},
    {path: 'projects', component:ProjectsComponent},
    {path: 'resume', component:ResumeComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }