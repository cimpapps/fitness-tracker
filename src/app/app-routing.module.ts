import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {TrainingComponent} from './training/training.component';
import {NewTrainingComponent} from './training/new-training/new-training.component';
import {CurrentTrainingComponent} from './training/current-training/current-training.component';
import {PastTrainingsComponent} from './training/past-trainings/past-trainings.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {
    path: 'training', component: TrainingComponent, children: [
      {path: 'new-training', component: NewTrainingComponent},
      {path: 'current-training', component: CurrentTrainingComponent},
      {path: 'past-trainings', component: PastTrainingsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
