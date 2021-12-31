import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-confirm-model',
  templateUrl: './confirm-model.component.html',
  styleUrls: ['./confirm-model.component.scss']
})
export class ConfirmModelComponent implements OnInit {
  title: string ="Title";
  description: string = "Are you sure? You want to logout ?"
  btnYes: string = "Logout"
  btnNo: string = "Cancel"
  constructor(public modalService:NgbModal) { }

  ngOnInit(): void {
  }

  
  submit(){
    this.modalService.dismissAll(true);
  }
}
