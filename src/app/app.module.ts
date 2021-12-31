import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { ConfirmModelComponent } from './component/confirm-model/confirm-model.component';
import { BsModalService, ModalModule } from "ngx-bootstrap/modal";
import { NgSelectModule } from "@ng-select/ng-select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProductModalComponent } from './component/product-modal/product-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    ConfirmModelComponent,
    ProductModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule { }
