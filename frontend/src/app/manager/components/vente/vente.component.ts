import { VenteService } from '../../services/vente.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IRepas } from 'src/app/interfaces/irepas';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styles: [],
})
export class VenteComponent implements OnInit {
  public readonly columns = ['imgURL', 'libelle', 'prix', 'createdAt'];
  public dataSource = new MatTableDataSource<IRepas>([]);

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private venteService: VenteService) {}

  async ngOnInit() {
    const result = await this.venteService.getVentes().toPromise();
    this.dataSource.data = result;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
