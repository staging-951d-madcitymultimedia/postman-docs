---
title: "Store secrets locally in your Postman Vault"
updated: 2024-01-10
early_access: true
plan: alpha
---

*Postman Vault* enables you to store secrets locally and reuse them throughout your Postman workspaces. This enables you to securely reuse sensitive data throughout your HTTP collections, environments, and requests. Only you can access and reuse vault secrets in your Postman Vault, and secrets aren't synced to the Postman cloud.

You can use your Postman Vault from the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/). You can also use your Postman Vault from the [Postman web app](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app) with the [Postman Desktop Agent](/docs/getting-started/basics/about-postman-agent/#the-postman-desktop-agent).

## Contents

* [Access your Postman Vault](#access-your-postman-vault)
* [Add sensitive data as secrets](#add-sensitive-data-as-secrets)
* [Edit secrets](#edit-secrets)
* [Use secrets](#use-secrets)
* [Fix unresolved secrets](#fix-unresolved-secrets)

## Access your Postman Vault

To access your Postman Vault, select <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-vault.jpg#icon" width="12px"> **Vault** from the Postman footer. You can also use **Control+Shift+V** or **Ctrl+Shift+V** to access your Postman Vault. If you don't have any secrets stored in your Postman Vault, select **Add Vault Secret** to get started.

## Add sensitive data as secrets

You can add sensitive data, such as API keys and passwords, as local secrets in your Postman Vault. You can also add secrets from the HTTP request builder. When you sign out of Postman, secrets are cleared from your Postman Vault.<!-- Secrets stored in your Postman Vault are encrypted using the AES-256-GCM encryption algorithm. -->

Vault secrets are available at the *vault* scope. Learn more about [scopes](/docs/sending-requests/variables/#variable-scopes) in Postman.

> Only you can access secrets stored in your Postman Vault.

To add secrets to your Postman Vault, do the following:

1. Open your Postman Vault.
1. Enter the following values in an empty row:

    * **Key** - The name of the vault secret. Use the name to [reference the secret](#use-secrets).
    * **Value** - The value used when sending requests in your local instance of Postman. It's never synced to your account or shared with your team.

        > To show or hide a vault secret's value, hover over the secret and select the eye icon <img alt="Unmask secret icon" src="https://assets.postman.com/postman-docs/icon-eye-crossed-out.jpg#icon" width="18px">.

    <!-- * **Domains** - The comma-separated list of domains you can send requests to with the vault variable. If a domain isn't in this list, you can't send the vault variable in your requests. By default, you can include vault variables in requests to any domain. To add domains, select **All** then enter your domains. -->

1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save**.

    > If [autosave](/docs/getting-started/installation/settings/#application) is turned on, you must manually save changes to your Postman Vault.

    ![Add secrets to Postman Vault](https://assets.postman.com/postman-docs/v10/add-postman-vault-variables-v10-22.jpg)

To set data as vault secrets, do the following:

1. Select the data you need, for example in the address, parameters, or headers of a request. Then select **Set as variable**.
1. Select **+ Set as new variable**.

    ![Create new variable](https://assets.postman.com/postman-docs/v10/set-data-as-new-vault-variable-v10-22.jpg)

1. Enter the **Name** of the vault secret, confirm that the **Value** is correct, and select **Vault** as the scope.
1. Select **Set Variable**.

    ![Set as new vault variable](https://assets.postman.com/postman-docs/v10/set-data-as-vault-variable-v10-22.jpg)

From the HTTP request builder, you can also [reference vault secrets](#use-secrets) that don't exist yet, then add new secrets to your Postman Vault. Enter a name that doesn't exist using the following syntax: `{{vault:secret-name}}`. Hover over the unresolved reference to the secret, enter the value, then select **Add Secret**.

![Set as new vault secret](https://assets.postman.com/postman-docs/v10/reference-and-create-new-vault-variable-v10-22.jpg)

## Edit secrets

You can edit secrets stored in your Postman Vault by adding new secrets, changing a secret's name, making secrets unavailable, or deleting secrets.

To edit vault secrets, select <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-vault.jpg#icon" width="12px"> **Vault** from the Postman footer. You can take the following actions:

* To filter the list of vault secrets by name, enter text in the **Filter secrets** box.
* To sort the list of vault secrets, select a column header. You can toggle between ascending and descending order.
* To add a new vault secrets, select **Add new secret** in the bottom row of the table.
* To delete a vault secret, hover over a secrets and select the delete icon <img alt="Delete link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px" />.
* To make a vault secret unavailable without deleting it, clear the checkbox next to the secret. Any references to the secret will be unresolved. To make the secret available again, select the checkbox.
* Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save any changes you've made.

> If [autosave](/docs/getting-started/installation/settings/#application) is turned on, you must manually save changes to your Postman Vault.

![Edit vault secrets](https://assets.postman.com/postman-docs/v10/edit-postman-vault-variables-v10-22.jpg)

## Use secrets

You can reference vault secrets in your HTTP collections and requests in your Postman team. You can reference vault secrets as the values of your [global](/docs/sending-requests/variables/#defining-global-variables), [environment](/docs/sending-requests/variables/#defining-environment-variables), and [collection](/docs/sending-requests/variables/#defining-collection-variables) variables. You can also use the Collection Runner to [manually run collections](/docs/collections/running-collections/intro-to-collection-runs/) that reference vault secrets.

Use double curly braces and prefix the vault secret's name with `vault:` to reference it throughout your Postman team. For example, to reference a secret named "postman-api-key", use the following syntax:

```txt
{{vault:postman-api-key}}
```

<!-- ### Use vault variables in scripts

You can get the current value of a vault variable in your scripts using the following syntax:

```js
//access a vault variable in you Postman Vault
pm.variables.get("vault:variable-key");
``` -->

> When you reference a vault secret as the initial value of a variable, the reference to the vault secret (for example `{{vault:secret-name}}`) is synced using Postman's cloud servers, and shared with anyone who has access to the workspace. The secret stored in your Postman Vault isn't synced or shared. Learn more about [initial and current values](/docs/sending-requests/variables/#initial-and-current-values).

<!-- -->

> Secrets stored in your Postman Vault are redacted when they're logged to the [Postman Console](/docs/sending-requests/troubleshooting-api-requests/).

## Fix unresolved secrets

An *unresolved vault secret* is a secret that's not defined in the Postman Vault.

A vault secret can be unresolved for the following reasons:

* The secret isn't present in your Postman Vault.
* The secret was created but the changes weren't saved.
* The secret is turned off in your Postman Vault.

> When you sign out of Postman, secrets are cleared from your Postman Vault.

When you're working on an API request, Postman highlights unresolved vault secrets in the **URL builder**, the **Params** tab, the **Authorization** tab, and the **Headers** tab. Postman highlights unresolved secret text in red.

<!-- ![Unresolved vault secrets](https://assets.postman.com/postman-docs/v10/unresolved-postman-vault-variable-v10-22.jpg) -->

If the secret exists in your Postman Vault and it's turned off, hover over the reference to the secret, then select **Enable Secret**.

![Turn on vault secrets](https://assets.postman.com/postman-docs/v10/turn-on-postman-vault-variable-v10-22.jpg)
