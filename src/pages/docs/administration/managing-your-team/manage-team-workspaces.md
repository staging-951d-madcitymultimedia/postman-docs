---
title: "Manage team workspaces"
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

* [Manage your team's workspaces](#manage-your-teams-workspaces)

## Manage your team's workspaces

> **[Workspace management is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

You can specify users and [groups](/docs/collaborating-in-postman/user-groups/) who have permission to [create team workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/) in your team. [Super Admins and Team Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can create team workspaces whether you specify users and groups or not.

If you specify users and groups, all other team members will require approval to create team workspaces by a Super Admin, Team Admin, or user with permission to create team workspaces. The workspace's visibility will be set to [private](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) until the request is approved.

If you give all team members permission to create team workspaces, team members won't need approval to create team workspaces. This won't give users assigned the Partner or Guest role permission to create team workspaces.

> To request workspace management for your team, contact your Postman Account Manager.

To specify users or groups who can create team workspaces, do the following:

1. Select **Team > Team Settings** in the Postman header, then select **Workspace Management** in the left sidebar.
1. Select **Specific people or groups**.
1. Specify users or groups who can create team workspaces.
1. Select **Save Changes**.

    <img alt="Specify users who can create team workspaces" src="https://assets.postman.com/postman-docs/v10/workspace-management-users-groups-v10.jpg" width="600px"/>

To remove permission to create team workspaces from users or groups, do the following:

1. Select **Team > Team Settings** in the Postman header, then select **Workspace Management** in the left sidebar.
1. Select the **Specific people or groups** section to edit it.
1. Select the close icon <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> next to a user or group.

    <img alt="Remove users who can create team workspaces" src="https://assets.postman.com/postman-docs/v10/workspace-management-remove-users-groups-v10.jpg" width="600px"/>

1. Select **Save Changes**.

To give all team members permission to create team workspaces, do the following:

1. Select **Team > Team Settings** in the Postman header, then select **Workspace Management** in the left sidebar.
1. Select **All team members**.
1. Select **Save Changes**.

    <img alt="All team members can create team workspaces" src="https://assets.postman.com/postman-docs/v10/workspace-management-all-team-members-v10.jpg" width="600px"/>
