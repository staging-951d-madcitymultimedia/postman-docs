---
title: "Get started with Live Insights"
updated: 2024-01-26
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

The Live Collections Agent (LCA) supports Amazon Elastic Container Service (ECS) on EC2 and ECS Fargate deployments. To get started using Live Insights, ensure you have a team workspace set up in Postman. If you don’t already have a team in Postman, see [Creating a team](/docs/collaborating-in-postman/working-with-your-team/team-collaboration/#creating-a-team) for instructions on how to set it up. The Postman Free plan provides team setup with up to three users. Once your team workspace is set up, contact [Live Insights Alpha team](mailto:live.insights.alpha@postman.com) to get access to the Live Insights alpha in Postman.

## Contents

* [Install Live Collections Agent](#install-live-collections-agent)
* [Configure Live Collections Agent](#configure-live-collections-agent)
   * [Requirements](#requirements)
   * [Configure LCA as a sidecar](#configure-lca-as-a-sidecar)
   * [Configure LCA as a daemon service](#configure-lca-as-a-daemon-service)
   * [Uninstall](#uninstall)
   * [Ensure internet access](#ensure-internet-access)
   * [Set up AWS ECS permissions](#set-up-aws-ecs-permissions)
* [Check your LCA connection](#check-your-lca-connection)
* [Navigate Live Collections](#navigate-live-collections)
* [Observe Live Insights](#observe-live-insights)

## Install Live Collections Agent

The LCA listens to the traffic arriving at the cluster service you want to monitor and creates a Postman Collection for it.

1. In Postman, create and name a collection. To learn how, see [Organize and automate API requests in Postman Collections](/docs/collections/collections-overview/).

1. In the collection **Overview**, select **Enable Now** to enable a live collection.

    ![Enable live collection](https://assets.postman.com/postman-docs/v10/live-insights-test-collection-v10-21-2.jpg)

1. In the **Enabling Live** tab, select **Using the Live Collection Agent.**

Next, install the LCA locally. In your shell, run:

```bash
bash -c "$(curl -L https://releases.observability.postman.com/scripts/install-postman-lc-agent.sh)"
```

## Configure Live Collections Agent

* If you’re using Fargate, you can [configure LCA as a sidecar](#configure-lca-as-a-sidecar) only.
* If you’re using ECS on EC2 with awsvpc, you can install it as a [sidecar](#configure-lca-as-a-sidecar) or as a [daemon service](#configure-lca-as-a-daemon-service).
* If you’re using ECS on EC2 with bridge networking, you can [configure LCA as a daemon service](#configure-lca-as-a-daemon-service) only.

### Requirements

Configuring ECS requires:

* Internet access for your service, to be able to communicate with the Live Insights backend services. For more information, see [Ensure internet access](#ensure-internet-access).
* AWS credentials at `~/.aws/credentials` with edit access to ECS cluster, service and task definition. For more information, see [Set up AWS ECS permissions](#set-up-aws-ecs-permissions).
* Cluster ARN. Navigate to the cluster in the AWS console and find the ARN in the cluster overview.
* Service ARN. The ARN of the service on which you want to install the Live Collections Agent.
* Collection ID. You can find the collection ID by selecting your Postman Collection and then **Info** in the right sidebar.

    ![Get the collection ID](https://assets.postman.com/postman-docs/v10/live-insights-collectionID-v10-19.jpg)

* Postman API key. You can copy it from your [API keys](https://go.postman.co/settings/me/api-keys) page.

### Configure LCA as a sidecar

Following are instructions for installing the LCA as a sidecar container. If you are using ECS on EC2 with bridge networking, you will need to attach the LCA to the host network. See [Configure LCA as a daemon service](#configure-lca-as-a-daemon-service).

1. Check [Requirements](#requirements) to see the information you need to have. Then, run the following script, substituting your values.

    ```bash
    POSTMAN_API_KEY=<your_api_key> postman-lc-agent ecs add \
    --collection <collectionID> \
    --cluster <ECS_cluster_ARN> \
    --profile <aws_profile_name> \
    --region <aws_region> \
    --service <ECS_service_ARN> \
    --task <task-name>
    ```

    ![ECS sidecar configuration](https://assets.postman.com/postman-docs/v10/live-insights-ecs-shell-v10-19.jpg)

    See the help menu for further configuration.

    ```bash
    postman-lc-agent ecs --help
    ```

    > The time it takes for the deployment to complete depends on the number of tasks running in a service. Therefore, while the process might take a while, the CLI will run until it’s finished because the processing is handled by AWS.

1. Return to Postman and observe subdirectories created for services. You may see additional subdirectories created from health checks of your application's endpoints/traffic.

    > Directories can take a few minutes to populate.

    Observe the Live Collections icon <img alt="Live Collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px"> denoting a live collection and the counter badge indicating the number of requests.

    ![Live collection enabled](https://assets.postman.com/postman-docs/v10/live-insights-live-enabled-v10-19.jpg)

You are ready to [check your LCA connection](#check-your-lca-connection), [navigate your collection](#navigate-live-collections), and [observe live insights](#observe-live-insights) about your endpoints. You can also [review any traffic errors](/docs/live-insights/live-insights-troubleshoot/).

### Configure LCA as a daemon service

Following are instructions for attaching the LCA to the host network in ECS. This option is necessary if you use ECS with bridge networking. If you’d like to install the LCA as a sidecar instead, see [Configure LCA as a sidecar](#configure-lca-as-a-sidecar).

1. Check [Requirements](#requirements) for information you need to have. In the **Amazon EC2 console > Resource Groups & Tag Editor**, create a new task definition with **Network mode** set to `host`.

    **Example:** .5 vCPU and .5 MB memory for the agent, and the default task execution role.

    ![ECS daemon configuration](https://assets.postman.com/postman-docs/v10/live-insights-ecs-daemon-v10-19.jpg)

1. Add a single container in this task definition, running `docker.postman.com/postman-lc-agent`. Delete the port mapping; the agent doesn’t need to expose any services to your network. Add the `POSTMAN_API_KEY` environment variable with your Postman API key set as the value.

    ![ECS container configuration](https://assets.postman.com/postman-docs/v10/live-insights-ecs-container-v10-19-1.jpg)

1. Configure logging (optional), then expand the **Docker configuration** section.

    Replace the entry point with this string, followed by your collection ID: `/postman-lc-agent,apidump,--collection`.

    ![ECS logging configuration](https://assets.postman.com/postman-docs/v10/live-insights-ecs-logging-v10-19-1.jpg)

    If you use a particular port number per service, you can specify additional arguments to only capture traffic destined for port `NNNN`: `...,--filter,port NNNN`.

    Or you can use the extra argument to filter by the hostname you use to access the service: `...,-host-allow,HOSTNAME`.

    This parameter can take multiple comma-separated regular expressions if the task is more complicated than a single host.

1. Create a service that runs this task. You can run it as a typical service you can then scale up or down. Alternatively, you can run it as a _daemon_ on every EC2 instance in the cluster.

    Create the task. Switch the **Compute options** to _Launch Type_ and select _EC2_.

    ![ECS service creation](https://assets.postman.com/postman-docs/v10/live-insights-ecs-service-v10-19-1.jpg)

1. For **Application type** select _Service_, then select the task definition you created in steps 1–3. For **Service type** select _Daemon_.

    ![ECS deployment configuration](https://assets.postman.com/postman-docs/v10/live-insights-deployment-configuration-1-v10-19.jpg)

1. Return to Postman and observe subdirectories created for services. You may see additional subdirectories created from health checks of your application's endpoints/traffic.

    > Directories can take a few minutes to populate.

    Observe the Live Collections icon <img alt="Live Collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px"> denoting a live collection and the counter badge indicating the number of requests.

    ![Live collection enabled](https://assets.postman.com/postman-docs/v10/live-insights-live-enabled-v10-19.jpg)

You are ready to [check your LCA connection](#check-your-lca-connection), [navigate your collection](#navigate-live-collections), and [observe live insights](#observe-live-insights) about your endpoints. You can also [review any traffic errors](/docs/live-insights/live-insights-troubleshoot/).

### Uninstall

The LCA installation modifies the task definition of your service to include the LCA sidecar. To uninstall LCA, simply revert to the previous version of your task definition. To completely uninstall the agent, you can delete the task definition that contains the LCA sidecar.

### Ensure internet access

#### Fargate tasks

To verify that your task has a route to the internet:

* When using a public subnet, you can assign a public IP address to the task ENI.
* When using a private subnet, the subnet can have a NAT gateway attached.

For more information, see [Task networking for tasks hosted on Fargate](https://docs.aws.amazon.com/AmazonECS/latest/userguide/fargate-task-networking.html).

#### EC2 tasks

Tasks must be launched in private subnets with NAT gateway. For more information, see [Task networking for tasks that are hosted on Amazon EC2 instances](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html).

### Set up AWS ECS permissions

Attach the following policy to your AWS profile.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ecs:UpdateService",
                "ecs:RegisterTaskDefinition",
                "ecs:DescribeServices",
                "ecs:TagResource",
                "ecs:DescribeTaskDefinition",
                "ecs:DescribeClusters"
                ],
            "Resource": "*"
        }
    ]
}
```

The Live Collections Agent (LCA) CLI needs access to the following permissions in order to install the LCA in ECS. If the profile you selected lacks any of these permissions, the CLI output will show an error message with which action it was attempting to perform.

The `AmazonECS_FullAccess` policy provided by Amazon is a superset of these actions; you could add that entire policy as an easy way to ensure your permissions are sufficient, if they're not already.

| Action                           | Resource                                                                     | Purpose                                                                                             |
| -------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `ec2:DescribeRegions`            | \*                                                                           | Find the list of AWS regions you have enabled. (If not present, it defaults to a precompiled list.) |
| `ecs:ListClusters`               | \*                                                                           | Find the available ECS clusters.                                                                    |
| `ecs:DescribeClusters`           | \*, or restricted to account like `arn:aws:ecs:::cluster/*`          | Look up the names of the available ECS clusters.                                                    |
| `ecs:ListTaskDefinitionFamilies` | \*                                                                           | Find the available task definitions.                                                                |
| `ecs:DescribeTaskDefinition`     | \*                                                                           | Read the existing task definition in order to copy it.                                              |
| `ecs:RegisterTaskDefinition`     | \*                                                                           | Write a new version of the task definition.                                                         |
| `ecs:ListServices`               | \*                                                                           | Find the available services.                                                                        |
| `ecs:DescribeServices`           | \*, or restricted to your account, or restricted to the cluster you selected | Identify which services are using the task definition you selected.                                 |
| `ecs:UpdateService`              | \*, or restricted to your account, or restricted to the cluster you selected | Update and restart the service using the new task definition.                                       |
| `ecs:TagResource`                | \*, or restricted to your account, or restricted to the cluster you selected | Mark the service as having been updated by the LCA.                                                 |

## Check your LCA connection

A live collection shows you the properties of your system based on real-time API traffic. For [Live Insights](#observe-live-insights) to work, the Live Collections Agent (LCA) needs to see your API traffic.

Postman provides a diagnostics dashboard where you can observe traffic error states and messages.

To access the diagnostics dashboard:

1. Select the live collection.
2. In the right-hand sidebar, select the Live Collections icon <img alt="Live Collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px">.
3. Select **View Diagnostics**.

![View LCA diagnostics](https://assets.postman.com/postman-docs/v10/live-insights-view-diagnostics-v10-19.jpg)

The LCA diagnostics dashboard opens, listing your LCA runs from the most recently started run.

![LCA diagnostics dashboard](https://assets.postman.com/postman-docs/v10/live-insights-lca-diagnostics-1-v10-19.jpg)

Postman displays these error states:

* Empty capture
* No telemetry
* Insufficient permissions, try using “sudo” to run as a root

## Navigate Live Collections

The Live Collections Agent (LCA) watches your API traffic to automatically populate your Postman Collection as a _live collection_.

The LCA organizes your API into subdirectories based on hostname or service name. Within each hostname directory, you see endpoints the LCA has seen from that host/service.

Select each request to see the query parameters, path variables, headers and their data formats, and the body of the request/response.

> Live Collections can't currently be edited and will get fully automatically updated every 10 minutes.

Just like with the ordinary collections in Postman, a live collection enabled through the LCA has these elements:

* Query parameters — Sent with your requests using the URL field and the **Params** tab.
* Path variables — Form part of the request URL, and are referenced using placeholders preceded by `:` as in this example: `/customer/:id`.
* Headers — Provide more metadata about the operation you are performing.
* Body — Enables you to specify the data you need to send with a request.
* Response — Gives you several tools to help you understand the response quickly. You can view the body in one of four views: Pretty, Raw, Preview, and Visualize.

For more information, see [Building requests](/docs/sending-requests/requests/) and [Receiving responses](/docs/sending-requests/responses/).

## Observe Live Insights

Creating a live collection activates an **Insights** tab where you can observe endpoint error trends, enabling you to catch errors before your users do.

> This feature is experimental and will continue to evolve. Send your feedback and ideas about the types of metrics you would like to see to [Live Insights Alpha team](mailto:live.insights.alpha@postman.com).

![Insights tab](https://assets.postman.com/postman-docs/v10/live-insights-insights-tab-v10-21-4.jpg)

Live Insights returns a list of categories for endpoints with most errors, endpoints with the highest error rate, endpoints with new errors over the last 7 days, and slowest endpoints, selectable from a dropdown list:

* Endpoints with most errors in the past week, based on the HTTP status code of the response.
* Endpoints with the highest proportion of requests that resulted in an error in the past week, based on the HTTP status code of the response.
* Endpoints with new errors in the past day for endpoints that were previously error free for 6 days, based on the HTTP status code of the response.
* Endpoints with the highest p90 value in the past week.

The **Errors** tab displays per-endpoint error states in a chronological order as well as a graphical representation of the seven-day trend.

> This feature is experimental and will continue to evolve. Send your feedback and ideas about the types of metrics you would like to see to [Live Insights Alpha team](mailto:live.insights.alpha@postman.com).

![Errors tab](https://assets.postman.com/postman-docs/v10/live-insights-errors-tab-v10-21.jpg)

## Next steps

* [About Live Insights Early Access](/docs/live-insights/live-insights-early-access/)
* [Live Insights overview](/docs/live-insights/live-insights-overview/)
* [Diagnose and troubleshoot errors](/docs/live-insights/live-insights-troubleshoot/)
* [Live Collections Agent reference](/docs/live-insights/live-insights-reference/)
