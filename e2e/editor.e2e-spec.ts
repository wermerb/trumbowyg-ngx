import {EditorPage} from './editor.po';
import {by, element} from 'protractor';

describe('Editor', () => {
    let page: EditorPage;

    beforeEach(() => {
        page = new EditorPage();
        page.navigateTo();
    });

    it('should display the editor', () => {
        expect(page.getEditorComponent()).toBeDefined();
    });

    it('should render the editor', () => {
        expect(page.getRenderedEditor('editor').isPresent()).toBeTruthy();
    });

    it('should display inserted text', () => {
        page.getRenderedEditor('editor').sendKeys('abc');

        expect(page.getRenderedEditor('editor').getText()).toBe('abc');
    });

    it('should display placeholder', () => {
        expect(page.getRenderedEditor('withPlaceholder').getAttribute('placeholder')).toBe('bar');
    });

    it('should be disabled', () => {
        expect(page.getRenderedEditor('disabled').getAttribute('contenteditable')).toBe('false');
    });

    it('should display initial value', () => {
        expect(page.getRenderedEditor('withContent').getText()).toBe('fooBar');
    });

    it('should override the global configuration', () => {
        expect(element(by.id('configOverride')).element(by.css('.trumbowyg-en')).isPresent()).toBeTruthy();
        expect(element(by.id('configOverride')).element(by.css('.trumbowyg-hu')).isPresent()).toBeFalsy();
    });
});
