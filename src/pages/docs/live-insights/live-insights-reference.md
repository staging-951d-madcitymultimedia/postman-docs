---
title: "Live Collections Agent reference"
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

Use functions and parameters to customize your Live Collections Agent (LCA) deployment and filter the HTTP requests in your Postman Collection.

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
