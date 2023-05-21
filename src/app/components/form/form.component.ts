import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  public user: any;
  public myfield: string | undefined;

  constructor() {
    this.user = {
      name: '',
      lastname: '',
      bio: '',
      gender: ''
    }
  }

  onSubmit() {
    console.log(this.user);
    alert('sending form...');
  }

  triggerClickEvent() {
    alert('trigger click button event!')
  }

  triggerBlurEvent() {
    alert('trigger blug input-text event!')
  }
  triggerKeyUpEvent() {
    alert('trigger keyup input-text event!')
  }

  triggerKeyUpEnterEvent() {
    alert('trigger keyup enter input-text event!')
  }

}
