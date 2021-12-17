import { RepasService } from './../../../services/repas.service';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-repas',
  templateUrl: './add-repas.component.html',
  styles: [],
})
export class AddRepasComponent implements OnInit {
  public label = 'Selectionner une image à télécharger pour cette repas';
  public valueChanged = false;
  public url: any = 'assets/default.jpg';
  form: FormGroup = new FormGroup({
    // file: new FormControl(''),
    libelle: new FormControl('', [Validators.required]),
    prix_unitaire: new FormControl(''),
  });
  public file = new FormControl('');
  @Output() nextAddElement = new EventEmitter<any>();

  constructor(
    private changes: ChangeDetectorRef,
    private repasService: RepasService
  ) {}

  ngOnInit(): void {}

  async submit() {
    if (this.form.valid) {
      const { libelle, prix_unitaire } = this.form.value;
      const { file } = this.file.value;
      const result = await this.repasService
        .postRepa(libelle, prix_unitaire, file)
        .toPromise();
      this.nextAddElement.emit(result);
    }
  }

  fileChange(event: any) {
    event = event.files;
    console.log(event);
    let file: any;
    if (event && event.length > 0) {
      this.valueChanged = true;
      file = event.item(0);
      const reader = new FileReader();
      reader.onload = (e) => {
        this.url = e.target ? e.target.result : '';
        this.changes.detectChanges();
      };
      reader.readAsDataURL(file);
    }

    this.file.patchValue(
      {
        file: file,
      },
      { emitEvent: false }
    );
  }
}
