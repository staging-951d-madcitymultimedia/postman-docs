---
title: "Select custom settings for API requests in Postman"
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

## Choosing custom settings

You can configure a variety of settings for Postman requests using the request __Settings__ tab. These enable you to apply non-standard logic to your requests.

## Encoding your request URLs

Postman parses and encodes your request URL to maximize the chances of a successful API call. Postman encodes the characters in your URL and maps them to a representation that your API is most likely to accept. The Postman URL processor optimizes the chance of your request being effectively processed by the wide range of server implementations in use.

The processor will encode characters depending on where they occur in the URL:

| URL component | Characters to encode |
| ------------- | -------------------- |
| Path | `"` `<` `>` `` ` `` `#` `?` `{` `}` `SPACE` |
| Query | `"` `#` `&` `'` `<` `=` `>` `SPACE` |
| Userinfo | `"` `<` `>` `` ` `` `#` `?` `{` `}` `/` `:` `;` `=` `@` `[` `\` `]` `^` | `SPACE` |

The processor is turned on by default in Postman, but you can turn off encoding if you are working with an unusual server implementation. To turn this setting on or off in your request, select **Settings > Encode URL automatically**.

> You can selectively encode parts of your URL by highlighting the text and right-clicking, then choosing **EncodeURIComponent**.
