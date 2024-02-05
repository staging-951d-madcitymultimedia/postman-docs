---
title: "Store secrets in your Postman Vault"
updated: 2024-02-12
early_access: true
plan: beta
---

*Postman Vault* enables you to store sensitive data as vault secrets in your local instance of Postman. This enables you to securely reuse sensitive data in your HTTP collections, environments, and requests. Only you can access and use your vault secrets, and secrets aren't synced to the Postman cloud.

When you first open your Postman Vault, Postman generates a [vault key](#manage-your-vault-key) that enables you to access your encrypted vault secrets. Once you store your vault key in a secure location, you can [add sensitive data as vault secrets](#add-sensitive-data-as-vault-secrets) in your Postman Vault. Then you can [reference your vault secrets](#use-vault-secrets) in your HTTP collections, requests, and more.

You can use your Postman Vault from the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/) or the [Postman web app](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app). Learn about Postman Vault [features that require the Postman desktop app or web app](#web-and-desktop-limitations).

<!-- Postman Vault doesn't support public workspaces if you're using the Postman web app. You must use the Postman desktop app to open your Postman Vault from a public workspace, and reference vault secrets in a public workspace. -->

## Contents

* [About vault secrets](#about-vault-secrets)
    * [Compare vault secrets and variables](#compare-vault-secrets-and-variables)
    * [Web and desktop limitations](#web-and-desktop-limitations)
* [Access your Postman Vault](#access-your-postman-vault)
* [Manage your vault key](#manage-your-vault-key)
    * [Save your vault key](#save-your-vault-key)
    * [Reset your vault key](#reset-your-vault-key)
* [Add sensitive data as vault secrets](#add-sensitive-data-as-vault-secrets)
* [Edit vault secrets](#edit-vault-secrets)
* [Use vault secrets](#use-vault-secrets)
* [Fix unresolved vault secrets](#fix-unresolved-vault-secrets)

## About vault secrets

*Vault secrets* are sensitive data, such as API keys and passwords, that you store in your Postman Vault and reuse in your local instance of Postman. Only you can access and reuse your vault secrets in your local instance of Postman, and they aren't synced to the Postman cloud.

Vault secrets are useful when:

* You're using the same sensitive data in multiple places throughout your workspaces.
* You don't want your sensitive data synced to the Postman cloud.
* You want to be the only user with access to your sensitive data.
* You want to specify the domains and subdomains you're allowed to send your sensitive data to.
* You want your sensitive data encrypted, requiring a unique key to access it.

Vault secrets are created at the *vault* scope, which is the broadest scope compared to the [variable scopes](/docs/sending-requests/variables/#variable-scopes) in Postman. This enables you to securely access vault secrets at the team level, and reuse them in your collections, requests, and environments throughout your workspaces.

> If a variable in a different scope has the same name as a vault secret, the value stored in a narrower scope won't be used. For example, if there is a collection variable named `postman-api-key` and a vault secret also named `postman-api-key`, the collection value won't be used when the request runs. Learn how to [reference vault secrets](#use-vault-secrets) in Postman.

### Compare vault secrets and variables

Both vault secrets and variables enable you to store and reference data in Postman. One may be a better fit than the other, depending on your use case or preferences.

[Vault secrets](#about-vault-secrets) enable you to store and reuse sensitive data only in your local instance of Postman, and they aren't synced to the Postman cloud. This enables you to keep your sensitive data hidden from collaborators, and prevent collaborators from using your vault secrets. Vault secrets are masked by default, and only you can unmask them. Your sensitive data is also encrypted in your Postman Vault, requiring your vault key to gain access.

[Variables](/docs/sending-requests/variables/) enable you to store and reuse the same value, such as URLs or API keys, in multiple places. The following are some options for storing data in variables:

* You can add data as the [current value](/docs/sending-requests/variables/#initial-and-current-values) of a variable. This means the value is local to your instance of Postman and it isn't synced to the Postman cloud. You can choose to [persist a variable](/docs/sending-requests/variables/#sharing-and-persisting-data), which syncs the current value to the Postman cloud and shares it with collaborators.

* You can set the variable type as [secret type](/docs/sending-requests/variables/#variable-types) in global and environment variables. This enables you to mask sensitive data in the initial and current values. Collaborators with access to the workspace can [view a secret type variable's values](/docs/sending-requests/variables/#viewing-and-changing-secret-variable-values). Also, collaborators with additional permissions can [change the variable type](/docs/sending-requests/variables/#changing-from-secret-to-default-variable-type), unmasking it for collaborators.

### Web and desktop limitations

Some Postman Vault features require the Postman desktop app or the Postman web app.

The following features require the Postman desktop app:

* **Open Postman Vault from public workspaces** - You must use the Postman desktop app to open your Postman Vault from a [public workspace](/docs/collaborating-in-postman/using-workspaces/public-workspaces/), and reference vault secrets in a public workspace. If you're using the Postman web app, you must add new vault secrets to your Postman vault if you're opening it from a public workspace.

* **Use vault secrets between teams** - You must use the Postman desktop app to use your vault secrets in another team. If you're using the Postman web app, you must add new vault secrets to your Postman Vault when you [switch, join, or leave teams](/docs/collaborating-in-postman/working-with-your-team/team-collaboration/). <!-- TBD -->

The following features require the Postman web app:

* **Preserve vault secrets after signing out of Postman** - You must use the Postman web app to preserve your encrypted vault secrets after signing out of Postman. If you're using the Postman desktop app, vault secrets will be deleted from your Postman Vault after signing out of Postman, and you must add new vault secrets when you sign in to Postman with the desktop app.

    > If you're using the Postman web app with Safari as your web browser, it deletes vault secrets from your local instance of Postman after seven days of inactivity. You must use a different web browser if you want your vault secrets available for more than seven days without inactivity. Learn more about the [browser requirements](/docs/getting-started/installation/installation-and-updates/#browser-requirements) for the Postman web app.

## Access your Postman Vault

To access your Postman Vault, open a workspace then select <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px"> **Vault** from the Postman footer. You can also use **Control+Shift+V** or **Ctrl+Shift+V** to access your Postman Vault.

You can open your vault secrets in Postman Vault as follows:

* If this is your first time opening your Postman Vault, select **Set Up Vault** to [get your vault key](#manage-your-vault-key).
* If Postman already generated your [vault key](#manage-your-vault-key), enter your vault key then select **Open Vault**. Then you can continue to [add](#add-sensitive-data-as-vault-secrets), [edit](#edit-vault-secrets), and [use](#use-vault-secrets) your vault secrets in Postman.

    > If you stored your vault key in your system's password manager, Postman automatically gets your vault key. You must use the [Postman Desktop Agent](/docs/getting-started/basics/about-postman-agent/#the-postman-desktop-agent).

> Learn about Postman Vault [features that require the Postman desktop app or web app](#web-and-desktop-limitations).

<!-- Postman Vault doesn't support public workspaces if you're using the Postman web app. You must use the Postman desktop app to open your Postman Vault from a public workspace, and reference vault secrets in a public workspace. -->

## Manage your vault key

When you open Postman Vault for the first time, Postman generates a [vault key](#save-your-vault-key) that's used to access your encrypted vault secrets. You can [reset your vault key](#reset-your-vault-key) if you lose it, but Postman will permanently delete your vault secrets. Once you save your vault key, you can [add vault secrets to your Postman Vault](#add-sensitive-data-as-vault-secrets).

Your vault secrets are encrypted using the AES-256-GCM encryption algorithm, and your vault key isn't synced to the Postman cloud.

When Postman generates your vault key, you have the following options for saving your key:

* Save your vault key in a secure location. Each time you sign in to Postman, you'll need to manually enter your vault key, enabling you to access your Postman Vault and vault secrets.
* Postman can store your vault key in your system's password manager, such as Keychain Access on macOS. This enables Postman to automatically get your vault key, giving you access to your Postman Vault and vault secrets when you sign in to Postman.

    > If you're using Postman Vault from the [Postman web app](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app), you must use the [Postman Desktop Agent](/docs/getting-started/basics/about-postman-agent/#the-postman-desktop-agent) so Postman can get your vault key.

### Save your vault key

1. Open your Postman Vault. If this is your first time opening your Postman Vault, select **Encrypt Vault**.
1. Save your vault key in a secure location. You can do the following to save your vault key:

    * Select the copy icon <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> to copy your vault key to your clipboard.
    * Select the download icon <img alt="Download icon" src="https://assets.postman.com/postman-docs/icon-download-v9.jpg#icon" width="16px"/> to download your vault key.

1. If you don't want to store your vault key in your system's password manager, clear the checkbox next to **Save this key to native password manager**.

    > If you're using the [Postman web app](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app), you must use the [Postman Desktop Agent](/docs/getting-started/basics/about-postman-agent/#the-postman-desktop-agent) to save your vault key to your system's password manager.

1. Select **Open Vault** to [add vault secrets to your Postman Vault](#add-sensitive-data-as-vault-secrets).

    ![Save vault key](https://assets.postman.com/postman-docs/v10/save-postman-vault-key-v10-23-b.jpg)

> If your Postman Vault is open, you can select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the top right to copy or download your vault key.

### Reset your vault key

You can reset your vault key if you lose it, but Postman will permanently delete all vault secrets stored in your Postman Vault.

1. Sign out and sign in to Postman, then open your Postman Vault.
1. Select **Reset vault**.

    <img src="https://assets.postman.com/postman-docs/v10/reset-postman-vault-key-v10-23.jpg" alt="Reset vault key" width="350px"/>

1. To delete your vault secrets and generate a new vault key, select **Reset Vault**.
1. [Save your vault key in a secure location.](#save-your-vault-key)

## Add sensitive data as vault secrets

After you [save your vault key](#save-your-vault-key), you can add sensitive data, such as API keys and passwords, to your Postman Vault and reuse them in your local instance of Postman. You can also add secrets from the HTTP request builder.

To add secrets to your Postman Vault, do the following:

1. Open your Postman Vault.
1. Enter the following values in an empty row:

    * **Key** - The name of the vault secret. Use the name to [reference the secret](#use-vault-secrets).
    * **Value** - The value used when sending requests in your local instance of Postman. It's never synced to your account or shared with your team.

        > To show or hide a vault secret's value, hover over the secret and select the eye icon <img alt="Unmask secret icon" src="https://assets.postman.com/postman-docs/icon-eye-crossed-out.jpg#icon" width="18px">.

    * **Allowed domains** - The comma-separated list of domains and subdomains you're allowed to send requests to with the vault secret. This enables you to prevent unintentional disclosure of sensitive data in your vault secret. By default, you can include vault secrets in requests to any domain and subdomain. Select the empty cell then enter your allowed domains.

        > If you specify allowed domains or subdomains for a vault secret, you won't be able to reference the vault secret at the collection level.

        <!-- -->

        > To allow sending requests to any subdomain of an allowed domain, use `*` to represent any subdomain. For example, add `*.example.com` to allow sending requests to any subdomain of `example.com`.

1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save**.

    ![Add secrets to Postman Vault](https://assets.postman.com/postman-docs/v10/add-postman-vault-secrets-v10-23-c.jpg)

To set data as vault secrets from the request builder, do the following:

1. Select the data you need. You can select data from the **URL builder**, the **Params** tab, the **Authorization** tab, and the **Headers** tab.
1. Select **Set as variable**.
1. Select **+ Set as new variable**.

    <img src="https://assets.postman.com/postman-docs/v10/set-data-as-new-vault-secret-v10-22.jpg" alt="Set as new variable" width="350px"/>

1. Enter the **Name** of the vault secret, confirm that the **Value** is correct, and select **Vault** as the scope.
1. Select **Set Variable**.

    ![Set as new vault secret](https://assets.postman.com/postman-docs/v10/set-data-as-vault-secret-v10-22.jpg)

You can also [reference vault secrets](#use-vault-secrets) that don't exist yet, then add new secrets to your Postman Vault. In the request builder, enter a name that doesn't exist using the following syntax: `{{vault:secret-name}}`. You can enter a name in the **URL builder**, the **Params** tab, the **Authorization** tab, and the **Headers** tab. Hover over the unresolved reference to the secret, enter the value, then select **Add Secret**.

![Set as new vault secret](https://assets.postman.com/postman-docs/v10/reference-and-create-new-vault-secret-v10-22.jpg)

## Edit vault secrets

You can edit secrets stored in your Postman Vault by updating secrets and their allowed domains, changing a secret's name, making secrets unavailable, or deleting secrets.

To edit vault secrets, select <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px"> **Vault** from the Postman footer. You can take the following actions:

* To filter the list of secrets by name, enter text in the **Filter secrets** box.
* To sort the list of secrets, select a column header. You can toggle between ascending and descending order.
* To add a new secret, select **Add new secret** in the bottom row of the table.
* To delete a secret, hover over a secret and select the delete icon <img alt="Delete link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px" />.
* To update the list of allowed domains, select the empty cell or list of domains.
* To make a secret unavailable without deleting it, clear the checkbox next to the secret. Any references to the secret will be unresolved. To make the secret available again, select the checkbox.
* Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save any changes you've made.

![Edit vault secrets](https://assets.postman.com/postman-docs/v10/edit-postman-vault-secrets-v10-23-c.jpg)

## Use vault secrets

You can reference vault secrets in your HTTP collections and requests from the **URL builder**, the **Params** tab, the **Authorization** tab, the **Headers** tab, and the **Body** tab. You can reference vault secrets as the values of your [global](/docs/sending-requests/variables/#defining-global-variables), [environment](/docs/sending-requests/variables/#defining-environment-variables), and [collection](/docs/sending-requests/variables/#defining-collection-variables) variables. You can also use the Collection Runner to [manually run collections](/docs/collections/running-collections/intro-to-collection-runs/) that reference vault secrets.

Enclose the vault secret in double curly braces (`{{ }}`) and prefix the secret's name with `vault:` to reference it throughout your Postman team. For example, to reference a secret named "postman-api-key", use the following syntax:

```txt
{{vault:postman-api-key}}
```

<!-- ### Use vault secrets in scripts

You can get the current value of a vault secret in your scripts using the following syntax:

```js
//access a vault secret in you Postman Vault
pm.variables.get("vault:variable-key");
``` -->

![Reference vault secrets in Postman](https://assets.postman.com/postman-docs/v10/use-postman-vault-secrets-v10-23.jpg)

> If you reference a vault secret as the initial value of a variable, the reference to the secret (for example `{{vault:secret-name}}`) is synced using Postman's cloud servers, and shared with anyone who has access to the workspace. The secret stored in your Postman Vault isn't synced or shared. Learn more about [initial and current values](/docs/sending-requests/variables/#initial-and-current-values).

<!-- -->

> Secrets stored in your Postman Vault are masked when they're logged to the [Postman Console](/docs/sending-requests/troubleshooting-api-requests/).

## Fix unresolved vault secrets

An *unresolved vault secret* is a secret that's not defined or Postman can't reference in your Postman Vault. When you're working on an API request, Postman highlights unresolved vault secrets in the **URL builder**, the **Params** tab, the **Authorization** tab, and the **Headers** tab. Postman highlights unresolved secret text in red.

A vault secret can be unresolved for the following reasons:

* The secret isn't present in your Postman Vault.
* The secret was created but the changes weren't saved.
* The secret is turned off in your Postman Vault.
* The secret isn't allowed to be in requests to the domain.
* You haven't entered your vault key since you last signed in to Postman.

> For reasons why your vault secrets might be missing from your Postman Vault, see [Web and desktop limitations](#web-and-desktop-limitations).

If the vault secret exists in your Postman Vault and it's turned off, hover over the reference to the secret, then select **Enable Secret**.

![Turn on vault secrets](https://assets.postman.com/postman-docs/v10/turn-on-postman-vault-secret-v10-23.jpg)

If the vault secret exists in your Postman Vault and you're sending a request to a domain not in the allowed domains list, hover over the reference to the secret, then select **Update Domains**.

![Update allowed domains for vault secrets](https://assets.postman.com/postman-docs/v10/update-allowed-domains-postman-vault-key-v10-23.jpg)

If a vault secret is referenced in your request and you haven't entered your vault key, hover over the reference to the secret, enter your vault key, then select **Access Vault**.

![Enter vault key to access vault secrets](https://assets.postman.com/postman-docs/v10/enter-postman-vault-key-v10-23.jpg)
