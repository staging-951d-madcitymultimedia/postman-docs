---
title: "Publish your APIs to multiple partners using a single Postman workspace"
updated: 2024-01-24
early_access: true
plan: beta
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Partner Workspaces for Enterprise"
    url: "https://youtu.be/gT55ui8UOHw"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Partner Workspaces: An Exclusive Space to Collaborate with Your API Partners"
    url: "https://blog.postman.com/introducing-partner-workspaces/"
  - type: link
    name: "Partner Viewers are free for enterprise teams"
    url: "https://blog.postman.com/partner-viewers-are-free-for-enterprise-teams/"
---

> **[Partner Workspaces are available on Postman Enterprise Ultimate plans.](https://www.postman.com/pricing)**

_Multipartner mode is a beta capability and is only available to select Postman Enterprise customers who want to try it out. As you use the feature, please share any feedback or issues you encounter with your Customer Success Manager or directly with the [Product Team](mailto:ramji.enamuthu@postman.com)._

[Partner Workspaces](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) enable you to collaborate with your external partners and customers. You can use Partner Workspaces to demo your API products to customers, onboard external developers faster, and reduce the time-to-first-call for your consumers.

As your partner programs grow, so does your need to create, maintain, and update multiple workspaces with nearly the same content in each one. A _multipartner_ mode within Partner Workspaces simplifies this workflow and helps you share your APIs easily with multiple customers and partners.

Multipartner mode enables you to:

* Share and update Postman Collections with multiple partners without having to update a separate workspace for each partner.
* Invite your API partners and customers to understand the value and try out your APIs quickly before going deeper into integration.
* Showcase real-world workflows and demos using your APIs.
* Maintain a reference workspace for all your API endpoints and documentation that can be shared with all your partners.

## Multipartner mode

By enabling multipartner mode in a Partner Workspace, you can create a restricted-access workspace that's intentionally designed for publishing Postman Collections to multiple external partners. Partners can be invited to this workspace as Viewers only, see all the workspace content, and send API requests. Team members can make edits to the workspace, which are then available to the partners in real time.

The goal of this workspace is to provide a sandbox where customers and partners evaluate, onboard, and consume your APIs by sending successful requests quickly. A Partner user can't see other Partners and their activities in the workspace. They can see only your Team members, while comments and other collaborative features are turned off to maintain isolation between Partners.

## Enable multipartner mode in a Partner Workspace

To enable multipartner mode, do the following:

1. Open an existing Partner Workspace or create a new one.
1. In the Workspace Overview page, select **Workspace Settings**.
1. Select **Enable multipartner mode**.

    <img alt="Enable multipartner mode" src="https://assets.postman.com/postman-docs/v10/multipartner-workspace-enable-v10-22-1.gif">

    The confirmation modal describes the key capabilities of the multipartner mode. Once multipartner mode is turned on, this action can't be undone.

1. Select **Limit Partner Visibility**.

    Now the partners in this workspace can't see each other or make any edits. They can view all workspace resources, send API requests, and see responses.

    <img alt="Workspace shared" src="https://assets.postman.com/postman-docs/v10/multipartner-workspace-shared-v10-22.jpg" width="300px">

The workspace **Overview** and **Settings** pages update to display that multipartner mode is turned on. You are ready to add collections, set up the workspace, and invite partners just like in any other Partner Workspace.

Use the fork feature to share collections and environments from your internal Team workspaces to the Partner workspace. Partners can only be invited as Viewers to this workspace. However, team members can be invited as Viewers, Editors, or Admins.

Because Partner Viewers are free, you can invite as many partners as you want to the workspace.
