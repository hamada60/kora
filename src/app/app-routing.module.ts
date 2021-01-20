import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Err404Component } from './pages/err404/err404.component';
import { NewsComponent } from './pages/news/news.component';
import { TestComponent } from './pages/test/test.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'news',component:NewsComponent},
  {path:'test',component:TestComponent},
  {path:'404',component:Err404Component},
  {path:'**',redirectTo:'/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
