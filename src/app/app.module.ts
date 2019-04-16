import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { GirisComponent } from './giris/giris.component';
import { ProfilComponent } from './profil/profil.component';
import { KazakComponent } from './kazak/kazak.component';
import { MontComponent } from './mont/mont.component';
import { AyakkabiComponent } from './ayakkabi/ayakkabi.component';
import { TelefonComponent } from './telefon/telefon.component';
import { BilgisayarComponent } from './bilgisayar/bilgisayar.component';
import { KulaklikComponent } from './kulaklik/kulaklik.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { SepetimComponent } from './sepetim/sepetim.component';
import { AyarlarComponent } from './ayarlar/ayarlar.component';
import { TelefonlarComponent } from './telefonlar/telefonlar.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GirisComponent,
    ProfilComponent,
    KazakComponent,
    MontComponent,
    AyakkabiComponent,
    TelefonComponent,
    BilgisayarComponent,
    KulaklikComponent,
    RegisterComponent,
    ProductComponent,
    SepetimComponent,
    AyarlarComponent,
    TelefonlarComponent,

  ],



  
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    
    RouterModule.forRoot([
     
      {
        path:'home', component:HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
