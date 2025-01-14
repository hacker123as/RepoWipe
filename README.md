# RepoWipe: Effortlessly Delete Your GitHub Repositories 🚀

RepoWipe is a Tampermonkey userscript that adds a convenient "Delete Repo" button to each repository listed on your GitHub repositories page. With a single click, you can delete a repository without the need to reload the page.

![RepoWipe in Action](https://raw.githubusercontent.com/hacker123as/RepoWipe/refs/heads/main/8d4aLy5.png)

## Features ✨

- **Instant Deletion**: Remove repositories with a single click.
- **Seamless Experience**: No page reloads; the repository disappears instantly.
- **User-Friendly Interface**: Intuitive design with vibrant buttons for easy access.

## Installation Guide 🛠️

1. **Install Tampermonkey**: If you haven't already, install the Tampermonkey extension for your browser:
   - **Chrome**: [Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - **Firefox**: [Tampermonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - **Safari**: [Tampermonkey for Safari](https://apps.apple.com/app/tampermonkey/id1482490089)
   - **Edge**: [Tampermonkey for Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

2. **Install RepoWipe**: After installing Tampermonkey, click the link below to add RepoWipe:
   - [Install RepoWipe](https://github.com/hacker123as/RepoWipe/raw/refs/heads/main/RepoWipe.user.js)

3. **Configure Your GitHub Personal Access Token (PAT)**:
   - **Generate a PAT**: Follow GitHub's official guide to create a fine-grained personal access token with the necessary permissions:
     - [Creating a fine-grained personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
   - **Add Your PAT to RepoWipe**: After generating the token, edit the RepoWipe script in Tampermonkey:
     - Open Tampermonkey Dashboard.
     - Locate "RepoWipe" and click "Edit".
     - Replace `'TOKEN_HERE` in the script with your actual PAT.
     - Save the changes.

## Usage 🚀

1. **Navigate to Your Repositories Page**: Go to your GitHub profile and click on the "Repositories" tab.
2. **Delete a Repository**: Click the red "Delete Repo" button next to the repository you wish to remove.
3. **Instant Removal**: The repository will be deleted, and its entry will disappear from the list without reloading the page.

## Important Notes 📝

- **Caution**: Deleting a repository is irreversible. Ensure you've backed up any important data before deletion.
- **Permissions**: RepoWipe requires a GitHub PAT with appropriate permissions to delete repositories.
- **Security**: Keep your PAT confidential. Do not share it publicly or expose it in unsecured environments.

## Credits 🙌

- **Author**: Lil Ami
- **Contributors**: [Lil Ami](https://github.com/hacker123as)

Enjoy a cleaner GitHub experience with RepoWipe! 🧹 
