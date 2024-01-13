---
title: "Manage team members' product access"
updated: 2023-06-08
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman 101 for Admins"
    url: "https://youtu.be/rEKvQO8EYR8"
  - type: link
    name: "Securing APIs | Postman Enterprise"
    url: "https://youtu.be/tiYgp4QEwZQ"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Managing team members and roles in Postman just got easier"
    url: "https://blog.postman.com/managing-team-members-and-roles-in-postman-just-got-easier/"
  - type: link
    name: "How to Securely Deploy Postman at Scale, Part 1: User Management"
    url: "https://blog.postman.com/how-to-securely-deploy-postman-at-scale-user-management/"
---

> **[Some team options are only available on Postman Professional and Enterprise plans.](https://www.postman.com/pricing)**

Postman provides a variety of options to customize your team's experience, from the initial setup to ongoing team and plan management. As a Team Admin, you can streamline the onboarding process for your team, manage access control, and keep your team up to date with the latest version of Postman.

## Contents

* [Manage your team's access to Postbot](#manage-your-teams-access-to-postbot)
* [Manage your team's access to Enterprise solutions](#manage-your-teams-access-to-enterprise-solutions)

<!-- 
## Manage your team's product access

The [product access dashboard](https://go.postman.co/settings/team/products-access) enables you to manage which team members can access your team's products: Postbot and Enterprise solutions. -->

### Manage your team's access to Postbot

As a Team Admin, you can manage [Postbot](/docs/getting-started/basics/about-postbot/) access for your team. When you add team members to Postbot, only added team members get an increased number of interactions with Postbot. To view your Postbot limits, go to your [Resource Usage dashboard](https://go.postman.co/billing/add-ons/overview).

To add team members to Postbot, do the following:

1. Select **Team** in the Postman header, then select **Team Settings**.
1. Select **Product access**, then select **Postbot**.
1. To add team members to Postbot, select **Add Members**. Adding team members to Postbot purchases additional seats. Learn more about [purchasing add-on products](/docs/billing/billing/#purchasing-add-on-products).

    <img alt="Add team members to Enterprise solutions" src="https://assets.postman.com/postman-docs/v10/product-access-postbot-v10-19.jpg"/>

1. Select team members you'd like to add to the solution, then select **Add Members**.

To remove team members from Postbot, hover over a team member's name, and select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">.

<img alt="Remove team members from Postbot" src="https://assets.postman.com/postman-docs/v10/product-access-postbot-remove-members-v10-19.jpg"/>

### Manage your team's access to Enterprise solutions

> **[Enterprise solutions are available for Enterprise Essentials plans.](https://www.postman.com/pricing)**

As a Team Admin, you can manage Enterprise solutions for you team: [Internal API Management](#internal-api-management-solution) and [API Test Automation](#api-test-automation-solution). Depending on the solution, adding team members to a solution can give them additional permissions in your team. Adding team members to a solution also gives your team access to more features. To learn more about the added capabilities of each solution, see [Enterprise solutions](https://www.postman.com/pricing/#enterprise-solutions).

To add team members to a solution, do the following:

1. Select **Team** in the Postman header, then select **Team Settings**.
1. Select **Product access**.
1. Select the Enterprise solution you'd like to manage: **Internal API Management** or **API Test Automation**.
1. To add team members to a solution, select **Add Members**. Adding team members to a solution purchases additional licenses for that solution. Learn more about [managing Enterprise solutions licenses](/docs/billing/billing/#manage-enterprise-solutions-licenses).

    <img alt="Add team members to Enterprise solutions" src="https://assets.postman.com/postman-docs/v10/enterprise-solutions-add-members-v10.jpg"/>

1. Select team members you'd like to add to the solution, then select **Add Members**. Learn more about the benefits of adding team members to the [Internal API Management](#internal-api-management-solution) and [API Test Automation](#api-test-automation-solution) solutions.

To remove team members from a solution, hover over a team member's name, and select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">.

<img alt="Remove team members from Enterprise solutions" src="https://assets.postman.com/postman-docs/v10/enterprise-solutions-remove-members-v10.jpg"/>

#### Internal API Management solution

You can add team members to the [Internal API Management solution](https://www.postman.com/solutions/internal-api-management/) for access to the [API Builder](/docs/designing-and-developing-your-api/the-api-workflow/), the [Private API Network](/docs/collaborating-in-postman/private-api-network/adding-private-network/), and [API Governance](https://learning.postman.com/docs/api-governance/api-governance-overview/).

When you add team members to the Internal API Management solution:

* You can then assign them the [API Network Manager and API Governance Manager](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) roles. Learn more about [managing team roles](#managing-team-roles).
* Only the team members added to this solution can publish or request to publish changes to the Private API Network, while the rest of the team can consume and read from the network.
* Only the team members added to this solution can be assigned the [API Editor](/docs/collaborating-in-postman/roles-and-permissions/#api-roles) role in Postman APIs, enabling them to create and edit an unlimited amount of APIs. Team members not added to this solution only have the [API Viewer](/docs/collaborating-in-postman/roles-and-permissions/#api-roles) role.

    > If team members are assigned the API Editor role in the [API Builder](/docs/designing-and-developing-your-api/the-api-workflow/) and you add at least one team member to the Internal API Management solution, team members not added to this solution will no longer be assigned the API Editor role. They'll only be assigned the API Viewer role.

#### API Test Automation solution

You can add team members to the [API Test Automation solution](https://www.postman.com/solutions/api-test-automation/) to increase their usage limits for the [Collection Runner](/docs/collections/running-collections/intro-to-collection-runs/) and [monitors](/docs/monitoring-your-api/intro-monitors/).

When you add team members to the API Test Automation solution:

* Added team members get unlimited collections runs with the Collection Runner. You can [run collections on a schedule](/docs/collections/running-collections/scheduling-collection-runs/) to automate API tests.
* Added team members get increased usage limits for monitors. You can [run collections on a schedule with monitors](/docs/collections/running-collections/scheduling-collection-runs-monitors/) to automate reports on API tests, and more. Learn more about [monitor use cases](/docs/monitoring-your-api/intro-monitors/#monitor-use-cases).
