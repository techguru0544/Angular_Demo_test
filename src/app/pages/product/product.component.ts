import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/service/util.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ProductModalComponent } from 'src/app/component/product-modal/product-modal.component';
import { ConfirmModelComponent } from 'src/app/component/confirm-model/confirm-model.component';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  customerSubsribe: any;
  selectedCustomer: any;
  product_list: any;
  selectedPageIndex: number = 5;
  display_list: any;
  currentPage: number = 1;
  totalPageSize: number;
  constructor(
    private utilService: UtilService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.customerSubsribe = this.utilService
      .getSelectedCustomer()
      .subscribe((data) => {
        if (data != null) {
          this.selectedCustomer = data;
          this.product_list = [];
          this.display_list = [];
          if (data.product && data.product.length > 0) {
            this.product_list = data.product;
            this.loadTable(this.selectedPageIndex);
          }
        }
      });
  }

  /**
   * open popup for add and update product
   * @param e event
   * @param product product data   
   */
  openProductPopup(e, product) {
    console.log("Data : ", product);
    e.preventDefault();
    const modalRef = this.modalService.open(ProductModalComponent, {
      centered: true,
    });
    if (product) {
      modalRef.componentInstance.productData = product;
      modalRef.componentInstance.isEdit = true;
    } else {
      modalRef.componentInstance.isEdit = false;
    }
    modalRef.result.then((result: any) => {});
  }

  /**
   * Open delete confirmation modal
   * @param e
   * @param data
   */
  openDeleteModal(e: any, product: any) {
    e.preventDefault();
    const modalRef = this.modalService.open(ConfirmModelComponent, {
      centered: true,
    });
    modalRef.componentInstance.title = "Delete";
    modalRef.componentInstance.description = "Are you sure you want to delete?";
    modalRef.componentInstance.btnYes = "Yes";
    modalRef.componentInstance.btnNo = "No";
    modalRef.result.then(
      (result: any) => {},
      (reason: any) => {
        if (reason) {
          let index = this.selectedCustomer.product.findIndex(
            (x) => x.id === product.id
          );
          if (index > -1) {
            this.selectedCustomer.product =
              this.selectedCustomer.product.filter((x, i) => i !== index);
            this.product_list = this.selectedCustomer.product;
          }
          this.utilService.setSelectedCustomer(this.selectedCustomer);
        }
      }
    );
  }


  /**
   * refresh table data after udpate product
   * @param value udpated data
   */
  loadTable(value) {
    if (value) {
      this.selectedPageIndex = value;
    }

    if(this.product_list.length > 0){
      this.display_list = this.product_list.slice(
        this.selectedPageIndex * (this.currentPage - 1),
        this.selectedPageIndex * (this.currentPage - 1) + this.selectedPageIndex
      );
      if (this.display_list.length == 0) {
        this.currentPage -= 1;
        this.loadTable(this.selectedPageIndex);
      }
  
      this.totalPageSize = Math.ceil(
        this.product_list.length / this.selectedPageIndex
      );
    }
  }

  /**
   * change the table index
   * @param value updated index
   */
  onChangePageIndex(value) {
    this.selectedPageIndex = value;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.customerSubsribe.unsubscribe();
  }

  /**
   * go to first page in table
   */
  goToFirstPage() {
    this.currentPage = 1;
    this.display_list = this.product_list.slice(
      this.selectedPageIndex * (this.currentPage - 1),
      this.selectedPageIndex * (this.currentPage - 1) + this.selectedPageIndex
    );
  }

   /**
   * go to previouse page in table
   */
  previousePage() {
    this.currentPage = this.currentPage - 1;
    this.display_list = this.product_list.slice(
      this.selectedPageIndex * (this.currentPage - 1),
      this.selectedPageIndex * (this.currentPage - 1) + this.selectedPageIndex
    );
  }

   /**
   * go to next page in table
   */
  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.display_list = this.product_list.slice(
      this.selectedPageIndex * (this.currentPage - 1),
      this.selectedPageIndex * (this.currentPage - 1) + this.selectedPageIndex
    );
  }

   /**
   * go to last page in table
   */
  goToLastPage() {
    this.currentPage = this.totalPageSize;
    this.display_list = this.product_list.slice(
      this.selectedPageIndex * (this.currentPage - 1),
      this.selectedPageIndex * (this.currentPage - 1) + this.selectedPageIndex
    );
  }
}
