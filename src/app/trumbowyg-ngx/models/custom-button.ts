export interface CustomButton {
    fn: string | () => void;
    tag: string;
    title: string;
    isSupported: () => boolean;
    key: string;
    param: string;
    forceCSS: boolean;
    class: string;
    hasIcon: boolean;
}
