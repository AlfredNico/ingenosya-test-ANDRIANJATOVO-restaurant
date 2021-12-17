import { VenteService } from './../../services/vente.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IRepas } from 'src/app/interfaces/irepas';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styles: [],
})
export class VenteComponent implements OnInit {
  private trigger = new BehaviorSubject<any>(null);

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

  constructor(
    private venteService: VenteService,
    private snackbar: SnackbarService
  ) {}

  async ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.trigger
      .pipe(switchMap((result: IRepas[]) => this.venteService.getVentes()))
      .subscribe((result) => {
        this.dataSource.data = result;
      });
  }

  validate(vente: IRepas) {
    this.venteService.ajouteVente(vente.id).subscribe((result) => {
      if (result && result.message) {
        this.trigger.next(null);
        this.snackbar.info(result.message);
      }
    });
  }
}
