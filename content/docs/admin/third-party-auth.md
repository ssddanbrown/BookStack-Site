+++
title = "Third Party Authentication"
description = "Enabling and configuring third-party authentication for easier logins"
date = "2017-01-01"
type = "admin-doc"
aliases = [
    "/docs/admin/social-auth"
]
+++

BookStack currently supports login via a range of third party and social applications. Once enabled options for these services will show up in the login, registration and user profile pages. By default these services are disabled. To enable them you will have to create an application on the external services to obtain the require application id's and secrets.

#### Available Services

* [Google](#google)
* [GitHub](#github)
* [Twitter](#twitter)
* [Facebook](#facebook)
* [Slack](#slack)
* [AzureAD (Microsoft)](#azuread-microsoft)
* [Okta](#okta)
* [GitLab](#gitlab)
* [Twitch](#twitch)
* [Discord](#discord)

#### Automatic Registration

You may find that you'd like to auto-register users, from the login screen, when they use a social authentication option. To do this add the following `.env` option, altering the `{SERVICE}` to match the login service you are using:

```bash
{SERVICE}_AUTO_REGISTER=true

# Examples
GOOGLE_AUTO_REGISTER=true
TWITCH_AUTO_REGISTER=true
```

This will allow registration using these services even if registrations are disabled. It also allows registration if using LDAP as you main authentication option.

#### Automatic Email Confirmation

If you trust a third-party login service you can enable automatic email confirmation. This skips the 'Confirm Email' setting, even if domain restrictions are enabled although the domain of the email address provided by the social service will still be checked. To do this add the following `.env` option, altering the `{SERVICE}` to match the login service you are using and trust:

```bash
{SERVICE}_AUTO_CONFIRM_EMAIL=true

# Examples
GOOGLE_AUTO_CONFIRM_EMAIL=true
TWITCH_AUTO_CONFIRM_EMAIL=true
```

---

### Google

1. Open the [Google Developers Console](https://console.developers.google.com/).
2. Create a new project (May have to wait a short while for it to be created).
3. In 'Credentials' choose the 'OAuth consent screen' tab and enter a product name ('BookStack' or your custom set name).
4. Back in the 'Credentials' tab click 'New credentials' > 'OAuth client ID'.
5. Choose an application type of 'Web application' and enter the following urls under 'Authorized redirect URIs', changing `https://example.com` to your own domain where BookStack is hosted:
    - `https://example.com/login/service/google/callback`
    - `https://example.com/register/service/google/callback`
6. Add or set the following items in your `.env` file like so:
	```bash
	# Replace the below (including '{}' braces) with your Google API_KEY and API_SECRET
	GOOGLE_APP_ID={google_app_id}
	GOOGLE_APP_SECRET={google_app_secret}

	# APP_URL Needs to be set to your BookStack base url
	APP_URL=http://mybookstackurl.com
	```
7. All done! Users should now be able to link their social accounts in their account profile pages and also register/login using their Google accounts.

---

### GitHub

1. While logged in, open up your [GitHub developer applications](https://github.com/settings/developers).
2. Click 'Register new application'.
3. Enter an application name ('BookStack' or your custom set name), A link to your app instance under 'Homepage URL' and an 'Authorization callback URL' of the url that your BookStack instance is hosted on then click 'Register application'.
4. A 'Client ID' and a 'Client Secret' value will be shown. Add these two values to the to the `GITHUB_APP_ID` and `GITHUB_APP_SECRET` variables, replacing the default false value, in the '.env' file found in the BookStack root folder.
5. Set the 'APP_URL' environment variable to be the same domain as you entered in step 3.
6. All done! Users should now be able to link their social accounts in their account profile pages and also register/login using their Github account.

---

### Twitter

To create a Twitter application for signing in with you may require a phone number linked to your Twitter account.

1. Go to your [Twitter apps page](https://apps.twitter.com/) and click 'Create New App'.
2. Enter an application name and description. The website and callback URL can just be your BookStack homepage urls. Then submit the form.
3. Click into your new application and go the the settings tab and ensure 'Allow this application to be used to Sign in with Twitter' is checked.
4. If you'd like, set an icon and change any other details.
5. Click the 'Permissions' tab and in the 'Additional Permissions' section check the box 'Request email addresses from users' then save.
6. Go to the 'Keys and Access Tokens' tab to find your API key and secret. Add or set these to your `.env` file like so:
	```bash
	# Replace the below (including '{}' braces) with your twitter API_KEY and API_SECRET
	TWITTER_APP_ID={API_KEY}
	TWITTER_APP_SECRET={API_SECRET}

	# APP_URL Needs to be set to your BookStack base url
	APP_URL=http://mybookstackurl.com
	```
7. All done! Users should now be able to link their Twitter account in their account profile pages and also register/login using their Twitter account.

---

### Facebook

1. Navigate to the [Facebook developers page](https://developers.facebook.com) then go 'My Apps' -> 'Add a New App'.
2. Enter an app name ('BookStack login' or something custom) and contact email then continue.
3. In your new app select 'Add Product' on the left sidebar then choose 'Facebook Login' by clicking the 'Get Started' button. Select the 'Web' option if asked to choose a platform.
4. Enter the your base BookStack url into the 'Site URL' box and save.
5. On the left sidebar again go to 'Facebook Login' -> 'Settings'.
6. Enter the following URLs under 'Valid OAuth Redirect URIs', changing `https://example.com` to your own domain where BookStack is hosted:
    - `https://example.com/login/service/facebook/callback`
    - `https://example.com/register/service/facebook/callback`
7. Navigate back to the app 'Dashboard' in the sidebar to find your app id and secret. Add or set these to your `.env` file like so:
	```bash
	# Replace the below (including '{}' braces) with your facebook APP_KEY and APP_SECRET
	FACEBOOK_APP_ID={APP_KEY}
	FACEBOOK_APP_SECRET={APP_SECRET}

	# APP_URL Needs to be set to your BookStack base url
	APP_URL=http://mybookstackurl.com
	```
7. All done! Users should now be able to link their Facebook account in their account profile pages and also register/login using their Facebook account.

---

### Slack

1. Go to the [Slack apps page](https://api.slack.com/apps) and select 'Create New App'.
2. Enter an app name ('BookStack login' or something custom), select your team then continue.
3. You should see your client ID and secret. Copy these details and add them as new variables in your `.env` file like so:
	```bash
	# Replace the below (including '{}' braces) with your slack CLIENT_ID and CLIENT_SECRET
	SLACK_APP_ID={CLIENT_ID}
	SLACK_APP_SECRET={CLIENT_SECRET}

	# APP_URL Needs to be set to your BookStack base url
	APP_URL=http://mybookstackurl.com
	```
4. In your slack app go to 'OAuth & Permissions' and enter your BookStack base URL into the 'Redirect URL(s)' input then save.
5. All done! Users should now be able to link their Slack account in their account profile pages and also register/login using their Slack account.

---

### AzureAD (Microsoft)

1. Login to your your azure portal and navigate to the 'Azure Activity Directory' area.
2. Under 'Manage > App registrations' select 'New application registration'.
3. Enter a name ('BookStack'). Keep the 'Application type' as 'Web app / API'. Set the 'Sign-on URL' to be the following, replacing 'https://example.com/' with your base BookStack url: 
    - `https://example.com/login/service/azure/callback`
4. Once created, Click on your new application and note the 'Application ID'. This is the APP_ID value for step 9.
5. Within your application in azure, Navigate to 'Keys' under 'API access'.
6. Enter any description you want and set a duration ('Never expires' is okay unless you specifically want it to expire). Then click 'Save'.
7. Copy the string of characters under 'Value'. This is the APP_SECRET value for step 9 and is only shown once.
8. Back under 'App registrations' click on 'Endpoints'. This will show a list of URL's that each contain a unique ID. For example, the OAuth2 token endpoint will look something like this: `https://login.microsoftonline.com/<UniqueID>/oauth2/token`. Copy out the unique ID. This is the TENANT value for step 9.
9. Copy these details and add them as new variables in your `.env` file like so:
	```bash
	# Replace the below (including '{}' braces) with your azure APP_ID and APP_SECRET and TENANT
  	AZURE_APP_ID={APP_ID}
  	AZURE_APP_SECRET={APP_SECRET}
  	AZURE_TENANT={TENANT}

	# APP_URL Needs to be set to your BookStack base url
	APP_URL=http://mybookstackurl.com
	```
10. All done! Users should now be able to link their AzureAD account in their account profile pages and also register/login using their AzureAD account.

---

### Okta

1. Login to Okta and, once logged in, Note the current URL. This is used for the 'BASE_URL' in step 6.
2. Navigate to the Admin panel then 'Applications' then select 'Add Application'. Then select 'Create New App' on the left.
3. For the 'Platform' choose 'Web'. For the 'Sign on method' choose 'OpenID Connect' then click 'Create'.
4. Give the app a name such as 'BookStack' or 'Our documentation'. Under the 'Login redirect URIs' option add both of the below URLs, Changing `https://example.com` to the base URL of your BookStack instance:
    - `https://example.com/login/service/okta/callback`
    - `https://example.com/register/service/okta/callback`
5. Save and scroll down to the 'Client Credentials' area. Copy the 'Client ID' and 'Client secret' values. These are your 'APP_ID' and 'APP_SECRET' values for step 6.
6. Copy these details and add them as new variables in your `.env` file like so:
	```bash
	# Replace the below (including '{}' braces) with your okta APP_ID and APP_SECRET and BASE_URL.
  	OKTA_APP_ID={APP_ID}
  	OKTA_APP_SECRET={APP_SECRET}
	# The base URL is the URL from step 1 but with everything after the domain (okta.com) removed.
  	OKTA_BASE_URL={BASE_URL}

	# APP_URL Needs to be set to your BookStack base url
	APP_URL=http://mybookstackurl.com
	```
7. All set up! Remember to assign the new application you created in Okta to your Okta users otherwise they will not be able to register/login using the service.

---

### GitLab

GitLab authentication works for both [gitlab.com](https://gitlab.com) and self-hosted GitLab instances.

1. Login to GitLab and go to your user settings.
2. In the left sidebar select 'Applications'.
3. Set a name to identify the application, such as 'BookStack Authentication', and in the 'Redirect URI' input add both of the below URLs, Changing `https://example.com` to the base URL of your BookStack instance:
    - `https://example.com/login/service/gitlab/callback`
    - `https://example.com/register/service/gitlab/callback`
4. Do not select any of the 'Scopes' checkboxes.
5. Press 'Save application'. You will be shown the application ID and secret which you'll need for the next step.  
6. Copy the below details and add them as new variables in your `.env` file like so:
    ```bash
    # Replace the below (including '{}' braces) with your GitLab Application Id and Secret values.
    GITLAB_APP_ID={APP_ID}
    GITLAB_APP_SECRET={APP_SECRET}

    # APP_URL Needs to be set to your BookStack base url
    APP_URL=http://mybookstackurl.com


    # ONLY REQURED FOR SELF-HOSTED GITLAB INSTANCES - REMOVE FOR GITLAB.COM
    # Set the below URI to match the base URI of your GitLab install
    GITLAB_BASE_URI=http://my-custom-gitlab.example.com
    ```
7. All set up! Users will now be able to use GitLab to sign-in and register.

---

### Twitch

To allow twich sign-in you'll first need to create an application from the Twitch developer site. Here's the process:

1. Login into the [Twitch developer website](https://dev.twitch.tv/).
2. Navigate to your 'Dashboard' then ['Apps'](https://dev.twitch.tv/dashboard/apps) and select 'Register Your Application'.
3. Set a name to identify the application, such as 'BookStack Authentication', and in the 'OAuth Redirect URI' input add the below URL, Changing `https://example.com` to the base URL of your BookStack instance:
    - `https://example.com/login/service/twitch/callback`
4. Under the 'Application Category' option select 'Website Integration' then hit 'Register'.
5. Click the 'New Secret' button and accept the prompt that appears. You should now see both a 'Client ID' and 'Client Secret' value which you'll use in the next step.
6. Copy the below details and add them as new variables in your `.env` file like so:
    ```bash
    # Replace the below (including '{}' braces) with your Twitch Application Id and Secret values.
    TWITCH_APP_ID={APP_ID}
    TWITCH_APP_SECRET={APP_SECRET}

    # APP_URL Needs to be set to your BookStack base url
    APP_URL=http://mybookstackurl.com
    ```
7. All set up! Users will now be able to use Twitch to sign-in and register.

---

### Discord

To allow Discord sign-in you'll first need to create an application on the Discord developer site. Here's the process:

1. Login into the [Discord developer website](https://discordapp.com/developers/applications/me).
2. Select 'Create an application'.
3. Set a name to identify the application, such as 'BookStack Authentication', and save.
4. In the sidebar, Open the OAuth2 settings for your application and add a redirect. Input the below URL, Changing `https://example.com` to be the base URL of your BookStack instance then save:
    - `https://example.com/login/service/discord/callback`
5. Back in the 'General Information' section find the 'Client ID' and 'Client Secret' values which you'll use in the next step.
6. Copy the below details and add them as new variables in your `.env` file like so:
    ```bash
    # Replace the below (including '{}' braces) with your Discord Application Id and Secret values.
    DISCORD_APP_ID={APP_ID}
    DISCORD_APP_SECRET={APP_SECRET}

    # APP_URL Needs to be set to your BookStack base url
    APP_URL=http://mybookstackurl.com
    ```
7. All set up! Users will now be able to use Discord to sign-in and register.
