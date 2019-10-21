import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})


export class ServerComponent implements OnInit {
  public serverNameValue;
  public bluePrints;
  public arr = [];

  constructor() { }

  ngOnInit() {
    }
 addServerName() {
   this.arr.push({
          name: this.serverNameValue,
          content: this.bluePrints,
          color : 'red'
     });
  }
 addBluePrints() {
  this.arr.push({
    name: this.serverNameValue,
    content: this.bluePrints,
    color: 'blue'
});

}
}
