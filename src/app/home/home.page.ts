import { Component } from '@angular/core';
import { Zoom } from '@ionic-native/zoom/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  options = {
    "no_driving_mode":true,
    "no_invite":true,
    "no_meeting_end_message":true,
    "no_titlebar":true,
    "no_bottom_toolbar":false,
    "no_dial_in_via_phone":true,
    "no_dial_out_to_phone":true,
    "no_disconnect_audio":true,
    "no_share":true,
    "no_audio":true,
    "no_video":true,
    "no_meeting_error_message":true
  };

  constructor(private zoomService: Zoom) {}


  joinMeeting = () => {
    this.zoomService.joinMeeting("87480051507", "836426", "Andries Bingani", this.options)
      .then((success: any) => console.log(success))
      .catch((error: any) => console.log(error));
  }
}
