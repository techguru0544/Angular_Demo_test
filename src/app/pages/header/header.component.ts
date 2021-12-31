import {Component, OnInit, Output, EventEmitter, ComponentRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {ConfirmModelComponent} from "../../component/confirm-model/confirm-model.component";
declare const $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBar = new EventEmitter();
  isTriggerVisible: boolean = false;
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.detectToggleBar();
    $(window).on('resize', () => {
      this.detectToggleBar();
    });
  }

  public get width() {
    return window.innerWidth;
  }

  public detectToggleBar() {
    this.isTriggerVisible = this.width < 1025;
  }

  clickToggle() {
    this.toggleSideBar.emit();
  }

}
