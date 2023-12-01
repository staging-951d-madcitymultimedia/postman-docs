---
title: "Manage your team"
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

* [Setting up your team](#setting-up-your-team)
* [Managing team members](#managing-team-members)
    * [Inviting users](#inviting-users)
    * [Managing invites](#managing-invites)
    * [Removing team members](#removing-team-members)
    * [Managing team roles](#managing-team-roles)
    * [Managing Partners](#managing-partners)
    * [Managing Guests](#managing-guests)
* [Manage your team workspaces](#manage-your-team-workspaces)
* [Manage your team's product access](#manage-your-teams-product-access)
    * [Manage your team's access to Postbot](#manage-your-teams-access-to-postbot)
    * [Manage your team's access to Enterprise solutions](#manage-your-teams-access-to-enterprise-solutions)
* [Managing your team’s Postman plan](#managing-your-teams-postman-plan)
    * [Changing team size](#changing-team-size)
    * [Upgrading your plan](#upgrading-your-plan)
* [Updating your team’s Postman version](#updating-your-teams-postman-version)
* [Next steps](#next-steps)

## Setting up your team

Once you've created your Postman team, you can take the following steps to enable an efficient user onboarding process:

* Use the [Onboarding checklist](/docs/administration/onboarding-checklist/) to ensure that Postman is available on all devices used by your organization and that it functions as expected.
* [Enable team discovery](/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/) to let other Postman users from your organization request to join your team.
* [Configure SSO](/docs/administration/sso/admin-sso/) ([Professional and Enterprise plans only](https://www.postman.com/pricing)).
* [Configure SCIM provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/) ([Enterprise plans only](https://www.postman.com/pricing)).

## Managing team members

You can invite collaborators, remove existing team members, and update user permissions at any time in your [team dashboard](https://go.postman.co/settings/team/members). To open your team dashboard, select **Team** in the Postman header, then select **Manage Team**.

<img alt="Team dashboard" src="https://assets.postman.com/postman-docs/v10/team-dashboard-members-view-v10.15.jpg"/>

### Inviting users

1. In your [team dashboard](https://go.postman.co/settings/team/members), select **Invite People**.
1. Enter the email addresses of the people you want to invite.

    > You can also upload a text or CSV file with the email addresses of the people you want to invite. To do so, select **Add from file**.

1. Use **Roles** to assign these users one or more [team roles](/docs/collaborating-in-postman/roles-and-permissions/#team-roles).
1. Select **Send Invite**.

You can also invite a user to join your team with a link. To do so, select **Copy Invite Link**.

#### Understanding invite permissions

As a Team [Admin or Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), you can directly send invites for any role type. On [Free, Basic, and Professional plans](https://www.postman.com/pricing/), team members with the Developer role can invite external users as Developers automatically, without the need for approval by a Team Admin. You can review pending invites on your [team dashboard](https://go.postman.co/settings/team/members) under **Invites sent**. For more details, see [Managing invites](#managing-invites).

If the team member sending the invite isn't a Developer inviting another Developer on a Free, Basic, or Professional plan or a Team Admin on any plan, their suggestion to add external users to your Postman team will be shared with you for approval. You can review these invite suggestions in your [team dashboard](https://go.postman.co/settings/team/members) under **Suggestions**. For more details, see [Managing invites](#managing-invites).

You can also let Postman users from your company request to join your team by enabling [team discovery](/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/#enabling-team-discovery).

> [Postman Enterprise](https://www.postman.com/pricing) teams can enable [SCIM provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/), which enables you to create, update, and deactivate user accounts at scale through your identity provider (IdP).

### Managing invites

As a Team Admin, you can manage [pending invites](#invites-sent), review [requests to join your team](#requests-to-join-your-team), review [suggestions](#suggestions) from team members without permission to send invites directly, and manage [invite links](#invite-links).

#### Invites sent

You can also review pending invites that team members have submitted in your [team dashboard](https://go.postman.co/settings/team/members) by selecting **Invites and requests**. To resend an invite, hover over the person's email address and select **Resend Invite**. To copy the invite link, select the copy invite link icon <img alt="Copy invite link icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px">. To delete the invite, select the revoke invite icon <img alt="Revoke invite icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px">.

<img alt="Review invites sent" src="https://assets.postman.com/postman-docs/v10/team-dashboard-invites-sent-v10.15.jpg"/>

#### Requests to join your team

If your team has enabled [team discovery](/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/), you can review requests to join your team in your [team dashboard](https://go.postman.co/settings/team/members) by selecting **Invites and requests**. To respond to a request, hover over the person's email address and select **Approve** or **Deny**.

<img alt="Review requests to join team" src="https://assets.postman.com/postman-docs/v10/team-dashboard-requests-v10.15.jpg"/>

#### Suggestions

If the team member sending an invite isn't a Developer inviting another Developer (on Free, Basic, or Professional plans) or if they aren't a Team Admin (on any plan), you or another team member with the Admin or Super Admin role must review the invite suggestion. You can review these invite suggestions in your [team dashboard](https://go.postman.co/settings/team/members) by selecting **Invites and requests** and scrolling down to **Suggestions**.

To approve the suggestion and invite the user to your team, select **Invite**. To delete the invite, select the revoke invite icon <img alt="Revoke invite icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px">.

<img alt="Review invite suggestions" src="https://assets.postman.com/postman-docs/v10/team-dashboard-suggestions-v10.15.jpg"/>

#### Invite links

You can review the invites your team has sent by opening your [team dashboard](https://go.postman.co/settings/team/members) and selecting [**Invite links**](https://go.postman.co/settings/team/manage-invite-links) from the left menu. The list provides information about which users generated links, when they were generated, when they expire, and their URL.

<img alt="Invite links dashboard" src="https://assets.postman.com/postman-docs/v10/manage-invite-links-v10.15.jpg"/>

To copy an active invite URL, hover over its row and select the copy icon <img alt="Copy link icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px">.

To revoke an active invite, hover over its row and select the delete icon <img alt="Delete link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px" />.

### Removing team members

To remove a member from your team, go to your [team dashboard](https://go.postman.co/settings/team/members). Select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> next to the team member's name. Then to confirm, select **Remove Member**. When you remove a team member, you will still retain access to any data they have shared with the team.

<img alt="Remove a team member" src="https://assets.postman.com/postman-docs/v10/team-dashboard-members-remove-v10.15.jpg"/>

Reassign their personal workspaces to another team member to ensure the team continues to have access to any unshared work done by the user being removed. You must reassign their personal workspaces if one of the following is true:

* They're from an Enterprise team.
* They're from a Free, Basic, or Professional team, and they have an account.

> An account isn't associated with a team, and only the user can access it. To access an account, see [Switching between teams](/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/#switching-between-teams).

When you remove a team member, their personal workspaces and the data within them move to an account if the following is true: they're from a Free, Basic, or Professional team and they don't have an account.

> Note that when you remove a member from your team, this doesn't automatically reduce the number of paid seats for your team unless the member was added by [Auto-Flex](/docs/billing/billing/#using-auto-flex) during the current Auto-Flex cycle. If you want to reduce the number of paid seats on your team, a member of your team with the [Billing role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can [edit your plan](/docs/billing/billing/#changing-your-plan).

### Managing team roles

Each team member must have one or more team roles assigned to them, which will allow them to perform different actions within your team. Roles can be granted to team members individually, or to members of a [group](/docs/collaborating-in-postman/user-groups/).

You can change a team member's roles in your [team dashboard](https://go.postman.co/settings/team/members).

Search for a specific user by typing their name or email address in the search field. You can also filter users by role type. Select the roles next to the user you'd like to update, then select the roles you'd like to assign or remove. Select **Update Roles** to confirm your changes.

<img alt="Edit team roles" src="https://assets.postman.com/postman-docs/v10/team-dashboard-manage-member-roles-v10.15.jpg"/>

Teams can have two support accounts at no extra cost. Support accounts are team members with only Admin or Billing roles. Team members with a Super Admin or Developer role will consume a paid seat on your team.

For full details about the Postman team roles that you can assign as a Team Admin, see [Team roles](/docs/collaborating-in-postman/roles-and-permissions/#team-roles). Additional roles are available to [Postman Professional or Enterprise](https://www.postman.com/pricing) teams.

#### Managing Super Admins

> **[Super Admins are available on Postman Enterprise plans.](https://www.postman.com/pricing)**

If your team doesn't have a [Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) yet, a Team Admin can assign the role to anyone in the team. Once your team has at least one Super Admin, only a Super Admin can assign this role to another user.

Super Admins can assign the Super Admin role to a user in the [team dashboard](https://go.postman.co/settings/team/members), while [inviting a new team member](#inviting-users), and to a [group](/docs/collaborating-in-postman/user-groups/#editing-a-group). If your team is using [SCIM](/docs/administration/scim-provisioning/scim-provisioning-overview/), a Super Admin must create the [SCIM credentials](/docs/administration/scim-provisioning/scim-provisioning-overview/#enabling-scim-provisioning) in order for SCIM to change the membership of a group that's been assigned the Super Admin role.

Regular Team Admins can't remove Super Admins from a team or remove their Super Admin role assignment.

It's recommended that you create a service user that isn't tied to any individual and assign that user the Super Admin role. By doing so, your team can avoid the risk of a disruption in services due to an actual user leaving your company and ensure that your team's management is able to sign in to the service account when needed.

### Managing Partners

> **[Partners are available on Postman Enterprise Ultimate plans.](https://www.postman.com/pricing)**

You can manage external partners similarly to internal team members. To learn more, see [Managing a Partner Workspace](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/#managing-a-partner-workspace).

### Managing Guests

> **[Guests are available on Free, Basic, and Professional plans.](https://www.postman.com/pricing)**

You can manage external users who have permission to view specific collections and send requests in the collections. External users with these permissions are assigned the [Guest role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles). A [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can change an external user's role to the Developer role by going to your [team dashboard](https://go.postman.co/settings/team/members) and selecting **Convert**. When you change an external user's role from the Guest role to the Developer role, they're added to the team and get access to all team resources and workspaces.

<img alt="Convert Guest role" src="https://assets.postman.com/postman-docs/v10/manage-guests-v10.15.jpg"/>

> Your team must have [available seats](/docs/billing/billing/#changing-your-plan) or [Auto-Flex enabled](/docs/billing/billing/#using-auto-flex) to change an external user's role from the Guest role to the Developer role.

A Team Admin can also view the workspaces and collections a user assigned the Guest role can access. Open your [team dashboard](https://go.postman.co/settings/team/members), locate the Guest user, and select **View resources**. Select the workspace name or collection name to open it in a new tab. You can also select the user's name to go to their Postman profile.

<img alt="View resources a Guest can view" src="https://assets.postman.com/postman-docs/v10/view-resources-guests-v10.15.jpg" width="400px"/>

To learn more about sharing collections with external users, see [Allowing external users to view collections](/docs/collaborating-in-postman/sharing/#allowing-external-users-to-view-collections).

For information on how to remove an external user from a team or collection, see [Changing external user access to collections](/docs/collaborating-in-postman/sharing/#changing-external-user-access-to-collections).

## Manage your team workspaces

> **[Workspace management is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

A _team workspace_ is a type of workspace that enables you to share projects with collaborators and manage access to them within your team. You can limit or prohibit creation of new team workspaces by users on your team.

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

## Manage your team's product access

The [product access dashboard](https://go.postman.co/settings/team/products-access) enables you to manage which team members can access your team's products: Postbot and Enterprise solutions.

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
* All team members get access to the Private API Network.
* Only team members added to this solution can be assigned the [API Editor](/docs/collaborating-in-postman/roles-and-permissions/#api-roles) role in Postman APIs, enabling them to create and edit an unlimited amount of APIs. Team members not added to this solution will only have the [API Viewer](/docs/collaborating-in-postman/roles-and-permissions/#api-roles) role.

    > If team members are assigned the API Editor role in the [API Builder](/docs/designing-and-developing-your-api/the-api-workflow/) and you add at least one team member to the Internal API Management solution, team members not added to this solution will no longer be assigned the API Editor role. They'll only be assigned the API Viewer role.

#### API Test Automation solution

You can add team members to the [API Test Automation solution](https://www.postman.com/solutions/api-test-automation/) to increase their usage limits for the [Collection Runner](/docs/collections/running-collections/intro-to-collection-runs/) and [monitors](/docs/monitoring-your-api/intro-monitors/).

When you add team members to the API Test Automation solution:

* Added team members get unlimited collections runs with the Collection Runner. You can [run collections on a schedule](/docs/collections/running-collections/scheduling-collection-runs/) to automate API tests.
* Added team members get increased usage limits for monitors. You can [run collections on a schedule with monitors](/docs/collections/running-collections/scheduling-collection-runs-monitors/) to automate reports on API tests, and more. Learn more about [monitor use cases](/docs/monitoring-your-api/intro-monitors/#monitor-use-cases).

## Managing your team’s Postman plan

You can manage your team size or upgrade your plan at any time during your team's billing cycle.

### Changing team size

If you want to change your team's size, you have two different options:

* **Change the number of paid seats** - Team members with the Billing role can change your team's number of paid seats in the [billing dashboard](https://go.postman.co/billing/overview).
* **Turn on Auto-Flex** - Your team can invite more users without having to pay in advance for more seats with [Auto-Flex](/docs/billing/billing/#using-auto-flex).

For more information, see [Team and plan changes](/docs/billing/billing/#team-and-plan-changes).

### Upgrading your plan

Team members with the Billing role can upgrade your team plan in the [billing dashboard](https://go.postman.co/billing/overview). For more information, see [Changing your plan](/docs/billing/billing/#changing-your-plan).

## Updating your team’s Postman version

If your team isn't on the latest version of the desktop app, you can update your team to ensure everyone has access to the complete Postman API development experience.

## Next steps

After you set up your Postman team, you can use reports to get insights into your team's API development, including tests, documentation, and monitoring coverage.

* To learn more about Postman's reporting feature, visit [Using reports](/docs/reports/reports-overview/). (_[Enterprise teams](https://www.postman.com/pricing/) only._)
