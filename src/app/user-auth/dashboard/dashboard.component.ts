import { Component, OnInit } from '@angular/core';
import { UserInfoService } from './service/user-info.service';
import { userInfo } from '../interfaces/userInfo';
import { petInfo } from '../interfaces/petsInfo';
import { PetService } from './service/pets.service';
import { citasInfo } from '../interfaces/citasInfo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{
  //VARIABLES
   userInfo? : userInfo;
   petInfo? : petInfo[];
   citesInfo? : citasInfo[];


constructor(

  private userInfoService : UserInfoService,
  private petInfoService : PetService
) {}



  ngOnInit(): void {
    this.userInfoService.findUserInfo().subscribe((user) => {
      this.userInfo = user;
    });


    this.petInfoService.findInfoPets().subscribe( (pets) => {
      this.petInfo = pets;
    })

    this.petInfoService.findCites().subscribe((cites) => {
      this.citesInfo = cites;
    })

  }


  deleteCite(value : number){

    this.petInfoService.removeCite(value).subscribe( () => {
      this.petInfoService.findCites().subscribe((cites) => {
        this.citesInfo = cites;
      })
    });

  }

  editPet(id : number){

  }


}
