---
title: "Manage team members' product access"
updated: 2024-01-18
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman for Internal API Management"
    url: "https://youtu.be/rkDUay18s9c?si=qoInw4zXqWCo5yGp"
  - type: link
    name: "Postman for API Test Automation"
    url: "https://youtu.be/x9X4Jg-dQXI?si=48roT-4zPw4ffw8a"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Accelerate your API-first journey with Postman’s new Enterprise solutions"
    url: "https://blog.postman.com/accelerate-api-first-journey-with-postman-enterprise-solutions/"
---

> **[Some team options are only available on Postman Enterprise plans.](https://www.postman.com/pricing)**

As a [Team Admin or Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), you can manage which team members have access to [Postbot](/docs/getting-started/basics/about-postbot/) and various [Enterprise solutions](https://www.postman.com/pricing/#enterprise-solutions).

Free, Basic, and Professional teams can [purchase Postbot as an add-on product](/docs/billing/billing/#purchasing-add-on-products). To learn more about Postman’s AI assistant, see [About Postbot](/docs/getting-started/basics/about-postbot/).

Enterprise Essentials teams can [purchase Enterprise solutions](/docs/billing/billing/#manage-enterprise-solutions-licenses). To learn more about [Enterprise solutions](https://www.postman.com/pricing/#enterprise-solutions) for your team, see [Internal API Management](#internal-api-management-solution) and [API Test Automation](#api-test-automation-solution).

## Contents

* [Manage your team's product access](#manage-your-teams-product-access)
    * [Manage your team's access to Postbot](#manage-your-teams-access-to-postbot)
    * [Manage your team's access to Enterprise solutions](#manage-your-teams-access-to-enterprise-solutions)

## Manage your team's product access

You can manage which team members can access Postbot and Enterprise solutions in your [product access dashboard](https://go.postman.co/settings/team/products-access).

### Manage your team's access to Postbot

> **[Postbot is available for Free, Basic, and Professional plans.](https://www.postman.com/pricing)**

Team members with [Postbot](/docs/getting-started/basics/about-postbot/) access get an increased number of interactions with Postbot. To view your team's Postbot limits, go to your [Resource Usage dashboard](https://go.postman.co/billing/add-ons/overview).

To add team members to Postbot, do the following:

1. Select **Team** in the Postman header, then select **Team Settings**.
1. Select **Product access**, then select **Postbot**.
1. To add team members to Postbot, select **Add Members**. Adding team members to Postbot purchases more seats. Learn more about [purchasing add-on products](/docs/billing/billing/#purchasing-add-on-products).

    <img alt="Add team members to Enterprise solutions" src="https://assets.postman.com/postman-docs/v10/product-access-postbot-v10-19.jpg"/>

1. Select team members you'd like to add to the solution, then select **Add Members**.

To remove team members from Postbot, hover over a team member's name, and select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">.

<img alt="Remove team members from Postbot" src="https://assets.postman.com/postman-docs/v10/product-access-postbot-remove-members-v10-19.jpg"/>

### Manage your team's access to Enterprise solutions

> **[Enterprise solutions are available for Enterprise Essentials plans.](https://www.postman.com/pricing)**

As a Team Admin, you can manage [Enterprise solutions](https://www.postman.com/pricing/#enterprise-solutions) for your team: [Internal API Management](#internal-api-management-solution) and [API Test Automation](#api-test-automation-solution). Adding team members to a solution can give them additional permissions within your team and access to more features.

To add team members to a solution, do the following:

1. Select **Team** in the Postman header, then select **Team Settings**.
1. Select **Product access**.
1. Select the Enterprise solution you'd like to manage: **Internal API Management** or **API Test Automation**.
1. To add team members to a solution, select **Add Members**. Adding team members to a solution purchases more licenses for that solution. Learn more about [managing Enterprise solutions licenses](/docs/billing/billing/#manage-enterprise-solutions-licenses).

    <img alt="Add team members to Enterprise solutions" src="https://assets.postman.com/postman-docs/v10/enterprise-solutions-add-members-v10.jpg"/>

1. Select team members you'd like to add to the solution, then select **Add Members**. Learn more about the benefits of adding team members to the [Internal API Management](#internal-api-management-solution) and [API Test Automation](#api-test-automation-solution) solutions.

To remove team members from a solution, hover over a team member's name, and select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">.

<img alt="Remove team members from Enterprise solutions" src="https://assets.postman.com/postman-docs/v10/enterprise-solutions-remove-members-v10.jpg"/>

#### Internal API Management solution

You can add team members to the [Internal API Management solution](https://www.postman.com/solutions/internal-api-management/) for access to the [API Builder](/docs/designing-and-developing-your-api/the-api-workflow/), the [Private API Network](/docs/collaborating-in-postman/private-api-network/adding-private-network/), and [API Governance](https://learning.postman.com/docs/api-governance/api-governance-overview/).

When you add team members to the Internal API Management solution:

* You can then assign them the [API Network Manager and API Governance Manager](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) roles. Learn how to [manage team roles](/docs/administration/managing-your-team/manage-team-members/#manage-team-roles).
* Only the team members added to this solution can publish or request to publish changes to the Private API Network, while the rest of the team can consume and read from the network.
* Only the team members added to this solution can be assigned the [API Editor](/docs/collaborating-in-postman/roles-and-permissions/#api-roles) role in Postman APIs, enabling them to create and edit an unlimited amount of APIs. Team members not added to this solution only have the [API Viewer](/docs/collaborating-in-postman/roles-and-permissions/#api-roles) role.

    > If team members are assigned the API Editor role in the [API Builder](/docs/designing-and-developing-your-api/the-api-workflow/) and you add at least one team member to the Internal API Management solution, team members not added to this solution will no longer be assigned the API Editor role. They'll only be assigned the API Viewer role.

#### API Test Automation solution

You can add team members to the [API Test Automation solution](https://www.postman.com/solutions/api-test-automation/) to increase their usage limits for the [Collection Runner](/docs/collections/running-collections/intro-to-collection-runs/) and [monitors](/docs/monitoring-your-api/intro-monitors/).

When you add team members to the API Test Automation solution:

* Added team members get unlimited collections runs with the Collection Runner. You can [run collections on a schedule](/docs/collections/running-collections/scheduling-collection-runs/) to automate API tests.
* Added team members get increased usage limits for monitors. You can [run collections on a schedule with monitors](/docs/collections/running-collections/scheduling-collection-runs-monitors/) to automate reports on API tests, and more. Learn more about [monitor use cases](/docs/monitoring-your-api/intro-monitors/#monitor-use-cases).
