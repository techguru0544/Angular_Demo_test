import { Component, OnInit } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { UtilService } from "src/app/service/util.service";

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {
  public productForm: FormGroup ;
  public isEdit: boolean = false;
  userRole: any;
  productData: any;
  selectedCustomer: any;
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private utilService : UtilService
  ) {
    this.productForm = this.formBuilder.group({
      id: [""],
      customer_id: [""],
      name: ["", Validators.required],
      price: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.selectedCustomer = this.utilService.selectedCustomer;
    if (this.isEdit) {
      this.productForm.patchValue({
        id: this.productData.id,
        customer_id: this.productData.customer_id,
        name: this.productData.name,
        price: this.productData.price,
      });
    }
  }

  /**
   * submit updated customer data
   */
  addUpdateProduct(){
    if(this.productForm.valid){
      const productFormValue = this.productForm.value;
      if(this.isEdit){
        const selected_product_id  = productFormValue.id;
        let index = this.selectedCustomer.product.findIndex(x => x.id === selected_product_id);
        if(index > -1){
          this.selectedCustomer.product[index] = productFormValue;
        }
      }else{
        productFormValue.id = Math.floor(Math.random() * 10000);
        productFormValue.customer_id = this.selectedCustomer.id;
        this.selectedCustomer.product.push(productFormValue);
      }
      this.utilService.setSelectedCustomer(this.selectedCustomer);
      this.activeModal.close();
    }
  }
}
