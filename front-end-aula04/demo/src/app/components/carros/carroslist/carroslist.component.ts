import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Carro } from 'src/app/models/carros/carro';
import { CarrosService } from 'src/app/services/carros/carros.service';


@Component({
    selector: 'app-carroslist',
    templateUrl: './carroslist.component.html',
    styleUrls: ['./carroslist.component.scss']
  })
  export class CarroslistComponent{

    lista: Carro[] = [];
    carroSelecionadaParaEdicao: Carro = new Carro();
    indiceSelecionadoParaEdicao!: number;

    modalService = inject(NgbModal);
    carroService = inject(CarrosService);
    
    constructor(){
      this.listAll();
    }

    listAll(){
      this.carroService.listAll().subscribe({
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

      this.carroService.exemploErro().subscribe({
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
      this.carroSelecionadaParaEdicao = new Carro();
  
      this.modalService.open(modal, { size: 'sm' });
    }
    editar(modal: any, carro: Carro, indice: number) {
      this.carroSelecionadaParaEdicao = Object.assign({}, carro); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
      this.indiceSelecionadoParaEdicao = indice;
  
      this.modalService.open(modal, { size: 'sm' });
    }

    addOuEditarCarro(carro: Carro) {

      this.listAll();
  
      
  
      if (this.carroSelecionadaParaEdicao.id > 0) { //MODO EDITAR
        this.lista[this.indiceSelecionadoParaEdicao] = carro;
      } else {
        carro.id = 99;
        this.lista.push(carro);
      }
      
  
      this.modalService.dismissAll();
  
    }
    excluirCarro(carro: Carro) {
      if (confirm(`Tem certeza de que deseja excluir ${carro.modelo}?`)) {
        this.carroService.deletar(carro.id).subscribe({
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
    

  