import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  constructor(private service: PensamentoService) {}

  ngOnInit(): void {}

  pensamento: Pensamento = {
    id: 8,
    conteudo: 'Angular 14',
    autoria: 'dev',
    modelo: 'modelo1',
  };

  criaPensamento() {
    this.service.criar(this.pensamento).subscribe();
  }

  cancelaPensamento() {
    alert('Pensamento cancelado');
  }
}
