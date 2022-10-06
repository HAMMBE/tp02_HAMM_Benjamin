import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Client} from "../../Types/client";



@Component({
  selector: 'app-saisie-client',
  templateUrl: './saisie-client.component.html',
  styleUrls: ['./saisie-client.component.css']
})
export class SaisieClientComponent implements OnInit {

  e: Client = {
    title: '',
    valid: true,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    login: '',
    phone: ''
  };
  @Output() newClientEvent = new EventEmitter<Client>();
  constructor() {

  }

  ngOnInit(): void {
  }

  ngOnDestory(): void {

  }

  ngOnChanges(): void {

  }

  click() {
    this.e.valid = false;
    this.newClientEvent.emit(this.e);
  }
}
