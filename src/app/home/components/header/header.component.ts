import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { carList } from "../../../../car/carlist";
import {startWith, map} from 'rxjs/operators';
import {MessageService} from 'primeng/api';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[MessageService]
})
export class HeaderComponent implements OnInit {
  prisControl = new FormControl();
  retourControl = new FormControl();
  datedeb = new FormControl();
  datefin = new FormControl();
  

  Locations:string[]=[];
  LocationsRetour:string[]=[];
  //hné 3malt fichier fi wost el src/car fih lista ta3 les vehicule fhemtallech fi fourma JSON
 carList = carList;

 filterCarLists: Observable<string[]>;
 filterCarListRetour:Observable<string[]>;

  constructor(private messageService:MessageService,private router: Router,private route:ActivatedRoute ) {

   }

   //fonction tpushi les location
   pushLocation()
  {
    //hné kima 9otli elli fel json 3maltlou tablou fih ken les location console.log(this.Location)
    this.Locations = [];
    this.carList.map(data => this.Locations.push(data.location));

    
  }

  ngOnInit(): void {
    
    this.pushLocation();
    this.filterCarLists = this.prisControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.filterCarListRetour = this.retourControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.route.data.subscribe(data=>{
      if(data.routerName)
      {
        this.prisControl.setValue(this.route.snapshot.paramMap.get('pris'));
        this.retourControl.setValue(this.route.snapshot.paramMap.get('retour'));
        this.datedeb.setValue(this.route.snapshot.paramMap.get('dateD'));
        this.datefin.setValue(this.route.snapshot.paramMap.get('dateF'));
      }
    });
  }

  private _filter(value:string):string[]
  {
   
    const filterValue = this._normalize(value);
    return this.Locations.filter(car => this._normalize(car).includes(filterValue));
  }
  private _normalize(value:string):string
  {
    return value.toLowerCase().replace(/\s/g, '');
  }

    accessPage(){
      const pris = this.prisControl.value;
      const retour = this.retourControl.value;
      const datedb = this.datedeb.value;
      const datefn = this.datefin.value;

      if(pris == null || retour == null || datedb == null || datefn == null )
      {
        this.toastError();
      }else{
        this.router.navigate(['/home/search/',pris,retour,datedb,datefn]);
      }

    }



    toastError()
    {
      this.messageService.clear();
      this.messageService.add({severity:'warn',summary:'eurreur de validation',detail:'touts les champs obligatoire'});
    }
 
}
