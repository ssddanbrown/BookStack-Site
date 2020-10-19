+++
categories = ["Releases"]
tags = ["Releases"]
title = "Beta Security Release v0.29.2"
date = 2020-05-02T11:00:00Z
author = "Dan Brown"
image = "/images/blog-cover-images/locks-mackenzie-marco.jpg"
description = "This v0.29.2 security release fixes a XSS vulnerability that exists for comments"
slug = "beta-release-v0-29-2"
draft = false
+++

Over the last few days some vulnerabilities in the comment system have been identified, which BookStack v0.29.2 looks to address.

* [Update instructions](https://www.bookstackapp.com/docs/admin/updates)
* [GitHub release page](https://github.com/BookStackApp/BookStack/releases/tag/v0.29.2)

**Be sure to run `php artisan bookstack:regenerate-comment-content` after upgrading if you think your instance may be impacted by this vulnerability.**

### Impact

A user with permission to create comments could POST HTML directly to the system to be saved in a comment, which would then be executed/displayed to others users viewing the comment. Through this vulnerability custom JavaScript code could be injected and therefore ran on other user machines.

This most impacts scenarios where not-trusted users are given permission to create comments.

### Patches

The issue was addressed in BookStack v0.29.2.

After upgrading, The command `php artisan bookstack:regenerate-comment-content` should be ran to remove any pre-existing dangerous content. 

### Workarounds

Comments can be disabled in the system settings to prevent them being shown to users. Alternatively, comment creation permissions can be altered as required to only those who are trusted but this will not address existing exploitation of this vulnerability. 

### References

* [BookStack Beta v0.29.2](https://github.com/BookStackApp/BookStack/releases/tag/v0.29.2)
* JVN#41035278
* [GitHub Security Advisory](https://github.com/BookStackApp/BookStack/security/advisories/GHSA-5vf7-q87h-pg6w)

### Attribution

* Thanks to Kenichi Okuno of Mitsui Bussan Secure Directions, Inc for the discovery and reporting of this vulnerability.
* Thanks to JPCERT/CC for coordinating the reporting of the issue.

### More Information

If you have any questions or comments about this advisory:
* Open an issue in [the BookStack GitHub repository](BookStackApp/BookStack/issues).
* Ask on the [BookStack Discord chat](https://discord.gg/ztkBqR2).
* Follow the [BookStack Security Advice](https://github.com/BookStackApp/BookStack#-security) to contact someone privately.


----

<span style="font-size: 0.8em;opacity:0.8;">Header Image Credits: &nbsp; <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@kenziem?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Mackenzie Marco"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Mackenzie Marco</span></a></span>
