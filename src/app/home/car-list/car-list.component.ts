import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

 //Car list  
  cars = [{
    id:1,
    name:'Hyundai i10',
    prix:12,
    description:'fiha airbag metkhafech sou9 w 3Lik el amen',
    img:'https://media.autoexpress.co.uk/image/private/s--u7bYZAf6--/v1563182812/autoexpress/2019/05/01_64.jpg'
  },
{
  id:2,
  name:'GOLF4',
  prix:17,
  description:'cette voiture contient deux volant ena cas ou tu veux dormir, ton amis peux le conduit ! ',
  img:'https://cdnx.nextinpact.com/data-next/images/bd/wide-linked-media/6314.jpg'
},
{
  id:3,
  name:'BMW e30',
  prix:33,
  description:'cette voiture peut voler!',
  img:'https://www.tuningblog.eu/wp-content/uploads/2019/03/BMW-M3-E30-Restomod-Turbo-Tuning-Redux-Leichtbau-22.jpg'
},{
  id:4,
  name:'mercedes Benz E200',
  prix:455,
  description:'si en cas ou tu mourir en accident cette voiture devient a ton fils',
  img:'https://s2.paultan.org/image/2019/03/W213-Mercedes-Benz-E200-SportStyle-Avantgarde-2.jpg'
},
 {
   id:5,
   name:'Fiat punto',
   prix:66,
   description: 'en cas ou il ya un braquage tu a le droit d\'écraser le braquageur',
   img:'https://content.mosaiquefm.net/uploads/content/thumbnails/braquage_1609325948.jpg'
 }

];
  constructor() { }

  ngOnInit(): void {
  }

}
