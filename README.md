# Tab Analyzer

This extension aims to analyse the current tab your using and make a selection of improvements to the content to make your life easier.

Currently it can generate a configuration file to process Gitlabs tabs and display version information from a composer file inside the repository. This
makes reviewing PRs much easier as you know what version of PHP you are commenting on.

# Getting Setup

- Clone the repo
- Run `npm install`
- Run `npm run build`
- Enable developer mode in a chromium based browser (Edge or Chrome)
- Load in the extension (contained now in the `dist` folder) as an unpacked extension
- The extensions config is loaded remotely so you will need to boot the container to generate the config
- Run `./app.bat build`
- Add you gitlab token to the .env file
- Enter the container with `./app.bat bash`
- Now you will be inside the container, so you can generate the gitlab config
- Run `./cli config:gen gitlab`
- Exit the container
- Now add the url of the container to your hosts file
- Open the options of the extension in your browser and change the domain accordingly
- You can now visit all your gitlab repos and see version details from composer displayed nicley in the UI of the project while reviewing PRs