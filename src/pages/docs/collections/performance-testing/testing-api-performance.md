---
title: "Simulate user traffic to test your API performance"
updated: 2024-01-23
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Load Testing Your APIs"
    url: "https://youtu.be/a5hWE4hMOoY"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Test your API’s performance by simulating real-world traffic with Postman"
    url: "https://blog.postman.com/postman-api-performance-testing/"
---

> **Performance testing is available on [Postman Free, Basic, and Professional plans](https://www.postman.com/pricing/).** To learn more about availability for Enterprise plans, contact the [Postman sales team](https://www.postman.com/company/contact-sales/).

Performance testing enables you to simulate user traffic, so you can observe how your API behaves under load and find out if the performance meets expectations. It can also help you identify any issues or bottlenecks that affect performance. You can use the _Collection Runner_ to test the performance of your API with the same requests, collections, and environments you use for [functional API tests](/docs/collections/running-collections/intro-to-collection-runs/).

To configure a performance test, [create a collection](/docs/collections/using-collections/) with the requests you want to send to your API. Postman uses these requests to simulate the activity of your API's users. In the Collection Runner, you can set the duration of the test and the number of _virtual users_. Each virtual user runs the requests in the specified order in a repeating loop. All of the virtual users operate in parallel to simulate real-world load on your API. You can choose whether the number of virtual users is fixed for the duration of the test or ramps up and down during the test. You can also [upload a data file](/docs/collections/performance-testing/performance-test-data-files/) with custom values to use for each virtual user.

The performance test runs on your computer and not in the cloud. When you start the test, the Collection Runner displays performance metrics in real time. You can [view performance test metrics](/docs/collections/performance-testing/performance-test-metrics/) such as the average response time, error rate, and throughput for all requests or individual requests. You can also [view details about errors](/docs/collections/performance-testing/performance-test-errors/) that occurred during the test to help identify the source of any performance issues.
