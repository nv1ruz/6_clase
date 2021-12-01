import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface IGenero {
	id: number;
	descripcion: string;
}


@Component({
	selector: 'app-ng-form',
	templateUrl: './ng-form.component.html',
	styleUrls: ['./ng-form.component.css']
})
export class NgFormComponent implements OnInit {
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


	constructor() { }

	ngOnInit(): void {
	}

	// 

	public onSubmit(formulario: NgForm): void
	{
		console.log(formulario.value);
	}

}
