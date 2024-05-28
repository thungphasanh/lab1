import { Component, OnInit, ViewChild } from '@angular/core';
import { ConComponent } from '../con/con.component';

@Component({
  selector: 'app-cha',
  standalone: true,
  imports: [ConComponent],
  templateUrl: './cha.component.html',
  styleUrl: './cha.component.css'
})
export class ChaComponent implements OnInit {
  @ViewChild("conRef", { static: true }) conComponent!:ConComponent
  conMessage:any
  ngOnInit(): void {
  this.conMessage=this.conComponent.messageFromCon
}
sendMessageToCon(): void {
  this.conComponent.getChaMessage("luongphy")
  }
}

