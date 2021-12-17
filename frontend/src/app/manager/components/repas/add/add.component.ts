import { IRepas } from './../../../../interfaces/irepas';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [],
})
export class AddComponent implements OnInit {
  @ViewChild(MatHorizontalStepper) stepper!: MatHorizontalStepper;
  public repas!: IRepas;

  constructor() {}

  ngOnInit(): void {}

  nextAddElement(event: any) {
    this.repas = event;

    this.stepper!.selected!.completed = true;
    this.stepper!.selected!.editable = true;
    this.stepper.next();
  }
}
