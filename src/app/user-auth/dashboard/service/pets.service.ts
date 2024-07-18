import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { SharingService } from 'src/app/shared/service/sharing.service';
import { userToken } from '../../interfaces/userToken';
import { petInfo } from '../../interfaces/petsInfo';
import { especiesInfo } from '../../interfaces/especiesInfo';
import { citasInfo } from '../../interfaces/citasInfo';
import { serviceInfo } from '../../interfaces/serviceInfo';
import { addCite } from '../../interfaces/addcite';
// import { addCite } from '../../interfaces/addcite';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  public data$ : Observable<userToken>;
  private apiUrl : string = 'http://localhost:4000';
  private endpointFindInfoPetsById : string = '/mascotas/buscar';
  private endpointAddInfoPet : string = '/mascotas/addpet';
  private endpointFindInfoEspecies : string = '/especies';
  private endpointFindInfoCitesById : string = '/citas/buscar';
  private endpointRemoveCitesById : string = '/citas/remove';
  private endpointFindServicesPet : string = '/servicios';
  private endpointAddCite: string = '/citas/addcite';
  private endpointEditPet: string = '/mascotas/editar';
  private endpointfindPet: string = '/mascotas/buscar/pet';


  constructor(
    private http:HttpClient,
    private sharingService : SharingService) {
      this.data$ = sharingService.SharingToken;
    }


    findInfoPets() : Observable<petInfo[]>{

      let token_id : string = sessionStorage.getItem('jwt_token')!;
      let user_id : string = sessionStorage.getItem('user_id')!;

      const url = `${this.apiUrl}${this.endpointFindInfoPetsById}/${user_id}`;

      return   this.http.get<petInfo[]>(url,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      }) .pipe(catchError ( ()=> of([]) ))
    }


    addPet(pet : petInfo) : Observable<petInfo | null>{
      let token_id : string = sessionStorage.getItem('jwt_token')!;
      let user_id : string = sessionStorage.getItem('user_id')!;

      const url  = new URL(`${this.apiUrl}${this.endpointAddInfoPet}`);
      url.searchParams.set('userId',user_id);


       return this.http.post<petInfo>(url.toString(),pet,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      }).pipe(catchError ( ()=> of(null) ));

      // .subscribe( (petadd) => console.log(petadd));

    }


    findEspecies() : Observable<especiesInfo[] | []>{
      let token_id : string = sessionStorage.getItem('jwt_token')!;

      const url = `${this.apiUrl}${this.endpointFindInfoEspecies}`;


      return this.http.get<especiesInfo[]>(url,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      }) .pipe(catchError ( ()=> of([]) ))

    }


    findCites() : Observable<citasInfo[]> {
      let token_id : string = sessionStorage.getItem('jwt_token')!;
      let user_id : string = sessionStorage.getItem('user_id')!;

      const url = `${this.apiUrl}${this.endpointFindInfoCitesById}/${user_id}`;

      return this.http.get<citasInfo[]>(url,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      }) .pipe(catchError ( ()=> of([]) ))
    }

    removeCite(value : number) : Observable<void | Boolean>  {


      let token_id : string = sessionStorage.getItem('jwt_token')!;
      const url = `${this.apiUrl}${this.endpointRemoveCitesById}/${value}`;

      console.log(url);
       return this.http.get<Boolean>(url,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      }).pipe(catchError ( ()=> of(false) ));
    }

    findServicesPet() : Observable<serviceInfo[]>{

      let token_id : string = sessionStorage.getItem('jwt_token')!;

      const url = `${this.apiUrl}${this.endpointFindServicesPet}`;


      return this.http.get<serviceInfo[]>(url,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      }) .pipe(catchError ( ()=> of([]) ))


    }

    addCite(cite : addCite, id_pet : number) : Observable<addCite | null>{
      let token_id : string = sessionStorage.getItem('jwt_token')!;
      let user_id : string = sessionStorage.getItem('user_id')!;

      const url  = new URL(`${this.apiUrl}${this.endpointAddCite}`);
      url.searchParams.set('userId',user_id);
      url.searchParams.set('petId',id_pet.toString());


       return this.http.post<addCite>(url.toString(),cite,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      }).pipe(catchError ( ()=> of(null) ));

      // .subscribe( (petadd) => console.log(petadd));

    }


    editPet(idPet : number , pet : petInfo) : Observable<petInfo | null> {
      let token_id : string = sessionStorage.getItem('jwt_token')!;
      let user_id : string = sessionStorage.getItem('user_id')!;

      const url  = new URL(`${this.apiUrl}${this.endpointEditPet}`);
      url.searchParams.set('idPet',idPet.toString());
      url.searchParams.set('idUser',user_id);
      console.log(url.toString());
       return this.http.post<petInfo>(url.toString(),pet,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      }).pipe(catchError ( ()=> of(null) ));


    }


    findPet(idPet : number) : Observable<petInfo | null> {
      let token_id : string = sessionStorage.getItem('jwt_token')!;
      // let user_id : string = sessionStorage.getItem('user_id')!;

      const url  = `${this.apiUrl}${this.endpointfindPet}/${idPet}`;
      // url.searchParams.set('userId',user_id);
      // url.searchParams.set('petId',idPet.toString());

       return this.http.get<petInfo>(url,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      }).pipe(catchError ( ()=> of(null) ));


    }

}
