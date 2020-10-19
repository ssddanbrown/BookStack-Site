+++
categories = ["Releases"]
tags = ["Releases"]
title = "Beta Release v0.28.0"
date = 2020-02-03T21:00:00Z
author = "Dan Brown"
image = "/images/blog-cover-images/books-radu-marcusu.jpg"
description = "Our first 2020 release arrives with some great new features such as an initial API implementation and SAML2 authentication alongside further new customisation options"
slug = "beta-release-v0-28-0"
draft = false
+++

Our first 2020 release arrives with some great new features such as an initial API implementation and SAML2 authentication alongside further new customisation options.

* [Update instructions](https://www.bookstackapp.com/docs/admin/updates)
* [GitHub release page](https://github.com/BookStackApp/BookStack/releases/tag/v0.28.0)

**This release increases the minimum supported PHP version from 7.0.5 to 7.2. Please view the "Update instructions" page above for more details.**

### Initial REST API Implementation

The foundations for the API have been constructed as part of this release. This is intended to be a limited trial to ensure the core work and API formats function as required, so only a limited set of endpoints that cover basic "book" CRUD operations are available at this time.

A new "Access system API" role permission has been added to BookStack which, when assigned to a user, enables access to the API docs and endpoints while also showing the following API tokens section on the user profile screen:

![API User Tokens](/images/2020/02/api-user-tokens.png)

New API tokens can be generated with a custom name, to help label the use of the token, in addition to an expiry date.
Once created, the token ID and the token secret will be provided. The token secret is hashed in the database so is only shown to the user once.

![API Token Generation](/images/2020/02/api-token-generation.png)

These tokens details can then be used as a HTTP header in API requests to authenticate.
API requests will have the same permissions as those that belong to the user which generated the token used for the request.

Documentation for the API, including authentication details, can be found built-in to your BookStack instance at the `/api/docs` endpoint.
The "Access system API" permission is required to view the documentation so ensure you've assigned that before trying to access.

![API Docs](/images/2020/02/api-docs.png)

We'll be extending the available endpoints in future releases.
I've created an issue on GitHub to collect feedback, regarding the API implementation, so that we can capture any issues or important required changes early on. 
[This can be found here](https://github.com/BookStackApp/BookStack/issues/1852).


### SAML2 Authentication

A SAML2 authentication option is now available to provide a seamless single-sign-on experience.
Massive thanks to [@Xiphoseer](https://github.com/Xiphoseer) for getting this started.
This can be used instead of the default Email & Password authentication and it works much like the existing LDAP authentication system.

![BookStack SAML2 Authentication](/images/2020/02/bookstack-saml.png)

A range of options are available to configure the SAML2 authentication, including the option to sync BookStack roles with groups from your Identity Provider.
You can choose the attributes to use for details, such as email & id, and SAML single-logout is supported.

[Details of configuring your instance to use SAML2 can be found here](/docs/admin/saml2-auth/).

### Theme Colour Customisation

As part of release v0.27 we made the application theme colours more accessible by making them CSS variables. 
Thanks to [@james-geiger](https://github.com/james-geiger)'s efforts, these have now been made into easy-to-change options within the settings area of BookStack:

![BookStack theme color customisation](/images/2020/02/theme-colors.png)

### Test Email Sending

Email sending could be a tricky aspect to debug in BookStack, made harder by the fact it was difficult to find a way
to trigger an email send. A new section in the maintenance area of BookStack, thanks to [@timoschwarzer](https://github.com/timoschwarzer), helps alleviate
this difficulty by allowing you to send test emails at the press of a button:

![BookStack Test Email Sending](/images/2020/02/test-emails.png)

This option will force a test email to be sent out as shown below:

![BookStack Test Email Example](/images/2020/02/bookstack-test-email.png)

### Override Translation Text

It's now possible to override BookStack translation text, used for the BookStack interface, without having to alter
the original BookStack files:

![BookStack Translation Text Overrides](/images/2020/02/text-overrides.png)

Overrides can be done on a per-translation basis and are performed via the theme system.
Details of the theme system and the use of text content overrides can be [found in the docs here](/docs/admin/hacking-bookstack/#text-content).

### Under-the-Hood Changes

##### Laravel & PHP

Many changes have taken place to the core code for this release cycle. 
We've updated the version of Laravel, the framework BookStack is built upon, from 5.5 to 6.12.
This enforced a change in the minimum supported version of PHP from 7.0.5 to 7.2.

##### Core Refactor

To support the introduction of the API many of the core logic files have been refactored to be simpler and easier to share across front-end and API routes.
The inclusion of SAML2 authentication prompted a revision of how authentication is handled leading to a cleaner, more consistent approach with better testing coverage.

##### Editor Events

Some editor events are now emitted for both the WYSIWYG and markdown editors. 
This allows those with some JavaScript knowledge to listen to such events to gain a reference to the underlying configuration and libraries used enabling greater modification opportunities without needing to edit core BookStack code.

[Details of these events can be found here](/docs/admin/hacking-bookstack/#bookstack-editor-events).

### Translations

##### New Translation Management

During this release cycle we have started to use [crowdin](https://crowdin.com/project/bookstack) to help manage translations.
Massive thanks to crowdin for letting us use the platform for free.

![BookStack Translation Text Overrides](/images/2020/02/crowdin-overview.png)

Crowdin provides a friendly user interface in addition to other great features such as auto-suggestions and change control which makes 
translation management much easier and ensures better quality of translations overall. 

This effectively negates the need for a translator to be familiar with git and/or GitHub which is a great benefit since it lowers the technical barrier for language contributions.

##### Translation Updates

A big thanks to the following crowdin members for providing the following translation updates:

* Rodrigo Saczuk Niz (rodrigoniz) - _Portuguese, Brazilian_
* 叫钦叔就好 (254351722) - _Chinese Traditional; Chinese Simplified_
* aekramer - _Dutch_
* cipi1965 - _Italian_
* Mykola Ronik (Mantikor) - _Ukrainian_
* JachuPL - _Polish_
* m0uch0 - _Spanish_
* milesteg - _Hungarian_
* Beenbag - _German_
* furkanoyk - _Turkish_
* nutsflag - _French_
* Lett3rs - _Danish_
* Julian (julian.henneberg) - _German; German Informal_
* Maxim Zalata (zlatin) - _Russian; Ukrainian_
* 3GNWn - _Danish_
* dbguichu - _Chinese Simplified_
* Randy Kim (hyunjun) - _Korean_
* Francesco M. Taurino (ftaurino) - _Italian_
* DanielFrederiksen - _Danish_
* Finn Wessel (19finnwessel6) - _German_
* Leonardo Mario Martinez (leonardo.m.martinez) - _Spanish, Argentina_

Also a big thanks to the following GitHub members for providing the following translation updates:

* [@johnroyer](https://github.com/BookStackApp/BookStack/pull/1819) - Traditional Chinese 
* [@artskoczylas](https://github.com/BookStackApp/BookStack/pull/1804) - Polish
* [@dellamina](https://github.com/BookStackApp/BookStack/pull/1762) - Italian
* [@qianmengnet](https://github.com/BookStackApp/BookStack/pull/1797) - Simplified Chinese 
* [@jzoy](https://github.com/BookStackApp/BookStack/pull/1791) - Simplified Chinese
* [@ististudio](https://github.com/BookStackApp/BookStack/pull/1734) - Korean
* [@qligier](https://github.com/BookStackApp/BookStack/pull/1695) - French
* [@leomartinez](https://github.com/BookStackApp/BookStack/pull/1681) - Spanish Argentina
* [@oykenfurkan](https://github.com/BookStackApp/BookStack/pull/1660) - Turkish
* [@kostefun](https://github.com/BookStackApp/BookStack/pull/1646) - Russian
* [@ezzra](https://github.com/BookStackApp/BookStack/pull/1503) - German

### Copy Shelf Permissions Command

A new command is available as of v0.28 which copies the permission settings of a shelf to all child books:

```bash
# Copy the permission settings of a specified, or all, shelf to their child books
php artisan bookstack:copy-shelf-permissions --all
php artisan bookstack:copy-shelf-permissions --slug=my_shelf_slug
```

Many users requested the ability for books to auto-inherit shelf permissions, which is unfortunately unavailable
at this time to the complications where books can be in multiple shelves.
This new command provides a way to semi-emulate that scenario. If desired, you could run the command as a daily cron-job on your system.

### Full List of Changes

##### Additions

* Added a baseline API implementation. ([#1414](https://github.com/BookStackApp/BookStack/issues/1414), [#1826](https://github.com/BookStackApp/BookStack/pull/1826))
* Added SAML2 authentication option. Thanks to [@Xiphoseer](https://github.com/BookStackApp/BookStack/pull/1576). ([#1787](https://github.com/BookStackApp/BookStack/pull/1787), [#1576](https://github.com/BookStackApp/BookStack/pull/1576), [#276](https://github.com/BookStackApp/BookStack/issues/276))
* Added ability to override translations with custom text using the theme system. ([#1749](https://github.com/BookStackApp/BookStack/pull/1749))
* Added the ability to customise application theme colours in settings. Thanks to [@james-geiger](https://github.com/BookStackApp/BookStack/pull/1723). ([#1723](https://github.com/BookStackApp/BookStack/pull/1723), [#1380](https://github.com/BookStackApp/BookStack/issues/1380))
* Added ability to send test e-mails. Thanks to [@timoschwarzer](https://github.com/BookStackApp/BookStack/pull/1719). ([#1719](https://github.com/BookStackApp/BookStack/pull/1719), [#1696](https://github.com/BookStackApp/BookStack/issues/1696))
* Added Pascal support for content code blocks. Thanks to [@albergoniSivaf](https://github.com/BookStackApp/BookStack/pull/1730). ([#1730](https://github.com/BookStackApp/BookStack/pull/1730))
* Added support INI syntax in code editor. Thanks to [@c0shea](https://github.com/BookStackApp/BookStack/pull/1667). ([#1667](https://github.com/BookStackApp/BookStack/pull/1667), [#1648](https://github.com/BookStackApp/BookStack/issues/1648))
* Added event hooks for core editor setup actions. ([#1721](https://github.com/BookStackApp/BookStack/issues/1721))
* Added a "Cascade Shelf Permissions" command to copy shelf permission to books. ([#1091](https://github.com/BookStackApp/BookStack/issues/1091))
* Added ability to fullscreen markdown editor and improved mobile layout. ([#1675](https://github.com/BookStackApp/BookStack/issues/1675))

##### Updates

* Updated focus outline to be a sensible width and consistent across browsers. ([#1738](https://github.com/BookStackApp/BookStack/issues/1738))
* Updated page deletion flow so the user lands on the parent chapter if existing. ([#1715](https://github.com/BookStackApp/BookStack/issues/1715))
* Updated book-create-cancel flow to return to shelf if that's the origin. Thanks to [@cw1998](https://github.com/BookStackApp/BookStack/pull/1687). ([#1687](https://github.com/BookStackApp/BookStack/pull/1687), [#1662](https://github.com/BookStackApp/BookStack/issues/1662))
* Updated collapsible form sections to auto-open if containing validation errors. ([#1693](https://github.com/BookStackApp/BookStack/issues/1693))
* Updated LDAP functionality to fetch gravatar upon registration. Thanks to [@philjak](https://github.com/BookStackApp/BookStack/pull/1746). ([#1746](https://github.com/BookStackApp/BookStack/pull/1746))
* Updated the login fields to autofocus on visit. Thanks to [@almandin](https://github.com/BookStackApp/BookStack/pull/1584). ([#1584](https://github.com/BookStackApp/BookStack/pull/1584))
* Updated PHP code block syntax highlighting to detect, and highlight, PHP code without opening <?php tags. ([#1557](https://github.com/BookStackApp/BookStack/issues/1557))
* Updated registration settings to indicate non-used settings when LDAP/SAML is active and removed confusing overriding behaviour. ([#1541](https://github.com/BookStackApp/BookStack/issues/1541))
* Updated image upload handling to prevent generated thumbnails being used if larger than original image. ([#1751](https://github.com/BookStackApp/BookStack/issues/1751))
* Updated LDAP authentication to allow the attribute, that's stored and used as a unique identifier, to be configurable. ([#592](https://github.com/BookStackApp/BookStack/issues/592))
* Updated notifications to show a close icon. Thanks to [@SoarinFerret](https://github.com/BookStackApp/BookStack/pull/1845). ([#1845](https://github.com/BookStackApp/BookStack/pull/1845), [#1525](https://github.com/BookStackApp/BookStack/issues/1525))
* Updated maintenance page to link to GitHub release page. Thanks to [@DeftNerd](https://github.com/BookStackApp/BookStack/pull/1462). ([#1462](https://github.com/BookStackApp/BookStack/pull/1462))
* Updated codeblocks so white-space is not trimmed. ([#1771](https://github.com/BookStackApp/BookStack/issues/1771))

##### Translations

* Updated Traditional Chinese translations. Thanks to [@johnroyer](https://github.com/BookStackApp/BookStack/pull/1819). ([#1819](https://github.com/BookStackApp/BookStack/pull/1819))
* Updated Polish translations. Thanks to [@artskoczylas](https://github.com/BookStackApp/BookStack/pull/1804). ([#1804](https://github.com/BookStackApp/BookStack/pull/1804))
* Updated Italian translations. Thanks to [@dellamina](https://github.com/BookStackApp/BookStack/pull/1762). ([#1762](https://github.com/BookStackApp/BookStack/pull/1762))
* Updated Simplified Chinese translations. Thanks to [@qianmengnet](https://github.com/BookStackApp/BookStack/pull/1797) and [@jzoy](https://github.com/BookStackApp/BookStack/pull/1791). ([#1797](https://github.com/BookStackApp/BookStack/pull/1797), [#1791](https://github.com/BookStackApp/BookStack/pull/1791))
* Updated Korean translations. Thanks to [@ististudio](https://github.com/BookStackApp/BookStack/pull/1734). ([#1734](https://github.com/BookStackApp/BookStack/pull/1734))
* Updated French translations. Thanks to [@qligier](https://github.com/BookStackApp/BookStack/pull/1695). ([#1695](https://github.com/BookStackApp/BookStack/pull/1695))
* Updated 'Spanish Argentina' translations. Thanks to [@leomartinez](https://github.com/BookStackApp/BookStack/pull/1681). ([#1681](https://github.com/BookStackApp/BookStack/pull/1681))
* Updated Turkish translations. Thanks to [@oykenfurkan](https://github.com/BookStackApp/BookStack/pull/1660). ([#1660](https://github.com/BookStackApp/BookStack/pull/1660))
* Updated Russian translations. Thanks to [@kostefun](https://github.com/BookStackApp/BookStack/pull/1646). ([#1646](https://github.com/BookStackApp/BookStack/pull/1646))
* Updated German translations. Thanks to [@ezzra](https://github.com/BookStackApp/BookStack/pull/1503). ([#1503](https://github.com/BookStackApp/BookStack/pull/1503))
* Updated translations for: Portuguese, Brazilian; Chinese Traditional; Chinese Simplified; Dutch; Italian; Ukrainian; Polish; Spanish; Hungarian; German; Turkish; French; Danish; German Informal; Russian; Korean; Spanish, Argentina. Thanks to [Crowdin Users](https://github.com/BookStackApp/BookStack/blob/master/.github/translators.txt).

##### Maintenance

* Upgraded framework to Laravel 6. Thanks to [@timoschwarzer](https://github.com/timoschwarzer) and [@JtheBAB](https://github.com/JtheBAB) for assisting with this. ([#1641](https://github.com/BookStackApp/BookStack/pull/1641), [#1600](https://github.com/BookStackApp/BookStack/issues/1600))
* Setup Crowdin to manage translations. ([#1261](https://github.com/BookStackApp/BookStack/issues/1261))
* Refactored entity repository code & refactored core controllers. ([#1690](https://github.com/BookStackApp/BookStack/pull/1690))
* Aligned authentication service functionality, config & behaviour. ([#1866](https://github.com/BookStackApp/BookStack/pull/1866))

##### Fixes

* Fixed issue where base64 images would paste as text. ([#1697](https://github.com/BookStackApp/BookStack/issues/1697))
* Fixed issue where pasted images would not auto upload in some circumstances. ([#1651](https://github.com/BookStackApp/BookStack/issues/1651))
* Fixed issue where code block content would be hidden until clicked. ([#1672](https://github.com/BookStackApp/BookStack/issues/1672))
* Fixed a possible middleware exception. Thanks to [@abublihi](https://github.com/BookStackApp/BookStack/pull/1793). ([#1793](https://github.com/BookStackApp/BookStack/pull/1793))
* Fixed issue where a shelf image may not be assigned properly. Thanks to [@philjak](https://github.com/BookStackApp/BookStack/pull/1735). ([#1735](https://github.com/BookStackApp/BookStack/pull/1735))
* Fixed missing git dependency in developer docker setup. Thanks to [@ammardev](https://github.com/BookStackApp/BookStack/pull/1698). ([#1698](https://github.com/BookStackApp/BookStack/pull/1698))
* Fixed issue where inline code blocks could overrun the page and cut-off. Thanks to [@james-geiger](https://github.com/BookStackApp/BookStack/pull/1587). ([#1587](https://github.com/BookStackApp/BookStack/pull/1587), [#1575](https://github.com/BookStackApp/BookStack/issues/1575))
* Fixed missing translations for "actions". Thanks to [@ezzra](https://github.com/BookStackApp/BookStack/pull/1502). ([#1502](https://github.com/BookStackApp/BookStack/pull/1502))


### Next Steps

Over the next couple of releases I'll be taking any API feedback into account and deploying a wider set of endpoints.
That will be my core focus although I'll likely also look to align & review how we track activity in BookStack
so this can be used for other opportunities such as webhooks, feeds, notifications & audit logs.

As said above, if you have any feedback on the API implementation [I'd love to hear it here](https://github.com/BookStackApp/BookStack/issues/1852).

----

<span style="font-size: 0.8em;opacity:0.8;">Header Image Credits: &nbsp; <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@radu_marcusu?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Radu Marcusu"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Radu Marcusu</span></a></span>
