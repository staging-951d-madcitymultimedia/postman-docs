---
title: "Store secrets as local variables in your Postman vault"
updated: 2024-01-15
---

*Postman vault* enables you to store secrets locally as variables and reuse them in Postman. You can store secret variables in your Postman vault to reuse them throughout your HTTP collections, requests, and test scripts. Secret variables are locally available to reuse in all of your workspaces, and aren't synced to the Postman cloud. Store values as variables in your Postman vault to securely store and reuse sensitive data while using Postman.

<!-- TODO: add screenshot -->

## Contents

* [Access your Postman vault](#access-your-postman-vault)
* [Add secrets as variables](#add-secrets-as-variables)
* [Edit secret variables in your Postman vault](#edit-secret-variables-in-your-postman-vault)
* [Use secrets stored as variables](#use-secrets-stored-as-variables)
* [Fixing unresolved secret variables](#fixing-unresolved-secret-variables)

## Access your Postman vault

To access your Postman vault, select <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-vault.jpg#icon" width="12px"> **Vault** from the Postman footer. If you don't have any secrets stored in your Postman vault, select **Add Vault Secret** to get started.

## Add secrets as variables

You can add secrets as variables from your Postman vault. You can also add secrets as variables from the HTTP request builder. Secret variables stored in your Postman vault are encrypted using the AES-256-GCM encryption algorithm.

To add secrets from your Postman vault, do the following:

1. Open your Postman vault.
1. Enter the following values in an empty row:

    * **Key** - The name of the secret variable. Use the name to [reference the variable](#use-secrets-stored-as-variables) in your HTTP collections, requests, and test scripts.
    * **Value** - The value used when sending requests in your local instance of Postman. It's never synced to your account or shared with your team.

        > To show or hide a secret variable's value, hover over the variable and select the eye icon <img alt="Unmask variable icon" src="https://assets.postman.com/postman-docs/icon-eye-crossed-out.jpg#icon" width="18px">.

    * **Domains** - The comma-separated list of domains you can send requests to with the secret variable. If a domain isn't in this list, you can't send the secret variable in your requests. By default, you can include secret variables in requests to any domain. To add domains, select **All** then enter your domains.

1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save**.

    <!-- TODO: add screenshot -->

To set data as secret variables from the HTTP request builder, do the following:

1. Select the data you need, for example in the address, parameters, or headers. Select **Set as variable**.
1. Select **Set as new variable**.
1. Enter the **Name** of the secret variable, confirm the **Value** is correct, and select **Vault** as the scope. Select **Set variable**.

    <!-- TODO: add screenshot -->

You can also [reference secret variables](#use-secrets-stored-as-variables) that don't exist from the HTTP request builder, enabling you to add new variables to your Postman vault. Enter the secret variable name that doesn't exist using the following syntax: `{{vault:variable-name}}`. Hover over the reference to the secret variable, select **Enter value**, enter a value, then select **Add Secret**.

<!-- TODO: add screenshot -->

## Edit secret variables in your Postman vault

You can edit secret variables stored in your Postman vault by adding new variables, changing a variable's name and domains, making variables unavailable, or deleting variables.

To edit secret variables, select **Vault** from the Postman footer. You can take the following actions:

* To filter the list of secret variables by name, enter text in the **Filter secrets** box.
* To sort the list of secret variables, select a column header. You can toggle between ascending and descending order.
* To add a new secret variable, select **Add new secret** in the bottom row of the table.
* To delete a secret variable, hover over a variable and select the delete icon <img alt="Delete link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px" />.
* To make a secret variable unavailable without deleting it, clear the checkbox next to the variable. Any references to the variable will be unresolved. To make the variable available again, select the checkbox.
* Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save any changes you've made.

<!-- TODO: add screenshot -->

## Use secrets stored as variables

You can reference secret variables stored in your Postman vault in any of your workspaces in your Postman team. Use double curly braces and prefix the variable's name with `vault:` to reference secret variables throughout Postman. For example, to reference a variable named "api-key", use the following syntax:

```txt
{{vault:api-key}}
```

<!-- TODO: add screenshot -->

> Secret variables stored in your Postman vault are redacted when you log variable values to the Postman Console.

## Fixing unresolved secret variables

An *unresolved variable* is a secret variable that's not defined in the Postman vault.

A secret variable can be unresolved for the following reasons:

* The variable isn't present in your Postman vault
* The variable was created but the changes weren't saved
* The variable is turned off in your Postman vault

When you're' working on an API request, Postman highlights unresolved variables in the **URL builder**, the **Params** tab, the **Authorization** tab, and the **Headers** tab. Postman highlights unresolved variable text in red. For more details about the error and how to resolve it, hover over the unresolved variable.

<!-- TODO: add screenshot -->

If the secret variable exists in the Postman vault and it's turned off, select the reference to the variable, then select **Enable Secret**.

<!-- TODO: add screenshot -->
