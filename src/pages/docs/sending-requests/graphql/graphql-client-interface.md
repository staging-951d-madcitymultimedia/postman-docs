---
title: "The GraphQL client interface"
page_id: "graphql-client-interface"
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

This guide is a high-level overview of the GraphQL client interface.

Postman has a special client for GraphQL requests called the GraphQL client. When you create a GraphQL request in Postman, the GraphQL client loads automatically. The GraphQL client has features that enable you to create and send GraphQL requests more efficiently.

The GraphQL client interface has three main sections:

* Request
* Response
* Right sidebar

![Different sections of a GraphQL request](https://assets.postman.com/postman-docs/v10/graphql-request-full-view-v10-4.jpg)

## Contents

* [The request section](#the-request-section)
* [The response section](#the-response-section)
* [The right sidebar](#the-right-sidebar)
* [Next steps](#next-steps)

## The request section

In the GraphQL client's request section you can enter an endpoint in the URL field as you would in the regular Postman HTTP request interface. But the GraphQL client adds GraphQL-specific features, including an interactive schema explorer and a query editor.

<img src="https://assets.postman.com/postman-docs/v10/graphql-request-section-v10-20-6.jpg" alt="The request section">

* **Protocol dropdown list** - Change the protocol for a new request. Select the protocol dropdown list then select a request protocol.

    <img src="https://assets.postman.com/postman-docs/v10/change-protocol-v10-20.jpg" alt="Change protocol" width="216"/>

    > You can't change the request protocol after you save the request.

* **URL field** - Enter the GraphQL server's URL here. You can also select this field to browse through entered URLs you've already used.
* **Tabs**
    * **Query** - The **Query** tab has three subsections: the schema explorer, the query editor, and the variables editor.
    * **Authorization** - You can enter authorization credentials here. You can choose from a list of auth types including API Key, Basic auth, and Bearer token. Learn more about [authorizing requests](/docs/sending-requests/authorization/authorization).
    * **Headers** - The **Headers** tab enables you to pass headers with the request in the form of key-value pairs. The client uses these headers to provide information about the call to the server.
    * **Schema** - The **Schema** tab lets you configure a GraphQL schema to make the client aware of the data fields available from the server. You can select an API from a Postman workspace, import a schema from your computer, or use GraphQL introspection.
    * **Scripts** - The **Scripts** tab accesses Postman's powerful scripting environment that enables you to add JavaScript code (scripts) to your GraphQL requests. You can use scripts to write API tests, debug your requests by logging them to the [Postman Console](https://learning.postman.com/docs/sending-requests/troubleshooting-api-requests/), or dynamically read or update the values of [variables](https://learning.postman.com/docs/sending-requests/variables/).
* **Schema explorer** - When you enter a GraphQL server's endpoint in the **URL field**, the endpoint's schema appears here. The schema explorer is also an interactive visual query editor where you can browse and select fields and arguments to [build queries](/docs/sending-requests/graphql/graphql-client-first-request/#create-a-graphql-request-with-one-query) in the query editor.
* **Save button** - Saves the request to a collection. GraphQL requests can't be saved to collections that contain HTTP requests.
* **Query button** - Executes the queries in the query editor. If there are multiple queries, a dropdown list is available where you can select individual queries to execute.
* **Query editor** - Build and edit queries here. You can enter queries manually or build them with the schema explorer. You can [create multiple queries](/docs/sending-requests/graphql/graphql-client-first-request/#create-a-graphql-request-with-multiple-queries) in the query editor and run them individually.
* **Variables editor** - Create and edit your request's variables here. The variables editor is collapsed by default. Select the arrow next to **Variables** to expand it.

## The response section

When you execute a query, the response from the server appears here. The GraphQL client's response section is similar to Postman's regular [response viewer](/docs/sending-requests/responses/).

The GraphQL client response section has the following tabs:

<img src="https://assets.postman.com/postman-docs/v10/graphql-response-v10-20.jpg" alt="The response section">

* **Body** - Shows the data returned by the server for the fields in the query. You can format the body with **Pretty** and **Table**.
* **Headers** - Shows headers returned by the server.
* **Test Results** - Shows results for assertions in the scripts section. Results can be one of three types: Passed, Failed, or Skipped.

### Multiple responses

For subscription-type queries that return multiple responses over a persistent connection, the response section shows a list of messages in reverse chronological order, with the most recent message at the top. The messages can contain responses from the server or other information about the request like subscription confirmations or completion messages.

<img src="https://assets.postman.com/postman-docs/v10/graphql-multiple-responses-v10-20.jpg" alt="Multiple responses">

Select a message to expand it and see its contents. You can search for specific messages with the search icon <img alt="Search icon" src="https://assets.postman.com/postman-docs/icon-search-v9.jpg#icon" width="16px">. You can also filter for all messages, responses only, or other types of messages. Select **Clear messages** to remove all the messages from the response section. You can select **Restore** to show them again.

## The right sidebar

The GraphQL client's right sidebar gives you access to documentation, comments, and information about your request.

* **Documentation** - View descriptions of the fields and arguments in your query. Postman automatically generates detailed documentation tailored to each request, pulling relevant descriptions and type information from the schema. You can add descriptions by selecting **Add description** then entering your content using [Postman's built-in editing tools](/docs/publishing-your-api/authoring-your-documentation/#writing-descriptions-in-the-postman-editor/). You can also select **Generate with Postbot** to use [Postman's AI assistant](/docs/getting-started/basics/about-postbot/) to document your request.
* **Comments** - Select the comments icon	<img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> to collaborate with your teammates as you work on an API. You can use `@` to tag others to ask a question, give feedback, and discuss your API.
* **Info** - Select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> to view details about your request, like the request ID and creation date.

## Next steps

After learning about the basic interface elements, try [making your first GraphQL query](/docs/sending-requests/graphql/graphql-client-first-request/).
