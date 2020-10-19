+++
title = "Language Configuration"
description = "Configuring the default language option for your BookStack instance"
date = "2018-08-11"
type = "admin-doc"
+++

By default the BookStack interface is shown in English. Additional languages are supported
by the wider BookStack community. English translations may show as a fallback if a chosen
alternative language does not have fully up-to-date translations.  

### Setting the Default Language

The value of the `APP_LANG` variable needs to be a valid locale code
The default language will be used as the default for logged-in users and also for
public users if their language cannot be auto-detected. This can be set
 in your `.env` file as follows:

```bash
# Sets application language to French
APP_LANG=fr
```

The value of the `APP_LANG` variable must be a valid locale code matching one of the following options:

* Brazilian Portuguese - `pt_BR`
* Chinese (Simplified) - `zh_CN`
* Chinese (Traditional) - `zh_TW`
* Dutch - `nl`
* English - `en`
* French - `fr`
* German (Formal) - `de`
* German (Informal) - `de_informal`
* Italian - `it`
* Japanese - `ja`
* Korean - `kr`
* Polish - `pl`
* Russian - `ru`
* Slovakian - `sk`
* Spanish - `es`
* Spanish, Argentinian - `es_AR`
* Swedish - `sv`
* Ukrainian - `uk`

### Public User Locale Autodetection

For users that are not logged-in BookStack will try to detect their language
based off of information sent from their browser. If you'd prefer to force
the language seen to be the `APP_LANG` setting you can set the following
in your `.env` file:

```bash
APP_AUTO_LANG_PUBLIC=false
```

### Localised Date Formatting

BookStack does support the localisation of date formats but it does depend on the intended locales being installed
on the host system. If using ubuntu, you can manage installed locales via the command:

```bash
sudo dpkg-reconfigure locales
```

For other operating systems this may be different. After installing new locales you may need to restart any running PHP processes.
For example, On Ubuntu, running PHP7.2:

```bash
sudo systemctl restart php7.2-fpm.service 
```