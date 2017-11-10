# TrumbowygNgx

This an Angular wrapper for [Trumbowyg WYSIWYG editor](https://alex-d.github.io/Trumbowyg/).

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

The component supports both `FormsModule` and `ReactiveFormsModule`.

```html
<form #f="ngForm">
    <trumbowyg-ngx-editor name="editor" [(ngModel)]="model"></trumbowyg-ngx-editor>
</form>
```

```html
<form [formGroup]="form">
    <trumbowyg-ngx-editor formControlName="model"></trumbowyg-ngx-editor>
</form>
```

Its also supports common input attributes like: 
  * disabled
  * required
  * placeholder

There are three ways to provide configuration:

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

2) You can pass a `TrumbowygOptions` via `<trumbowyg-ngx-editor [options]="options"></trumbowyg-ngx-editor>`.

3) You can also combine the two options above. 

Lets assume you want to configure the `TrumbowygNgxModule` at module level, but at some point you want to create an editor with a different behaviour.

In order to do that all you need to do is to pass an `TrumbowygOptions` via `<trumbowyg-ngx-editor [options]="options"></trumbowyg-ngx-editor>` that will override the global configuration for that particular editor instance.

If you don't want to provide any configuration just import `TrumbowygNgxModule` and the default Trumbowyg's settings will be applied.


