import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-image',
  templateUrl: './ui-image.component.html',
  styleUrls: ['./ui-image.component.css']
})

export class UiImageComponent implements OnInit {
  
  constructor() { }
  loaded: Boolean = false;
  @Input() link: String | undefined
  @Input() skWidth: String | undefined
  @Input() skHeight: String | undefined
  @Input() alt: String | undefined
  @Input() animationType!: String 
  @Input() animationDelay!: String
  @Input() animationDuration!: String
  @Input() animationRepeat: Boolean = false;
  @Input() animationEasing: String = 'ease-in-sine'

  hasLoad(event: Event) {
    console.log(event)
    this.loaded = true
  }
  ngOnInit(): void {
  }

}
