import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    InjectionToken,
    Input,
    OnDestroy,
    OnInit,
    Optional,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';

declare var $: any;

export interface TrumbowygOptions {
    prefix?: string;
    lang?: string;
    svgPath?: string | boolean;
    hideButtonTexts?: boolean;
    btns?: Array<string[]>;
    semantic?: boolean;
    resetCss?: boolean;
    removeformatPasted?: boolean;
    autogrow?: boolean;
    autogrowOnEnter?: boolean;
}

export const TRUMBOWYG_OPTIONS = new InjectionToken<TrumbowygOptions>('Trumbowyg options');

@Component({
    selector: 'trumbowyg-ngx-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {

    @Input()
    options: TrumbowygOptions | null;

    @Input()
    placeholder: string | null;

    @ViewChild('editor')
    private _editor: ElementRef;

    private _disabled: boolean;

    private _initValue: string;

    private propagateChange = (_: any) => {
    }

    private propagateTouched = () => {
    }

    constructor(@Inject(TRUMBOWYG_OPTIONS)
                @Optional()
                private _config: TrumbowygOptions,
                public editorControl: NgControl) {
        editorControl.valueAccessor = this;
    }

    ngOnInit(): void {
        const control = this.editorControl.control;
        control.setValidators(control.validator);
        control.updateValueAndValidity();
    }

    ngAfterViewInit(): void {
        $(this._editor.nativeElement).trumbowyg(
            Object.assign({}, this._config, this.options)
        ).on('tbwinit', () => {
            $(this._editor.nativeElement).trumbowyg(this._disabled ? 'disable' : 'enable');
            this.setContent(this._initValue);
        }).on('tbwchange', () => {
            this.propagateChange(this.getContent());
        }).on('tbwblur', () => {
            this.propagateTouched();
        });
    }

    registerOnChange(fn: () => void): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.propagateTouched = fn;
    }

    writeValue(value: any): void {
        this._initValue = value;
    }

    setDisabledState(disabled: boolean): void {
        this._disabled = disabled;
    }

    ngOnDestroy(): void {
        $(this._editor.nativeElement).trumbowyg('destroy');
    }

    private setContent(content: string): void {
        $(this._editor.nativeElement).trumbowyg('html', content);
    }

    private getContent(): string {
        return $(this._editor.nativeElement).trumbowyg('html');
    }
}
