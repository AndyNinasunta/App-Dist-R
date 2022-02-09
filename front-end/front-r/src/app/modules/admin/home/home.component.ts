import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {


    form: FormGroup;

    /**
     * Constructor
     */
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {

        this.form = this.createForm();

    }


    createForm() {
        return this.formBuilder.group({
            title: ['', ],
            data1:[[],],
            data2:[[],],
            api:['']
        });
    }


    executeApi(){
        console.log('hola');
        console.log(this.form.value);
    }
}
