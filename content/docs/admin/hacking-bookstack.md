+++
title = "Hacking BookStack"
description = "Performing deeper customisation & extending the platform to suit your needs"
date = "2020-02-02"
type = "admin-doc"
+++

Sometimes you may want to perform deeper customisation to BookStack or extend the system to suit your use-case. The core of BookStack is fairly rigid as it's intended to be a configured, ready-to-use system out of the box but there are a few advanced options for performing more advanced modifications without needing to alter the system code-base.

_**Note: Customisation options on this page are not deemed to be stable or officially supported. BookStack core files may change on any release causing changes in behaviour to your hacks.**_

---


### BookStack API

_**Note: The API is currently in a limited preview stage to ensure the foundations are correct, It will be expanded upon in future releases.**_

BookStack has a built-in REST API for external interaction and consumption of your BookStack data. API documentation can be found within your BookStack instance at the `/api/docs` URL path. You'll need to have the 'Access system API' role permission to access the API or view the API documentation page.

---

### Custom HTML Head Option

Within the settings area you'll find a 'Custom HTML head content' setting. You can use this to add in any custom JavaScript or CSS content which enables you to override default BookStack functionality and styles.

---

### BookStack Editor Events

Both the TinyMCE based WYSIWYG editor and the CodeMirror based Markdown editor emit events as part of their lifecycle. You can listen for these hook in and alter their configs or to gain a reference to the underlying editor instance. The below code sample shows the events available; Log out the `detail` property of events, as per the below example, to understand what is passed with the events:

```html
<script>
	// TinyMCE WYSIWYG editor events
	window.addEventListener('editor-tinymce::pre-init', event => console.log('TINYMCE-PRE_INIT', event.detail));
	window.addEventListener('editor-tinymce::setup', event => console.log('TINYMCE-SETUP', event.detail));

	// CodeMirror / Markdown-it Markdown editor events
	window.addEventListener('editor-markdown-cm::pre-init', event => console.log('MARKDOWN-CODEMIRROR-PRE_INIT', event.detail));
	window.addEventListener('editor-markdown::setup', event => console.log('MARKDOWN-EDITOR-SETUP', event.detail));
</script>
```

---

### Theme System

_**Note: The files that can be override using the theme system are not deemed to be stable. BookStack core files may change on any release causing changes in behaviour to your overrides. Theme overrides are not officially supported in any way.**_

The theme system provides additional customisation options for those that are a bit more adventurous. The theme system enables you to selectively override BookStack UI resources without having to alter the original BookStack code. To get started create a new folder in the `themes` folder of your BookStack install. Edit your `.env` file and add the following:

```bash
# Change the value below to match the name of your created folder
APP_THEME=<theme_folder_name>
```

Files can now be placed in your theme folder to override the following resources:

##### View Files

Content placed in your `themes/<theme_name>/` folder will override the original view files found in the `resources/views` folder. These files are typically [Laravel Blade](https://laravel.com/docs/6.x/blade) files.

##### Icons

SVG files placed in a `themes/<theme_name>/icons` folder will override any icons of the same name within `resources/icons`. You'd typically want to follow the format convention of the existing icons, where no XML deceleration is included and no width & height attributes are set, to ensure optimal compatibility. 

##### Text Content

Folders with PHP translation files placed in a `themes/<theme_name>/lang` folder will override translations defined within the `resources/lang` folder. Custom translations are merged with the original files so you only need to override the select translations you want to override, you don't need to copy the whole original file. Note that you'll need to include the language folder.

As an example, Say I wanted to change 'Search' to 'Find'; Within a `themes/<theme_name>/lang/en/common.php` file I'd set the following:

```php
<?php
return [
    'search' => 'find',
];
```