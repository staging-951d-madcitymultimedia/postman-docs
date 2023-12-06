---
title: "Import data from API clients"
updated: 2023-12-05
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

Postman can import data from the API clients Hoppscotch, Insomnia, and Thunder Client. Postman validates the files you want to import and recreates their requests, collections, environments, and other data in your Postman workspace.

## Import data from an API client

To import Hoppscotch, Insomnia, or Thunder Client data into Postman, do the following:

1. Select **Import**, then select **Migrate to Postman > Other API Clients**.
1. Select **files** or **folder**, then select the files or folder you want to import.
    * For Hoppscotch, you can select individual exported collection and environment files.
    * For Insomnia, you can select files and folders exported with **Preferences > Data > Export > Export all data**.
    * For Thunder Client, you can select individual exported collection and environment files, or you can select the `rangav.vscode-thunder-client` folder:
        * macOS: `~/Library/Application Support/Code/User/globalStorage/rangav.vscode-thunder-client`
        * Windows: `C:\Users\{UserName}\AppData\Roaming\Code\User\globalStorage\rangav.vscode-thunder-client`
1. Select **Open**. Postman checks if the selected files are valid Hoppscotch, Insomnia, or Thunder Client files.
1. If the files are valid, you can select **Start Migration**. A window appears showing the migration’s progress. When the migration is complete, select **Dismiss**.

  > You can also drag files and folders into the import window.
