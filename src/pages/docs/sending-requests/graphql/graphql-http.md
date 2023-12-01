---
title: "Other GraphQL requests"
page_id: "graphql-http"
updated: 2023-11-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Creating GraphQL Requests | Postman Level Up"
    url: "https://youtu.be/Zq7H8kYIQIU"
  - type: link
    name: "Editing GraphQL Queries | Postman Level Up"
    url: "https://youtu.be/kygb3sf3Nhc"
  - type: link
    name: "Loading GraphQL Schemas | Postman Level Up"
    url: "https://youtu.be/wlVpIqImRZk"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Don’t Panic: A Developer’s Guide to Building Secure GraphQL APIs"
    url: "https://blog.postman.com/how-to-build-secure-graphql-apis/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Public GraphQL APIs"
    url: "https://www.postman.com/cs-demo/workspace/9e8c8a19-bb76-46af-9e8d-5747bf8fcce5"
  - type: link
    name: "GraphQL Examples"
    url:  "https://www.postman.com/devrel/workspace/f12c0652-9c9d-4813-968b-c8ed0b3f0022"
  - type: link
    name: "Working with GraphQL collection"
    url: "https://www.postman.com/postman/workspace/postman-team-collections/collection/1559645-c0dd3eb3-5258-4ddd-a6e4-2780c5212e33?ctx=documentation"
warning: false

---

Postman's [GraphQL client](/docs/sending-requests/graphql/graphql-overview/) is tailored for making GraphQL requests. However, you can also use Postman's [standard HTTP request interface](/docs/sending-requests/requests/) to create GraphQL requests with a few extra steps.

## Contents

* [Using Postman's built-in support for GraphQL](#using-postmans-built-in-support-for-graphql)
* [Using JSON in the request body](#using-json-in-the-request-body)
* [Using a GraphQL content type header](#using-a-graphql-content-type-header)
* [Importing the query as a cURL request](#importing-the-query-as-a-curl-request)

## Using Postman's built-in support for GraphQL

Postman has built-in support for [sending GraphQL queries in the request body](#sending-graphql-queries-in-the-request-body), [using GraphQL variables](#using-graphql-variables), and [introspection and importing GraphQL schemas](#introspection-and-importing-graphql-schemas).

### Sending GraphQL queries in the request body

1. Select **New > HTTP** and enter a GraphQL endpoint URL in the URL field.
1. Select `POST` from the request method dropdown list.
1. Under the **Body** tab, select the **GraphQL** body type.
1. Enter your GraphQL query in the **Query** editor. The editor enables you to write and edit queries and variables separately.
1. Select **Send**.

    ![Select the GraphQL body type](https://assets.postman.com/postman-docs/v10/graphql-http-query-v10-20.jpg)

### Using GraphQL variables

1. Enter your GraphQL variables in the **GraphQL variables** editor.
1. In the **Query** editor, declare the GraphQL variable in your query. For more information on how to use GraphQL variables, see the [GraphQL variables documentation](https://graphql.org/learn/queries/#variables).

    ![Using GraphQL variables](https://assets.postman.com/postman-docs/v10/graphql-http-variables-v10-20.jpg)

> You can also [use Postman variables](/docs/sending-requests/variables/) as data inputs for GraphQL variables using `{{variable}}` syntax.

### Introspection and importing GraphQL schemas

To enable autocompletion while writing queries, your request needs a GraphQL schema. When you enter a GraphQL endpoint URL in the URL field, Postman automatically fetches the GraphQL schema using introspection. When Postman successfully auto-fetches a schema, a notification appears next to the schema selection list. If your schema has changed, select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> to pull in the changes.

<img src="https://assets.postman.com/postman-docs/v10/graphql-autofetch-schema-v10-20.jpg" width="355px" alt="GraphQL auto-fetch schema"/>

You also have the option to manually import a schema into your request. After [creating or importing a GraphQL API](/docs/designing-and-developing-your-api/creating-an-api/) into your workspace, you can use that API's schema for your request instead of the auto-fetched schema.

To import a GraphQL schema into your request manually, do the following:

1. [Create or import a GraphQL API](/docs/designing-and-developing-your-api/creating-an-api/) in your workspace.
1. Select **New > HTTP** and enter a GraphQL endpoint URL in the URL field.
1. Select `POST` from the request method dropdown list.
1. Under the **Body** tab, select the **GraphQL** body type.
1. Select the arrow next to **Auto Fetch** to open the schema selection dropdown list.
1. Select your schema from the dropdown list.

  > You may need to refresh by selecting the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px">.

  When you write your query, Postman suggests autocomplete options from the data in the selected GraphQL schema.

## Using JSON in the request body

1. Open a new request tab in Postman and enter your GraphQL endpoint URL in the address field.
1. Select `POST` from the request method dropdown list.
1. Under the **Headers** tab, add the `Content-type` of `application/json`.
1. Under the **Body** tab, select the **raw** body type. Choose **JSON** from the format dropdown list.
1. Construct your query in the request body using proper JSON formatting.

    ![GraphQL JSON request body](https://assets.postman.com/postman-docs/v10/graphql-http-json-body-v10-20.jpg)

## Using a GraphQL content type header

1. Select **New > HTTP** and enter a GraphQL endpoint URL in the URL field.
1. Select `POST` from the request method dropdown list.
1. Under the **Body** tab, select the **GraphQL** body type.
1. Under the **Headers** tab, add the `Content-type` of `application/graphql`.

    ![Set the content-type header](https://assets.postman.com/postman-docs/v10/graphql-http-content-type-v10-20.jpg)

1. Under the **Body** tab, select the **raw** body type. Choose **Text** from the format dropdown list.
1. Build your query in the request body using standard GraphQL formatting.

    ![GraphQL query request body](https://assets.postman.com/postman-docs/v10/graphql-http-content-type-body-v10-20-1.jpg)

## Importing the query as a cURL request

1. Select **Import**.
1. Paste your cURL command in the request bar. Your cURL command must contain a GraphQL endpoint URL and must specify the `POST` request method. Postman opens the request in a new tab with the specified GraphQL endpoint URL and the `POST` request method selected.
