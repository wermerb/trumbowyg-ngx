import { ButtonConfig } from './button-config';
import { DropdownConfig } from './dropdown-config';

export type CustomButton = ButtonConfig | DropdownConfig;
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
    plugins?: { [pluginName: string]: any };
    btnsDef?: { [buttonName: string]: CustomButton };
}
