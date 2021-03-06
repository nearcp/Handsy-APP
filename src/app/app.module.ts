import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    AlertController,
    HttpClientModule,
    SplashScreen,
    BarcodeScanner,
    QRScanner,
    Vibration,
  
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
