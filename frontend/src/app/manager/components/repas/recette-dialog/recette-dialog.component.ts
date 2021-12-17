import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RepasService } from 'src/app/manager/services/repas.service';

@Component({
  selector: 'app-recette-dialog',
  templateUrl: './recette-dialog.component.html',
  styles: [],
})
export class RecetteDialogComponent implements OnInit {
  public dataSource = new MatTableDataSource<any[]>([]);
  public readonly columns = ['ingrediant', 'qte'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    // private dialogRef: MatDialogRef<AddOrEditComponent>,
    private repasService: RepasService
  ) {}

  async ngOnInit() {
    const result = await this.repasService
      .getIngredient(this.data.data.id)
      .toPromise();

    console.log(result);

    this.dataSource.data = result;
  }
}
