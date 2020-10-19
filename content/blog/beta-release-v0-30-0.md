+++
categories = ["Releases"]
tags = ["Releases"]
title = "Beta Release v0.30.0"
date = 2020-09-19T18:00:00Z
author = "Dan Brown"
image = "/images/blog-cover-images/library-priscilla-du-preez.jpg"
description = "The v0.30 release introduces the audit log, adds chapters to the API, improves code editing and more"
slug = "beta-release-v0-30-0"
draft = false
+++

Although intended to be a quick release cycle, v0.30 is now here 5 months after the last major release. Sketchy personal health, a poorly pet & a busy day-job workload, combined with constant working-from-home, have reduced the amount of time I could afford to spare working on the project but with normality somewhat returning I present BookStack v0.30 which includes an assortment of enhancments. 


* [Update instructions](https://www.bookstackapp.com/docs/admin/updates)
* [GitHub release page](https://github.com/BookStackApp/BookStack/releases/tag/v0.30.0)


Before we get into the features, just a couple of important advisories:


**Security Notice** - Possible Privilege Escalation

Thanks to [@Defelo](https://github.com/BookStackApp/BookStack/issues/2105)
it was advised that current privilege escalation situations are not made clear when applying role permissions.
Any user with a "Manage app settings", "Manage users" or "Manage roles & role permissions" system permission 
assigned to one of their roles could technically alter their own permissions to gain wider access.
A clear advisory of these cases has been added in the UI in v0.30
but admins are advised to review which users have these permissions with the above in mind.


**LDAP & SAML Group Matching** - Potential Change

Thanks to [@nem1989](https://github.com/BookStackApp/BookStack/issues/2032) it was found that 
BookStack roles would be matched to LDAP/SAML groups based upon the role display name, which is expected,
but only those roles with a matching "name" value would be considered. This "name" field was redundant, 
and has now been removed, but it would store a cleaned version the first-set name of the role.
All roles will now be considered before being matched on name which may mean that roles which did not sync before, 
that would have been expected to based on their name, may now start to sync.


### Audit Log

User activity within BookStack is shown across various locations of the system but it's
always shown to a limited length. Additionally, there are some activities havn't been
visible without database access such as item deletions.

As of v0.30 you can now see an audit log interface if you have permission to both manage
system settings and manage users. This is an unfiltered list of the activities that are 
currently logged to the database by BookStack. Here's how this looks:

![BookStack Audit Log](/images/2020/09/bookstack_audit_log.png)

In this interface you're able to set a date range for activities in addition to being able to filter by activity type.
In future releases we'll look to track more activity types and bring them into this interface.

### Code Block Editing Session History

Many people use BookStack to display and store code snippets so the code block editor can be core to many
user's workflows within the platform. Unfortunately, since the code block editor opened in a popup,
it was fairly easy to lose changes by clicking the popup close button or by accidentally clicking
outside the popup.

In v0.30 we've added session history to the code block editor:

![BookStack Code Block Code Session Saving](/images/2020/09/code_block_session_saving.png)

Any event that causes the popup to close will now save a copy of the contents into the browser's session
history. Within the editor you'll see a "Session History" link, if anything is in the store, with a dropdown
of times showing when code was saved. Clicking one of those times will update the editor with the code saved
at that time. Note, This store is temporary intended for short-term recovery where needed; In most browsers
this data will be cleared as soon as the browser tab is closed.


### Attachment Link Insertion

The process of inserting attachments into your page content has now been streamlined.
A new link button found on the attachment list, when editing a page, allows you to 
insert an attachment link, with the correct attachment name, into the page content with a single click.

![BookStack Attachment Link Insert](/images/2020/09/attachment_link_insert.png)


On FireFox, or any browser when using the MarkDown editor, you can also drag the attachment card directly 
into your page content. Unfortunately chromium based browsers drag+drop handling, combined with the WYSIWYG edtitor's
own event handling, proved too troublesome to implement this reliably for that environment.


### API Update - Chapters

Work continues on the API to bring us chapter endpoints in this release.
As with the book endpoints, this includes API endpoints for exporting in the same
formats we support via the standard UI.

![BookStack API Chapters](/images/2020/09/api_chapters.png)

Next up, we'll be looking to implement endpoints for pages.
If you've played with the API I'd love to hear your feedback in this [GitHub issue](https://github.com/BookStackApp/BookStack/issues/1852).

### Dark Mode Tweaks

Since releasing dark mode in v0.29 we've had feedback regarding some choices
made in addition to a good set of bugs being reported and fixed.

When implementing dark mode I made the choice to use CSS filters to alter the saturation
and brightness of imagery in the hopes it would make content sit within the theme better.
After feedback I realise this was a bad decision; It's effectively altering core user-content
which should remain in control of the user/editor. In addition, these filters could massively
affect the legibility of screenshots and similar text-based imagery. Use of these filters on
images has been removed in v0.30.

### Removal of Vue.js

I absolutely love Vue.js, I've been a heavy user of the library with it being my go-to JS framework
since version 1.0 after jumping ship from Angular 1. Therefore I used it to drive a some of the more
dynamic elements of BookStack such as the image manager and attachments interface. Within BookStack, I 
try to limit JS usage where possible, looking at native back-end solutions before jumping to JS solutions.
Therefore I've slowly built up small little "components" written in fairly basic plain JS for elements such as 
dropdowns and complex select menus. 

The trouble with frameworks such as Vue is that they ideally need to own the DOM from the point they're attached to downwards. 
That leads to friction with the little JS "components" we had elsewhere as they'd either need to be we-written as a
vue component or an adapter would need to be created to "wire" the component into Vue.

As much as I love Vue, it wasn't really needed in BookStack and we were not really using the full power of the framework.
In v0.30 I've converted the existing vue usages to combined usages of back-end driven logic and extended the plain JS
components we already had. The removal of Vue brings a small reduction in the initial JS bundle download size in addition
to a bigger reducing of code being ran on each page load, leading to a more responsive interface overall.

As part of these changes I've also spent some time trying to document and standardise
and approach for these plain JS components [which can be seen here](https://github.com/BookStackApp/BookStack/blob/9e11fc33fa6cf657b35af97a268210ec447c59a7/dev/docs/components.md). I'm slowly updating the older components
in the system to conform to this approach.

### Removal of Webpack

Unlike Vue.js, I've never really liked webpack due to the many hours I've wasted trying to integrate
webpack based build systems into existing projects. That said, I've always respected webpack for it's 
developed ecosystem and the sheer amount it is able to do.

As of v0.30 we have removed webpack from the development flow of BookStack. Instead we're now using
sass directly for CSS builds (Thanks [@timoschwarzer](https://github.com/BookStackApp/BookStack/pull/2166) for swapping
this to the newer dart-sass during this release cycle) and using [esbuild](https://github.com/evanw/esbuild) for JS building & bundling. Our build systems 
are all simply [npm scripts which can be seen here](https://github.com/BookStackApp/BookStack/blob/9e11fc33fa6cf657b35af97a268210ec447c59a7/package.json#L4-L9).

In addition to a simpler setup, these changes bring some good performance imrpovements; As a rough example, These changes bring the development build time of both JS & CSS down from about 2.7 seconds to about 1.5 seconds on my development system.

### Failed Access Logging

Thanks to [@benrubson](https://github.com/BookStackApp/BookStack/pull/1881) it's now possible for failed login events
to be logged to a log file. This will function for both the standard email & password login aswell as LDAP logins.

To enable this you simple need to define the `LOG_FAILED_LOGIN_MESSAGE` option in your `.env` file like so:

```bash
LOG_FAILED_LOGIN_MESSAGE="Failed login for %u"
```

The optional "%u" element of the message will be replaced with the username or email provided in the login attempt
when the message is logged. By default messages will be logged via the php `error_log` function which, in most
cases, will log to your webserver error log files.

### Translations

As always our teriffic translating tribe continue to provide their awesome efforts as this release brings updates
from the below languages by the below great Crowdin & GitHub members:

# !!BELOW OUTDATED!

* Hasan Özbey (the-turk) - *Turkish*
* mrjaboozy - *Slovenian*
* rcy - *Swedish*
* Ali Yasir Yılmaz (ayyilmaz) - *Turkish*
* m0uch0 - *Spanish*
* scureza - *Italian*
* Statium - *Russian*
* Biepa - *German Informal; German*
* Finn Wessel (19finnwessel6) - *German*
* nutsflag - *French*
* syecu - *Chinese Simplified*
* Rodrigo Saczuk Niz (rodrigoniz) - *Portuguese, Brazilian*
* Lap1t0r - *French*
* Thinkverse (thinkverse) - *Swedish*
* milesteg - *Hungarian*
* [@jzoy](https://github.com/BookStackApp/BookStack/pull/2023) - *Chinese*

### Full List of Changes

* Added API endpoints for chapters.
* Added audit log to the settings area. ([#2173](https://github.com/BookStackApp/BookStack/issues/2173), [#1167](https://github.com/BookStackApp/BookStack/issues/1167))
* Added the ability to insert an attachment link directly into the current editor window. ([#1460](https://github.com/BookStackApp/BookStack/issues/1460))
* Added session-based code-block editor auto-save to prevent potential loss of content. ([#1398](https://github.com/BookStackApp/BookStack/issues/1398))
* Added warning wording around role system permissions to indicate what permissions could allow privilege escalation. ([#2105](https://github.com/BookStackApp/BookStack/issues/2105))
* Added the ability to log login failures to a file. Thanks to [@benrubson](https://github.com/BookStackApp/BookStack/pull/1881). ([#1881](https://github.com/BookStackApp/BookStack/pull/1881), [#728](https://github.com/BookStackApp/BookStack/issues/728))
* Updated Simplified Chinese translations. Thanks to [@Honvid](https://github.com/BookStackApp/BookStack/pull/2157). ([#2157](https://github.com/BookStackApp/BookStack/pull/2157))
* Updated WYSIWYG editor css to put editor in it's own layer to improve degraded dark mode performance. ([#2154](https://github.com/BookStackApp/BookStack/issues/2154))
* Updated Czech translations. Thanks to [@jakubboucek](https://github.com/BookStackApp/BookStack/pull/2238). ([#2238](https://github.com/BookStackApp/BookStack/pull/2238))
* Updated permission system so that the permission map table does not contain ID's since database limits could be met in scenarios where permissions were automatically refreshed on a frequent basis. ([#2091](https://github.com/BookStackApp/BookStack/issues/2091))
* Updated to role table in the database to remove a redundant name field which fixes issue where changing a role name would not change the name used to match with LDAP groups. ([#2032](https://github.com/BookStackApp/BookStack/issues/2032))
* Updated URL slug generation to achieve a much cleaner result when non-ascii characters are used. Thanks to [@drzippie](https://github.com/BookStackApp/BookStack/pull/2165). ([#2165](https://github.com/BookStackApp/BookStack/pull/2165), [#2026](https://github.com/BookStackApp/BookStack/issues/2026), [#1765](https://github.com/BookStackApp/BookStack/issues/1765))
* Updated error reporting so that not-found errors are not written to the log, causing logs to fill much quicker than expected. ([#2110](https://github.com/BookStackApp/BookStack/issues/2110))
* Updated dark mode styles to remove filters applied to images so that they display as expected. ([#2045](https://github.com/BookStackApp/BookStack/issues/2045))
* Removed vuejs from project & started standardisation of custom basic component system. ([#2202](https://github.com/BookStackApp/BookStack/issues/2202))
* Replaced dev usage of node-sass with dart-sass. Thanks to [@timoschwarzer](https://github.com/BookStackApp/BookStack/pull/2166). ([#2166](https://github.com/BookStackApp/BookStack/pull/2166))
* Fixed issue where, upon role delete, users would not be migrated when specified to during role delete flow. ([#2211](https://github.com/BookStackApp/BookStack/issues/2211))
* Fixed issue where the system would error on upload of images that contain a hash in the name. ([#2161](https://github.com/BookStackApp/BookStack/issues/2161))
* Fixed scenario where page drafts would show as saved where request would actually fail, leading to loss of data. Added a browser-side storage mechanism for emergency use. ([#2150](https://github.com/BookStackApp/BookStack/issues/2150))
* Fixed issue where LDAP groups would not sync on initial login due to the email confirmation system taking over before the group sync would run. ([#2082](https://github.com/BookStackApp/BookStack/issues/2082))
* Fixed issue where the redirect upon login could lead to an external site. ([#2073](https://github.com/BookStackApp/BookStack/issues/2073))
* Fixed low visibility of horizontal lines when dark mode is in use. ([#2209](https://github.com/BookStackApp/BookStack/issues/2209))
* Fixed issue where HTML entities would be seen in page preview content. Thanks to [@mr-vinn](https://github.com/BookStackApp/BookStack/pull/2257). ([#2257](https://github.com/BookStackApp/BookStack/pull/2257), [#2114](https://github.com/BookStackApp/BookStack/issues/2114))
* Fixed issue where previous page content would be indexed upon save instead of the fresh content. ([#2042](https://github.com/BookStackApp/BookStack/issues/2042))
* Fixed issue where an error would be thrown on SAML logout request from the IdP. ([#2002](https://github.com/BookStackApp/BookStack/issues/2002))
* Fixed bad pagination styling which would result in invisible numbering. ([#1839](https://github.com/BookStackApp/BookStack/issues/1839))
* Fixed incorrect and misleading behaviour when saving a comment with no content. ([#1836](https://github.com/BookStackApp/BookStack/issues/1836))


### Next Steps

For v0.31 my main focus will be adding pages to the API which will be a bit more involved than the other endpoints we've added so far. That would complete the core API endpoints I wanted to initially implement; After that I'll allow issues to be created to request other API endpoints that people may need.

Now that I've added the audit log I'd like to expand the activities we track to include things such as setting changes, logins & user creations so that admins will be able to review administration operations. As part of that work I'll try to start a deeper scoping into how content notifications could fit into the application.

I've opened a proposal to implement proper "Owner" controls, which can be seen here: https://github.com/BookStackApp/BookStack/issues/2246. At the moment the permission system has the ability to apply different permissions for someone's own content but this currently relates to the creator. This causes issues in scenarios where someone would create elements, such as a book, on behalf of another user. These changes would mean a "Owner" user would be assigned to each item, the creator by default, but that "Owner" could be easily re-assigned where required. I'll likely implement this as part of the next release cycle unless there are any major concerns. 

----

<span style="font-size: 0.8em;opacity:0.9;">Header Image Credits: &nbsp; <span>Photo by <a href="https://unsplash.com/@priscilladupreez?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Priscilla Du Preez</a> on <a href="https://unsplash.com/s/photos/books?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></span>
