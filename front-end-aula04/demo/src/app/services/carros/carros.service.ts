import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CarrodetailsComponent } from 'src/app/components/carros/carrosdetails/carrodetalis.component';
import { Carro } from 'src/app/models/carros/carro';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  API: string= 'http://localhost:8080/api/carro';
  http= inject(HttpClient);


  constructor() { }

    listAll(): Observable<Carro[]> {
      return this.http.get<Carro[]>(this.API);
    }
    save(carro: Carro): Observable<Carro>{
      return this.http.post<Carro>(this.API,carro);
    }
    exemploErro(): Observable<Carro[]>{
      return this.http.get<Carro[]>(this.API + '/erro');
    }

  //istAll(): Observable<Carro[]>
}
