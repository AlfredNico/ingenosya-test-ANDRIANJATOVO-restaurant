import { StockService } from './../../../services/stock.service';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Types } from 'src/app/interfaces/istock';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-add-or-edit',
  templateUrl: './add-or-edit.component.html',
  styles: [],
})
export class AddOrEditComponent implements OnInit {
  unite: string = 'littre';
  public form = this.fb.group({
    libelle: ['', Validators.required],
    type_qte: ['', Validators.required],
    qte: ['', [Validators.required]],
  });
  types = Types;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddOrEditComponent>,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private stockService: StockService
  ) {}

  ngOnInit(): void {
    this.form.controls.type_qte.valueChanges.subscribe((value) => {
      if (value === 'g') this.unite = 'Gramme';
      else if (value === 'l') this.unite = 'Litre';
      else if (value === 'p') this.unite = 'Pièce';
      else if (value === 'f') this.unite = 'Feuille';
      else if (value === 'g') this.unite = 'gramme';
      else if (value === 'b') this.unite = 'Boite';
      else this.unite = 'Autre';
    });

    if (this.data.data) {
      this.form.patchValue({
        libelle: this.data.data.libelle,
        type_qte: this.data.data.typeQte,
        qte: this.data.data.qte,
      });
    }
  }

  save() {
    if (this.form.valid) {
      if (this.data.action === 'add') {
        this.stockService.postStock(this.form.value).subscribe((result) => {
          if (result && result.message) {
            this.snackbar.sucess(result.message);
            this.dialogRef.close(true);
          }
        });
      } else {
        this.stockService
          .updateStock(this.data.data.id, this.form.value)
          .subscribe((result) => {
            if (result && result.message) {
              this.snackbar.sucess(result.message);
              this.dialogRef.close(true);
            }
          });
      }
    }
  }
}
