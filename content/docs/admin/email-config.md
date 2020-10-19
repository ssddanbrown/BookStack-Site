+++
title = "Email Configuration"
description = "Configuring BookStack to send email"
date = "2020-03-14"
type = "admin-doc"
slug = "email-config"
+++

BookStack sends out emails for a range of purposes such as email-address confirmation & "forgot password" flows.
The following mechanisms for sending mail are supported:

1. SMTP
3. Sendmail (Linux sendmail)

## SMTP

To get up and running with SMTP you will need to add, or set, the following variables in your `.env` file:

```bash
MAIL_DRIVER=smtp

# Host, Port & Encryption mechanism to use
MAIL_HOST=smtp.provider.tld
MAIL_PORT=465
MAIL_ENCRYPTION=tls

# Authentication details for your SMTP service
MAIL_USERNAME=user@provider.tld
MAIL_PASSWORD=onlyifneeded

# The "from" email address for outgoing email
MAIL_FROM=noreply@yourdomain.tld  

# The "from" name used for outgoing email
MAIL_FROM_NAME=BookStack
```

## Sendmail

The `sendmail` drivers uses the sendmail application on the host system. It will call `/usr/sbin/sendmail -bs`.

To enable this option you can set the following in your `.env` file:

```bash
MAIL_DRIVER=sendmail

# The "from" email address for outgoing email
MAIL_FROM=noreply@yourdomain.tld  

# The "from" name used for outgoing email
MAIL_FROM_NAME=BookStack
```

## Debugging

You can follow the instructions provided in the [debugging documentation page](/docs/admin/debugging/)
to help gain more details about issues you may come across. Within the Settings > Maintenance area of
BookStack you can find a "Send a Test Email" action which provides a quick & easy way to send emails
after changing your configuration. This action will also attempt to capture any errors thrown and display them.