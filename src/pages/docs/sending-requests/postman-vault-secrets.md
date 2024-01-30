---
title: "Store secrets locally with your Postman Vault"
updated: 2024-02-12
early_access: true
plan: beta
---

*Postman Vault* enables you to store and reuse vault secrets in your local instance of Postman. This enables you to securely reuse sensitive data in your HTTP collections, environments, and requests. Only you can access and reuse vault secrets stored in your Postman Vault, and secrets aren't synced to the Postman cloud.

When you first open your Postman Vault, you Postman generates a [vault key](#manage-your-vault-key) that enables you to access your encrypted vault secrets. Once you store your vault key in a secure location, you can [add sensitive data as vault secrets](#add-sensitive-data-as-vault-secrets) in your Postman Vault. Then you can [reference your vault secrets](#use-vault-secrets) in your HTTP collections, requests, and more.

You can use your Postman Vault from the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/) or the [Postman web app](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app).

## Contents

* [Benefits of using vault secrets](#benefits-of-using-vault-secrets)
* [Access your Postman Vault](#access-your-postman-vault)
* [Manage your vault key](#manage-your-vault-key)
* [Add sensitive data as vault secrets](#add-sensitive-data-as-vault-secrets)
* [Edit vault secrets](#edit-vault-secrets)
* [Use vault secrets](#use-vault-secrets)
* [Fix unresolved vault secrets](#fix-unresolved-vault-secrets)

## Benefits of using vault secrets

*Vault secrets* are sensitive data, such as API keys and passwords, that you store in your Postman Vault and reuse in your local instance of Postman. Only you can access and reuse your vault secrets in your local instance of Postman, and they aren't synced to the Postman cloud.

<!-- Vault secrets are useful when you're using the same sensitive data in multiple places throughout your workspaces, and you don't want that sensitive data synced to the Postman cloud. -->

Vault secrets are useful when:

* You're using the same sensitive data in multiple places throughout your workspaces.
* You don't want your sensitive data synced to the Postman cloud.
* You want to be the only user with access to your sensitive data.

<!-- You can also store sensitive data as environment variables by selecting **secret** as the variable type. All workspace members can view a secret variable's initial and current values. Users with [Editor](/docs/collaborating-in-postman/roles-and-permissions/) access on a workspace (for global variables) or environment (for environment variables) can change a variable's initial value and its variable type. Learn more about [variable types](/docs/sending-requests/variables/#variable-types) and how to [store sensitive data in environment variables](/docs/sending-requests/environments/environment-variables/). -->

Vault secrets are created at the *vault* scope, which is the broadest scope compared to the [variable scopes](/docs/sending-requests/variables/#variable-scopes) in Postman. This enables you to securely access vault secrets at the team level, and reuse them in your collections, requests, and environments throughout your workspaces.

> If a variable in a different scope has the same name as a vault secret, the value stored in a narrower scope won't be used. For example, if there is a collection variable named `postman-api-key` and a vault secret also named `postman-api-key`, the collection value won't be used when the request runs. Learn how to [reference vault secrets](#use-vault-secrets) in Postman.

## Access your Postman Vault

To access your Postman Vault, select <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-vault.jpg#icon" width="12px"> **Vault** from the Postman footer. You can also use **Control+Shift+V** or **Ctrl+Shift+V** to access your Postman Vault.

If this is your first time opening your Postman Vault, select **Set Up Vault**.

## Manage your vault key

When you open Postman Vault for the first time, Postman generates a [vault key](#generate-your-vault-key) that's used to access your encrypted vault secrets. You can [reset your vault key](#reset-your-vault-key) if you lose it, but Postman will permanently delete your vault secrets.

Your vault secrets are encrypted using the AES-256-GCM encryption algorithm, and your vault key isn't synced to the Postman cloud.

When Postman generates your vault key, you have the following options for storing your key:

* Save your vault key in a secure location. Each time you sign in to Postman, you'll need to manually enter your vault key, enabling you to access your Postman Vault and [reference your vault secrets](#use-vault-secrets).
* Postman can store your key in your operating system's native password manager, such as Keychain Access on macOS. This enables Postman to automatically get your vault key, giving you access to your Postman Vault and vault secrets when you sign in to Postman.

    > If you're using Postman Vault from the [Postman web app](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app), you must use the [Postman Desktop Agent](/docs/getting-started/basics/about-postman-agent/#the-postman-desktop-agent) so Postman can get your vault key.

## Generate your vault key

1. Open your Postman Vault. If this is your first time opening your Postman Vault, select **Encrypt Vault**.
1. Save your vault key in a secure location. You can do the following to save your vault key:

    * Select the copy icon <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> to copy your vault key to your clipboard.
    * Select the download icon <img alt="Download icon" src="https://assets.postman.com/postman-docs/icon-download-v9.jpg#icon" width="16px"/> to download your vault key.

1. (Optional) If you want to store your vault key in your operating system's native password manager, select the checkbox next to **Save to KeyChain**.

    > If you're using the [Postman web app](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app), you must use the [Postman Desktop Agent](/docs/getting-started/basics/about-postman-agent/#the-postman-desktop-agent) to save your vault key to your password manager.

1. Select **Open Vault** to [add vault secrets to your Postman Vault](#add-sensitive-data-as-vault-secrets).

<!-- TODO: add screenshot -->

## Reset your vault key

You can reset your vault key if you lose it, but Postman will permanently delete all vault secrets stored in your Postman Vault.

1. Sign out and back in to Postman, then open your Postman Vault.
1. Select **Reset vault**.
1. To delete your vault secrets and generate a new vault key, select **Reset Vault**.
1. [Save your vault key in a secure location.](#generate-your-vault-key)

<!-- TODO: add screenshot -->

## Add sensitive data as vault secrets

After you [generate your vault key](#generate-your-vault-key), you can add sensitive data, such as API keys and passwords, to your Postman Vault and reuse them in your local instance of Postman. You can also add secrets from the HTTP request builder.

<!-- -->

<!-- When you sign out of Postman, you must enter your vault key the next time you sign in. Otherwise, you won't be able to access your vault secrets. -->

To add secrets to your Postman Vault, do the following:

1. Open your Postman Vault.
1. Enter the following values in an empty row:

    * **Key** - The name of the vault secret. Use the name to [reference the secret](#use-vault-secrets).
    * **Value** - The value used when sending requests in your local instance of Postman. It's never synced to your account or shared with your team.

        > To show or hide a vault secret's value, hover over the secret and select the eye icon <img alt="Unmask secret icon" src="https://assets.postman.com/postman-docs/icon-eye-crossed-out.jpg#icon" width="18px">.

    * **Allowed domains** - The comma-separated list of domains you're allowed to send requests to with the vault variable. By default, you can include vault variables in requests to any domain. To add domains, select **All** then enter your allowed domains.

        > To allow sending requests to any subdomain of an allowed domain, use `*` to represent any subdomain. For example, add `*.example.com` to allow sending requests to any subdomain of `example.com`.

1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save**.

    ![Add secrets to Postman Vault](https://assets.postman.com/postman-docs/v10/add-postman-vault-variables-v10-22.jpg)

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

You can edit secrets stored in your Postman Vault by updating secrets or allowed domains, changing a secret's name, making secrets unavailable, or deleting secrets.

To edit vault secrets, select <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-vault.jpg#icon" width="12px"> **Vault** from the Postman footer. You can take the following actions:

* To filter the list of secrets by name, enter text in the **Filter secrets** box.
* To sort the list of secrets, select a column header. You can toggle between ascending and descending order.
* To add a new secret, select **Add new secret** in the bottom row of the table.
* To delete a secret, hover over a secrets and select the delete icon <img alt="Delete link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px" />.
* To update the list of allowed domains, select **All** or the current list of domains.
* To make a secret unavailable without deleting it, clear the checkbox next to the secret. Any references to the secret will be unresolved. To make the secret available again, select the checkbox.
* Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save any changes you've made.

![Edit vault secrets](https://assets.postman.com/postman-docs/v10/edit-postman-vault-variables-v10-22.jpg)

## Use vault secrets

You can reference vault secrets in your HTTP collections and requests from the **URL builder**, the **Params** tab, the **Authorization** tab, the **Headers** tab, and the **Body** tab. You can reference vault secrets as the values of your [global](/docs/sending-requests/variables/#defining-global-variables), [environment](/docs/sending-requests/variables/#defining-environment-variables), and [collection](/docs/sending-requests/variables/#defining-collection-variables) variables. You can also use the Collection Runner to [manually run collections](/docs/collections/running-collections/intro-to-collection-runs/) that reference vault secrets.

Enclose the vault secret in double curly braces (`{{ }}`) and prefix the secret's name with `vault:` to reference it throughout your Postman team. For example, to reference a secret named "postman-api-key", use the following syntax:

```txt
{{vault:postman-api-key}}
```

<!-- ### Use vault variables in scripts

You can get the current value of a vault variable in your scripts using the following syntax:

```js
//access a vault variable in you Postman Vault
pm.variables.get("vault:variable-key");
``` -->

> When you reference a vault secret as the initial value of a variable, the reference to the secret (for example `{{vault:secret-name}}`) is synced using Postman's cloud servers, and shared with anyone who has access to the workspace. The secret stored in your Postman Vault isn't synced or shared. Learn more about [initial and current values](/docs/sending-requests/variables/#initial-and-current-values).

<!-- -->

> Secrets stored in your Postman Vault are redacted when they're logged to the [Postman Console](/docs/sending-requests/troubleshooting-api-requests/).

## Fix unresolved vault secrets

An *unresolved vault secret* is a secret that's not defined in your Postman Vault.

A vault secret can be unresolved for the following reasons:

* The secret isn't present in your Postman Vault.
* The secret was created but the changes weren't saved.
* The secret is turned off in your Postman Vault.
* You haven't entered your vault key after signing in to Postman. Learn how to [manage your vault key](#manage-your-vault-key).

When you're working on an API request, Postman highlights unresolved vault secrets in the **URL builder**, the **Params** tab, the **Authorization** tab, and the **Headers** tab. Postman highlights unresolved secret text in red.

<!-- ![Unresolved vault secrets](https://assets.postman.com/postman-docs/v10/unresolved-postman-vault-variable-v10-22.jpg) -->

If the secret exists in your Postman Vault and it's turned off, hover over the reference to the secret, then select **Enable Secret**.

![Turn on vault secrets](https://assets.postman.com/postman-docs/v10/turn-on-postman-vault-variable-v10-22.jpg)
