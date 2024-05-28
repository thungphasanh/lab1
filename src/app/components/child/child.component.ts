import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() color:any
@Output() childEvent= new EventEmitter<any>();
  sendMessageToParent() {
    this.childEvent.emit("toandeptrainhatthegioi");
  }
}
