---
title: "API authentication and authorization in Postman"
updated: 2023-05-30
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman | Authorize a Request"
    url: "https://youtu.be/7t9AB9Opprs"
  - type: link
    name: "How to Use JWT Authorization"
    url: "https://youtu.be/dLxCpd3IGys"
  - type: link
    name: "Set Up Authorization for Your Public Apis"
    url: "https://youtu.be/u-FyOBgIB0c"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Announcing easier API authentication in Postman"
    url: "https://blog.postman.com/easier-api-authentication-in-postman/"
  - type: link
    name: "OAuth 2.0 just got easier: introducing token refresh and ID token support"
    url: "https://blog.postman.com/oauth-2-0-token-refresh-and-id-token-support/"
  - type: link
    name: "New custom parameters for OAuth 2.0 token generation in Postman"
    url: "https://blog.postman.com/custom-parameters-oauth-2-token-generation-postman/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Intuit uses Postman's authentication protocols"
    url: "https://www.postman.com/case-studies/intuit/"
---

APIs use authorization to ensure that client requests access data securely. This can involve authenticating the sender of a request and confirming that they have permission to access or manipulate the relevant data. If you're building an API, you can choose from a variety of auth models. If you're integrating a third-party API, the required authorization will be specified by the API provider.

You can pass auth details along with any request you send in Postman. Auth data can be included in the header, body, or as parameters to a request. If you enter your auth details in the __Authorization__ tab, Postman will automatically populate the relevant parts of the request for your chosen auth type. You can use variables and collections to define authorization details more safely and efficiently, enabling you to reuse the same information in multiple places.

* Use the **Authorization** tab to select an auth type and complete relevant details. To learn more, visit [Specifying authorization details](/docs/sending-requests/authorization/specifying-authorization-details/).
* When you create a request to a supported public API, Postman will automatically recognize if the API requires authentication and give you the option to set up authorization. For more details, see [Authentication for public APIs](/docs/sending-requests/authorization/authentication-for-public-apis/).
* If you have session cookies in your browser, you can sync them to Postman using the Interceptor. See [Interceptor extension](/docs/sending-requests/capturing-request-data/interceptor/) and [Cookies](/docs/sending-requests/cookies/) for more detail.
* If you're having issues getting a request to authenticate and run successfully, review the tips in [troubleshooting API requests](/docs/sending-requests/troubleshooting-api-requests/). If you still have auth problems, check out the [authentication tag](https://community.postman.com/tags/authentication) on the Postman forum.
* For more details on each authorization type, visit [About authorization types](/docs/sending-requests/authorization/authorization-types/).

> <img alt="Collections icon" src="https://assets.postman.com/postman-docs/Collections.png#icon" width="24px"> Try out examples of different types of authorization in a collection template that's ready to be modified to fit your use case. To try out this template, select [Authorization methods](https://www.postman.com/templates/31a9a6ed-4cdf-4ced-984c-d12c9aec1c27/Authorization-methods).
