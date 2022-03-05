import { Component } from '@angular/core';
import { Zoom } from '@ionic-native/zoom/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  SDK_KEY: string = "70HzNck358EWwYJBe9inzP0UTWU5zijVyFFv";
  SDK_SECRET: string = "9dF3OFCIalHItaTH15Iv7HTd3mfCJKIEB7k7";

  constructor(
    private platform: Platform,
    private zoomService: Zoom
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.zoomService.initialize(this.SDK_KEY, this.SDK_SECRET)
        .then((success: any) => console.log(success))
        .catch((error: any) => console.log(error));
    });
  }
}
