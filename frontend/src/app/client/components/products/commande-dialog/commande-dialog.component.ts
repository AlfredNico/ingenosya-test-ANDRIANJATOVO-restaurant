import { ProductService } from './../../../services/product.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-commande-dialog',
  templateUrl: './commande-dialog.component.html',
  styles: [],
})
export class CommandeDialogComponent implements OnInit {
  public form = this.fb.group({
    qte: ['0', [Validators.required]],
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CommandeDialogComponent>,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}

  save() {
    if (this.form.controls.qte.value > 0) {
      this.productService
        .postCommande(this.data.data.id, this.form.value)
        .subscribe((result) => {
          if (result && result.message) {
            this.snackbar.sucess(result.message);
          }
        });
    }
  }
  increment() {
    this.form.patchValue({ qte: parseInt(this.form.controls.qte.value) + 1 });
  }
  decrement() {
    this.form.patchValue({
      qte:
        parseInt(this.form.controls.qte.value) > 0
          ? parseInt(this.form.controls.qte.value) - 1
          : 0,
    });
  }
}
