import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
isHidden:boolean=true;

modelimg:string='';

imgSrc:string[]=[

  '/images/poert1.png',
  '/images/port2.png',
  '/images/port3.png',
  '/images/poert1.png',
  '/images/port2.png',
  '/images/port3.png'
]


hideimg(eleTarget:EventTarget | null, imgRef:HTMLImageElement):void{
if(eleTarget == imgRef){
  return
}else{
  this.isHidden=true;
}

}
}
