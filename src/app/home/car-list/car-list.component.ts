import { Component, OnInit } from '@angular/core';
import {MessageService,ConfirmationService} from 'primeng/api';
import { carList } from "../../../car/carlist";
import {ActivatedRoute } from '@angular/router';
import { carListModel } from "../../../car/model";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class CarListComponent implements OnInit {

 //Car list  
  cars = carList;
  //hné bech na3mel variable betbi3a li yet7at fel recherche ta3 el input (location) bech ntestih idha ken mawjoud fel json wallé 
  //npushih fel variable heki fhemtallech w jawek fesfes
  carSearch :carListModel[] = [];

  //variable chta5edh elli chercha 3lih si el client 
  locationDepart;
  locationRetour;

  constructor(private messageService:MessageService,private confirmationService:ConfirmationService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.locationDepart = this.route.snapshot.paramMap.get('pris');
    this.locationRetour = this.route.snapshot.paramMap.get('retour');
    this.cars.map(data => {if(this.locationDepart === data.location || this.locationRetour === data.location)
         {
          this.carSearch.push(data);
         } 
          
    });
    console.log(this.carSearch);
    

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
