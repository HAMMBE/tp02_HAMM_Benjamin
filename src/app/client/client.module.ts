import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormClientComponent} from "../form-client/form-client.component";
import {ReactiveFormsModule} from "@angular/forms";



const routes: Routes = [
  { path: "register", component: FormClientComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientModule { }
