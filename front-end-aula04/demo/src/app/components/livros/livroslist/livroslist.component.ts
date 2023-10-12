import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livro } from 'src/app/models/livro/livro';
import { LivroService } from 'src/app/services/livros/livro.service';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livro[] = [];

  livroSelecionadaParaEdicao: Livro = new Livro();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  livroService = inject(LivroService);

  constructor() {
    this.listAll();
}


listAll() {

  this.livroService.listAll().subscribe({
    next: lista => { // QUANDO DÁ CERTO
      this.lista = lista;
    },
    error: erro => { // QUANDO DÁ ERRO
      alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
      console.error(erro);
    }
  });
}
exemploErro() {

  this.livroService.exemploErro().subscribe({
    next: lista => { // QUANDO DÁ CERTO
      this.lista = lista;
    },
    error: erro => { // QUANDO DÁ ERRO
      alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
      console.error(erro);
    }
  });

}

adicionar(modal: any) {
  this.livroSelecionadaParaEdicao = new Livro();

  this.modalService.open(modal, { size: 'sm' });
}

editar(modal: any, livro: Livro, indice: number) {
  this.livroSelecionadaParaEdicao = Object.assign({}, livro); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
  this.indiceSelecionadoParaEdicao = indice;

  this.modalService.open(modal, { size: 'sm' });
}

addOuEditarlivro(licro: Livro) {

  this.listAll();

  /*

  if (this.pessoaSelecionadaParaEdicao.id > 0) { //MODO EDITAR
    this.lista[this.indiceSelecionadoParaEdicao] = pessoa;
  } else {
    pessoa.id = 99;
    this.lista.push(pessoa);
  }
  */

  this.modalService.dismissAll();

}
excluirLivro(livro: Livro) {
  if (confirm(`Tem certeza de que deseja excluir ${livro.autor}?`)) {
    this.livroService.deletar(livro.id).subscribe({
      next: () => {
        this.listAll(); // Atualize a lista após a exclusão
        alert('Pessoa excluída com sucesso!');
      },
      error: (erro) => {
        alert('Ocorreu um erro ao excluir a pessoa.');
        console.error(erro);
      }
    });
  }
}






}
