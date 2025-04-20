import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './config/jwt-interceptor';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { StorageComponent } from './components/storage/storage.component';
import { DonorComponent } from './components/donor/donor.component';
import { AuthLayoutComponent } from './outlets/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './outlets/main-layout/main-layout.component';
import { DonationsComponent } from './components/donations/donations.component';
import { BloodRequestsComponent } from './components/blood-requests/blood-requests.component';
import { ConsumersComponent } from './components/consumers/consumers.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    LogoutComponent,
    SidemenuComponent,
    StorageComponent,
    DonorComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    DonationsComponent,
    BloodRequestsComponent,
    ConsumersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule, 
    NgbModule,
    HttpClientModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
