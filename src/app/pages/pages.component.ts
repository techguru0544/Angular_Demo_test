import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { UtilService } from '../service/util.service';
declare const $:any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  isSidebarVisible: boolean = true;
  selectedCustomer : any;
  customerSubsribe: any;
  
  constructor(private utilService : UtilService) { }

  ngOnInit(): void {
    this.sideBarDetect();
    $(window).on('resize', () => {
      this.sideBarDetect();
    });

    this.customerSubsribe = this.utilService.getSelectedCustomer().subscribe((data) => {
      if(data != null){
        this.selectedCustomer = data;
      }
    })
  }

  public get width() {
    return window.innerWidth;
  }

  sideBarDetect() {
    this.isSidebarVisible = this.width > 1024;
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.customerSubsribe.unsubscribe();
  }
}
