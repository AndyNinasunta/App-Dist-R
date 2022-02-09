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

    img1: string;

    errorMedio: string;

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
            title: ['',],
            data1: [[],],
            data2: [[],],
            api: ['1']
        });
    }


    executeApi() {
        console.log('hola');

        // if (this.form.get('api').value === '1') {

            console.log('Primer Api');

            this.homeService.getErrorMedio(`[   {     "BMP": 74   },   {     "BMP": 76   },   {     "BMP": 82   },   {     "BMP": 105   },   {     "BMP": 120   },   {     "BMP": 87   },   {     "BMP": 80   },   {     "BMP": 71   },   {     "BMP": 91   },   {     "BMP": 83   },   {     "BMP": 96   },   {     "BMP": 74   },   {     "BMP": 80   },   {     "BMP": 82   },   {     "BMP": 97   },   {     "BMP": 91   },   {     "BMP": 88   },   {     "BMP": 121   },   {     "BMP": 81   },   {     "BMP": 65   },   {     "BMP": 105   },   {     "BMP": 79   },   {     "BMP": 88   },   {     "BMP": 88   },   {     "BMP": 73   },   {     "BMP": 60   },   {     "BMP": 55   },   {     "BMP": 71   },   {     "BMP": 75   },   {     "BMP": 89   } ]`,
            `[   {     "BMP_R": 82   },   {     "BMP_R": 83   },   {     "BMP_R": 86   },   {     "BMP_R": 109   },   {     "BMP_R": 102   },   {     "BMP_R": 96   },   {     "BMP_R": 85   },   {     "BMP_R": 64   },   {     "BMP_R": 87   },   {     "BMP_R": 75   },   {     "BMP_R": 99   },   {     "BMP_R": 82   },   {     "BMP_R": 75   },   {     "BMP_R": 86   },   {     "BMP_R": 91   },   {     "BMP_R": 84   },   {     "BMP_R": 93   },   {     "BMP_R": 103   },   {     "BMP_R": 74   },   {     "BMP_R": 75   },   {     "BMP_R": 98   },   {     "BMP_R": 75   },   {     "BMP_R": 82   },   {     "BMP_R": 92   },   {     "BMP_R": 80   },   {     "BMP_R": 72   },   {     "BMP_R": 63   },   {     "BMP_R": 68   },   {     "BMP_R": 83   },   {     "BMP_R": 82   } ]`)
                .subscribe((res) => {

                    this.errorMedio=res[0];
                });

        // } else {
        //     console.log('Segunda Api');
            this.homeService.getImagPng(`[   {     "BMP_R": 82   },   {     "BMP_R": 83   },   {     "BMP_R": 86   },   {     "BMP_R": 109   },   {     "BMP_R": 102   },   {     "BMP_R": 96   },   {     "BMP_R": 85   },   {     "BMP_R": 64   },   {     "BMP_R": 87   },   {     "BMP_R": 75   },   {     "BMP_R": 99   },   {     "BMP_R": 82   },   {     "BMP_R": 75   },   {     "BMP_R": 86   },   {     "BMP_R": 91   },   {     "BMP_R": 84   },   {     "BMP_R": 93   },   {     "BMP_R": 103   },   {     "BMP_R": 74   },   {     "BMP_R": 75   },   {     "BMP_R": 98   },   {     "BMP_R": 75   },   {     "BMP_R": 82   },   {     "BMP_R": 92   },   {     "BMP_R": 80   },   {     "BMP_R": 72   },   {     "BMP_R": 63   },   {     "BMP_R": 68   },   {     "BMP_R": 83   },   {     "BMP_R": 82   } ]`,
            `[   {     "BMP": 74   },   {     "BMP": 76   },   {     "BMP": 82   },   {     "BMP": 105   },   {     "BMP": 120   },   {     "BMP": 87   },   {     "BMP": 80   },   {     "BMP": 71   },   {     "BMP": 91   },   {     "BMP": 83   },   {     "BMP": 96   },   {     "BMP": 74   },   {     "BMP": 80   },   {     "BMP": 82   },   {     "BMP": 97   },   {     "BMP": 91   },   {     "BMP": 88   },   {     "BMP": 121   },   {     "BMP": 81   },   {     "BMP": 65   },   {     "BMP": 105   },   {     "BMP": 79   },   {     "BMP": 88   },   {     "BMP": 88   },   {     "BMP": 73   },   {     "BMP": 60   },   {     "BMP": 55   },   {     "BMP": 71   },   {     "BMP": 75   },   {     "BMP": 89   } ]`,
             'Esto es un diagrama')
                .subscribe((res) => {

                    console.log('dsfsd');

                },(err)=>{
                    this.img1='assets/images/grafico.png';
                    console.log(this.img1);
                });
        // }


    }
}
