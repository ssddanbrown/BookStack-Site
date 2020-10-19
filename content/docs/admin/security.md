+++
title = "Security"
description = "BookStack security concerns and considerations"
date = "2017-01-01"
type = "admin-doc"
+++

Since BookStack can hold important information for users you should be aware of any potential security concerns.
Read through the below to ensure you have secured your BookStack instance. Note, The below only
relates to BookStack itself. The security of the server BookStack is hosted on is not instructed below but should be taken into account.

<ul>
    <li><a href="#initial-security-setup">Initial Security Setup</a></li>
    <li><a href="#securing-images">Securing Images</a></li>
    <li><a href="#attachments">Attachments</a></li>
    <li><a href="#user-passwords">User Passwords</a></li>
    <li><a href="#javascript-in-page-content">JavaScript in Page Content</a></li>
    <li><a href="#web-crawler-control">Web Crawler Control</a></li>
    <li><a href="#secure-cookies">Secure Cookies</a></li>
    <li><a href="#failed-access-logging">Failed Access Logging</a></li>
</ul>

---

<a name="initial-security-setup"></a>

### Initial Security Setup

1. Ensure you change the password and email address for the initial `admin@admin.com` user.
2. Ensure only the `public` folder is being served by your webserver. Serving files above this folder
opens up a lot of code that does not need to be public. Triple check this if you have installed
BookStack within the commonly used `/var/www` folder.
3. Ensure the database user you've used for BookStack has limited permissions for only accessing
the database used for BookStack data.
4. Within BookStack, go through the settings to ensure registration and public access settings are as you expect.
5. Review the user roles in the settings area.
6. Read the below to further understand the security for images & attachments.

---

<a name="securing-images"></a>

### Securing Images

By default, Images are stored in a way which is publicly accessible. This is done on purpose to ensure decent performance while using BookStack. Below are a couple of options to increasing image security:

#### Image Authentication

You can choose to store images behind authentication so only logged-in users can view images. This solution is currently still in testing you could experience performance issues. This option will only work if you have the  'Allow Public Viewing' setting disabled.

***Back-up your BookStack instance before migrating to this option***

To use this option simply set `STORAGE_TYPE=local_secure` in your `.env` file. Uploaded images will be stored within the `storage/uploads/images` folder.

If you are migrating to this option with existing images you will need to move all content in the folder `public/uploads/images` to `storage/uploads/images`. Do not simply copy and leave content in the `public/uploads/images` as those images will still be publicly accessible. After doing this migration you may have to clean-up and re-upload any 'App Icon' images, found in settings, since these need to remain publicly accessible. 

#### Complex Urls

In the settings area of BookStack you can find the option 'Enable higher security image uploads?'. Enabling this will add a 16 character
random string to the name of image files to prevent easy guessing of URLs. This increases security without potential performance concerns.

It's important to ensure you disable 'directory indexes' to prevent unknown users from being able to navigate their way through your images. Here's the configuration for NGINX & Apache if your server allows directory indexes:

**NGINX**

```nginx
# By default indexes are disabled on Nginx but if you have them enabled
# add this to your BookStack server block
location /uploads {
       autoindex off;
}
```

**Apache**

```apache
# Add this to your Apache BookStack virtual host if Indexes are enabled.
# If .htaccess file are enabled then the below should already be active.
<Location "/uploads">
    Options -Indexes
</Location>
```

---

<a name="attachments"></a>

### Attachments

Attachments, if not using Amazon S3, are stored in the `storage/uploads` directory.
By default, unlike images, these are stored behind the application authentication layer so access
depends on permissions you have set up at a role level and page level.

If you are using Amazon S3 for file storage then access will depend on your S3 permission
settings. Unlike images, BookStack will not automatically attempt to make uploaded attachments
publically accessible.  

---

<a name="user-passwords"></a>

### User Passwords

User passwords, if not using an alternative authentication method, are stored in the database.
These are hashed using the standard Laravel hashing methods which use the Bcrypt hashing algorithm.

---

<a name="javascript-in-page-content"></a>

### JavaScript in Page Content

By default, JavaScript tags within page content is escaped when rendered. This can be turned off by setting `ALLOW_CONTENT_SCRIPTS=true` in your `.env` file. Note that even if you disable this escaping the WYSIWYG editor may still perform it's own JavaScript escaping.

---

<a name="web-crawler-control"></a>

### Web Crawler Control

The rules found in the `/robots.txt` file are automatically controlled via the "Allow public viewing?" setting. This can be overridden by setting `ALLOW_ROBOTS=false` or `ALLOW_ROBOTS=true` in your `.env` file. If you'd like to customise the rules this can be done via theme overrides.

---

<a name="secure-cookies"></a>

### Secure Cookies

BookStack uses cookies to track sessions, remember logins and for XSRF protection. When using HTTPS you may want to ensure that cookies are only sent back to the browser if the connection is over HTTPS. This can be enabled by setting `SESSION_SECURE_COOKIE=true` in your `.env` file.

---

<a name="failed-access-logging"></a>

### Failed Access Logging

An option is available to log failed login events to a log file which is useful to identify users having trouble logging in, track malicious login attempts or to use with tools such as Fail2Ban. This works with login attempts using the default email & password login mechanism or attempts via LDAP login. Failed attempts are **not logged** for "one-click" social or SAML2 options.

To enable this you simple need to define the `LOG_FAILED_LOGIN_MESSAGE` option in your `.env` file like so:

```bash
LOG_FAILED_LOGIN_MESSAGE="Failed login for %u"
```

The optional "%u" element of the message will be replaced with the username or email provided in the login attempt
when the message is logged. By default messages will be logged via the php `error_log` function which, in most
cases, will log to your webserver error log files.