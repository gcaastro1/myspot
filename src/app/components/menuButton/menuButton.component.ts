import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-menuButton',
  templateUrl: './menuButton.component.html',
  styleUrls: ['./menuButton.component.scss'],
})
export class MenuButtonComponent implements OnInit {
  @Input()
  description = ''

  @Input()
  selected = false

  @Output()
  click = new EventEmitter<void>()

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.click.emit()
  }
}
