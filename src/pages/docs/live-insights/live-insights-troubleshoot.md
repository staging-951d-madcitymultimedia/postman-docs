---
title: "Diagnose and troubleshoot errors"
updated: 2023-12-27
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

As you work with the Postman Live Collections Agent (LCA), you may encounter errors and receive error messages. You may also come across frequently encountered issues. You'll find [solutions](#frequently-asked-questions) to some of these issues below.

## Contents

* [Error messages](#error-messages)
* [ECS memory issues troubleshooting](#ecs-memory-issues-troubleshooting)
    * [Out of memory](#out-of-memory)
    * [Container size is too large](#container-size-is-too-large)
* [Frequently asked questions](#frequently-asked-questions)
    * [Why isn't my API traffic showing up?](#why-isnt-my-api-traffic-showing-up)
    * [What do I do if my traffic is encrypted?](#what-do-i-do-if-my-traffic-is-encrypted)
    * [What does the LCA agent do with sensitive data?](#what-does-the-lca-agent-do-with-sensitive-data)
    * [I can't update my collection.](#i-cant-update-my-collection)
    * [How will the LCA running on my Kubernetes know my machine IP address?](#how-will-the-lca-running-on-my-kubernetes-know-my-machine-ip-address)
    * [I'm not seeing the traffic I'm looking for in my API model.](#im-not-seeing-the-traffic-im-looking-for-in-my-api-model)
    * [My API model is mostly health checks and infrastructure endpoints.](#my-api-model-is-mostly-health-checks-and-infrastructure-endpoints)

## Error messages

The LCA displays errors and provides diagnostics so that you can act on them:

* Observe information received from the LCA on usage and error states, including interfaces, ports, and traffic (for example, HTTP vs. encrypted traffic, the busiest endpoints, and so on).
* Review status messages and act on them.

To access the error message, select the Live Collections icon <img alt="Live Collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px"> next to the collection.

![Access live collection errors](https://assets.postman.com/postman-docs/v10/live-insights-error-access-v10-19.jpg)

The following is the complete list of error messages.

| State                           | Description                                                                           | Message                                                                                                                                                                                                                              |
| ------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| _API key lacks permission_      | The API key used to instrument this collection doesn't have permissions to modify it. | The API key used to instrument this collection doesn't have permissions to modify it. Verify that the user is an editor on this collection or use a different API key.                                                               |
| _SDK is offline_                | Your team's usage limit has exceeded.                                                 | Your team has reached its monthly traces usage limit. To request a limit increase, please reach out to support\@postman.com.                                                                                                         |
| _API key is invalid or revoked_ | The API key used to instrument this collection is invalid or has been revoked.        | Verify the API key's validity or use a different API key.                                                                                                                                                                            |
| _PCAP permission failure_       | Client lacks permissions                                                              | The Agent could not capture traffic because it lacks permissions to do so. In a container environment, ensure that the container that has the Agent can run in privileged mode and has the `CAP_NET_RAW` capability.                 |
| _Invalid filters_               | Filter parsing error                                                                  | The Agent failed to parse the filters you specified on the command line. The `--filter` argument takes `tcpdump`-style arguments, while the host and path filters take Go regular expressions. Check the Agent logs for more details |
| _Traffic capture failure_       | Error in capturing traffic                                                            | Something went wrong while capturing traffic. Please try again.                                                                                                                                                                      |
| _Something went wrong_          | Something went wrong                                                                  | Something went wrong while starting the Agent. Please try again.                                                                                                                                                                     |

## ECS memory issues troubleshooting

The Live Collections Agent (LCA) needs additional memory to run, so if you have used most of the memory available on an instance, some changes may be necessary.

Because the agent requires at least 300 MB of memory to operate, consider setting an upper limit.

For more information, see [How Amazon ECS manages CPU and memory resources](https://aws.amazon.com/blogs/containers/how-amazon-ecs-manages-cpu-and-memory-resources/).

### Out of memory

If you have specified a task-level memory limit (which is required for ECS Fargate, but optional for ECS on EC2 instance) then the CLI `ecs add` command doesn't specify a memory size for the LCA. This means it shares memory with other containers in the task.

If the instance runs out of memory, one of the containers may stop operating. If you see instances restarting after an `OutOfMemory` outage, you may wish to either increase the hard limit for the task, or impose a hard limit on the agent. If you're performing the latter, set the **Memory hard limit** value in the container definition to at least 700 MB.

![Memory hard limit](https://assets.postman.com/postman-docs/v10/live-insights-memory-hard-limit-v10-21.jpg)

For more information about debugging, see [How do I troubleshoot OutOfMemory errors in Amazon ECS?](https://repost.aws/knowledge-center/ecs-resolve-outofmemory-errors).

### Container size is too large

If you don't specify a task-level memory limit, then the CLI `ecs add` command sets a container-level memory request of 300 MB. This means that your task requires an additional 300 MB of memory to be scheduled on an instance.

If you use a Docker Compose file to create your ECS task or service, then if no memory limit is specified, the Postman Agent sidecar is allocated 512 MB by default.

If you've already tuned the other containers in your task definition based on the instance size used in your cluster, the total size of the base container and the sidecar may be too large to schedule, resulting in the following message:

```bash
INFO[0006] (service mgg-test) was unable to place a task because no container instance met all of its requirements. The closest matching (container-instance 79cac21ecdb44097a989744944e202d7) has insufficient memory available. For more information, see the Troubleshooting section of the Amazon ECS Developer Guide. timestamp="2023-12-18 23:31:31 +0000 UTC"
```

![Insufficient memory](https://assets.postman.com/postman-docs/v10/live-insights-insufficient-memory-v10-21.jpg)

In this case, you may need to reduce the memory or `memoryReservation` parameters on other containers in the task by the 300 MB (or 512 MB) requested by the Postman Live Agent.

## Frequently asked questions

The following topics can help you get traffic in the right state and get API models to show the information you need.

* [Why isn't my API traffic showing up?](#why-isnt-my-api-traffic-showing-up)

* [What do I do if my traffic is encrypted?](#what-do-i-do-if-my-traffic-is-encrypted)

* [What does the LCA agent do with sensitive data?](#what-does-the-lca-agent-do-with-sensitive-data)

* [I can’t update my collection.](#i-cant-update-my-collection)

* [How will the LCA running on my Kubernetes know my machine IP address?](#how-will-the-lca-running-on-my-kubernetes-know-my-machine-ip-address)

* [I'm not seeing the traffic I'm looking for in my API model.](#im-not-seeing-the-traffic-im-looking-for-in-my-api-model)

* [My API model is mostly health checks and infrastructure endpoints.](#my-api-model-is-mostly-health-checks-and-infrastructure-endpoints)

### Why isn't my API traffic showing up?

You've set up the LCA, and you've been running API traffic across the network, but your API model page is either empty or shows random endpoints you don't care about.

Here are a few things that may be going on:

* Permission issues that prevent the LCA from seeing traffic.
* Encrypted traffic. See [What do I do if my traffic is encrypted?](#what-do-i-do-if-my-traffic-is-encrypted) for solutions.
* Data formats that the LCA doesn't recognize.
* ECS on EC2 with bridge networking. You can install LCA as a daemon service only. For instructions, see the [installation instructions](/docs/live-insights/live-insights-gs/#install-lca-as-a-daemon-service).

In many of these cases, there is a solution. Currently, the Live Collections Agent doesn't support these three cases:

* Encrypted traffic.
* gRPC/GraphQL.
* PaaS platforms where the LCA can't easily access the network traffic through packet capture. Known platforms in this category are Heroku and Render.

If you fall into one of these cases, please let the [Live Insights Alpha team](mailto:live.insights.alpha@postman.com) know so work in this area can prioritized.

Postman provides more information about how to debug what's going on:

* Diagnostic information in the CLI itself
* Information about encrypted traffic and errors in Postman

#### Check your CLI output

If your traffic is getting jammed up in a way that the LCA recognizes, your CLI shows error output describing what's gone wrong. If you would like help resolving your issues, email your log output to [Support](mailto:observability-support@postman.com).

#### Check the Live Collections diagnostics

Issues with traffic processing also show up in the Live Collections diagnostics dashboard. To access the diagnostics dashboard:

1. Select the live collection.
2. In the right-hand sidebar, select the Live Collections icon <img alt="Live Collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px"> next to the collection.
3. Select **View Diagnostics**.

### What do I do if my traffic is encrypted?

If your model is missing endpoints that you expect to be there, or is completely empty, it may be because you are trying to observe your API at a point where it's encrypted. In Postman, visit the Live Collections diagnostics dashboard and select one of the client reports listed there. To access the diagnostics dashboard:

1. Select the live collection.
2. In the right-hand sidebar, select the Live Collections icon <img alt="Live Collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px"> next to the collection.
3. Select **View Diagnostics**.

You'll see whether the LCA saw any traffic encrypted with TLS.

If you’re running Kubernetes, follow the [installation instructions](/docs/live-insights/live-insights-gs) to install LCA as a sidecar. This enables the LCA to see encrypted traffic if a service mesh such as Istio is being used.

#### Add a reverse proxy

If HTTPS currently terminates at your application, then the LCA won't be able to see the unencrypted version of your data. You could reconfigure your deployment to let the LCA see the unencrypted data by adding a reverse proxy to serve as the HTTPS endpoint.

See [NGINX Reverse Proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/) for instructions on setting up NGINX, a popular open-source web server, as a reverse proxy. This reverse proxy can be set up as part of your container image, or run as a sidecar.

When configured with your certificate, the reverse proxy accepts the HTTPS connection from clients, decrypt the data, and then send the unencrypted data to your application. The unencrypted data can be observed by the LCA agent on the local network. The easiest way to get started with this configuration is to have both NGINX and the LCA configured as sidecars to your application container.

#### Use HTTP from the load balancer instead of HTTPS

If you are using a load balancer, and your security policy permits it, you could have the load balancer terminate HTTPS, and communicate to the application using unencrypted HTTP. Amazon’s Application Load Balancer supports using either HTTP or HTTPS as a target, but only HTTP will be visible to the LCA agent.

### What does the LCA agent do with sensitive data?

The LCA agent obfuscates request/response payload data and sends only request/response metadata to our servers.

The LCA agent sends salted hashes of request/response payload data. The LCA cloud isn't able to access this information, so the LCA cloud never accesses your sensitive data.

### I can’t update my collection.

You may come across the following error message when you attempt to update your collection.

```shell
[ERROR] You cannot send traffic to the collection with ID a3b0a1e7-6067-456c-be6e-e8552656734c. Ensure that your collection ID is correct and that you have edit permissions on the collection. If you do not have edit permissions, please contact the workspace administrator to add you as a collection editor.
```

This issue can occur if you:

* Don’t have the right collection ID. You can find the collection ID by selecting your Postman Collection and then **Info** in the right sidebar.

  ![Get the collection ID](https://assets.postman.com/postman-docs/v10/live-insights-collectionID-v10-19.jpg)

* Don’t have permission to edit the collection. You need to be and remain an editor of the collection. Please contact your Workspace admin for access.

### How will the LCA running on my Kubernetes know my machine IP address?

The LCA is installed as a sidecar in the application pod, so it doesn't need to know the node IP address. It listens on the network interface for all traffic received (or sent by) the pod and reports each request using the hostname contained in the URL, rather than using network-layer information.

Postman can see the IPv4 or IPv6 addresses used to send and receive information as part of packet capture, but that's not presented in the live collection.

### I'm not seeing the traffic I'm looking for in my API model.

If you're not seeing the endpoints you're expecting in your first live collection, do not worry! There are a few reasons, many of them addressable.

There are different articles to visit next, based on what's going on:

* Few of the endpoints you care about are getting through because they're health checks or infrastructure endpoints. What could be happening is that the LCA is seeing mostly health checks and infrastructure endpoints, and your other traffic isn't getting through. If that's the case, see [My API model is mostly health checks and infrastructure endpoints](#my-api-model-is-mostly-health-checks-and-infrastructure-endpoints) for help.
* Few of the endpoints you care about are getting through because they're encrypted. If this is the case, see [What do I do if my traffic is encrypted?](#what-do-i-do-if-my-traffic-is-encrypted) for workarounds.
* Your model is cluttered with other endpoints that you don't want to see, but that you would like to filter out. If this is the case, try filtering out the endpoints.

Postman currently doesn't support these behaviors but plans to cover them in future releases:

* Providing hints about the endpoint inference (not available in Postman, but you can reach out to the Live Insights team through Slack for assistance)
* Filtering in Postman

### My API model is mostly health checks and infrastructure endpoints.

_I was able to successfully generate an API model, but most of what I'm seeing is health checks._

Load balancers and orchestration systems often use a health endpoint to verify whether a service is live. Similarly, there are Kubernetes or AWS endpoints your system may call as part of its regular functioning.

Because these endpoints get called regularly, regardless of whether there is other traffic, the health endpoints could clog up your API model.

Because the LCA samples your traffic, meaning it doesn't send all of your traffic to Postman, health check and infrastructure endpoints could come to dominate the traffic that the LCA sees. The LCA’s rate limiting (which defaults to 1000 calls per minute) may cause some API calls to be dropped, so filtering out the health endpoints ensures that this budget is used entirely for important endpoints.

If this is the case, the solution is to set up filters on the LCA. This will increase the LCA’s ability to capture meaningful (non-health check) data.

#### Filter out endpoints by path

One way to filter out traffic is using the `-path-exclusions` flag.

To remove a health check endpoint, for instance, use the `-path-exclusions` command line parameter with `apidump`, specifying the path part of the health check. For example,

```shell
apidump --collection collectionID –path-exclusions ^/health$
```

causes all the `/health` endpoints on all hosts to be ignored by the LCA.

The argument to `--path-exclusions` is a Go regular expression, which may match anywhere within the path. The special characters `^` and `$` signal _start of string_ and _end of string_; this prevents the filter from matching other paths that include the string `/health`, like `/employee/health-benefits`.

#### Filter out endpoints by IP address

A similar problem can arise when your model is littered with API calls to unnamed infrastructure services accessed by IP address. To remove these from your model, you can use a regular expression in the `-host-exclusions` command line parameter, as follows:

```shell
apidump --collection collectionID –host-exclusions ^(\d)+\.(\d)+\.(\d)+\.(\d)+$
```

This removes all endpoints whose host is given by a dotted-quad IP address.

## Next steps

* [About Live Insights Early Access](/docs/live-insights/live-insights-early-access/)
* [Live Insights overview](/docs/live-insights/live-insights-overview/)
* [Get started with Live Insights](/docs/live-insights/live-insights-gs/)
* [Live Collections Agent reference](/docs/live-insights/live-insights-reference/)
