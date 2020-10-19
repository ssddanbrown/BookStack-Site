+++
categories = ["Releases"]
tags = ["Releases"]
title = "Beta Security Releases v0.25.[3,4,5] & Our Security Process"
date = 2019-03-24T20:15:00Z
author = "Dan Brown"
image = "/images/blog-cover-images/locks-ruben-bagues.jpg"
description = "Over the last week some security issues have been raised regarding file uploads. BookStack v0.25.3, v0.25.4 & v0.25.5 have been released to cover these issues, in addition to bringing some translation updates."
slug = "beta-release-v0-25-5"
draft = false
+++

Over the last week some security issues have been raised regarding file uploads. BookStack v0.25.3, v0.25.4 & v0.25.5 have been released to cover these issues, in addition to bringing some translation updates.

* [Update instructions](https://www.bookstackapp.com/docs/admin/updates)
* GitHub release pages:
    * [v0.25.3](https://github.com/BookStackApp/BookStack/releases/tag/v0.25.3)
    * [v0.25.4](https://github.com/BookStackApp/BookStack/releases/tag/v0.25.4)
    * [v0.25.5](https://github.com/BookStackApp/BookStack/releases/tag/v0.25.5)

### Security Issues Found

First of all, A massive thanks to [@inc0x0](https://twitter.com/inc0x0) for raising these security issues and providing guidance.

It was found that BookStack could possibly accept PHP files via the image upload endpoint which could then be called externally to perform malicious activity. This is particularly an issue in environments where untrusted users have the necessary permissions to upload images. BookStack v0.25.3 was released to directly cover this scenario.

In the same manner as above it was found that PHP files, with a non-standard PHP extensions such as `.phtml`, could be uploaded and then executed on some web-servers. BookStack v0.25.4 added a file-extension whitelist to only allow expected image file types to be uploaded to BookStack.

Although not so common, Some web-servers can utilise files with double extensions, such as `.php.en`. BookStack v0.25.5 was released to prevent images with multiple extensions from being uploaded. In addition, v0.25.5 will also use random file names for attachment files for extra security. 

Please consider that malicious exploitation of this vulnerability may have allowed access to other files on your server that the PHP process has access to, Including your BookStack `.env` file, so consider updating any passwords or keys if you think this had a possibility of being exploited on your instance. The vulnerable image upload endpoints would require a user to log-in by default but if your instance contained untrusted users or if permissions were changed to allow uploads by any visitors then please consider that this may have been exploited.

### Security Process Updates

When enacting upon the above security issues I noticed that the processes for security concerns could be improved. Details of how to report a sensitive security issue can now be found in the [project readme](https://github.com/BookStackApp/BookStack/tree/master#security).

For the purpose of notifying admins on security issues, A new mailing list has been created which you can [subscribe to here](http://eepurl.com/glIh8z). 

### Translations

BookStack v0.25.5 includes the following translation updates:

* Added Czech translations. Thanks to [@cima](https://github.com/BookStackApp/BookStack/pull/1347). ([#1347](https://github.com/BookStackApp/BookStack/pull/1347))
* Updated russian translations . Thanks to [@agvol](https://github.com/BookStackApp/BookStack/pull/1348). ([#1348](https://github.com/BookStackApp/BookStack/pull/1348))
* Updated 'Spanish Argentina' translations. Thanks to [@leomartinez](https://github.com/BookStackApp/BookStack/pull/1327). ([#1327](https://github.com/BookStackApp/BookStack/pull/1327))

### Full List of Changes

These releases contain the following fixes and changes:

* Added Czech translations. Thanks to [@cima](https://github.com/BookStackApp/BookStack/pull/1347). ([#1347](https://github.com/BookStackApp/BookStack/pull/1347))
* Updated russian translations . Thanks to [@agvol](https://github.com/BookStackApp/BookStack/pull/1348). ([#1348](https://github.com/BookStackApp/BookStack/pull/1348))
* Updated 'Spanish Argentina' translations. Thanks to [@leomartinez](https://github.com/BookStackApp/BookStack/pull/1327). ([#1327](https://github.com/BookStackApp/BookStack/pull/1327))
* Added prevention for PHP files via the image upload endpoint.
* Added whitelist for the extensions on uploaded image files to prevent other, malicious, filetypes being uploaded.
* Prevented image files with multiple extensions being uploaded via the image upload endpoint.
* Updated attachment storage to use random file names to help prevent attacks via file name.




----

<span style="font-size: 0.8em;opacity:0.8;">Header Image Credits: &nbsp; <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@rubavi78?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Rubén Bagüés"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Rubén Bagüés</span></a></span>
