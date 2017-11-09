import {ModuleWithProviders, NgModule} from '@angular/core';
import {
    EditorComponent,
    TRUMBOWYG_OPTIONS,
    TrumbowygOptions
} from './editor/editor.component';

@NgModule({
    declarations: [
        EditorComponent
    ],
    exports: [
        EditorComponent
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
