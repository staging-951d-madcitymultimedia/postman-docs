---
title: "Store secrets locally as variables in your Postman vault"
updated: 2024-01-15
---

*Postman vault* enables you to store secrets locally as vault variables and reuse them in Postman. This enables you to securely reuse sensitive data throughout your HTTP collections and requests. Only you can access and reuse vault variables in your Postman vault, and vault variables aren't synced to the Postman cloud.

You can use your Postman vault from the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/). You can also use your Postman vault from the [Postman web app](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app) with the [Postman Desktop Agent](/docs/getting-started/basics/about-postman-agent/#the-postman-desktop-agent).

## Contents

* [Access your Postman vault](#access-your-postman-vault)
* [Add secrets as vault variables](#add-secrets-as-vault-variables)
* [Edit variables in your Postman vault](#edit-variables-in-your-postman-vault)
* [Use secrets stored as variables](#use-secrets-stored-as-variables)
* [Run collections with vault variables](#run-collections-with-vault-variables)
* [Fix unresolved vault variables](#fix-unresolved-vault-variables)

## Access your Postman vault

To access your Postman vault, select <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-vault.jpg#icon" width="12px"> **Vault** from the Postman footer. You can also can use **Control+Shift+V** or **Ctrl+Alt+V** to access your Postman vault. If you don't have any secrets stored in your Postman vault, select **Add Vault Secret** to get started.

## Add secrets as vault variables

You can add secrets, such as API keys and passwords, as variables in your Postman vault. You can also add secrets as variables from the HTTP request builder. Variables stored in your Postman vault are encrypted using the AES-256-GCM encryption algorithm.

> Team members can't access variables in your Postman vault.

To add vault variables from your Postman vault, do the following:

1. Open your Postman vault.
1. Enter the following values in an empty row:

    * **Key** - The name of the vault variable. Use the name to [reference the variable](#use-secrets-stored-as-variables) in your HTTP collections and requests.
    * **Value** - The value used when sending requests in your local instance of Postman. It's never synced to your account or shared with your team.

        > To show or hide a vault variable's value, hover over the variable and select the eye icon <img alt="Unmask variable icon" src="https://assets.postman.com/postman-docs/icon-eye-crossed-out.jpg#icon" width="18px">.

    <!-- * **Domains** - The comma-separated list of domains you can send requests to with the vault variable. If a domain isn't in this list, you can't send the vault variable in your requests. By default, you can include vault variables in requests to any domain. To add domains, select **All** then enter your domains. -->

1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save**.

    > If [autosave](/docs/getting-started/installation/settings/#application) is turned on, you must manually save changes to your Postman vault.

    ![Add variables to Postman vault](https://assets.postman.com/postman-docs/v10/add-postman-vault-variables-v10-22.jpg)

To set data as vault variables from the HTTP request builder, do the following:

1. Select the data you need, for example in the address, parameters, or headers. Then select **Set as variable**.
1. Select **+ Set as new variable**.

    ![Create new variable](https://assets.postman.com/postman-docs/v10/set-data-as-new-vault-variable-v10-22.jpg)

1. Enter the **Name** of the vault variable, confirm that the **Value** is correct, and select **Vault** as the scope.
1. Select **Set Variable**.

    ![Set as new vault variable](https://assets.postman.com/postman-docs/v10/set-data-as-vault-variable-v10-22.jpg)

From the HTTP request builder, you can also [reference vault variables](#use-secrets-stored-as-variables) that don't exist yet, then add new variables to your Postman vault. Enter the vault variable name that doesn't exist using the following syntax: `{{vault:variable-name}}`. Hover over the unresolved reference to the vault variable, enter the value, then select **Add Secret**.

![Set as new vault variable](https://assets.postman.com/postman-docs/v10/reference-and-create-new-vault-variable-v10-22.jpg)

## Edit variables in your Postman vault

You can edit vault variables stored in your Postman vault by adding new variables, changing a variable's name, making variables unavailable, or deleting variables.

To edit vault variables, select **Vault** from the Postman footer. You can take the following actions:

* To filter the list of vault variables by name, enter text in the **Filter secrets** box.
* To sort the list of vault variables, select a column header. You can toggle between ascending and descending order.
* To add a new vault variable, select **Add new secret** in the bottom row of the table.
* To delete a vault variable, hover over a variable and select the delete icon <img alt="Delete link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px" />.
* To make a vault variable unavailable without deleting it, clear the checkbox next to the variable. Any references to the variable will be unresolved. To make the variable available again, select the checkbox.
* Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save any changes you've made.

> If [autosave](/docs/getting-started/installation/settings/#application) is turned on, you must manually save changes to your Postman vault.

![Edit vault variables](https://assets.postman.com/postman-docs/v10/edit-postman-vault-variables-v10-22.jpg)

## Use secrets stored as variables

You can reference variables stored in your Postman vault in any of your workspaces in your Postman team. Use double curly braces and prefix the vault variable's name with `vault:` to reference it throughout your Postman team. For example, to reference a variable named "api-key", use the following syntax:

```txt
{{vault:api-key}}
```

<!-- ### Use vault variables in scripts

You can get the current value of a vault variable in your scripts using the following syntax:

```js
//access a vault variable in you Postman vault
pm.variables.get("vault:variable-key");
``` -->

> Variables stored in your Postman vault are redacted when they're logged to the [Postman Console](/docs/sending-requests/troubleshooting-api-requests/).

## Run collections with vault variables

You can use the [Collection Runner](/docs/collections/running-collections/intro-to-collection-runs/) to run collections that reference vault variables. You can learn more about [running collections manually](/docs/collections/running-collections/intro-to-collection-runs/) and [scheduling collection runs](/docs/collections/running-collections/scheduling-collection-runs/).

## Fix unresolved vault variables

An *unresolved vault variable* is a variable that's not defined in the Postman vault.

A vault variable can be unresolved for the following reasons:

* The variable isn't present in your Postman vault
* The variable was created but the changes weren't saved
* The variable is turned off in your Postman vault

When you're' working on an API request, Postman highlights unresolved variables in the **URL builder**, the **Params** tab, the **Authorization** tab, and the **Headers** tab. Postman highlights unresolved variable text in red.

![Unresolved vault variables](https://assets.postman.com/postman-docs/v10/unresolved-postman-vault-variable-v10-22.jpg)

If the variable exists in your Postman vault and it's turned off, hover over the reference to the variable, then select **Enable Secret**.

![Turn on vault variables](https://assets.postman.com/postman-docs/v10/turn-on-postman-vault-variable-v10-22.jpg)
