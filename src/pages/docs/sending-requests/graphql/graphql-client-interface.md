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

GraphQL requests in Postman include a variety of tools, views, and controls to help you debug and document your GraphQL API effectively and efficiently. This topic highlights the parts of the request interface and the response and explains how to use them.

![Different sections of a GraphQL request](https://assets.postman.com/postman-docs/v10/graphql-request-full-view-v10-4.jpg)

## Contents

* [The request interface](#the-request-interface)
* [Understanding the response](#understanding-the-response)
* [Multiple responses](#multiple-responses)
* [The right sidebar](#the-right-sidebar)
* [Next steps](#next-steps)

## The request interface

The request interface enables you to add configurations to connect to the server and execute the query. You can define the URL, load the schema, build your query, and select **Query** to execute it. Based on the API requirements, you may also need to pass authorization details, metadata, and settings along with the query.

<img src="https://assets.postman.com/postman-docs/v10/graphql-request-section-v10-20-5.jpg" alt="Different sections of the request interface">

* **Protocol dropdown list** - You can change the protocol for a new request. In the request, select the protocol dropdown list then select a request protocol.

    <img src="https://assets.postman.com/postman-docs/v10/change-protocol-v10-20.jpg" alt="Change protocol" width="216"/>

    > You can't change the request protocol after you save the request.

* **URL field** - Enter the endpoint where the service is hosted here. While creating a new request, you can also browse through URLs you've used by selecting the URL field. This helps you create the request faster when you're executing different queries with the same endpoint.
* **Query tab** - The **Query** tab has three subsections: the schema explorer, the query editor, and the variables editor.
    * **Schema explorer** - Once the schema is loaded, the available data fields, arguments, and descriptions appear in this section. The schema explorer also doubles as an interactive visual query editor enabling you to select individual fields and arguments to build your query.
    * **Query editor** - Build and edit your queries here.
    * **Variables editor** - GraphQL enables you to pass variables as arguments for values defined dynamically in the client. You can use those variables in the query and define their values separately using the variables editor.
* **Save button** - Saves the request into a collection so that you can reuse it later or document and share it with others.
* **Query button** - Once you have defined the URL and built the query, you can select **Query** to execute it. Once the query is executed, the server sends back a response with the requested data.
* **Other tabs** - The GraphQL client interface also includes the following tabs:
    * **Authorization** - You can enter authorization credentials here. You can choose from a list of auth types including API Key, Basic auth, and Bearer token. Learn more about [authorizing requests](/docs/sending-requests/authorization/authorization).
    * **Headers** - The **Headers** tab enables you to pass headers with the request in the form of key-value pairs. The client uses these headers to provide information about the call to the server.
    * **Schema** - The **Schema** tab lets you configure a GraphQL schema to make the client aware of the data fields available from the server. You can select an API from a Postman workspace, import a schema from your computer, or use GraphQL introspection.
    * **Scripts** - The **Scripts** tab accesses Postman's powerful scripting environment that enables you to add JavaScript code (scripts) to your GraphQL requests. You can use scripts to write API tests, debug your requests by logging them to the [Postman Console](https://learning.postman.com/docs/sending-requests/troubleshooting-api-requests/), or dynamically read or update the values of [variables](https://learning.postman.com/docs/sending-requests/variables/).

## Understanding the response

When you execute a query, the response from the server appears in the response area.

The response section has the following items for a single response:

* **Body** - This tab shows the data returned by the server for the fields mentioned in the query.
* **Wrap lines** - Select the wrap lines icon <img alt="Search icon" src="https://assets.postman.com/postman-docs/icons/wrap-lines-icon-v10-20.jpg#icon" width="18px"> to convert long lines of text into multiple lines so they don't extend beyond the boundary of the response section.
* **Search** - Select the search icon <img alt="Search icon" src="https://assets.postman.com/postman-docs/icon-search-v9.jpg#icon" width="16px"> to look for specific elements within the response.
* **Headers** - This tab shows headers returned by the server, which typically include information about the execution.
* **Test results** - This tab shows results for assertions you write in the scripts section. Based on the test script, the results can be one of three types: Passed, Failed, or Skipped.

### Multiple responses

While executing a subscription-type query that returns multiple responses over a persistent connection, the response section shows these responses as a stream.

The response section has the following items for multiple responses:

* **Message stream** - The message stream has the request and the response messages arranged in reverse chronological order (latest appears on the top).
* **Expand/collapse response** - You can take an in-depth look at the response content by expanding it within the response stream.
* **Search for messages** - You can use the high-level search input to search for particular messages.
* **Filter** - Adjust the view based on message type using the message filter. You can choose from **All Messages**, **Responses**, or **Other**.
* **Clear Messages** - Hides all the messages exchanged from the view, cleaning up the response area so that you can focus on the new messages. You can restore the messages using the **Restore** button after clearing them.

## The right sidebar

The right sidebar gives you access to tools and information like documentation, commenting, and request details.

The right sidebar has the following items:

* **Documentation** - View the request's description. You can add descriptions by selecting **Add request description** then writing your content using [Postman's built-in editing tools](/docs/publishing-your-api/authoring-your-documentation/#writing-descriptions-in-the-postman-editor/). Postman also automatically generates detailed documentation tailored to each request, pulling relevant descriptions and type information from the schema.
* **Comments** - Select the comments icon	<img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> to collaborate with your teammates as you work on an API. You can use `@` to tag others to ask a question, give feedback, and discuss your API.
* **Details** - Select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> to view details about a request, like the request ID and creation date.

## Next steps

After learning about the basic interface elements, try [making your first GraphQL query](/docs/sending-requests/graphql/graphql-client-first-request/).
