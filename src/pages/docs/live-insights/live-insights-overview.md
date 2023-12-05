---
title: "Live Insights overview"
updated: 2023-10-30
early_access: true
plan: alpha
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Postman Live Insights: Faster, Better API Debugging"
    url: "https://blog.postman.com/introducing-postman-live-insights-faster-better-api-debugging/"
  - type: link
    name: "Postman Live Insights: automatically discover, monitor, and add APIs"
    url: "https://www.postman.com/product/live-insights/"
---

The goal of the Postman Live Insights is to be the source of truth for your production APIs. With Live Insights, Postman's vision is to be able to guide a developer with little previous experience, in both the system being monitored and the Live Insights tool, to productively find and fix issues.

> These docs feature onboarding for Kubernetes, Amazon Elastic Container Service (ECS), and Amazon EC2/Linux Server users. See [Get started with Live Insights](/docs/live-insights/live-insights-gs/) for more information.

## Contents

* [Before you start](#before-you-start)
* [Known limitations](#known-limitations)
* [Bugs](#bugs)
* [Sensitive data protection](#sensitive-data-protection)

## Before you start

* To use the Live Insights alpha, you need to be part of a team workspace. If you don’t already have a team in Postman, see [Collaboration overview](/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/#creating-a-team) for instructions on how to set it up. Postman Free provides team setup with up to three users. Once your team workspace is set up, contact [Live Insights Alpha team](mailto:live.insights.alpha@postman.com) to get access to the Live Insights alpha in Postman.
* To better help the Live Insights team quickly improve the solution, it would be helpful if you add the [Live Insights Alpha Team](mailto:live.insights.alpha@postman.com) as a guest to your team. (There is no need to add the Live Insights team as a full member.)
* If you feel comfortable, add the [Live Insights Alpha team](mailto:live.insights.alpha@postman.com) as a viewer on your live collections. See [Allowing external users to view collections](/docs/collaborating-in-postman/sharing/#allowing-external-users-to-view-collections) for more information. This will allow the Live Insights team to directly see your endpoints to improve your experience.
* If you’re working with multiple teams, make sure the Live Insights team is aware and gives you access to the team you want to use.
* Log in with the email address confirmed with you in the alpha invite email. If you aren't sure which email to use, contact [Live Insights Alpha team](mailto:live.insights.alpha@postman.com).
* You can install the Live Collections Agent (LCA) after you create a new live collection. For more information, see [Get started](#get-started).

    > **WARNING:** Do not install the LCA on an existing curated collection because your existing curated endpoints will be overwritten.

## Known limitations

The Live Insights team appreciates your patience with as they build out the alpha.

* Live Insights currently works only for REST APIs and not for gRPC or GraphQL.
* Live Insights is currently focused on first-party APIs.
* Postman generates a maximum of 10 folders per live collection, and 300 requests per folder. The Live Insights team is working on expanding this.
* The Agent updates every 10 minutes, which means new endpoints won't be seen for up to 10 minutes. The Live Insights team would love your feedback on whether you would like more frequent updates.

The following actions are currently unavailable but will be supported in the future.

* Changing ownership
* Editing Collection folder names
* Editing any content of the Collection
* Installing the Agent in any environment other than Kubernetes.

## Bugs

Changes made to request bodies and examples don't yet show up. The Live Insights team is working on fixing this issue.

## Sensitive data protection

The LCA client drops all data values from the observed traffic before sending it to Postman. All data format inference happens on the client side, before the data is removed. The Postman cloud don't see the initial values, and uploads of the obfuscated data to Postman are performed over HTTPS using TLS.

### Limitations

* Any literal values that appear in the payload are obfuscated before being sent to Postman, but path parameters are sent in their original form. If the path to your API includes sensitive data (for example, email, first/last names, or phone numbers), it's transmitted to Postman first. Postman applies heuristics on the backend to remove it. If you have APIs that include sensitive data, contact Postman support to adjust the LCA to pre-filter it.
* Postman’s data sanitizing doesn't apply to the keys. For example, the sanitizing works if your JSON document is structured as follows:

    ```json
    {
        "key": "sensitive-data",
        "other-key": "super-secret-value",
    }
    ```

    However, if your data is structured as shown in the next example, Postman preserves the left set of values.

    ```json
    {
        "<social-security-number>": true,
        "more-sensitive-data": "string",
        "super-secret-identifier": 1.0,
    }
    ```

* Sanitization also applies to HTTP header values, not keys. For example, if your header looks like:

    ```json
    Authentication: <secret token>
    ```

    Then, the secret token is never sent to Postman.

    But, if your system encodes sensitive data in the name of the header, like so:

    ```json
    User-<user id>: ...
    ```

    Then the header is sent to Postman and appears in your collection.

## Next steps

* [About Live Insights Early Access](/docs/live-insights/live-insights-early-access/)
* [Get started with Live Insights](/docs/live-insights/live-insights-gs/)
* [Diagnose and troubleshoot errors](/docs/live-insights/live-insights-troubleshoot/)
* [Live Collections Agent reference](/docs/live-insights/live-insights-reference/)
