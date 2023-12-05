---
title: "Live Collections Agent reference"
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

Use functions and parameters to customize your Live Collections Agent (LCA) deployment and filter the HTTP requests in your Postman Collection.

## Contents

* [kube inject](#kube-inject)
* [apidump](#apidump)

## kube inject

Inject the Live Collections Agent into a Kubernetes deployment or set of deployment and output the result on the command line or into a file. See [Examples](#kube-inject-examples).

### Required flags

* `-f, --file string` - Path to the Kubernetes YAML file to be injected. This should contain a valid deployment manifest.
* `--collection collectionID` - Name of the collection to which the traffic will be uploaded.

### Optional flags

* `-o, --output string` — Path to the output file. If not specified, the output will be printed to stdout.
* `-s, --secret string[="true"]` — Whether to generate a Kubernetes secret manifest. If set to "true", the secret will be added to the modified Kubernetes YAML file. Specify a path to write the secret to a separate file; if this is done, an output file must also be specified with `--output`. (Default: `"false"`)

> **NOTES**:
>
> * The input file must be in YAML format and must contain at least one valid deployment manifest.
>
> * If the `--secret` flag is set to a file path, the `--output` flag must also be set.

### kube inject examples

* Inject the set of deployment manifests found in `resources.yml` and print the result to standard out. Each injected deployment should send traffic from the collection to the Live Collections Agent.

    ```bash
    postman-lc-agent kube inject --collection collectionID -f resources.yml
    ```

* Inject any deployment manifests found in `resources.yml` similar to the previous execution. Also generate and add any secrets required for the Live Collections Agent to run.

    ```bash
    postman-lc-agent kube inject -s --collection collectionID -f resources.yml
    ```

* Output injected resources and any secret manifests to separate files:

    ```bash
    postman-lc-agent kube inject -s="secret.yml" --collection collectionID -f in.yml -o out.yml
    ```

* Apply generated resources via pipe using `kubectl`:

    ```bash
    postman-lc-agent kube inject -s --collection collectionID -f in.yml | kubectl apply -f -
    ```

## apidump

Capture and store a sequence of requests and responses to a service by observing network traffic. See [Examples](#apidump-examples).

### Required flags

* `--collection collectionID` - The collection with which to associate the captured traffic. The traffic is sent to the Live Collections Agent. You can find the collection ID by selecting your collection and then **Info** in the right sidebar.

    ![Get the collection ID](https://assets.postman.com/postman-docs/v10/live-insights-collectionID-v10-19.jpg)

### Optional flags

Filter your traffic using optional flags to return the information you’re interested in.

* `--rate limit number` - Set the maximum number of HTTP request/response pairs to collect per minute. If the number of samples exceeds this amount, the CLI randomly samples events, and sends only the specified number to the Postman cloud.
* `--path-exclusions regex1,regex2...` - Remove HTTP paths matching regular expressions. To filter out requests fetching files with `.png` or `.jpg` extensions, specify `--path-exclusions .*\.png` and `--path-exclusions .*\.jpg`. For example, if the URL is `http://10.0.0.1/junk.jpg`, then `path-exclusions` is matched against `"junk.jpg"`.
* `--path-allow regex1,regex2...` - Only capture HTTP requests whose URL path matches any one of the given regular expressions.
* `--host-exclusions regex1,regex2...` - Remove HTTP requests whose host URL matches any one of the given regular expressions. You can exclude the host in the form of a regex that matches the IP address if you’re collecting all the junk traffic to the IP addresses instead of your named services. For example, if the URL is `http://10.0.0.1/junk.jpg`, then `host-exclusions` is matched against `"10.0.0.1"`.
* `--host-allow regex1,regex2...` - Only capture HTTP requests whose host URL matches any one of the given regular expressions.

### apidump examples

* Capture all traffic from your collection and send it to the Live Collections Agent.

    ```bash
    postman-lc-agent apidump --collection collectionID
    ```

* Run `my_tests.sh` as `${USER}` and capture traffic on port 80. Send the captured traffic to the Live Collections Agent. The agent will automatically terminate once the script finishes.

    ```bash
    postman-lc-agent apidump --collection collectionID --filter "port 80" -c ./my_tests.sh -u ${USER}
    ```

## Next steps

* [About Live Insights Early Access](/docs/live-insights/live-insights-early-access/)
* [Live Insights overview](/docs/live-insights/live-insights-overview/)
* [Get started with Live Insights](/docs/live-insights/live-insights-gs/)
* [Diagnose and troubleshoot errors](/docs/live-insights/live-insights-troubleshoot/)
