import { Component, Input, OnInit } from '@angular/core';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  customerSubsribe: any;
  selectedCustomer: any;
  constructor(private utilService : UtilService) { }

  ngOnInit(): void {
    // get updated customer details
    this.customerSubsribe = this.utilService.getSelectedCustomer().subscribe((data) => {
      if(data != null){
        this.selectedCustomer = data;
      }
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.customerSubsribe.unsubscribe();
  }

}
