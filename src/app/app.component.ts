import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrumbowygOptions } from './trumbowyg-ngx/models/trumbowyg-options';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'trumbowyg-ngx-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
    form: FormGroup;

    options: TrumbowygOptions;

    model = '';

    modelWithContent = 'fooBar';

    lazyContent: string;

    private _sub: Subscription;

    constructor(private _fb: FormBuilder) {
        this.options = { lang: 'en' };
        this.form = this._fb.group({
            foo: [{ value: '', disabled: false }]
        });
    }

    ngAfterViewInit(): void {
        this._sub = of('fooBar')
            .pipe(delay(1000))
            .subscribe(string => {
                this.lazyContent = string;
            });
    }

    ngOnDestroy(): void {
        this._sub.unsubscribe();
    }
}
