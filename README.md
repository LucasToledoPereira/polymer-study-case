# Polymer Study Case

Implements a set of webcomponents using Polymer Framework v2.0.

### Setup

##### Prerequisites

First, install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli

Second, install [Bower](https://bower.io/) using [npm](https://www.npmjs.com)

    npm install -g bower

### Start the development server

This command serves the app at `http://127.0.0.1:8081` (`localhost:8081`) and provides basic URL
routing for the app:

    polymer serve

### Build

Run `polymer build` command

### Preview the build

This command serves your app. Replace `build-folder-name` with the folder name of the build you want to serve.

    polymer serve build/build-folder-name/

### Run tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

    polymer test

If running Windows you will need to set the following environment variables:

- LAUNCHPAD_BROWSERS
- LAUNCHPAD_CHROME

Read More here [daffl/launchpad](https://github.com/daffl/launchpad#environment-variables-impacting-local-browsers-detection)

### Components

- [Select](src/components/select)


## Authors
* Supero TI - **Lucas Toledo Pereira** - [Github - LucasToledoPereira](https://github.com/LucasToledoPereira)
