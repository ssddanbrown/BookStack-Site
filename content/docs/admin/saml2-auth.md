+++
title = "SAML 2.0 Authentication"
description = "How to use SAML2 as an authentication option in BookStack"
date = "2020-01-25"
type = "admin-doc"
+++

BookStack can be configured to utilise a SAML 2.0 based authentication provider as a solution for users to log-in, log-out and self-register within BookStack. This replaces the default email & password authentication mechanism within BookStack. When enabled, BookStack will attempt to match the SAML user to an existing BookStack user based on a stored external id attribute otherwise, if not found, BookStack will effectively auto-register that user to provide a seamless access experience.

### BookStack Configuration

To set up SAML 2.0 based authentication add or modify the following variables in your `.env` file:

```bash
# Set authentication method to be saml2
AUTH_METHOD=saml2

# Set the display name to be shown on the login button.
# (Login with <name>)
SAML2_NAME=SSO

# Name of the attribute which provides the user's email address
SAML2_EMAIL_ATTRIBUTE=email

# Name of the attribute to use as an ID for the SAML user.
SAML2_EXTERNAL_ID_ATTRIBUTE=uid

# Name of the attribute(s) to use for the user's display name
# Can have mulitple attributes listed, separated with a '|' in which 
# case those values will be joined with a space.
# Example: SAML2_DISPLAY_NAME_ATTRIBUTES=firstName|lastName
# Defaults to the ID value if not found.
SAML2_DISPLAY_NAME_ATTRIBUTES=username

# Identity Provider entityID URL
SAML2_IDP_ENTITYID=https://example.com/saml2/idp/metadata.php

# Auto-load metatadata from the IDP
# Setting this to true negates the need to specify the next three options
SAML2_AUTOLOAD_METADATA=false

# Identity Provider single-sign-on service URL
# Not required if using the autoload option above.
SAML2_IDP_SSO=https://example.com/saml2/idp/SSOService.php

# Identity Provider single-logout-service URL
# Not required if using the autoload option above.
# Not required if your identity provider does not support SLS.
SAML2_IDP_SLO=https://example.com/saml2/idp/SingleLogoutService.php

# Identity Provider x509 public certificate data.
# Not required if using the autoload option above.
SAML2_IDP_x509=<cert_data>
```

A user in BookStack will be linked to a SAML user via the `SAML2_EXTERNAL_ID_ATTRIBUTE`. If the value of this id changes in the identity provider it can be updated in BookStack by an admin by changing the 'External Authentication ID' field on the user's profile.

### Identity Provider Configuration

You'll likely need to provide some details of your BookStack service-provider to your identity provider. Below are the URL paths you'll likely need. Only the relative paths are shown below so you'll need to append them to your BookStack base URL.

* `/saml2/metadata` - Metadata endpoint *(GET)*
* `/saml2/acs` - Assertion Consumer Service endpoint *(POST)*
* `/saml2/sls` - Single Logout Service endpoint *(GET)*

BookStack uses the following formats/bindings for communication with the IdP:

* NameIDFormat: `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`
* ACS/SLO Binding: `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`

Here's a minimal example of configuring a BookStack service provider for a SimpleSAMLphp IdP:

```php
$metadata['http://bookstack.local/saml2/metadata'] = [
    'AssertionConsumerService' => 'http://bookstack.local/saml2/acs',
    'SingleLogoutService' => 'http://bookstack.local/saml2/sls',
    'NameIDFormat' => 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
];
```

### Debugging

To help when setting up or configuring BookStack to use your SAML system, there are a few additional `.env` options that can help provide more insight:

```bash
# Enable the BookStack general debug mode, Provides more error insight.
# Note, Can leak sensitive details so only use in private, secure environments.
APP_DEBUG=true

# Option to dump out SAML 2.0 user details as JSON.
# Only for debugging purposes since it will prevent login.
SAML2_DUMP_USER_DETAILS=false

# Option to override settings passed to the underlying onelogin library
# used by BookStack. For development, debugging and testing only.
# Options provided will be recursively merged into other default & dynamic options.
# Defaults found within app/Config/saml2.php, under the 'onelogin' key.
SAML2_ONELOGIN_OVERRIDES=<json_format_data>
```

### SAML Group Sync

BookStack has the ability to sync SAML user groups with BookStack roles. By default this will match SAML group names with the BookStack role display names with casing ignored.
This can be overridden by via the 'External Authentication IDs' field which can be seen when editing a role while SAML authentication is enabled. If filled, the names in this field will be used and the role display name will be ignored. You can match on multiple names by separating them with a comma.

When matching SAML groups with role names or 'External Authentication IDs' values, BookStack will standardise the names of SAML groups to be lower-cased and spaces will be replaced with hyphens. For example, to match a SAML group named "United Kingdom" an 'External Authentication IDs' value of "united-kingdom" could be used.

This feature requires the SAML server to be able to provide user groups when queried. You'll need to specify the attribute using the `SAML2_GROUP_ATTRIBUTE` option as shown below. Keep in mind you can use the `SAML2_DUMP_USER_DETAILS` option, as shown in the above [debugging](#debugging) section to dump out the attribute values that BookStack fetches from your IdP.

Here are the settings required to be added to your `.env` file to enable group syncing:

```bash
# Enable SAML group sync.
SAML2_USER_TO_GROUPS=true

# Set the attribute from which BookStack will read groups names from.
SAML2_GROUP_ATTRIBUTE=groups

# Removed user from roles that don't match SAML groups upon login.
SAML2_REMOVE_FROM_GROUPS=true
```
