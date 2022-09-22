import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saisie-client',
  templateUrl: './saisie-client.component.html',
  styleUrls: ['./saisie-client.component.css']
})
export class SaisieClientComponent implements OnInit {

  constructor() { }
  title : String = 'tp02_HAMM_Benjamin2';
  valid : boolean = true;
  firstname : String = 'firstname';
  lastname : String = 'lastname';
  email : String = 'email';
  password : String = 'password';
  login : String = 'login';

  ngOnInit(): void {
  }

  ngOnDestory(): void {

  }

  ngOnChanges(): void {

  }

  click() {
    this.valid = false;
    this.title = this.firstname;
  }
}
