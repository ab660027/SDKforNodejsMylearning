import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../service/ajax.service';
import { WebSocketService } from '../../service/webSocket.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  public delayTime: number = 0;
  public errMsg: string;
  private response: any;

  constructor(
    private _ajax: AjaxService,
    private _socket: WebSocketService
  ) { }

  ngOnInit() {
    this._ajax.login()
    .subscribe(
      (res) => { }, 
      (err) => {
        alert(err);
        return;
      }, 
      () => { });
  }
  
  onClick() {
    if(this.delayTime === null) {
      this.errMsg = "数値を入力してください。";
      return;
    } else {
      if(this.delayTime < 0) {
        this.errMsg = "負の値は入力できません。";
        return;
      } else {
        this.errMsg = "";
        this._ajax.getPush()
        .subscribe(
          (res) => {
            this.response = res;
          }, 
          (err) => {
            alert(err);
            return;
          }, 
          () => {
            const endpoint: endpoint = this.response;
            console.log('webSocket endPoint => ' + endpoint.endpoint);
            this._socket.open(endpoint.endpoint);
          });
      }
    }
  }
}

interface endpoint {
  endpoint: string;
}
