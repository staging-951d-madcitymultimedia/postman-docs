---
title: "Send a basic request to an API server in Postman"
updated: 2024-01-30
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman | Part 1: Send a Request"
    url: "https://youtu.be/2oOSnxZ28fA"
  - type: link
    name: "How to use an API? | Intro to APIs Part 2"
    url:  "https://youtu.be/woRuedXZyi4"
---

Featured snippet

## Contents

* [Creating requests](#creating-requests)
    * [Selecting protocols](#selecting-protocols)
    * [Setting request URLs](#setting-request-urls)
    * [Selecting request methods](#selecting-request-methods)
* [Authenticating requests](#authenticating-requests)
* [Using cookies](#using-cookies)
* [Sending a request](#sending-a-request)
* [Sharing your requests](#sharing-your-requests)
* [Next steps](#next-steps)

## Creating requests

Your requests can include multiple details determining the data Postman will send to the API you are working with. Enter a URL and choose a method, then optionally specify a variety of other details.

You can create a new request from a workspace, by using **New > HTTP**, or by selecting **+** to open a new tab.

<img alt="Create new request" src="https://assets.postman.com/postman-docs/v10/create-new-http-v10-4.jpg" width="500px"/>

Select **Save** to create your request. You can give your request a name and description, and choose or create a collection to save it in.

Once your new tab is open, you can specify the details you need for your request.

<img alt="New Request" src="https://assets.postman.com/postman-docs/v10/empty-request-v10-21-11.jpg" />

> You can turn on autosave to automatically save your changes to collections, requests, and environments. Learn more about [autosave](/docs/getting-started/installation/settings/#application).

If you have a request you want to run, you will need to know the URL, method, and other optional values such as auth and parameters.

To test sending a request in Postman, you can set the URL to the Postman Echo sample API endpoint `https://postman-echo.com/get` and the method to `GET`, then select __Send__.

### Selecting protocols

You can change the protocol for a new request. Select **New** in the sidebar and then select a request protocol, or select **+** to open a new tab. Select the protocol dropdown menu to the left of the request's name, and then select a different request protocol.

> You can't change the request protocol after you select **Save**.

<img alt="Select protocol" src="https://assets.postman.com/postman-docs/v10/select-protocol-v10-22.gif" />

### Setting request URLs

Each request you send in Postman requires a URL representing the API endpoint you are working with. Each operation you can perform using an API is typically associated with an endpoint. Each endpoint in an API is available at a particular URL. This is what you enter into Postman to access the API.

* If you're building an API, the URL will typically be the base location plus path. For example, in the request `https://postman-echo.com/get`, `https://postman-echo.com` is the base URL, and `/get` is the endpoint path.
* If you're using a third-party API, your API provider will supply the URLs you need, for example within their developer documentation.

When you start typing in the URL input field, Postman will present a dropdown list of previously used locations you can use to autocomplete.

> Postman will automatically add `http://` to the start of your URL if you don't specify a protocol.

You can optionally enter _query_ parameters into the URL field, or you can [enter them in the Params tab](#sending-parameters). If your request uses _path_ parameters, [you can enter them directly into the URL field](#sending-parameters).

> You can use [next generation URL encoding](#encoding-your-request-urls) in your requests.

### Selecting request methods

By default, Postman will select the `GET` method for new request. `GET` methods are typically for retrieving data from an API. You can use a variety of other methods to send data to your APIs, including the following most common options:

* `POST` - add new data
* `PUT` - replace existing data
* `PATCH` - update some existing data fields
* `DELETE` - delete existing data

<img alt="Request Methods" src="https://assets.postman.com/postman-docs/v10/request-methods-v10-2.jpg" width="340px"/>

For example, if you're working with an API for a To Do list application, you might use a `GET` method to retrieve the current list of tasks, a `POST` method to create a new task, and a `PUT` or `PATCH` method to edit an existing task.

Postman supports a number of extra request methods by default, and you can use custom methods. Select the method dropdown list, edit the method name text, and save your new method. To delete a method, hover over it in the list and select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">.

> To test the `https://postman-echo.com/get` endpoint, leave the `GET` method selected and select __Send__.

The same location (sometimes called "route") can provide more than one endpoint by accepting different methods. For example, an API might have a `POST` `/customer` endpoint for adding a new customer, and a `GET` `/customer` endpoint for retrieving an existing customer.

* If your request doesn't require parameters or authentication, you can select __Send__ to fetch a response.
* Otherwise, specify your [parameters](#sending-parameters) and any [body data](#sending-body-data) you need to send to the API.
* If you don't need to send data with your request, set up any required [authentication](#authenticating-requests) and [headers](#configuring-request-headers).

## Authenticating requests

Some APIs require auth details you can send in Postman. Authentication involves confirming the identity of the client sending a request, and authorization involves confirming that the client has permission to carry out the endpoint operation. Open the __Authorization__ tab to configure your access details.

![Request Auth](https://assets.postman.com/postman-docs/v10/authorization-tab-v10-21-12.jpg)

Postman will automatically include your auth details in the relevant part of the request, for example in __Headers__.

For more detail on implementing different types of auth in your Postman requests, check out the [Authorizing requests overview](/docs/sending-requests/authorization/authorization/).

Once your auth and other request details are set up, select __Send__ to run your request.

## Using cookies

You can manage Cookies for your domains from Postman. Select __Cookies__ (under __Send__). For more information, see [Managing cookies](/docs/sending-requests/cookies/).

<img src="https://assets.postman.com/postman-docs/cookies-dialog.jpg" alt="manage cookies dialog" width="450px" />

## Sending a request

Select **Send** to send a request.

You'll get a response in the response time. Learn more about response data.

## Sharing your requests

You can share requests with collaborators by going to the request you want to share in the sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the request you want to share, then select **Share**.

<img alt="Share request" src="https://assets.postman.com/postman-docs/v10/share-request-v10-21.jpg"/>

For more details about sharing requests, see [Share your work in Postman](/docs/collaborating-in-postman/sharing/).

## Next steps

Once you have your request set up, select __Send__ and examine the [Response](/docs/sending-requests/responses/).

> <img alt="Collections icon" src="https://assets.postman.com/postman-docs/Collections.png#icon" width="24px"> To try out a collection template that has a typical REST API, select [REST API Basics](https://www.postman.com/templates/ddb19591-3097-41cf-82af-c84273e56719/REST-API-basics).
