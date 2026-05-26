import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './components/home/home.component';
import { MojeVezbeComponent } from './components/moje-vezbe/moje-vezbe.component';
import { ZadaciComponent } from './components/zadaci/zadaci.component';
import { VezbanjeComponent } from './components/vezbanje/vezbanje.component';
import { ZaduzenjaComponent } from './components/zaduzenja/zaduzenja.component';
import { MojiZadaciComponent } from './components/moji-zadaci/moji-zadaci.component';
import { VezbanjaComponent } from './components/vezbanja/vezbanja/vezbanja.component';
import { VezbeComponent } from './components/vezbe/vezbe.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SettingsComponent,
    MojeVezbeComponent,
    ZadaciComponent,
    ZaduzenjaComponent,
    MojiZadaciComponent,
    VezbanjaComponent,
    VezbeComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
