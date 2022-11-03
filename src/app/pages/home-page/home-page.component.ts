import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  contentLoaded: Boolean = false;
  @HostListener('window:load', ['$event'])
  handleKeyDown(event: Event) {
    this.contentLoaded = true;
  }
  ngOnInit() {
    AOS.init();
  }

}
