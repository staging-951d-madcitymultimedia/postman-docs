---
title: "Import data from Insomnia"
updated: 2023-08-30
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Import and Export Data in Postman"
    url: "https://youtu.be/KdaiVdNMgL4"
  - type: link
    name: "Collection Format | Postman Level Up"
    url: "https://youtu.be/cRXSblrGrao"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Essentials: Exploring the Collection Format"
    url: "https://blog.postman.com/postman-essentials-exploring-the-collection-format/"
  - type: link
    name: "Differences between Postman Collections and the collection format"
    url: "https://blog.postman.com/differences-between-postman-collections-and-collection-format/"
---

Insomnia is an open-source desktop application for creating APIs. You can export requests, environments, and other data from Insomnia, then import them into Postman.

## Contents

* [Export data from Insomnia](#export-data-from-insomnia)
* [Import Insomnia data into Postman](#import-insomnia-data-into-postman)

## Export data from Insomnia

1. In Insomnia, select **Insomnia > Settings > Data > Export all data**.
1. Select the location where you want to export the data.
1. Select **Ok** when the export is complete.

## Import Insomnia data into Postman

1. In Postman, select **Import > Migrate to Postman > Other API Clients**.
1. Select **folder** then select the folder with the exported Insomnia files.
1. Select **Start Migration**. Postman checks if the selected folder has valid Insomnia files.
1. If the files are valid, you can select **Start Migration**. A window appears showing the migration’s progress. When the migration is complete, select **Dismiss**.

  > You can also drag files and folders into the import window.
