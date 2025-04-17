import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  @ViewChild('sidenav')
  matSideNav!: MatSidenav;
  isOpen:boolean=false;

  constructor(
    private elementRef: ElementRef,
  ) { }


  ngAfterViewInit(): void {
    this.elementRef.nativeElement.querySelectorAll('.mat-list-item[href]')
      .forEach((el: HTMLElement) => {
        el.addEventListener('click', () => {
          this.matSideNav.close()
        })
      })
  }

  openSideNav() {
    this.matSideNav.toggle();
  }
}
