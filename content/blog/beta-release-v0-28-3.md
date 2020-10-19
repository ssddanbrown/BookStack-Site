+++
categories = ["Releases"]
tags = ["Releases"]
title = "Beta Releases v0.28.1, v0.28.2 & v0.28.3"
date = 2020-03-14T21:00:00Z
author = "Dan Brown"
image = "/images/blog-cover-images/winter-birds-genessa-panainte.jpg"
description = ""
slug = "beta-release-v0-28-3"
draft = false
+++

Following on from the release of v0.28, we've had a series of patch releases to 
apply a range of fixes & enhancements in addition to some translation updates.
There's nothing urgent or security related in these but they collectively include 
quite a few fixes so it's still worth updating.

* [Update instructions](https://www.bookstackapp.com/docs/admin/updates)
* GitHub release pages: [v0.28.1](https://github.com/BookStackApp/BookStack/releases/tag/v0.28.1), [v0.28.2](https://github.com/BookStackApp/BookStack/releases/tag/v0.28.2), [v0.28.3](https://github.com/BookStackApp/BookStack/releases/tag/v0.28.3)


### LDAP Authentication Updates 🔒

Within these releases, some attention has been paid to the LDAP auth system which specifically
improves compatibility with Active Directory. Within v0.28.0 we made it possible 
to specify the stored ID attribute that will be stored to relate users.
Unfortunately this was not compatible with AD's `objectGUID` attribute since 
it's provided in a raw binary format. In these updates we've made it possible
to prefix the attribute name with `BIN;` to specific it's a binary attribute like so:

```shell
LDAP_ID_ATTRIBUTE=BIN;objectGUID
```

BookStack will convert the value to hex for storage. Note, if you change this 
value after already using LDAP you'll need to update any stored user 
"External Authentication ID's" within BookStack.

It's also now possible to set a `LDAP_DUMP_USER_DETAILS=true` option to help debug
user details provided to BookStack, by the LDAP system, which can be very useful when
setting up and debugging group sync.

The [LDAP Authentication Docs](https://www.bookstackapp.com/docs/admin/ldap-auth/) have been updated to reflect these additions.

### Translations 🌎

**New Languages**

Within these releases we have a few new languages available:

* Slovenian - Thanks to [@mrjaboozy](https://github.com/BookStackApp/BookStack/issues/1946). ([#1946](https://github.com/BookStackApp/BookStack/issues/1946))
* Vietnamese - Thanks to [@vuongtrunghieu](https://github.com/BookStackApp/BookStack/issues/1883) ([#1883](https://github.com/BookStackApp/BookStack/issues/1883))
* Hebrew Translations - Thanks to [@Binternet](https://github.com/BookStackApp/BookStack/pull/1827). ([#1827](https://github.com/BookStackApp/BookStack/pull/1827))

**Translation Updates**

These releases contain another bunch of translation additions and updates. 
A massive thanks to the following crowdin & GitHub members:

* Vuong Trung Hieu (fpooon) - *Vietnamese*
* Emil Petersen (emoyly) - *Danish*
* mrjaboozy - *Slovenian*
* Statium - *Russian*
* Finn Wessel (19finnwessel6) - *German Informal; German*
* Mikkel Struntze (MStruntze) - *Danish*
* kostefun - *Russian*
* nutsflag - *French*
* Tuyen.NG (tuyendev) - *Vietnamese*
* Ziipen - *Danish*
* Samuel Schwarz (Guiph7quan) - *Czech*
* Gustav Kånåhols (Kurbitz) - *Swedish*
* Julio Alberto García (Yllelder) - *Spanish*
* milesteg - *Hungarian*
* m0uch0 - *Spanish*
* Rafael (raribeir) - *Portuguese, Brazilian*
* Hiroyuki Odake (dakesan) - *Japanese*
* Rodrigo Saczuk Niz (rodrigoniz) - *Portuguese, Brazilian*
* Alex Lee (qianmengnet) - *Chinese Simplified*
* swinn37 - *French*
* [@kostefun](https://github.com/BookStackApp/BookStack/pull/1885) - *Russian* 
* [@Statium](https://github.com/BookStackApp/BookStack/pull/1837) - *Russian* 


### Discord Chat 💬

Although not new, it's worth noting we have a Discord server which can be found here:

https://discord.gg/ztkBqR2

This is now accessible from the project readme in addition to the header & footer of this site.
It's generally a great way to communicate with other BookStack users & developers without having 
to formally create a GitHub issue.

### Full List of Changes

##### v0.28.1

* Fixed issue where WYSIWYG editor would freeze when a code block is dragged. ([#1901](https://github.com/BookStackApp/BookStack/issues/1901))
* Fixed shelf cover images not be stored on creation. Thanks [@TBK](https://github.com/BookStackApp/BookStack/pull/1899). ([#1899](https://github.com/BookStackApp/BookStack/pull/1899), [#1897](https://github.com/BookStackApp/BookStack/issues/1897))
* Fixed CSS issue that prevented DOMPDF exports. ([#1886](https://github.com/BookStackApp/BookStack/issues/1886))
* Fixed issue where breadcrumb dropdown menus would display error messages. ([#1884](https://github.com/BookStackApp/BookStack/issues/1884))
* Fixed error that was thrown on LDAP login when no matching user was found. ([#1876](https://github.com/BookStackApp/BookStack/issues/1876))
* Updated code block rendering to avoid showing an empty new-line at the end of a block. ([#1877](https://github.com/BookStackApp/BookStack/issues/1877))
* Updated test email send functionality to capture and show any errors thrown. ([#1874](https://github.com/BookStackApp/BookStack/issues/1874))
* Added ability to mark LDAP attributes as binary so they can be converted to hex for storage. ([#1872](https://github.com/BookStackApp/BookStack/issues/1872))
* Added LDAP option to dump fetched user details to assist debugging. ([#1872](https://github.com/BookStackApp/BookStack/issues/1872))

##### v0.28.2

* Fixed side-effect in binary LDAP handling that was added in v0.28.1 ([commit](https://github.com/BookStackApp/BookStack/commit/01b95d91baede787fc84c3603e6516fab22bf34e))

##### v0.28.3

* Added Slovenian language support. Thanks to [@mrjaboozy](https://github.com/BookStackApp/BookStack/issues/1946). ([#1946](https://github.com/BookStackApp/BookStack/issues/1946))
* Added Vietnamese Language support. Thanks to [@vuongtrunghieu](https://github.com/BookStackApp/BookStack/issues/1883) ([#1883](https://github.com/BookStackApp/BookStack/issues/1883))
* Added Hebrew Translations. Thanks to [@Binternet](https://github.com/BookStackApp/BookStack/pull/1827). ([#1827](https://github.com/BookStackApp/BookStack/pull/1827))
* Added support for Fortran language code blocks. Thanks to [@JHenneberg](https://github.com/BookStackApp/BookStack/pull/1878). ([#1878](https://github.com/BookStackApp/BookStack/pull/1878))
* Updated spacing in colour picker components to be consistent and prevent text-dropdown on longer-text languages. Thanks to [@Statium](https://github.com/BookStackApp/BookStack/pull/1943). ([#1943](https://github.com/BookStackApp/BookStack/pull/1943), [#1930](https://github.com/BookStackApp/BookStack/issues/1930))
* Updated login and registration header actions to be consistent with other header links. Thanks to [@Statium](https://github.com/BookStackApp/BookStack/pull/1942). ([#1942](https://github.com/BookStackApp/BookStack/pull/1942))
* Updated install instructions and scripts to not install development composer packages. ([#1928](https://github.com/BookStackApp/BookStack/issues/1928))
* Updated list styles to prevent additional margin/padding showing in nested lists. Thanks to [@MikeyMJCO](https://github.com/BookStackApp/BookStack/pull/1913). ([#1913](https://github.com/BookStackApp/BookStack/pull/1913), [#1911](https://github.com/BookStackApp/BookStack/issues/1911))
* Updated Russian translations. Thanks to [@kostefun](https://github.com/BookStackApp/BookStack/pull/1885) & [@Statium](https://github.com/BookStackApp/BookStack/pull/1837). ([#1885](https://github.com/BookStackApp/BookStack/pull/1885), [#1837](https://github.com/BookStackApp/BookStack/pull/1837))
* Updated translations for Vietnamese, Danish, Slovenian, Russian, German Informal; German, French, Czech, Swedish, Spanish, Hungarian, Portuguese, Brazilian, Japanese & Chinese Simplified. Thanks to [Crowdin Users](https://github.com/BookStackApp/BookStack/blob/master/.github/translators.txt).
* Updated "Intended URL" logic to work when "Public Access" is enabled. Thanks to [@Xiphoseer](https://github.com/BookStackApp/BookStack/pull/1817). ([#1817](https://github.com/BookStackApp/BookStack/pull/1817), [#1706](https://github.com/BookStackApp/BookStack/issues/1706))
* Fixed error that would throw if a user logs in with GitHub while having has a blank 'name'. ([#1853](https://github.com/BookStackApp/BookStack/issues/1853))
* Fixed validation issues that could occur on image uploads in some environments. Thanks to [@TBK](https://github.com/BookStackApp/BookStack/pull/1900). ([#1900](https://github.com/BookStackApp/BookStack/pull/1900), [#1570](https://github.com/BookStackApp/BookStack/issues/1570))
* Fixed 'interaction_required' response returned for the Azure login that would show when MFA is enabled. Thanks to [@ch0wm3in](https://github.com/BookStackApp/BookStack/pull/1889). ([#1889](https://github.com/BookStackApp/BookStack/pull/1889), [#1903](https://github.com/BookStackApp/BookStack/issues/1903))

----

<span style="font-size: 0.8em;opacity:0.8;">Header Image Credits: &nbsp; <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@genessapana?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Genessa Panainte"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Genessa Panainte</span></a></span>
