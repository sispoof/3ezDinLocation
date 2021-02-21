import { Component, OnInit } from '@angular/core';
import {MessageService,ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class CarListComponent implements OnInit {

 //Car list  
  cars = [{
    id:1,
    name:'Hyundai i10',
    prix:12,
    nbrePer:4,
    nmbrePort:4,
    option:'Clim,airbag',
    vitesse:'automatique',
    img:'https://media.autoexpress.co.uk/image/private/s--u7bYZAf6--/v1563182812/autoexpress/2019/05/01_64.jpg'
  },
{
  id:2,
  name:'GOLF4',
  prix:17,
  nbrePer:5,
  nmbrePort:4,
  option:'Clim,airbag',
  vitesse:'Manuelle',
  img:'https://cdnx.nextinpact.com/data-next/images/bd/wide-linked-media/6314.jpg'
},
{
  id:3,
  name:'BMW e30',
  prix:33,
  nbrePer:2,
  nmbrePort:2,
  option:'Clim,airbag',
  vitesse:'manuelle',
  img:'https://www.tuningblog.eu/wp-content/uploads/2019/03/BMW-M3-E30-Restomod-Turbo-Tuning-Redux-Leichtbau-22.jpg'
},{
  id:4,
  name:'mercedes Benz E200',
  prix:455,
  nbrePer:4,
  nmbrePort:4,
  option:'Clim',
  vitesse:'Manuelle',
  img:'https://s2.paultan.org/image/2019/03/W213-Mercedes-Benz-E200-SportStyle-Avantgarde-2.jpg'
},
 {
   id:5,
   name:'Kia Rio',
   prix:66,
   nbrePer:4,
   nmbrePort:4,
   option:'7 vitesse',
   vitesse:'manuelle',
   img:'https://images.netdirector.co.uk/gforces-auto/image/upload/w_372,h_279,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/32f8593c99d649039c6bfd8d11c12e8f/20_ex_1.jpg'
 }

];
  constructor(private messageService:MessageService,private confirmationService:ConfirmationService) { }

  ngOnInit(): void {
  }

  confirm()
  {
    this.confirmationService.confirm({
      message:'contactez nous : 99210134',
      header:'are you sure about that ?',
   
      //hni ya sidi condition ken taccepti hel wa7da chesmha hia ti heki chi9ouloulha ?PoPup 7aja hakka ti 7asilou hedhia el event ta3 el accept developpih w jawek fesfes hné
      //bon ya 3ezden ena chnaffichi Modal ta3 confimation ema ba3d chetsir condition hné idha ken el sayed connecté thezzou el page te3ou sinon lel login nchlh wadh7a el fekra 
      //ya 3ezDin
      accept:()=>{
        this.messageService.add({severity:'info',summary:'Confirmed',detail:'You have accepted ya3tik sa7a'});
      }
    })
  }

}
