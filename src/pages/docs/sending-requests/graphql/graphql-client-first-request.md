---
title: "Create GraphQL requests in Postman"
page_id: "graphql-client-first-request"
updated: 2023-11-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "GraphQL in Postman Demo"
    url: "https://youtu.be/7pUbezVADQs"
  - type: link
    name: "GraphQL introspection | Postman Level Up"
    url: "https://youtu.be/k-j3FwTjJkE"
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

Create a GraphQL request with Postman's GraphQL client.

The GraphQL client interface is specifically designed for crafting GraphQL requests, enabling you to explore an API's data fields and construct queries by selecting fields.

> You can also create GraphQL requests [with Postman's regular interface](/docs/sending-requests/graphql/graphql-http/), which supports GraphQL but may require extra steps.

## Contents

* [Create a GraphQL query](#create-a-graphql-query)
* [Create multiple GraphQL queries](#create-multiple-graphql-queries)

## Create a GraphQL query

This example creates and executes a GraphQL query using the schema explorer.

> If you are using the Postman web app, you must use the Postman Desktop Agent. See [About the Postman Agent](/docs/getting-started/basics/about-postman-agent/) for more information.

1. In Postman, select **New > GraphQL** to open a request in a new tab. (In the Postman desktop app, you can also select **⌘+N** or **Ctrl+N**, then select **GraphQL**.)
1. Select the URL field, then enter your URL or select `https://graphql.postman-echo.com/graphql` from the dropdown list. Postman uses introspection to load the schema and populate the schema explorer with data fields.
    > In the schema explorer, the data fields are grouped under their respective types: **Query**, **Mutation**, and **Subscription**.
1. In the schema explorer, select the `hello` field, then select arguments `person`, `age`, and `name`. A query based on your selections appears in the query editor.
1. Enter your age and name in the input boxes next to `age` and `name` or in the query editor.
1. Select **Query**.

![GraphQL Request](https://assets.postman.com/postman-docs/v10/graphql-schema-explorer-v10-2.gif)

## Create multiple GraphQL queries

The GraphQL request interface enables you to create multiple queries and execute them one at a time. You can select a checkbox in the schema explorer and select **Query** to execute only the selected query.

<img src="https://assets.postman.com/postman-docs/v10/sending-multiquery-v10-1.gif" alt="Sending a single query using the Schema Explorer">

You can also use the **Query** button dropdown to browse and select queries.

<img src="https://assets.postman.com/postman-labs-docs/graphql-docs/multiquery-switcher.jpg" alt="Sending multiple queries using the Query button">
