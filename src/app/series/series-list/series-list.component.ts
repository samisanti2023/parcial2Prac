import { Component, OnInit } from '@angular/core';
import { Serie } from '../Serie';
import { SerieService } from '../serie.service';
import { SeriesDetailComponent } from '../series-detail/series-detail.component';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Array<Serie> = [];
  selected: Boolean = false;
  selectedSerie!: Serie;
 
 constructor(private serieService: SerieService) { }

 getSeries(): void {
   this.serieService.getBooks().subscribe((series) => {
     this.series = series;
   });
 }
 calcularAVGTemporadas(): number {
  // Aquí puedes realizar cualquier cálculo que necesites
  let series=this.series;
  let numerador:number=0;
  series.forEach((serie) => numerador = numerador + serie.seasons);
  let denom:number=series.length
  return numerador/denom;
}
onSelected(selectedSerie: Serie): void {
  this.selected = true;
  this.selectedSerie = selectedSerie;
  console.log(this.selectedSerie.poster);
  
}

 ngOnInit() {
   this.getSeries();
 }

}
