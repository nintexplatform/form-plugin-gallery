# Introduction
Welcome to the Nintex Form Designer Plugins repository. This repository contains a collection of plugins that can be used with Nintex Forms, a powerful tool for creating custom forms for your workflow solutions.



## In this repository...

This repository contains an npm package and the source code of some example plugins, as well as pre-built examples you can register directly in your tenant.

|Folder|Description|
|------|-----------|
|.storybook| Optional files useful for developing your plugins with Storybook. |
|src| Source code for typescript plugins that you can build using the provided npm commands.|
|js-plugins| Source code for javascript plugins that do not need build commands to run.|

# Getting Started
WHen creating a new componant either in the typescript or javascript, the plugin should be in it's own folder


## For Typescript Plugins

Before you begin, ensure you have the following installed:
* nodejs
* vscode (or editor of choice)

Clone the repository.

Install the dependencies with `npm install`.

Commands:

* `npm start` starts storybook, a helpful tool for developing and testing your web components.
* `npm run analyze` generates the custom-elements.json file, a standard file which describes the web component and is used by storybook to generate the controls. This file can also be used for intellisence in other editors when developing your web components.
* `npm run build` builds the web components ready to be hosted and consumed by Nintex Forms.
* `npm run release` bundles storybook, if you would like to host it to share with others.
