import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VenteService } from 'src/app/manager/services/vente.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-add-price-dialog',
  template: `
    <form [formGroup]="form">
      <h2 mat-dialog-title>Ajout Prix</h2>
      <div mat-dialog-content>
        <mat-form-field appearance="outline" class="w-100">
          <mat-label>Prix unitaire</mat-label>
          <input type="number" matInput formControlName="prix_unitaire" />
          <span matSuffix>Ariary</span>
          <mat-error
            *ngIf="
              form.get('prix_unitaire')?.errors?.required &&
              form.get('prix_unitaire')?.touched
            "
          >
            Prix requis
          </mat-error>
        </mat-form-field>
      </div>
      <div mat-dialog-actions fxLayoutAlign="end center">
        <button type="reset" mat-stroked-button mat-dialog-close>
          Annuler
        </button>
        <button
          type="submit"
          mat-flat-button
          color="primary"
          (click)="save()"
          [disabled]="form.invalid"
        >
          Enregistrer
        </button>
      </div>
    </form>
  `,
  styles: [],
})
export class AddPriceDialogComponent implements OnInit {
  public form = this.fb.group({
    prix_unitaire: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddPriceDialogComponent>,
    private venteService: VenteService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    console.log(this.data.data);

    if (this.data.data) {
      this.form.patchValue({
        prix_unitaire: this.data.data.prixUnitaire,
      });
    }
  }

  save() {
    if (this.form.valid) {
      this.venteService
        .addPrice(this.data.data.id, this.form.value)
        .subscribe((result) => {
          if (result && result.message) {
            this.snackbar.sucess(result.message);
            this.dialogRef.close(true);
          }
        });
    }
  }
}
