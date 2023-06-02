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
public data= [
   {
    name:'aaaa',
    id:1,
  },
  {
    name:'bbbb',
    id:2,
  },
  {
    name:'cccc',
    id:3,
  },
  {
    name:'dddd',
    id:4,
  },
  {
    name:'eeee',
    id:5,
  } ,
  {
    name:'ffff',
    id:6,
  },
  {
    name:'gggg',
    id:7,
  },
]
}
