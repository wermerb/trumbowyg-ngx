import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TrumbowygNgxModule} from './trumbowyg-ngx/trumbowyg-ngx.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        TrumbowygNgxModule.withConfig({
            lang: 'hu',
            svgPath: '/assets/ui/icons.svg',
            removeformatPasted: true,
            autogrow: true,
            btns: [
                ['formatting'],
                ['strong', 'em', 'del'],
                ['superscript', 'subscript'],
                ['link'],
                ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                ['unorderedList', 'orderedList'],
                ['horizontalRule'],
                ['removeformat'],
                ['fullscreen']
            ]
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
