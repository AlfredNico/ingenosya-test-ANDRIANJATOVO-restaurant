import { RepasService } from 'src/app/manager/services/repas.service';
import { SnackbarService } from '../../../../services/snackbar.service';
import { IRepas } from '../../../../interfaces/irepas';
import { StockService } from '../../../services/stock.service';
import { IStock } from '../../../../interfaces/istock';
import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Types } from 'src/app/interfaces/istock';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styles: [],
})
export class AddElementComponent implements OnInit, OnChanges {
  @Input() repas!: IRepas;
  unite: string = 'litre';
  public formNoStock = this.fb.group({
    libelle: [''],
    isAvailable: [false, Validators.required],
    type_qte: [''],
    qte: [''],
  });
  formStock = this.fb.group({
    stockInput: this.fb.array([]),
  });

  stockFilter = new FormControl();
  filteredOptions!: Observable<any[]>;
  types = Types;
  getStoked: IStock[] = [];
  noStock: IStock[] = [];
  noStockColumns: string[] = ['libelle', 'qte', 'action'];

  elements: IStock[] = [];

  constructor(
    private fb: FormBuilder,
    private stockService: StockService,
    private snackbar: SnackbarService,
    private repasService: RepasService,
    private router: Router
  ) {}

  get stockInput() {
    return this.formStock.controls['stockInput'] as FormArray;
  }

  get addressForm() {
    return this.formStock.get('stockInput') as FormGroup;
  }

  get stockInputForms() {
    return (this.formStock.controls['stockInput'] as FormArray).controls;
  }

  async ngOnInit() {
    this.formNoStock.controls.type_qte.valueChanges.subscribe((value) => {
      if (value === 'g') this.unite = 'Gramme';
      else if (value === 'l') this.unite = 'Litre';
      else if (value === 'p') this.unite = 'Pièce';
      else if (value === 'f') this.unite = 'Feuille';
      else if (value === 'g') this.unite = 'gramme';
      else if (value === 'b') this.unite = 'Boite';
      else this.unite = 'Autre';
    });

    this.filteredOptions = this.stockFilter.valueChanges.pipe(
      startWith(''),
      map((value) => {
        return this.getStoked.filter((x: IStock) =>
          x.libelle.toLowerCase().includes(value.toLowerCase())
        );
      })
    );
  }

  async ngOnChanges(changes: SimpleChanges) {
    this.getStoked = await this.stockService.getAvailableStok().toPromise();
  }

  saveNoDispo() {
    const { libelle, type_qte, qte } = this.formNoStock.value;
    if (libelle && type_qte && qte) {
      this.noStock = [
        ...this.noStock,
        { ...this.formNoStock.value, id: this.noStock.length + 1 },
      ];
      this.formNoStock.reset();
    }
  }
  removeNoStock(noStock: IStock) {
    this.noStock = this.noStock.filter((s) => s.id !== noStock.id);
  }

  addElement(stock: IStock) {
    const res = this.elements.filter(
      (x: IStock) => x.libelle === stock.libelle
    );

    if (res.length == 0) {
      this.elements = [...this.elements, stock];
      console.log(this.elements);

      this.stockInput.push(
        this.fb.group({
          libelle: [stock.libelle, Validators.required],
          id: [stock.id, Validators.required],
          isAvailable: [true, Validators.required],
          type_qte: ['', Validators.required],
          qte: ['', Validators.required],
          prix_unitaire: ['0'],
        })
      );
      // });
    }
  }

  removeElement(formStockIndex: number) {
    this.stockInput.removeAt(formStockIndex);
  }

  getControls() {
    return (this.formStock.get('stockInput') as FormArray).controls;
  }

  saveRepa() {
    if (this.elements.length > 0 || this.noStock.length > 0) {
      const value = {
        inStock: this.formStock.get('stockInput')?.value,
        noStock: this.noStock,
      };
      console.log(value);
      this.repasService
        .postElementRepas(this.repas.id as number, value)
        .subscribe((result) => {
          if (result && result.message) {
            this.snackbar.sucess(result.message);
            this.router.navigateByUrl('/manager-space/gestion-repas');
          }
        });
    } else {
      this.snackbar.warn('Veillez remplacez ces champs pour le recette');
    }
    const elementsRepa = this.elements.concat(this.noStock);
  }
}
