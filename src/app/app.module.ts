import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DeliveryModule } from './pages/delivery/delivery.module';
import { LoginComponent } from './components/login/login.component';
import { ReciptModule } from './pages/recipt/recipt.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared.module';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DeliveryModule,
        ReciptModule,
        HttpClientModule,
        FormsModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
