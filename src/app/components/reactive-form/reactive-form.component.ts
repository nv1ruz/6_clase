import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface IGenero {
	id: number;
	descripcion: string;
}

@Component({
	selector: 'app-reactive-form',
	templateUrl: './reactive-form.component.html',
	styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
	public generosPersona: IGenero[] = [
		{
			id: 1,
			descripcion: 'Femenino'
		},
		{
			id: 2,
			descripcion: 'Masculino'
		},
	];
	public formularioPersona: FormGroup = this.fb.group({
		apellido: 	new FormControl('', [Validators.required, Validators.maxLength(15)]),
		nombre: 	new FormControl('', [Validators.required, Validators.maxLength(15)]),
		documento: 	new FormControl('', [Validators.required, Validators.maxLength(8)]),
		genero_id: 	new FormControl('0', [Validators.required]),
	});


	constructor(
		private fb: FormBuilder
	) { }

	ngOnInit(): void {
	}

	// 

	public onSubmit(): void
	{
		console.log(this.formularioPersona.value);
	}


	public limpiarFormulario(): void
	{
		this.formularioPersona.setValue({
				apellido: '',
				nombre: '',
				documento: '',
				genero_id: 0,
		});
	}
}
