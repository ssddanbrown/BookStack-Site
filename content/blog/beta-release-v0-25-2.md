+++
categories = ["Releases"]
tags = ["Releases"]
title = "Project Roadmap & Beta Release v0.25.2"
date = 2019-03-10T13:45:00Z
author = "Dan Brown"
image = "/images/blog-cover-images/mountains-eberhard-grossgasteiger.jpg"
description = "We have another patch release for BookStack v0.25 to fix bugs, update translations & to add some new configuration options."
slug = "beta-release-v0-25-2"
draft = false
+++

We have another patch release for BookStack v0.25 to fix bugs, update translations & to add some new configuration options. We now also have a project roadmap to provide some visibility of where the BookStack is going.

* [Update instructions](https://www.bookstackapp.com/docs/admin/updates)
* [GitHub release page](https://github.com/BookStackApp/BookStack/releases/tag/v0.25.2)

### Project Roadmap

Visibility of BookStack's direction was becoming increasingly requested as more people get involved with the project. To provide some insight into the development plan, a new section has been added to the project readme to outline a high-level roadmap for BookStack:

**[BookStack Roadmap](https://github.com/BookStackApp/BookStack#road-map)**

Additionally, the release process has been detailed to provide insight into how BookStack releases are organised and how releases are versioned:


**[BookStack Release Process](https://github.com/BookStackApp/BookStack#release-versioning--process)**


### Code Block Updates

Code blocks in BookStack have been updated to provide syntax highlighting for two new popular languages: Lua & PowerShell.

![CodeBlock LUA PoweShell](/images/2019/03/codeblock_lua_powershell.png)

### Language Updates

* German translations now include translations for shelves. Thanks to [@Xiphoseer](https://github.com/BookStackApp/BookStack/pull/1272). ([#1272](https://github.com/BookStackApp/BookStack/pull/1272)).
* Dutch translations will now show the current password hint information. Thanks to [@maantje](https://github.com/BookStackApp/BookStack/pull/1314). ([#1314](https://github.com/BookStackApp/BookStack/pull/1314))

### Full List of Changes

* Added PowerShell code highlighting to code blocks. Thanks to [@christophert](https://github.com/BookStackApp/BookStack/pull/1263). ([#1263](https://github.com/BookStackApp/BookStack/pull/1263), [#1040](https://github.com/BookStackApp/BookStack/issues/1040))
* Added LUA code highlighting to code blocks. ([#1223](https://github.com/BookStackApp/BookStack/issues/1223))
* Added LDAP option to set a custom "Display Name" property. Thanks to [@dfanara](https://github.com/BookStackApp/BookStack/pull/1317). ([#1317](https://github.com/BookStackApp/BookStack/pull/1317), [#1306](https://github.com/BookStackApp/BookStack/issues/1306))
* Added possibility to set a password for Redis connections. ([#1283](https://github.com/BookStackApp/BookStack/issues/1283))
* Updated front-end file upload size limit to be configurable. ([#1293](https://github.com/BookStackApp/BookStack/issues/1293))
* Updated Dutch translations for the password hint. Thanks to [@maantje](https://github.com/BookStackApp/BookStack/pull/1314). ([#1314](https://github.com/BookStackApp/BookStack/pull/1314))
* Updated image paste/drop uploads to properly set page relations so image permissions are active. ([#1287](https://github.com/BookStackApp/BookStack/issues/1287))
* Updated German translations to include translations for shelves. Thanks to [@Xiphoseer](https://github.com/BookStackApp/BookStack/pull/1272). ([#1272](https://github.com/BookStackApp/BookStack/pull/1272))
* Updated permissions checked for "Page Copy" function to be more accurate to what permissions are actually required. Thanks to [@mark-james](https://github.com/BookStackApp/BookStack/pull/1202). ([#1202](https://github.com/BookStackApp/BookStack/pull/1202), [#1199](https://github.com/BookStackApp/BookStack/issues/1199))
* Updated permissions checked for the "Shelves" header item to be visible. Now takes into account custom shelve-level permissions. ([#1201](https://github.com/BookStackApp/BookStack/issues/1201))
* Fixed bug where using alignment properties could break tables. ([#1284](https://github.com/BookStackApp/BookStack/issues/1284))
* Fixed issue where default system language would not be reflected when viewing another user's profile. ([#1316](https://github.com/BookStackApp/BookStack/issues/1316))
* Fixed issue where image-manager tooltips could be cut-off. Thanks to [@Abijeet](https://github.com/BookStackApp/BookStack/pull/1238). ([#1238](https://github.com/BookStackApp/BookStack/pull/1238), [#1186](https://github.com/BookStackApp/BookStack/issues/1186))



----

<span style="font-size: 0.8em;opacity:0.8;">Header Image Credits: &nbsp; <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@eberhardgross?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from eberhard grossgasteiger"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">eberhard grossgasteiger</span></a></span>
