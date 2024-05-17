import { Component, OnInit } from '@angular/core';
import { Pinguino } from './pinguino';
import { PinguinoService } from './pinguino.service';

@Component({
  selector: 'app-pinguino',
  templateUrl: './pinguino.component.html',
  styleUrls: ['./pinguino.component.css']
})
export class PinguinoComponent implements OnInit {
  pinguinos: Array<Pinguino> = [];
  selectedPinguino!: Pinguino;
  constructor(private pinguinoService: PinguinoService) { }

  calculateMayorDistribution(pinguinos: Pinguino[]): Pinguino | null {
    if (pinguinos.length === 0) return null;

    let maxDistribucion: number = 0;
    let pinguinoConMayorDistribucion: Pinguino | null = null;

    pinguinos.forEach((pinguino) => {
      const distribucionMundialLength = pinguino.global_distribution.length;
      if (distribucionMundialLength > maxDistribucion) {
        maxDistribucion = distribucionMundialLength;
        pinguinoConMayorDistribucion = pinguino;
      }
    });

    return pinguinoConMayorDistribucion;
  }


  getPinguinoList(): void {
    this.pinguinoService.getPinguinos().subscribe(pinguinos =>{
      this.pinguinos = pinguinos
    });

  }





  ngOnInit() {

    this.getPinguinoList();

  }

}
