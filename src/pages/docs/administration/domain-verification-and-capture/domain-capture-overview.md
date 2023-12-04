---
title: "Configure domain verification and account capture in Postman"
updated: 2023-10-03
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Domain Capture: Group Your Organization’s Postman Users into a Single Team"
    url: "https://blog.postman.com/introducing-domain-capture/"
---

> **[Domain verification is available on Postman Enterprise plans. Domain capture is available on Postman Enterprise Ultimate plans.](https://www.postman.com/pricing)**

[Domain verification](/docs/administration/domain-verification-and-capture/add-and-verify-a-domain/) enables Postman to trust your team and its connection to your organization. When you add and verify a domain or subdomain, it removes the friction of adding users who have already verified their email addresses with the relevant domain. Domain verification is one of the [prerequisites for enabling domain capture](#prerequisites-for-domain-capture)

[Domain capture](/docs/administration/domain-verification-and-capture/enable-domain-capture/) consolidates all of the Postman user accounts that exist within your organization into one team. When you enable it, any accounts associated with the verified internet domain or subdomain will only be able to use Postman within your team. Moving forward, any Postman users who sign up for a new account with the relevant domain will be automatically added to your team as new members.

## Contents

* [Why should my organization enable domain capture in Postman?](#why-should-my-organization-enable-domain-capture-in-postman)

* [Prerequisites for domain capture](#prerequisites-for-domain-capture)

* [Set up domain capture](#set-up-domain-capture)

## Why should my organization enable domain capture in Postman?

Domain capture benefits both administrators and developers.

For administrators, domain capture consolidates all of the Postman user accounts that exist within your organization into one team. Maintaining one Postman Enterprise team simplifies team management. Whether you're reviewing [reports](/docs/reports/reports-overview/), tracking [Secret Scanner notifications](/docs/administration/token-scanner/), or implementing an [API governance strategy](/docs/api-governance/api-governance-overview/), you'll only need to use one dashboard to maintain compliance and security across your organization. Enabling domain capture ensures there is no unauthorized usage within your organization and that all Postman users associated with your domain will be directed to use your organization's official team.

For developers, domain capture removes friction from the onboarding process. As users authenticate into Postman with your verified domain, they'll be automatically directed to your organization's official team. This ensures that new teammates are instantly provided with all of the resources they’ll need to be successful contributors.

## Prerequisites for domain capture

You must be a [Postman Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to enable domain capture for your team. In addition, your team must:

* Be on a [Postman Enterprise Ultimate](https://www.postman.com/pricing) plan.
* Use [Postman version 9 or later](/docs/administration/enterprise/managing-enterprise-deployment/).
* Have [SSO](/docs/administration/sso/admin-sso/) configured and enabled. Alternative authentication methods (Postman or Google sign in) must be turned off.
* [Add and verify a domain or subdomain](/docs/administration/domain-verification-and-capture/add-and-verify-a-domain/).

It's recommended that you enable [SCIM provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/) to ease the process of onboarding new users and [Auto-Flex](/docs/administration/billing/#using-auto-flex) to ensure that your team can automatically accommodate all users that may be added to your Postman team when domain capture is enabled.

## Set up domain capture

To set up domain capture, do the following:

1. Complete the [prerequisites](#prerequisites-for-domain-capture) for enabling domain capture, including [adding and verifying a domain](/docs/administration/domain-verification-and-capture/add-and-verify-a-domain/).
1. [Enable domain capture](/docs/administration/domain-verification-and-capture/enable-domain-capture/).

For more information on domain verification and account capture, see [Domain capture FAQs](/docs/administration/domain-verification-and-capture/domain-capture-faqs/).
