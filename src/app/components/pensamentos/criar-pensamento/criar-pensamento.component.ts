import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  pensamento = {
    id: '1',
    conteudo: 'Angular 14',
    autoria: 'dev',
    modelo: 'modelo1',
  };

  criaPensamento() {
    alert('Pensamento criado');
  }

  cancelaPensamento() {
    alert('Pensamento cancelado');
  }
}
