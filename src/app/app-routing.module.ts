import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GirisComponent } from './giris/giris.component';
import { ProfilComponent } from './profil/profil.component';
import { KazakComponent } from './kazak/kazak.component';
import { MontComponent } from './mont/mont.component';
import { AyakkabiComponent } from './ayakkabi/ayakkabi.component';
import { RegisterComponent } from './register/register.component';
import { SepetimComponent } from './sepetim/sepetim.component';
import { AyarlarComponent } from './ayarlar/ayarlar.component';
import { TelefonComponent } from './telefon/telefon.component';
import{ BilgisayarComponent}from './bilgisayar/bilgisayar.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },

  { path: 'giris', component: GirisComponent ,children:[

    { path: 'kazak', component: KazakComponent },
    { path: 'mont', component: MontComponent },
    { path: 'ayakkabi', component: AyakkabiComponent },
    {path:'telefon',component:TelefonComponent},
    {path:'bilgisayar',component:BilgisayarComponent},

    { path: 'profil', component: ProfilComponent, children:[

   
    {path:'sepetim', component:SepetimComponent},
    {path:'ayarlar' , component:AyarlarComponent}


    ] },
    
  ]},
  { path: 'register', component: RegisterComponent }
  
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
