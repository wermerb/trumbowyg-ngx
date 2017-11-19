import {Directive, ElementRef, Inject, Input, Optional} from '@angular/core';
import {EditorBase} from '../utils/editor-base';
import {TrumbowygOptions} from '../model/trumbowyg-options';
import {TRUMBOWYG_OPTIONS} from '../config/config';
import {NgControl} from '@angular/forms';

@Directive({
    selector: '[trumbowygNgxEditor]'
})
export class EditorDirective extends EditorBase {

    @Input()
    options: TrumbowygOptions | null;

    @Input()
    placeholder: string | null;

    constructor(public editorControl: NgControl,
                @Inject(TRUMBOWYG_OPTIONS)
                @Optional()
                protected _config: TrumbowygOptions,
                protected _editor: ElementRef) {
        super(editorControl, _config);
    }

}
