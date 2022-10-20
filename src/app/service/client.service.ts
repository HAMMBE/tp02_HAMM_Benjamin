import { Injectable } from '@angular/core';
import {Client} from "../../Types/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  public postClient(client: Client) {
    console.log(client);
  }

  public getClient(id: string) {
    return {
      title: '',
      valid: true,
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      login: '',
      phone: ''
    }
  }

  public postlogin(login: string, password: string) {
    console.log(login + " " + password);
  }


}
