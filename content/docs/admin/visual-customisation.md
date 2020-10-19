+++
title = "Customising Visuals"
description = "Changing the colors, logo and styles of BookStack to suit your needs"
date = "2017-08-22"
type = "admin-doc"
+++

You may find you want to customise BookStack to use custom branding or you may just not like the default blue theme. Customising the branding of BookStack is super simple and can be done through the settings interface under 'App Settings'. Here you can change the application name, logo and the core colours used.
Changing the app name will simply update the name displayed in the header and browser tab.
Changing the logo updates the logo shown in the header. This can be removed if you only want to display the chosen name.
Changing the app color will update the color of the header, links and the majority of buttons within the system.

### Changing Fonts

To change fonts you can make use of the 'Custom HTML head content' setting to add some CSS to alter fonts used.
Copy the code below and alter the font names to your desired fonts. Then paste this into the 'Custom HTML head content' box
in the admin settings of BookStack.

```html
<style>
body, button, input, select, label, textarea {
  font-family: "Roboto", sans-serif;
}
.Codemirror, pre, #markdown-editor-input, .editor-toolbar, .code-base {
  font-family: monospace;
}
</style>
```

Here's an example of using the 'Lato' font from [Google Web Fonts](https://fonts.google.com):

```html
<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
<style>
body, button, input, select, label, textarea {
  font-family: 'Lato', sans-serif;
}
.Codemirror, pre, #markdown-editor-input, .editor-toolbar, .code-base {
  font-family: monospace;
}
</style>
```

Note that this won't change anything in the settings screen for stability purposes.

### Changing Code Block Themes

When inserting code into a page or when using the Markdown editor, the text you enter is highlighted by a default codemirror colour scheme.
If you'd prefer a different colour scheme for code blocks this can be overridden. BookStack uses CodeMirror to render code blocks. You can [try out different themes here](https://codemirror.net/demo/theme.html#base16-light). Once you've chosen a theme note down the name.

In BookStack settings, Find the 'Custom HTML head content' setting and add the following code:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/theme/cobalt.min.css"/>
<script>window.codeTheme='cobalt';</script>
```

In the above example we are setting the theme to `cobalt`. Change `cobalt` to the name of your desired theme on both of the above lines.
The first lines adds the required theme styles, Fetched from [cdnjs](https://cdnjs.com/) whom generously host all CodeMirror files.
The second line then sets the theme name which will be picked up when code blocks are rendered.

### Default Book View

By default the `/books` page displays your books as a list. Users can change this option to list or grid view but if you'd like to set the default for public viewers or new users you can add the following to your `.env` file:

```bash
# Show grid view by default
APP_VIEWS_BOOKS=grid

# Show list view by default
APP_VIEWS_BOOKS=list
```

### Further Customisation

If you need to customise BookStack further to the given controls in the settings area you can make use of the 'Custom HTML head content' setting. Using this you can add in any custom JavaScript or CSS content to override default BookStack functionality and styles.

[View the Hacking BookStack](/docs/admin/hacking-bookstack/) page for more advanced ways to achieve deeper customisation.
