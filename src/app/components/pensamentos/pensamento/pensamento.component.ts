import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Gustavo',
    modelo: 'modelo3',
  };

  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  excluirPensamento(evento: Event): void {
    if (this.pensamento.id != null) {
      console.log(this.pensamento.id);
      this.service.excluir(this.pensamento.id).subscribe(() => {
        alert('Pensamento exluido com sucesso');
        window.location.reload();
      });
    }
  }
}
