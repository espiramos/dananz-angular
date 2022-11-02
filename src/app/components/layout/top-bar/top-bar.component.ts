import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }
  sideBar: Boolean = false;
  ngOnInit(): void {
  }
  toggleSideBar() {
    this.sideBar = !this.sideBar
  }
}
