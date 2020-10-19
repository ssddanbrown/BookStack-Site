+++
categories = ["Releases"]
tags = ["Releases"]
title = "Beta Release v0.27.0"
date = 2019-08-31T13:00:00Z
author = "Dan Brown"
image = "/images/blog-cover-images/books-eugenio-mazzone.jpg"
description = "BookStack v0.27 brings faster building with Page Templates, A more accessible interface, a new user invitation flow and much more "
slug = "beta-release-v0-27-0"
draft = false
+++

BookStack v0.27 is now available which adds page templates, a new user invitation flow, a more accessible interface and a bunch of under-the-hood changes to provide a better user & developer experience. 

* [Update instructions](https://www.bookstackapp.com/docs/admin/updates)
* [GitHub release page](https://github.com/BookStackApp/BookStack/releases/tag/v0.27.0)

### Page Templating

It's now possible to define page templates that can be used to speed up and standardise the creation & modification of page content:

<video src="/images/2019/08/page_templates.mp4" muted="true" controls onclick="this.paused ? this.play() : this.pause()"></video>

Templates are simply pages that have been marked as a template in the editor sidebar. Once marked as a template it will show as an available template to any other users that have view permissions of that page template. Clicking the template "card" will replace the your existing editor content, if any, with the page template content. There are also buttons to insert the template content at the top or bottom of your page. Alternatively, It is possible to drag the template "card" into a specific area of the the editor. These actions work in both the default WYSIWYG editor and markdown editor. 

![Page Templates](/images/2019/08/page_templates.png)

Since templates are essentially just specially-marked pages, templates can be organised within books and chapters like any other page. An approach many admins may want to take is to create a new "Templates" book with restricted permissions so anyone can view, and therefore use them as templates, but only certain members can edit. A new "Manage page templates" role permission is now available to designate which roles have the ability to mark a page as a template.

### Accessibility

Accessibility on the web is important yet it is often overlooked; It was definitely something I overlooked in BookStack. For this release I have invested some time learning how we can make BookStack easier to use for those with disabilities. Here's an overview of what's changed:

- Default colors in BookStack have become darker, now meeting WCAG Level A standards, for better readability.
- Interactive components such as dropdowns, modals & slide-downs can now used properly without a mouse:

<video src="/images/2019/08/header_accessibility.mp4" muted="true" controls onclick="this.paused ? this.play() : this.pause()"></video>

- Descriptions have been set for many elements where context relies upon sight.
- Main layout HTML tags have been updated to better indicate the purpose of various sections of a page.
- Styles have been updated to ensure it remains clear which element on the page has focus.
- Icons have been tagged so they're not mistaken for content. 

There's still some work to be done, especially when it comes to the page editors, but this release marks a good start in making the project accessible to all. The project [readme on GitHub](https://github.com/BookStackApp/BookStack/#-accessibility) has been updated with the accessibility standards we're aiming for along with some details to show that we're open to issues regarding accessibility.

### New User Invitation Flow

A new way to onboard users to BookStack has been implemented. When creating a user, a new option is available to send the user an invite email:

![Invite Flow Option](/images/2019/08/invite_flow_option.png)

This option is selected by default; Unticking it will show the password fields if you'd prefer set the password manually yourself. The new user will then receive an email which will take them on a flow to set their own password and gain access to your BookStack instance. 

![Invite Flow Email](/images/2019/08/invite_flow_email.png)

This new flow should enable admins to onboard new users in a more efficient and secure manner compared to creating accounts then having to share the password via other means.

### Docker Development Environment

To make it easier to get started with BookStack development work, A docker-compose setup has been added to the project. This setup will start a database, start the app and build the JavaScript & CSS assets on change. Note that this is designed for development use only, Not a way to run BookStack for actual use.

Details on using this docker development environment can be [found in the readme here](https://github.com/BookStackApp/BookStack#-development-using-docker).

Thanks to [@timoschwarzer](https://github.com/BookStackApp/BookStack/pull/1504) for this feature.

### Under-the-Hood Changes

This release includes a lot of under-the-hood changes that work towards a more efficient system in addition to a cleaner codebase. 

##### jQuery Removal

On the front-end, jQuery has been removed and any of the jQuery-reliant libraries that we were using have been swapped to either native elements or lean alternatives. This means that if you have added any jQuery dependant custom code you'll also need to bring in the jQuery library yourself too.

##### App Colours

The way many theme colors are implemented has been revised to use CSS variables. This makes it much easier to customize the colors used for pages, chapters, books & shelves. This is an example of a customizing these colors, which can be placed directly in the "Custom HTML Head Content" setting in BookStack:

```html
<style>
    :root {
        --color-page: #a242d7;
        --color-page-draft: #cfb732;
        --color-chapter: #db5382;
        --color-book: #534ecb;
        --color-bookshelf: #3eeaf0;
    }
</style>
```

##### URL System Rewrite

The system used to generate URLs has been re-written to better extend the Laravel framework instead of overriding it. The changes here should lead to more reliable URL generation, especially in situations where BookStack redirects you to locations you had visited or tried to visit before (Login redirects or back buttons).

##### Framework Configuration Folder Move

BookStack previously had the folder `config/` which contained internal framework configuration that was only intended to be modified by BookStack, not by end users of BookStack. This folder has been moved to `app/Config/` so it's not instantly visible on install to help avoid confusion in where configuration changes should be made.

##### Separate Images and Attachment File Store

The file storage system has been updated to allow images and attachments to be stored in separate locations. You can use the below new `.env` options to configure this otherwise the `STORAGE_TYPE` option will still control both by default.

```bash
 # Image storage system to use 
 # Defaults to the value of STORAGE_TYPE if unset. 
 # Accepts the same values as STORAGE_TYPE. 
 STORAGE_IMAGE_TYPE=local 
  
 # Attachment storage system to use 
 # Defaults to the value of STORAGE_TYPE if unset. 
 # Accepts the same values as STORAGE_TYPE although 'local' will be forced to 'local_secure'. 
 STORAGE_ATTACHMENT_TYPE=local_secure 
```

##### Front-End Translation System Restructure

The way translated text is passed to dynamic JavaScript elements has changed so that these are inject directly into the page, instead of there being a background request to `/translations` on each page load. 

##### Markdown Editor Display

The markdown editor preview display has been re-written so that content is rendered within a sandboxed iframe that does not execute JavaScript. This is to help prevent malicious user-inserted JavaScript from running when the editor is opened.

### Translations

Big thanks to members of the community for supplying translations. Since the original v0.26 release we have received the following translation updates:

##### New Languages

* Hungarian. Thanks to [@miles75](https://github.com/BookStackApp/BookStack/pull/1554).

##### Updated Languages

* French. Thanks to [@lucaguindani](https://github.com/BookStackApp/BookStack/pull/1485).
* German. Thanks to [@danielroehrig-mm](https://github.com/BookStackApp/BookStack/pull/1561).
* Brazilian Portuguese. Thanks to [@DeehSlash](https://github.com/BookStackApp/BookStack/pull/1534).
* Swedish. Thanks to [@Hambern](https://github.com/BookStackApp/BookStack/pull/1433).
* Dutch. Thanks to [@NootoNooto](https://github.com/BookStackApp/BookStack/pull/1437).
* Russian. Thanks to [@kostefun](https://github.com/BookStackApp/BookStack/pull/1443).

### Discord

Thanks to [@TimmKroe](https://github.com/BookStackApp/BookStack/issues/1442) A BookStack Discord server has been created here:

https://discord.gg/ztkBqR2

If you want to chat about BookStack or want to ask something without creating a GitHub issue feel free to jump into the server.

### Full List of Changes

* Reviewed accessibility of BookStack to move towards WCAG 2.0 Support. ([#1320](https://github.com/BookStackApp/BookStack/issues/1320), [#1476](https://github.com/BookStackApp/BookStack/issues/1476))
* Added page templating functionality. ([#129](https://github.com/BookStackApp/BookStack/issues/129), [#1527](https://github.com/BookStackApp/BookStack/pull/1527))
* Added the ability to send a new user a sign-up link where the user can set their own password. ([#316](https://github.com/BookStackApp/BookStack/issues/316))
* Added docker development environment. Thanks to [@timoschwarzer](https://github.com/BookStackApp/BookStack/pull/1504). ([#1504](https://github.com/BookStackApp/BookStack/pull/1504))
* Added the ability to set seperate storage types for Images and Attachments. ([#1302](https://github.com/BookStackApp/BookStack/issues/1302))
* Added Hungarian translations. Thanks to [@miles75](https://github.com/BookStackApp/BookStack/pull/1554). ([#1554](https://github.com/BookStackApp/BookStack/pull/1554), [#1573](https://github.com/BookStackApp/BookStack/pull/1573))
* Added notice to the "Custom HTML Head Content" setting to advise it does not apply while on the settings page. ([#1144](https://github.com/BookStackApp/BookStack/issues/1144))
* Updated entity permissions table so it's hidden unless custom permissions are enabled to prevent confusion. Thanks to [@timoschwarzer](https://github.com/BookStackApp/BookStack/pull/1505). ([#1505](https://github.com/BookStackApp/BookStack/pull/1505))
* Updated French translations. Thanks to [@lucaguindani](https://github.com/BookStackApp/BookStack/pull/1485). ([#1485](https://github.com/BookStackApp/BookStack/pull/1485))
* Updated German translations. Thanks to [@danielroehrig-mm](https://github.com/BookStackApp/BookStack/pull/1561). ([#1561](https://github.com/BookStackApp/BookStack/pull/1561))
* Updated Brazilian Portuguese translations. Thanks to [@DeehSlash](https://github.com/BookStackApp/BookStack/pull/1534). ([#1534](https://github.com/BookStackApp/BookStack/pull/1534))
* Updated HTML code of base templates with locale definition. Thanks to [@kostasdizas](https://github.com/BookStackApp/BookStack/pull/1486). ([#1486](https://github.com/BookStackApp/BookStack/pull/1486))
* Updated the debug bar so it does not show unless explicitly enabled. ([#1508](https://github.com/BookStackApp/BookStack/issues/1508))
* Updated entity colors so they can be easily overridden.
* Updated page navigation so full headings are included in the output but then truncated via CSS which can be overridden. ([#1206](https://github.com/BookStackApp/BookStack/issues/1206))
* Updated markdown editor to render the preview in a sandboxed iframe that does not run JavaScript.  ([#1531](https://github.com/BookStackApp/BookStack/issues/1531)).
* Re-wrote URL generation system to avoid incorrect redirects occurring during certain actions such as login and list view change. ([#1536](https://github.com/BookStackApp/BookStack/issues/1536), [#1459](https://github.com/BookStackApp/BookStack/issues/1459))
* Made it possible to run phpunit via the composer-installed copy. ([#1555](https://github.com/BookStackApp/BookStack/issues/1555))
* Moved 'config' directory into 'app' directory to avoid confusion. ([#1506](https://github.com/BookStackApp/BookStack/issues/1506))
* Redesigned front-end translation system to prevent an addition HTTP call on each page load. ([#1258](https://github.com/BookStackApp/BookStack/issues/1258))
* Fixed issue causing main menu to be hidden by the page editor at certain widths. ([#1556](https://github.com/BookStackApp/BookStack/issues/1556))
* Fixed missing word in social account description text. Thanks to [@bjubes](https://github.com/BookStackApp/BookStack/pull/1517). ([#1517](https://github.com/BookStackApp/BookStack/pull/1517))
* Fixed print CSS to work with the recent design changes. ([#1472](https://github.com/BookStackApp/BookStack/issues/1472))
* Fixed sidebar layout issues on mid-level screen sizes. ([#1434](https://github.com/BookStackApp/BookStack/issues/1434))
* Fixed issue that prevented scrolling in the WYSIWYG editor on iOS devices. ([#1058](https://github.com/BookStackApp/BookStack/issues/1058))
* Fixed issue where multi-byte characters would not render correctly in the sidebar. ([#1172](https://github.com/BookStackApp/BookStack/issues/1172))
* Fixed incorrect page navigation indentation. ([#542](https://github.com/BookStackApp/BookStack/issues/542))
* Removed use of babel and css autoprefixer from dev build system for faster builds. ([#1468](https://github.com/BookStackApp/BookStack/issues/1468))
* Removed jQuery and replaced jQuery-based libraries.

### Framework & PHP Version Change

Just as an advanced warning we'll likely be upgrading Laravel, the framework used in BookStack, to version 6 which will cause a change in the PHP version requirement for BookStack. The minimum required version of PHP will be 7.2 compared to the current minimum requirement of 7.0.5. We'll be putting some documentation together to help manage this change but it will likely mean some manual config changes for many BookStack users. [Discussion about this can be found here](https://github.com/BookStackApp/BookStack/issues/1600).

### Next Steps

Version v0.28 will start the work to implement the API, which is the next item on the [Road Map](https://github.com/BookStackApp/BookStack#%EF%B8%8F-road-map) to tackle. Don't expect full API completion, It'll be more about setting the underlying framework & systems to support it along with maybe a single set of endpoints so we can essentially release a preview to get feedback before expanding it out fully.

An initial SAML auth implementation has been provided by [@Xiphoseer](https://github.com/BookStackApp/BookStack/pull/1576) so that will be reviewed and hopefully merged in for the next release.

I've been thinking about migrating the application styles from SCSS to standard CSS within blade template files. You can [find my thinking on this here](https://github.com/BookStackApp/BookStack/issues/1607). This idea would then be to do something similar in the future with the JavaScript code-base to really open up the customization and tweakability opportunities to those that desire it.

----

<span style="font-size: 0.8em;opacity:0.8;">Header Image Credits: &nbsp; <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@eugi1492?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Eugenio Mazzone"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Eugenio Mazzone</span></a></span>
