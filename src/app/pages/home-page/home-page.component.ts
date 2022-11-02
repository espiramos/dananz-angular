import { Component, Renderer2, OnInit, OnDestroy } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(private renderer2: Renderer2) { }

  private unlistener!: () => void;
  contentLoaded: Boolean = false;
  hasLoad() {
    this.contentLoaded = true
  }
  ngOnInit() {
    AOS.init();
    this.unlistener = this.renderer2.listen("document", "DOMContentLoaded", () => {
      this.contentLoaded = true;
    });
  }

  ngOnDestroy() {
    this.unlistener();
  }

}
