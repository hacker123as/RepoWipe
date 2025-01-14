// ==UserScript==
// @name         RepoWipe: GitHub Repo Delete Button (No Reload)
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Adds a delete button to each GitHub repository on the user's repositories.
// @author       Lil Ami
// @match        https://github.com/*?*&tab=repositories
// @match        https://github.com/*?tab=repositories
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Replace with your actual GitHub Personal Access Token (PAT)
    const GITHUB_PAT = 'TOKEN_HERE';

    function addDeleteButtons() {
        const repoElements = document.querySelectorAll('li[itemprop="owns"]');
        repoElements.forEach(repo => {
            const repoName = repo.querySelector('a[itemprop="name codeRepository"]').innerText.trim();

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete Repo';
            deleteButton.style.cssText = 'margin-left: 10px; color: red; cursor: pointer;';

            deleteButton.addEventListener('click', async () => {
                const success = await deleteRepository(repoName);
                if (success) {
                    repo.remove();
                }
            });

            repo.appendChild(deleteButton);
        });
    }

    async function deleteRepository(repoName) {
        const url = `https://api.github.com/repos/hacker123as/${repoName}`;

        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': `token ${GITHUB_PAT}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });

            if (response.ok) {
                console.log(`Repository "${repoName}" deleted successfully.`);
                return true;
            } else {
                const errorData = await response.json();
                console.error(`Failed to delete repository "${repoName}". Error: ${errorData.message}`);
                return false;
            }
        } catch (error) {
            console.error('Error deleting repository:', error);
            return false;
        }
    }

    window.addEventListener('load', addDeleteButtons);
})();
