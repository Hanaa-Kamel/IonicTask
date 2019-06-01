import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { timer } from 'rxjs';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  showSplash = true;
  constructor(
    public platform: Platform, public statusBar: StatusBar , public splashScreen: SplashScreen
  ) {
    this.initializeApp();
 }



initializeApp() {
  this.platform.ready().then(() => {

    this.statusBar.styleDefault();
    this.splashScreen.hide();  // <-- hide static image

    timer(3000).subscribe(() => this.showSplash = false) ; // <-- hide animation after 3s
  });
}

}
