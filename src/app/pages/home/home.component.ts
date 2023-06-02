import { Component } from '@angular/core';
import { identity } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
public color="text-primary";
public con=true;
public data1 = true;
public data2 = [
  {name: 'nnnn',
id:3},{name: 'nnnn',
id:3},{name: 'nnnn',
id:3}
]


public constructer() {
  this.fun1();
}

public fun1() {
  alert ('fun1');
}
public  fun2() {
  alert('fun2');
}
}