import { CommandeService } from './../../services/commande.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  public readonly columns = ['libelle', 'qte', 'createdAt'];
  public dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private commandeService: CommandeService) {}

  async ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    const result = await this.commandeService.getCommande().toPromise();
    console.log(result);
    this.dataSource.data = result;
  }
}
