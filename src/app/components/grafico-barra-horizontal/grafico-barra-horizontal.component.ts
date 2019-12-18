import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnInit, OnDestroy {


  results: any[] = [
    {
      name: 'Juego 1',
      value: 20
    },
    {
      name: 'Juego 2',
      value: 30
    },
    {
      name: 'Juego 3',
      value: 56
    },
    {
      name: 'Juego 4',
      value: 27
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  yAxisLabel = 'Juegos';
  showYAxisLabel = true;
  xAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  intervalo;

  constructor() {

    // Esto provoca fuga de memoria
    this.intervalo = setInterval(() => {
      // console.log('si ejecuta esto');

      const newResults = [...this.results];

      for (const i in newResults) {
        if (i) {
          newResults[i].value = Math.round(Math.random() * 500);
        }
      }

      this.results = [...newResults];

    }, 1500);

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }


  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
