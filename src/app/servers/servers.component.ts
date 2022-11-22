import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

   username='';
   buttonDisable=false;
  constructor() {
    
   }

  ngOnInit(): void {
  }
  onClickAdd(event : Event){
    if((<HTMLInputElement>event.target).value==''){
        this.username='';
    }

  }

}
