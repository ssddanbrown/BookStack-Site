+++
title = "Other Configuration"
description = "Other BookStack configuration such as system revisions and custom avatar fetching"
date = "2018-01-12"
type = "admin-doc"
+++


* [.env Options](#env-options)
* [Revision Limit](#revision-limit)
* [Custom User Avatar Fetching](#custom-user-avatar-fetching)
* [Custom Draw.io URL](#custom-drawio-url)

---

### .env Options

As part of the installation of BookStack you will have a `.env` file containing system options. By default this only contains a few options.
Within your BookStack install directory you should also have a `.env.example.complete` file which contains every support option available alongside the default value for each.
You can copy options in this file to your own `.env` file as required. Many of the options in the `.env.example.complete` file are detailed in-depth in this documentation.

The `.env` file essential sets environment variables for BookStack to read. Environment variables will be checked if an option is not in the `.env` file which can be useful
in the creation and use of docker containers.

---

### Revision Limit

Each time a page is saved a revision is stored to track history. To prevent your database becoming bloated BookStack will automatically remove revisions when the count, per page, exceeds 50. You can set the following option in your `.env` file to increase or remove the limit:

```bash
# Set the revision limit to 100
# Defaults to '50'
REVISION_LIMIT=100

# Alternatively, You can set to 'false' to disable the limit altogether.
REVISION_LIMIT=false
```

---

### Custom User Avatar Fetching

When a user is created BookStack will, by default, fetch an avatar image from [Gravatar](https://en.gravatar.com/). This functionality can be disabled or the URL can be customized 
which allows you to use a different avatar service altogether. Examples of this can be seen below:

```bash
# In your .env file

# Use libravatar instead of gravatar
AVATAR_URL=https://seccdn.libravatar.org/avatar/${hash}?s=${size}&d=identicon

# Disable avatar fetching altogether
AVATAR_URL=false
```

The following variables can be used in this setting which will be populated by BookStack when used:

* `${email}` - The user's email address, URL encoded.
* `${hash}` - MD5 hashed copy of the user's email address.
* `${size}` - BookStack's ideal requested image size in pixels.

---

### Custom Draw.io URL

BookStack uses [draw.io](https://www.diagrams.net/) to provide users with the ability to create & edit drawings.
By default BookStack embeds the draw.io interface using the following URL:

```php
https://www.draw.io/?embed=1&proto=json&spin=1
```

You can instead define your own URL to customise this embed or even use a self-hosted
instance of draw.io. This can be done by defining an option in your `.env` file like so:

```bash
DRAWIO=https://drawing.example.com/?embed=1&proto=json&spin=1
```

**The `embed=1&proto=json&spin=1` query string parameters are required for the integration with BookStack to function. <br> Remember to include these when defining a custom URL.**

Refer to this draw.io guide to see what options are supported: [draw.io embed URL parameters](https://desk.draw.io/support/solutions/articles/16000042546-what-url-parameters-are-supported-). In particular, the `stealth=1` option might be of interest if you 
don't want other external services to be used. 