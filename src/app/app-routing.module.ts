import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './guards/auth.guard';
import { StorageComponent } from './components/storage/storage.component';
import { DonorComponent } from './components/donor/donor.component';
import { AuthLayoutComponent } from './outlets/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './outlets/main-layout/main-layout.component';
import { DonationsComponent } from './components/donations/donations.component';
import { BloodRequestsComponent } from './components/blood-requests/blood-requests.component';
import { ConsumersComponent } from './components/consumers/consumers.component';
/**
 * { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'terminal', component: TerminalComponent }
 */
const routes: Routes = [
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    children:[
      
      {
        path: 'storage',
        component: StorageComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'donations',
        component: DonationsComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'blood-requests',
        component: BloodRequestsComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'consumers',
        component: ConsumersComponent,
        canActivate: [AuthGuardService]
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: '**', redirectTo: 'storage' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
