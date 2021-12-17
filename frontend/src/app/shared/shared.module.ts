import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    // MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    FlexLayoutModule, // flex layout
    ReactiveFormsModule, // Form control module
    HttpClientModule, // For the request http
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    ReactiveFormsModule, // Form control module
    HttpClientModule, // For the request http
    FlexLayoutModule,
  ],
})
export class SharedModule {}
