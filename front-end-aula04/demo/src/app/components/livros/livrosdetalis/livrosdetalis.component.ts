import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Livro } from 'src/app/models/livro/livro';
import { LivroService } from 'src/app/services/livros/livro.service';

@Component({
  selector: 'app-livrosdetalis',
  templateUrl: './livrosdetalis.component.html',
  styleUrls: ['./livrosdetalis.component.scss']
})
export class LivrosdetailsComponent {

  @Input() livro: Livro = new Livro();
  @Output() retorno = new EventEmitter<Livro>();

  livroService = inject(LivroService);


  constructor() {

  }
  salvar(){
        //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ

        this.livroService.save(this.livro).subscribe({
          next: livro => { // QUANDO DÁ CERTO
            this.retorno.emit(livro);
          },
          error: erro => { // QUANDO DÁ ERRO
            alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
            console.error(erro);
          }
  });

  }
}
 