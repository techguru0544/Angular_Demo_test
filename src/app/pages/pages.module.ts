import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesComponent } from "./pages.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductComponent } from "./product/product.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { AccordionModule } from "ngx-bootstrap/accordion";
import { FormsModule } from "@angular/forms";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    ProductComponent,
    CustomerDetailsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
})
export class PagesModule {}
