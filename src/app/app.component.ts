import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TrumbowygOptions} from './trumbowyg-ngx/model/trumbowyg-options';

@Component({
    selector: 'trumbowyg-ngx-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    form: FormGroup;

    options: TrumbowygOptions;

    model = '';

    modelWithContent = 'fooBar';

    constructor(private _fb: FormBuilder) {
        this.options = {lang: 'en'};
        this.form = this._fb.group({
            foo: [{value: '', disabled: false}]
        });
    }
}
