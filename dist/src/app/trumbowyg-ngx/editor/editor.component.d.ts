import { AfterViewInit, ChangeDetectorRef, InjectionToken, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
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
export declare const TRUMBOWYG_OPTIONS: InjectionToken<TrumbowygOptions>;
export declare class EditorComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    private _changeDetection;
    private _config;
    editorControl: NgControl;
    options: TrumbowygOptions | null;
    placeholder: string | null;
    private _editor;
    private _disabled;
    private _initValue;
    private propagateChange;
    private propagateTouched;
    constructor(_changeDetection: ChangeDetectorRef, _config: TrumbowygOptions, editorControl: NgControl);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    registerOnChange(fn: () => void): void;
    registerOnTouched(fn: () => void): void;
    writeValue(value: any): void;
    setDisabledState(disabled: boolean): void;
    ngOnDestroy(): void;
    private setContent(content);
    private getContent();
}
