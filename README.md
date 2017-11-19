# TrumbowygNgx [![npm version](https://badge.fury.io/js/trumbowyg-ngx.svg)](https://badge.fury.io/js/trumbowyg-ngx) [![bitHound Code](https://www.bithound.io/github/wermerb/trumbowyg-ngx/badges/code.svg)](https://www.bithound.io/github/wermerb/trumbowyg-ngx)

This an Angular 5 component and a directive wrapper for [Trumbowyg WYSIWYG editor](https://alex-d.github.io/Trumbowyg/).

## Getting started

1) Run `npm install --save trumbowyg jquery trumbowyg-ngx` or `yarn add trumbowyg jquery trumbowyg-ngx`

2) Add trumbowyg and jquery to your scripts.
```json
...
"scripts": [
        "../node_modules/jquery/dist/jquery.js",
        "../node_modules/trumbowyg/dist/trumbowyg.min.js"
      ]
...
```
3) Import trumbowyg's css: `@import "~trumbowyg/dist/ui/trumbowyg.min.css";`

4) Copy trumbowyg's icons where ever you want.

    Unix ex: `cp node_modules/trumbowyg/dist/ui/icons.svg src/assets`
    
    Windows ex: `xcopy /I /E node_modules/trumbowyg/dist/ui/icons.svg src/assetscd `

## Usage

You can import `TrumbowygNgxModule` as many of your modules as you like.

The component and the directive both supports `FormsModule` and `ReactiveFormsModule`.

```html
<form #f="ngForm">
    <trumbowyg-ngx-editor name="editor" [(ngModel)]="model"></trumbowyg-ngx-editor>
    <textarea trumbowygNgxEditor name="editorDirective" [(ngModel)]="model"></textarea>
</form>
```

```html
<form [formGroup]="form">
    <trumbowyg-ngx-editor formControlName="model"></trumbowyg-ngx-editor>
    <textarea trumbowygNgxEditor formControlName="model"></textarea>
</form>
```

It also supports common input attributes like: 
  * disabled
  * required
  * placeholder

There are two ways to provide configuration:

1) At module level
```typescript
@NgModule({
    declarations: [...],
    imports: [
        ...
        TrumbowygNgxModule.withConfig({
            lang: 'hu',
            svgPath: '/assets/ui/icons.svg',
            removeformatPasted: true,
            autogrow: true,
            btns: [
                ['formatting'],
                ['strong', 'em', 'del'],
                ['superscript', 'subscript'],
                ['link'],
                ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                ['unorderedList', 'orderedList'],
                ['horizontalRule'],
                ['removeformat'],
                ['fullscreen']
            ]
        })
    ],
    providers: [...],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

2) You can pass a `TrumbowygOptions` via `[options]="options"` for both the component or the directive.

Or you can use the combination of the two shown above. 

Lets assume you want to configure the `TrumbowygNgxModule` at module level, but at some point you want to create an editor with a different behaviour.

In order to do that all you need to do is to pass an `TrumbowygOptions` via `<trumbowyg-ngx-editor [options]="options"></trumbowyg-ngx-editor>` that will override the global configuration for that particular editor instance.

If you don't want to provide any configuration just import `TrumbowygNgxModule` and the default Trumbowyg's settings will be applied.


