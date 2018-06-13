import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    Input,
    Optional,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { TrumbowygOptions } from '../../models/trumbowyg-options';
import { TRUMBOWYG_OPTIONS } from '../../config/config';
import { EditorBase } from '../../utils/editor-base';

declare const $: any;
@Component({
    selector: 'trumbowyg-ngx-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class EditorComponent extends EditorBase {
    @Input() options: TrumbowygOptions | null;

    @Input() placeholder: string | null;

    @ViewChild('editor') _editor: ElementRef;

    constructor(
        public editorControl: NgControl,
        @Inject(TRUMBOWYG_OPTIONS)
        @Optional()
        protected _config: TrumbowygOptions
    ) {
        super(editorControl, _config);
    }
}
