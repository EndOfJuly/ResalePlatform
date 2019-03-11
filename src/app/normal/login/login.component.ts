import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  account;
  password;
  verification;

  constructor(
    private router: Router
  ) { }

  ngAfterViewInit() {

    this.drawPic();

  }


  ngOnInit() {
    // this.drawPic();

    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    console.log(canvas);

  }

  randomNum(min, max) {
    return (parseInt(Math.random() * (max - min) + min, 10));
  }

  randomColor(min, max) {
    const r = this.randomNum(min, max);
    const g = this.randomNum(min, max);
    const b = this.randomNum(min, max);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  loginClick() {
    console.log('login');

    this.router.navigate(['/home']);
  }

  refresh() {
    this.drawPic();
  }

  drawPic() {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');

    const width = canvas.width;
    const height = canvas.height;

    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'bottom';

    console.log(width + ' ' + height);

    // 背景颜色
    ctx.fillStyle = this.randomColor(180, 240);
    ctx.fillRect(0, 0, width, height);

    // 文字
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    this.verification = '';
    for (let i = 0; i < 4; i++) {
      const text = str[this.randomNum(0, str.length)];

      this.verification += text;

      ctx.fillStyle = this.randomColor(40, 180);
      ctx.font = this.randomNum(15, 40) + 'px SimHei';
      const x = 15 + i * 15;
      const y = this.randomNum(25, 45);
      const deg = this.randomNum(-25, 25);
      // 修改坐标原点和旋转角度
      ctx.translate(x, y);
      ctx.rotate(deg * Math.PI / 180);
      ctx.fillText(text, 0, 0);
      // 恢复坐标原点和旋转角度
      ctx.rotate(-deg * Math.PI / 180);
      ctx.translate(-x, -y);
    }

    // 干扰线
    for (let i = 0; i < 4; i++) {
      ctx.strokeStyle = this.randomColor(40, 180);
      ctx.beginPath();
      ctx.moveTo(this.randomNum(0, width), this.randomNum(0, height));
      ctx.lineTo(this.randomNum(0, width), this.randomNum(0, height));
      ctx.stroke();
    }

    // 干扰点
    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = this.randomColor(0, 255);
      ctx.beginPath();
      ctx.arc(this.randomNum(0, width), this.randomNum(0, height), 1, 0, 2 * Math.PI);
      ctx.fill();
    }

    // console.log('验证码：' + this.verificationCode);
  }
}
