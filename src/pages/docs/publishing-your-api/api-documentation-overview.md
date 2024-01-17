---
title: "Document your APIs in Postman"
updated: 2024-01-27
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Collaboration & Documentation | Postman Enterprise"
    url: "https://youtu.be/u1yEOo0dPfk"
  - type: link
    name: "API Publishers Series, Part 1: Introduction to Documentation"
    url: "https://youtu.be/z4egejVO20M"
  - type: link
    name: "API Publishers Series, Part 2: Increase Adoption of your Public API"
    url: "https://youtu.be/52pXP3X4a_8"
  - type: dynamic_blog
    name: "Blog posts"
    blog_tag: "documentation"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "WhatsApp uses API documentation tools to enhance collaboration"
    url:  "https://www.postman.com/case-studies/whatsapp/"
  - type: link
    name: "SEI Novus uses documentation to keep business use cases solved"
    url: "https://www.postman.com/case-studies/sei-novus/"
---

[Documentation](https://www.postman.com/api-platform/api-documentation/) is an important part of your API. You can add documentation to any Postman Collection and its API requests. You can also use Postman to create API documentation and share it with your API's consumers, so they know what endpoints are available and how to interact with them.

Postman automatically generates documentation for your collections and APIs. To give your users more help and context, use Postman's built-in editing tools to add descriptions, images, videos, and more to your documentation.

## Contents

* [Document a collection](#document-a-collection)
* [Add documentation to an API](#add-documentation-to-an-api)
* [Write your documentation](#write-your-documentation)
* [Write documentation with Postbot](#write-documentation-with-postbot)
* [Publish your documentation](#publish-your-documentation)
* [View documentation](#view-documentation)
* [Create a Run in Postman button](#create-a-run-in-postman-button)

## Document a collection

Postman automatically creates documentation for your collections, including request details, authorization type, and sample code. To provide more information for users, you can add descriptions to the items in your collection.

Learn more about [documenting a collection](/docs/publishing-your-api/document-a-collection/).

## Add documentation to an API

Postman automatically generates documentation based on your API definition (for OpenAPI 2.0 and 3.0 APIs). To create more detailed API documentation, add one or more collections to your API, and then add descriptions to the collections. You can add an existing collection or generate a collection based on your API definition.

Learn more about [adding documentation to an API](/docs/publishing-your-api/documenting-your-api/).

## Write your documentation

Add descriptions to your collections (including collections linked to an API) to enhance your documentation and provide more detail. You can use the Postman editor to view how your content will look as you write it, or use standard Markdown syntax to write content. With either editor, you can format text, add links, and insert images and videos in your documentation.

Learn more about [writing your documentation](/docs/publishing-your-api/authoring-your-documentation/).

## Write documentation with Postbot

Postbot can write documentation for your requests. Use Postbot to automatically add descriptions, including request parameters and response examples to your requests. For more information, see [Writing documentation with Postbot](/docs/publishing-your-api/authoring-your-documentation/#writing-documentation-with-postbot).

## Publish your documentation

Publishing a collection makes your documentation publicly available on `getpostman.com` or your own [custom domain](/docs/publishing-your-api/custom-doc-domains/). As you update your collection, the published documentation automatically stays in sync with your latest changes.

Learn more about [publishing your documentation](/docs/publishing-your-api/publishing-your-docs/).

> You can't publish a collection that's linked to an API. Instead, you can [publish a version of an API](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/) to make your API and its documentation available to consumers.

## View documentation

Want to learn more about how to use a collection or API? View collection documentation to see details for each request, along with sample code. To view API documentation, open an API in Postman, or search for APIs on the [Private API Network](https://go.postman.co/network/private) or [Public API Network](https://www.postman.com/explore/apis).

Learn more about [viewing documentation](/docs/publishing-your-api/viewing-documentation/).

## Create a Run in Postman button

You can create a **Run in Postman** button to share a collection and its documentation with users. When users select the button, they have the option to
fork the collection to their workspace, view the collection in a public workspace, or import the collection into Postman.

Learn more about using [Run in Postman buttons](/docs/publishing-your-api/run-in-postman/introduction-run-button/).
