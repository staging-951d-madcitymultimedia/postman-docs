---
title: "Store secrets locally as variables in your Postman Vault"
updated: 2024-01-16
early_access: true
plan: alpha
---

*Postman Vault* enables you to store secrets locally as vault variables and reuse them in Postman. This enables you to securely reuse sensitive data throughout your HTTP collections, environments, and requests. Only you can access and reuse vault variables in your Postman Vault, and vault variables aren't synced to the Postman cloud.

You can use your Postman Vault from the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/). You can also use your Postman Vault from the [Postman web app](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app) with the [Postman Desktop Agent](/docs/getting-started/basics/about-postman-agent/#the-postman-desktop-agent).

## Contents

* [Access your Postman Vault](#access-your-postman-vault)
* [Add secrets as vault variables](#add-secrets-as-vault-variables)
* [Edit variables in your Postman Vault](#edit-variables-in-your-postman-vault)
* [Use secrets stored as variables](#use-secrets-stored-as-variables)
* [Fix unresolved vault variables](#fix-unresolved-vault-variables)

## Access your Postman Vault

To access your Postman Vault, select <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-vault.jpg#icon" width="12px"> **Vault** from the Postman footer. You can also can use **Control+Shift+V** or **Ctrl+Alt+V** to access your Postman Vault. If you don't have any secrets stored in your Postman Vault, select **Add Vault Secret** to get started.

## Add secrets as vault variables

You can add secrets, such as API keys and passwords, as variables in your Postman Vault. You can also add secrets as variables from the HTTP request builder. Variables stored in your Postman Vault are encrypted using the AES-256-GCM encryption algorithm.

<!-- Vault variables are available at the *vault* variable scope. Learn more about [variable scopes](/docs/sending-requests/variables/#variable-scopes) in Postman. -->

> Only you can access variables in your Postman Vault.

To add vault variables from your Postman Vault, do the following:

1. Open your Postman Vault.
1. Enter the following values in an empty row:

    * **Key** - The name of the vault variable. Use the name to [reference the variable](#use-secrets-stored-as-variables).
    * **Value** - The value used when sending requests in your local instance of Postman. It's never synced to your account or shared with your team.

        > To show or hide a vault variable's value, hover over the variable and select the eye icon <img alt="Unmask variable icon" src="https://assets.postman.com/postman-docs/icon-eye-crossed-out.jpg#icon" width="18px">.

    <!-- * **Domains** - The comma-separated list of domains you can send requests to with the vault variable. If a domain isn't in this list, you can't send the vault variable in your requests. By default, you can include vault variables in requests to any domain. To add domains, select **All** then enter your domains. -->

1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save**.

    > If [autosave](/docs/getting-started/installation/settings/#application) is turned on, you must manually save changes to your Postman Vault.

    ![Add variables to Postman Vault](https://assets.postman.com/postman-docs/v10/add-postman-vault-variables-v10-22.jpg)

To set data as vault variables, do the following:

1. Select the data you need, for example in the address, parameters, or headers. Then select **Set as variable**.
1. Select **+ Set as new variable**.

    ![Create new variable](https://assets.postman.com/postman-docs/v10/set-data-as-new-vault-variable-v10-22.jpg)

1. Enter the **Name** of the vault variable, confirm that the **Value** is correct, and select **Vault** as the scope.
1. Select **Set Variable**.

    ![Set as new vault variable](https://assets.postman.com/postman-docs/v10/set-data-as-vault-variable-v10-22.jpg)

From the HTTP request builder, you can also [reference vault variables](#use-secrets-stored-as-variables) that don't exist yet, then add new variables to your Postman Vault. Enter the vault variable name that doesn't exist using the following syntax: `{{vault:variable-name}}`. Hover over the unresolved reference to the vault variable, enter the value, then select **Add Secret**.

![Set as new vault variable](https://assets.postman.com/postman-docs/v10/reference-and-create-new-vault-variable-v10-22.jpg)

## Edit variables in your Postman Vault

You can edit vault variables stored in your Postman Vault by adding new variables, changing a variable's name, making variables unavailable, or deleting variables.

To edit vault variables, select <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-vault.jpg#icon" width="12px"> **Vault** from the Postman footer. You can take the following actions:

* To filter the list of vault variables by name, enter text in the **Filter secrets** box.
* To sort the list of vault variables, select a column header. You can toggle between ascending and descending order.
* To add a new vault variable, select **Add new secret** in the bottom row of the table.
* To delete a vault variable, hover over a variable and select the delete icon <img alt="Delete link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px" />.
* To make a vault variable unavailable without deleting it, clear the checkbox next to the variable. Any references to the variable will be unresolved. To make the variable available again, select the checkbox.
* Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save any changes you've made.

> If [autosave](/docs/getting-started/installation/settings/#application) is turned on, you must manually save changes to your Postman Vault.

![Edit vault variables](https://assets.postman.com/postman-docs/v10/edit-postman-vault-variables-v10-22.jpg)

## Use secrets stored as variables

You can reference vault variables in your HTTP collections and requests in your Postman team. You can reference vault variables as the values of your [global](/docs/sending-requests/variables/#defining-global-variables), [environment](/docs/sending-requests/variables/#defining-environment-variables), and [collection](/docs/sending-requests/variables/#defining-collection-variables) variables. You can also use the [Collection Runner](/docs/collections/running-collections/intro-to-collection-runs/) to [manually run collections](/docs/collections/running-collections/intro-to-collection-runs/) that reference vault variables.

Use double curly braces and prefix the vault variable's name with `vault:` to reference it throughout your Postman team. For example, to reference a variable named "postman-api-key", use the following syntax:

```txt
{{vault:postman-api-key}}
```

<!-- ### Use vault variables in scripts

You can get the current value of a vault variable in your scripts using the following syntax:

```js
//access a vault variable in you Postman Vault
pm.variables.get("vault:variable-key");
``` -->

> When you reference a vault variable as the initial value of a variable, the reference to the vault variable (for example `{{vault:variable-name}}`) is synced using Postman's cloud servers, and shared with anyone who has access to the workspace. The secret stored in your Postman Vault isn't synced or shared. Learn more about [initial and current values](/docs/sending-requests/variables/#initial-and-current-values).

<!-- -->

> Variables stored in your Postman Vault are redacted when they're logged to the [Postman Console](/docs/sending-requests/troubleshooting-api-requests/).

## Fix unresolved vault variables

An *unresolved vault variable* is a variable that's not defined in the Postman Vault.

A vault variable can be unresolved for the following reasons:

* The variable isn't present in your Postman Vault
* The variable was created but the changes weren't saved
* The variable is turned off in your Postman Vault

When you're working on an API request, Postman highlights unresolved variables in the **URL builder**, the **Params** tab, the **Authorization** tab, and the **Headers** tab. Postman highlights unresolved variable text in red.

![Unresolved vault variables](https://assets.postman.com/postman-docs/v10/unresolved-postman-vault-variable-v10-22.jpg)

If the variable exists in your Postman Vault and it's turned off, hover over the reference to the variable, then select **Enable Secret**.

![Turn on vault variables](https://assets.postman.com/postman-docs/v10/turn-on-postman-vault-variable-v10-22.jpg)
