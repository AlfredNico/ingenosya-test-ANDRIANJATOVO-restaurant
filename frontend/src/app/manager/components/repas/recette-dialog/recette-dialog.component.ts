import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddOrEditComponent } from '../../stock/add-or-edit/add-or-edit.component';

@Component({
  selector: 'app-recette-dialog',
  templateUrl: './recette-dialog.component.html',
  styles: [],
})
export class RecetteDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddOrEditComponent>
  ) {}

  ngOnInit(): void {}
}
