+++
categories = ["Releases"]
tags = ["Releases"]
title = "Beta Release v0.29.1"
date = 2020-04-28T11:00:00Z
author = "Dan Brown"
image = "/images/blog-cover-images/spring-mvp.jpg"
description = "This v0.29 patch release bring some nice day-to-day usability improvements in additions to a few fixes"
slug = "beta-release-v0-29-1"
draft = false
+++

After the recent release of v0.29 comes this patch update to fix some bugs while introducing some
nice user experience enhancements. On this post we'll go through a couple of them.  

* [Update instructions](https://www.bookstackapp.com/docs/admin/updates)
* [GitHub release page](https://github.com/BookStackApp/BookStack/releases/tag/v0.29.1)

### Book Sort Multi-Select

The book sort page has always been the place to do wider-scale organisation and movement of book content.
This interface is now even more powerful with the ability to multi-select book items so that pages and chapters
can be moved in batch with ease:

<video controls>
    <source src="/images/2020/04/book-sort-multiselect.webm"/>
    <source src="/images/2020/04/book-sort-multiselect.mp4"/>
</video>

Shoutout to [@Biepa on GitHub](https://github.com/BookStackApp/BookStack/issues/2064) for the idea.

### Page Editing Focus Flow

Page editing is a fairly core operation within the platform. The page edit experience has been enhanced
so that focus is sensibly set at the start of an edit. 

If the page title matches the system default, then the title input will be focused & pre-selected so you just have to start typing to overwrite the title.
If the title has already been altered, then focus will be set directly on the editor so you can start making changes right away.

Overall this means that you don't have to jump to your mouse or tab through the UI to focus on the right input resulting in a much faster experience.

<video controls>
    <source src="/images/2020/04/page-editing-focus.webm"/>
    <source src="/images/2020/04/page-editing-focus.mp4"/>
</video>

Shoutout to [@Smoin1 on GitHub](https://github.com/BookStackApp/BookStack/issues/2036) for this suggestion. 

### Translations

Thanks once again to the translators working on BookStack. Since v0.29 the below languages have received 
updates from the great mentioned Crowdin members:

* Robbert Feunekes (Muukuro) - *Dutch*
* seohyeon.joo - *Korean*
* nutsflag - *French*
* Ali Yasir Yılmaz (ayyilmaz) - *Turkish*
* m0uch0 - *Spanish*

### Full List of Changes

* Added multi-item select to the book-sort interface. ([#2067](https://github.com/BookStackApp/BookStack/issues/2067))
* Updated authentication system to prevent admins being logged out when changing authentication type, useful when setting up LDAP or SAML. ([#2031](https://github.com/BookStackApp/BookStack/issues/2031))
* Updated editor focus so that the title is ready-selected if the default, otherwise the editor is focused. ([#2036](https://github.com/BookStackApp/BookStack/issues/2036))
* Updated translations for Dutch, Korean, French, Turkish, Spanish. Thanks to [Crowdin Users](https://github.com/BookStackApp/BookStack/blob/master/.github/translators.txt). ([#2028](https://github.com/BookStackApp/BookStack/pull/2028), [#2071](https://github.com/BookStackApp/BookStack/pull/2071))
* Fixed issue where callout styles could not be cycled through via shortcut when in-callout formatting was selected in the editor. ([#2061](https://github.com/BookStackApp/BookStack/issues/2061))
* Fixed issue where the selection area was not visible in code blocks or the markdown editor when using dark mode. ([#2060](https://github.com/BookStackApp/BookStack/issues/2060))
* Fixed issue where callouts and code blocks would overlap floated images. ([#2055](https://github.com/BookStackApp/BookStack/issues/2055))
* Fixed issue where no notification would show on an LDAP Login when email already exists. ([#2048](https://github.com/BookStackApp/BookStack/issues/2048))
* Fixed API issue where "total" on a listing response would be incorrect when an offset was given. ([#2043](https://github.com/BookStackApp/BookStack/issues/2043))

----

<span style="font-size: 0.8em;opacity:0.8;">Header Image Credits: &nbsp; <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@mvp?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from mvp"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">mvp</span></a></span>
