import { CommandeDialogComponent } from './commande-dialog/commande-dialog.component';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IRepas } from 'src/app/interfaces/irepas';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.products = await this.productService.getProduct().toPromise();
    console.log(this.products);
  }

  openCommande(repas: IRepas) {
    const subscription = this.dialog
      .open(CommandeDialogComponent, {
        data: { data: repas },
      })
      .afterClosed();
    // .subscribe((result) => {
    //   if (result === true) {
    //     // this.trigger.next(null);
    //   }
    //   subscription.unsubscribe();
    // });
  }
}
