import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Router } from "@angular/router";
import { UtilService } from "src/app/service/util.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  @Output() onSelectedCustomer = new EventEmitter();
  modalRef?: BsModalRef;
  customer_list: any;
  selectedCustomer: any;
  constructor(public router: Router, private utilService: UtilService) {}

  ngOnInit(): void {
    this.customer_list = this.utilService.customer_list;
    this.selectedCustomer = this.customer_list[0];
    this.utilService.setSelectedCustomer(this.selectedCustomer);
  }

  /**
   * on change user
   * @param customer user data
   */
  changeUser(customer) {
    this.selectedCustomer = customer;
    this.router.navigateByUrl("/dashboard/customer-details");
    this.utilService.setSelectedCustomer(this.selectedCustomer);
  }
}
