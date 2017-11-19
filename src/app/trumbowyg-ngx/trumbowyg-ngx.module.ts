import {ModuleWithProviders, NgModule} from '@angular/core';
import {EditorDirective} from './directive/editor.directive';
import {EditorComponent} from './component/editor/editor.component';
import {TrumbowygOptions} from './model/trumbowyg-options';
import {TRUMBOWYG_OPTIONS} from './config/config';


@NgModule({
    declarations: [
        EditorComponent,
        EditorDirective
    ],
    exports: [
        EditorComponent,
        EditorDirective
    ]
})
export class TrumbowygNgxModule {

    static withConfig(options: TrumbowygOptions): ModuleWithProviders {
        return {
            ngModule: TrumbowygNgxModule,
            providers: [
                {provide: TRUMBOWYG_OPTIONS, useValue: options}
            ]
        };
    }

}
