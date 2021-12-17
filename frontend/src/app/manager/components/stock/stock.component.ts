import { AddOrEditComponent } from './add-or-edit/add-or-edit.component';
import { StockService } from './../../services/stock.service';
import { IStock, sortTypes } from './../../../interfaces/istock';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styles: [],
})
export class StockComponent implements OnInit, AfterViewInit, OnDestroy {
  private trigger = new BehaviorSubject<any>(null);
  private destroy$ = new Subject<any>();
  public readonly columns = ['libelle', 'qte', 'createdAt', 'action'];
  public dataSource = new MatTableDataSource<IStock>([]);
  public filters = new FormGroup({
    type: new FormControl('0'),
  });
  public sortByTypes = sortTypes;

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(
    private readonly stockService: StockService,
    private dialog: MatDialog
  ) {}

  async ngOnInit() {
    // const result = await this.stockService.getStocks().toPromise();
    // console.log(result);
    // this.dataSource.data = result;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.trigger
      .pipe(switchMap((result) => this.stockService.getStocks()))
      .subscribe((result) => {
        this.dataSource.data = result;
      });

    this.filters.controls.type.valueChanges.subscribe((value) => {
      this.stockService.stockFilter({ type: value }).subscribe((result) => {
        this.dataSource.data = result;
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  update(stock: IStock) {
    console.log(stock);
  }

  addOrEdit(stock?: IStock) {
    console.log(stock);

    const subscription = this.dialog
      .open(AddOrEditComponent, {
        data: { action: stock ? 'edit' : 'add', data: stock },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result === true) {
          this.trigger.next(null);
        }
        subscription.unsubscribe();
      });
  }
}
