import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from 'src/app/models/livro/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  API: string = 'http://localhost:8080/api/livro';
  http = inject(HttpClient);

  constructor() { }

  listAll(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.API);
  }

  save(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.API, livro);
  }

  exemploErro(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.API + '/erro');
  }
  
  deletar(id: number): Observable<any> {
    return this.http.delete(this.API + "/" + `${id}`);
  }

}
