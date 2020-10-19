+++
title = "LDAP Authentication"
description = "How to use LDAP as your primary way to register and login to BookStack"
date = "2017-01-21"
type = "admin-doc"
+++

BookStack can be configured to allow LDAP based user login. While LDAP login is enabled you cannot log in with the standard user/password login and new user registration is disabled. BookStack will only use the LDAP server for getting user details and for authentication. Data on the LDAP server is not currently editable through BookStack.

### Authentication Setup

When a LDAP user logs into BookStack for the first time their BookStack profile will be created and they will be given the default role set under the 'Default user role after registration' option in the application settings.    

To set up LDAP-based authentication add or modify the following variables in your `.env` file:

```bash
# General auth
AUTH_METHOD=ldap

# The LDAP host, Adding a port is optional
LDAP_SERVER=example.com:389
# If using LDAP over SSL you should also define the protocol:
# LDAP_SERVER=ldaps://example.com:636

# The base DN from where users will be searched within
LDAP_BASE_DN=ou=People,dc=example,dc=com

# The full DN and password of the user used to search the server
# Can both be left as false to bind anonymously
LDAP_DN=false
LDAP_PASS=false

# A filter to use when searching for users
# The user-provided user-name used to replace any occurrences of '${user}'
LDAP_USER_FILTER=(&(uid=${user}))

# Set the LDAP version to use when connecting to the server
LDAP_VERSION=false

# Set the property to use as a unique identifier for this user.
# Stored and used to match LDAP users with existing BookStack users.
# Prefixing the value with 'BIN;' will assume the LDAP service provides the attribute value as
# binary data and BookStack will convert the value to a hexidecimal representation.
# Defaults to 'uid'.
LDAP_ID_ATTRIBUTE=uid

# Set the default 'email' attribute. Defaults to 'mail'
LDAP_EMAIL_ATTRIBUTE=mail

# Set the property to use for a user's display name. Defaults to 'cn'
LDAP_DISPLAY_NAME_ATTRIBUTE=cn

# If you need to allow untrusted LDAPS certificates, add the below and uncomment (remove the #)
# Only set this option if debugging or you're absolutely sure it's required for your setup.
#LDAP_TLS_INSECURE=true

# If you need to debug the details coming from your LDAP server, add the below and uncomment (remove the #)
# Only set this option if debugging since it will block logins and potentially show private details.
#LDAP_DUMP_USER_DETAILS=true
```

You will also need to have the php-ldap extension installed on your system. It's recommended to change your `APP_DEBUG` variable to `true` while setting up LDAP to make any errors visible. Remember to change this back after LDAP is functioning.

A user in BookStack will be linked to a LDAP user via a 'uid'. If a LDAP user uid changes it can be updated in BookStack by an admin by changing the 'External Authentication ID' field on the user's profile.

You may find that you cannot log in with your initial Admin account after changing the `AUTH_METHOD` to `ldap`. To get around this set the `AUTH_METHOD` to `standard`, login with your admin account then change it back to `ldap`. You get then edit your profile and add your LDAP uid under the 'External Authentication ID' field. You will then be able to login in with that ID.

### Active Directory

BookStack does work with active directory over LDAP. You will likely need to set the below settings for use with AD. Note that the user filter may need to change
depending on your setup and how you manage users in the system. You will still need to follow the setup instructions above.

```bash
LDAP_USER_FILTER=(&(sAMAccountName=${user}))
LDAP_VERSION=3
LDAP_ID_ATTRIBUTE=BIN;objectGUID
```

### LDAP Group Sync

BookStack has the ability to sync LDAP user groups with BookStack roles. By default this will match LDAP group names with the BookStack role display names with casing ignored.
This can be overridden by via the 'External Authentication IDs' field which can be seen when editing a role while LDAP authentication is enabled. This field can be populated with common names (CNs) of accounts *or* groups. If filled, CNs in this field will be used and the role name will be ignored. You can match on multiple CNs by separating them with a comma.

When matching LDAP groups with role names or 'External Authentication IDs' values, BookStack will standardise the names of ldap groups to be lower-cased and spaces will be replaced with hypens. For example, to match a LDAP group named "United Kingdom" an 'External Authentication IDs' value of "united-kingdom" could be used.

This feature requires the LDAP server to be able to provide user groups when queried. This is enabled by default on ActiveDirectory via the 'memberOf' attribute but other LDAP systems may need to be configured to enable such functionality. If using OpenLDAP you'll need to setup the memberof overlay.

Here are the settings required to be added to your `.env` file to enable group syncing:

```bash
# Enable LDAP group sync, Set to 'true' to enable.
LDAP_USER_TO_GROUPS=true

# LDAP user attribute containing groups, Defaults to 'memberOf'.
LDAP_GROUP_ATTRIBUTE="memberOf"

# Remove users from roles that don't match LDAP groups.
LDAP_REMOVE_FROM_GROUPS=false
```
