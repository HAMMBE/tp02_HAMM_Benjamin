import { Component } from '@angular/core';
import {Client} from "../Types/client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  client: Client= {
    title: '',
    valid: true,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    login: ''
  }

  clientChange(e: Client) {
    this.client = e;
  }
}
