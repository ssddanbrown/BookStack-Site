+++
categories = ["Releases"]
tags = ["Releases"]
title = "Beta Release v0.25.0"
date = 2019-01-12T22:45:00Z
author = "Dan Brown"
image = "/images/blog-cover-images/flat-books-patrick-tomasso.jpg"
description = "BookStack in 2019 starts with v0.25 which a chunk of improvements. BookStack now has over 2000 stars on GitHub!"
slug = "beta-release-v0-25-0"
draft = false
+++

2019 is here and to kick it off we have BookStack v0.25. This release does not contain any major new features
but instead is focused on making improvements to existing systems within BookStack.

* [Update instructions](https://www.bookstackapp.com/docs/admin/updates)
* [GitHub release page](https://github.com/BookStackApp/BookStack/releases/tag/v0.25.0)


**Please Note, During this release cycle it was found that page content includes could leak their content as preview text to users
that don't have permission to view the included content. It's recommended to re-save any pages that included other page content that's restricted to ensure included text is not shown in page preview text.**

### Header Changes

The header bar has received a few tweaks this release. First of all, A sign-up link will now be
shown to public guest users that are not yet logged in, if registration is enabled:

![Header Signup Link](/images/2019/01/header_signup_link.png)

For users that have permission to manage other users, but do not have permission
to alter system settings, a link to the Users admin area will now show instead of "Settings":

![Header Users Link](/images/2019/01/header_users_link.png)

Thanks to [@qianmengnet](https://github.com/BookStackApp/BookStack/pull/1146) & [@cw1998](https://github.com/BookStackApp/BookStack/pull/1119) for these improvements. 

### Example Environment File Changes

The default `.env.example` file has received some changes. It has been cut down from 89 lines
to only 31 lines and that includes some better comments. It now only contains common configuration
that's needed to get initially set-up.

A `.env.example.complete` file is now included as a reference to all the possible options that
are available along with their default settings. Options can be copied from this as required.

### Custom Avatar Service

BookStack has had built-in [Gravatar](https://en.gravatar.com/) support for a while to enable 
unique user profile images upon user creation. This system has been revamped so the URL used to 
fetch an avatar can be customized as required. This allows you to customize the URL used for gravatar
or you can instead use a different avatar service altogether. For example, By setting the below option 
in your `.env` file you can instead use libravatar:

```bash
AVATAR_URL=https://seccdn.libravatar.org/avatar/${hash}?s=${size}&d=identicon
```

The following variables can be used in this setting which will be populated by BookStack when used:

* `${email}` - The user's email address, URL encoded.
* `${hash}` - MD5 hashed copy of the user's email address.
* `${size}` - BookStack's ideal requested image size in pixels.

Thanks to [@Vinrobot](https://github.com/BookStackApp/BookStack/pull/1111) for working to implement this feature.

### Language Updates

As always we've had a good deal of community contributions to bring new and updated translations.
In this release we have:

* Added Ukrainian translations. Thanks to [@Mant1kor](https://github.com/BookStackApp/BookStack/pull/1183).
* Added German informal translations. Thanks to [@ezzra](https://github.com/BookStackApp/BookStack/pull/1159).
* Updated Polish translations. Thanks to [@vasiliev123](https://github.com/BookStackApp/BookStack/pull/1180).

Additionally, included in BookStack v0.24.1 & v0.24.2 we had:

* Added Korean translations. Thanks to [@limkukhyun](https://github.com/BookStackApp/BookStack/pull/1066).
* Updated Brazilian Portuguese translations. Thanks to [@DeehSlash](https://github.com/BookStackApp/BookStack/pull/1034).
* Updated Chinese translations. Thanks to [@qianmengnet](https://github.com/BookStackApp/BookStack/pull/1109).
* Updated French translations. Thanks to [@TheLastOperator](https://github.com/BookStackApp/BookStack/pull/1098).
* Updated Traditional Chinese translations. Thanks to [@kejjang](https://github.com/BookStackApp/BookStack/pull/1088).
* Updated 'Spanish Argentina' translations. Thanks to [@leomartinez](https://github.com/BookStackApp/BookStack/pull/1117).
* Updated German translations. Thanks to [@CliffyPrime](https://github.com/BookStackApp/BookStack/pull/1072).

### Full List of Changes

* Added Ukrainian translations. Thanks to [@Mant1kor](https://github.com/BookStackApp/BookStack/pull/1183). ([#1183](https://github.com/BookStackApp/BookStack/pull/1183))
* Added German informal translations. Thanks to [@ezzra](https://github.com/BookStackApp/BookStack/pull/1159). ([#1159](https://github.com/BookStackApp/BookStack/pull/1159), [#890](https://github.com/BookStackApp/BookStack/issues/890))
* Updated Polish translations. Thanks to [@vasiliev123](https://github.com/BookStackApp/BookStack/pull/1180). ([#1180](https://github.com/BookStackApp/BookStack/pull/1180))
* Updated Spanish translation formatting. Thanks to [@moucho](https://github.com/BookStackApp/BookStack/pull/1197). ([#1197](https://github.com/BookStackApp/BookStack/pull/1197))
* Added proper escaping to LDAP authentication variables. ([#1163](https://github.com/BookStackApp/BookStack/issues/1163))
* Added anchor links to user profile sections and added "Register" to header for guest users. Thanks to [@qianmengnet](https://github.com/BookStackApp/BookStack/pull/1146). ([#1146](https://github.com/BookStackApp/BookStack/pull/1146))
* Added configurable timeout for file & image uploads. Thanks to [@Abijeet](https://github.com/BookStackApp/BookStack/pull/1133). ([#1133](https://github.com/BookStackApp/BookStack/pull/1133), [#876](https://github.com/BookStackApp/BookStack/issues/876))
* Added system to prevent the last admin from removing themselves as an admin. ([#1124](https://github.com/BookStackApp/BookStack/issues/1124))
* Added link to manage users in header if user has permission to do so but does not have permission to change system settings. Thanks to [@cw1998](https://github.com/BookStackApp/BookStack/pull/1119). ([#1119](https://github.com/BookStackApp/BookStack/pull/1119), [#1110](https://github.com/BookStackApp/BookStack/issues/1110))
* Added support for custom avatar provider. Thanks to [@Vinrobot](https://github.com/BookStackApp/BookStack/pull/1111). ([#1111](https://github.com/BookStackApp/BookStack/pull/1111))
* Added option to disable LDAPS Certificate Validation. Thanks to [@christophert](https://github.com/BookStackApp/BookStack/pull/1096).  ([#1065](https://github.com/BookStackApp/BookStack/issues/1065))
* Added testing coverage to user avatar fetching. ([#1193](https://github.com/BookStackApp/BookStack/issues/1193))
([#1096](https://github.com/BookStackApp/BookStack/pull/1096))
* Updated times in page exports to use absolute time formats instead of relative formats.
* Updated "Move" operations so that "Delete" permissions are required on the item being moved. ([#1200](https://github.com/BookStackApp/BookStack/issues/1200))
* Updated page preview/search system to prevent leaks in included content when permissions are set on included content. ([#1178](https://github.com/BookStackApp/BookStack/issues/1178))
* Re-enabled missing plaintext copies on system-generated emails. ([#1182](https://github.com/BookStackApp/BookStack/issues/1182))
* Improved 'SQL' code block highlighting. ([#1181](https://github.com/BookStackApp/BookStack/issues/1181))
* Simplified ".env.example" file and created full example version. ([#1205](https://github.com/BookStackApp/BookStack/pull/1205))
* Fixed WYSIWYG editor issue that could reset cursor position on code block click. ([#1162](https://github.com/BookStackApp/BookStack/issues/1162)).

### Next Steps

Throughout this last release cycle I've been playing with a new design based upon a lot of feedback
provided via issues on GitHub. You can see preview along with the goals of this design update [on the pull request](https://github.com/BookStackApp/BookStack/pull/1153). This will be my personal primary focus for the time being.

----

<span style="font-size: 0.8em;opacity:0.8;">Header Image Credits: &nbsp; <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@impatrickt?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Patrick Tomasso"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Patrick Tomasso</span></a></span>
