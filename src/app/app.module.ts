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
import { NgxsModule } from '@ngxs/store';
import { CartComponent } from './cart/cart.component';
import { CartState} from 'src/shared/states/cart-state';

const routes: Routes = [
  { path: "", component: ShowCatalogueComponent },
  {
    path: "client",
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
  },{
    path: "cart",
    component: CartComponent
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
    FormClientComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    RouterOutlet,
    NgxsModule.forRoot([CartState])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})


export class AppModule { }
