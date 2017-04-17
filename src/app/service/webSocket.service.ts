import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WebSocketService {
  private webSocket: WebSocket = null;
  private id: any = null;

  constructor( ) {
  }
  
  open(uri: string) {
    if (this.webSocket === null || this.webSocket.readyState === this.webSocket.CLOSED) {
      // WebSocket の初期化
      this.webSocket = new WebSocket(uri);
      // イベントハンドラの設定
      this.webSocket.onopen = this.onOpen;
      this.webSocket.onmessage = this.onMessage;
      this.webSocket.onclose = this.onClose;
      this.webSocket.onerror = this.onError;
    }
  }

  // 接続イベント
  private onOpen(event) {
    console.log("接続しました。");
  }

  // メッセージ受信イベント
  private onMessage(event) {
    if (event && event.data) {
      console.log(event.data);
      this.webSocket = null;
    }
  }

  // エラーイベント
  private onError(event) {
    console.error("エラーが発生しました。");
  }

  // 切断イベント
  private onClose(event) {
    console.log("切断しました。(" + event.code + ")");
    this.webSocket = null;
  }
  
  send(data: any) {
    this.id = setInterval(() => {
      console.log('readyState : ' + this.webSocket.readyState);
      if(this.webSocket.readyState) {
        clearInterval(this.id);
        this.id = null;
        if(this.webSocket.readyState === this.webSocket.OPEN) {
          this.webSocket.send(data);
        }
      }
    }, 1000);
  }
}
