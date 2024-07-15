
import { Component } from '@angular/core';
import { petInfo } from 'src/app/user-auth/interfaces/petsInfo';
import { PetService } from '../../service/pets.service';
import { especiesInfo } from 'src/app/user-auth/interfaces/especiesInfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent {

  especiesInfo : especiesInfo[] = [];

  pet: petInfo = {
    nombre_mascota: '',
    edad: 0,
    especie: '',
    genero: '',
    color: '',
    peso: 0

  }

  fecha : string = '';

  constructor(
    private petInfoService : PetService,
    private router: Router

  ){

    petInfoService.findEspecies().subscribe ( (especie) => this.especiesInfo = especie);

  }

  addPet(){
    // console.log(this.fecha);

    this.petInfoService.addPet(this.pet).subscribe( (petadd) => console.log(petadd));

    this.router.navigateByUrl('/user/dashboard');



  }



}
