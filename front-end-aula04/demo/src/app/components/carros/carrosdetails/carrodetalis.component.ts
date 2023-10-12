import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Carro } from 'src/app/models/carros/carro';
import { CarrosService } from 'src/app/services/carros/carros.service';

@Component({
    selector:'app-carrosdetalis',
    templateUrl: './carrodetalis.component.html',
    styleUrls: ['./carrodetalis.component.scss']
})
export class CarrodetailsComponent{
    @Input() carro: Carro = new Carro();
    @Output() retorno = new EventEmitter<Carro>();

    carroService = inject(CarrosService);

    constructor(){

    }
    salvar(){
        this.carroService.save(this.carro).subscribe({
            next: carro => {
                this.retorno.emit(this.carro);
            },
            error: erro =>{
                alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
                console.error(erro);
            }
        });
    }
}