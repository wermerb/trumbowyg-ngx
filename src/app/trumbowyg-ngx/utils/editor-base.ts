import {AfterViewInit, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';
import {TrumbowygOptions} from '../models/trumbowyg-options';

declare var $: any;

export abstract class EditorBase implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {

    options: TrumbowygOptions | null;

    placeholder: string | null;

    protected _editor: ElementRef;

    protected _initValue: string;

    private _disabled: boolean;

    private propagateChange = (_: any) => {
    }

    private propagateTouched = () => {
    }

    constructor(public editorControl: NgControl,
                protected _config: TrumbowygOptions) {
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

        if (this._editor && this._editor.nativeElement) {
            this.setContent(value);
        }
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
