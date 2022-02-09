import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './services/home.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {


    form: FormGroup;

    img1:any;
    img2:any;

    /**
     * Constructor
     */
    constructor(private formBuilder: FormBuilder,
        private homeService: HomeService) { }

    ngOnInit() {

        this.form = this.createForm();

    }


    createForm() {
        return this.formBuilder.group({
            title: ['', ],
            data1:[[],],
            data2:[[],],
            api:['1']
        });
    }


    executeApi(){
        console.log('hola');

        if(this.form.get('api').value==='1'){

            console.log('Primer Api');

            this.homeService.getErrorMedio([{value:'234'}])
            .subscribe((res)=>{
                
            });

        }else{
            console.log('Segunda Api');
            this.homeService.getImagPng([{value:'234'}])
            .subscribe((res)=>{

            });
        }

        
    }
}
