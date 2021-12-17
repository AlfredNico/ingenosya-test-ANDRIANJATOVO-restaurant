import { RecetteDialogComponent } from './recette-dialog/recette-dialog.component';
import { RepasService } from 'src/app/manager/services/repas.service';
import { IRepas } from 'src/app/interfaces/irepas';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-repas',
  templateUrl: 'repas.component.html',
  styles: [],
})
export class RepasComponent implements OnInit {
  public readonly columns = [
    'imgURL',
    'libelle',
    'prix',
    'createdAt',
    'action',
  ];
  public dataSource = new MatTableDataSource<IRepas>([]);

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private repasService: RepasService, private dialog: MatDialog) {}

  async ngOnInit() {
    const result = await this.repasService.getRepas().toPromise();
    this.dataSource.data = result;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  update(repas: IRepas) {
    console.log(repas);
  }

  openRecette(repas: IRepas) {
    const subscription = this.dialog
      .open(RecetteDialogComponent, {
        data: { data: repas },
      })
      .afterClosed();
    // .subscribe((result: any) => {
    //   if (result === true) {
    //     // this.trigger.next(null);
    //   }
    //   subscription.unsubscribe();
    // });
  }
}
