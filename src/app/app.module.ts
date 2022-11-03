import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaisieClientComponent } from './saisie-client/saisie-client.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShowFormDataComponent } from './show-form-data/show-form-data.component';
import { CtrlDataDirective } from './ctrl-data.directive';
import { PhonePipe } from './phone.pipe';
import { ShowCatalogueComponent } from './show-catalogue/show-catalogue.component';
import {ProductService} from "./service/product.service";
import { HttpClientModule } from '@angular/common/http';
import { FormClientComponent } from "./form-client/form-client.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";

const routes: Routes = [
  { path: "", component: ShowCatalogueComponent },
  {
    path: "register",
    component: FormClientComponent,
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  declarations: [
    AppComponent,
    SaisieClientComponent,
    HeaderComponent,
    FooterComponent,
    ShowFormDataComponent,
    CtrlDataDirective,
    PhonePipe,
    ShowCatalogueComponent,
    FormClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    RouterOutlet
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})


export class AppModule { }
