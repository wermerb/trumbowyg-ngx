import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, InjectionToken, Input, NgModule, Optional, Self, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgControl } from '@angular/forms';

const TRUMBOWYG_OPTIONS = new InjectionToken('Trumbowyg options');
class EditorComponent {
    /**
     * @param {?} _changeDetection
     * @param {?} _config
     * @param {?} editorControl
     */
    constructor(_changeDetection, _config, editorControl) {
        this._changeDetection = _changeDetection;
        this._config = _config;
        this.editorControl = editorControl;
        this.propagateChange = (_) => {
        };
        this.propagateTouched = () => {
        };
        editorControl.valueAccessor = this;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ control = this.editorControl.control;
        control.setValidators(control.validator);
        control.updateValueAndValidity();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        $(this._editor.nativeElement).trumbowyg(Object.assign({}, this._config, this.options)).on('tbwinit', () => {
            $(this._editor.nativeElement).trumbowyg(this._disabled ? 'disable' : 'enable');
            this.setContent(this._initValue);
        }).on('tbwchange', () => {
            this.propagateChange(this.getContent());
            this._changeDetection.detectChanges();
        }).on('tbwblur', () => {
            this.propagateTouched();
            this._changeDetection.detectChanges();
        });
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.propagateTouched = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._initValue = value;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this._disabled = disabled;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        $(this._editor.nativeElement).trumbowyg('destroy');
    }
    /**
     * @param {?} content
     * @return {?}
     */
    setContent(content) {
        $(this._editor.nativeElement).trumbowyg('html', content);
    }
    /**
     * @return {?}
     */
    getContent() {
        return $(this._editor.nativeElement).trumbowyg('html');
    }
}
EditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'trumbowyg-ngx-editor',
                template: `
      <textarea #editor [placeholder]="placeholder ? placeholder : ''"></textarea>
    `,
                styles: [`

    `],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] },
];
/**
 * @nocollapse
 */
EditorComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
    { type: undefined, decorators: [{ type: Inject, args: [TRUMBOWYG_OPTIONS,] }, { type: Optional },] },
    { type: NgControl, decorators: [{ type: Self },] },
];
EditorComponent.propDecorators = {
    'options': [{ type: Input },],
    'placeholder': [{ type: Input },],
    '_editor': [{ type: ViewChild, args: ['editor',] },],
};

class TrumbowygNgxModule {
    /**
     * @param {?} options
     * @return {?}
     */
    static withConfig(options) {
        return {
            ngModule: TrumbowygNgxModule,
            providers: [
                { provide: TRUMBOWYG_OPTIONS, useValue: options }
            ]
        };
    }
}
TrumbowygNgxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    EditorComponent
                ],
                exports: [
                    EditorComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
TrumbowygNgxModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { TrumbowygNgxModule, EditorComponent as ɵb, TRUMBOWYG_OPTIONS as ɵa };
//# sourceMappingURL=trumbowyg-ngx.js.map
