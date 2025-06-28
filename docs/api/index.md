# epanet-js toolkit

Do you want to create your own web based modelling applications, similar to epanet-js? You can with the epanet-js toolkit.

Just want to use epanet-js? [Launch the epanet-js app now!](https://app.epanetjs.com)

<a href="https://app.epanetjs.com" ><img src="/assets/images/epanet-js-app.png" alt="epanet-js app" /></a>

## About the epanet-js toolkit

epanet-js toolkit is a javascript library for engineers, developers and academics to simulate water networks. The toolkit allows you to run and share hydraulic analyses, or create custom frontend and server-side applications using the OWA EPANET engine.

The epanet-js toolkit is a full port of version 2.2 OWA-EPANET Toolkit in Typescript, providing access to all 122 functions within the toolkit.

The JavaScript library is for engineers, developers and academics to run and share hydraulic analyses or create custom front end or server-side applications.

The epanet-js toolkit allows you to simulate water distribution networks in javascript using the EPANET engine. If you're not familiar with either water modelling or EPANET, have a read through [what is water modelling](./introduction/water-modelling).

Both the epanet-js toolkit is [MIT licenced](https://github.com/modelcreate/epanet-js/blob/master/LICENSE), which allows the library to be used in comerical applications. The hydraulic engine used within the epanet-js library is [OWA-EPANET 2.2](https://github.com/OpenWaterAnalytics/EPANET), which is also [MIT licenced](https://github.com/OpenWaterAnalytics/EPANET/blob/dev/LICENSE), with contributions by the following [authors](https://github.com/OpenWaterAnalytics/EPANET/blob/dev/AUTHORS).

The source code for the project is hosted on GitHub and external contributions are welcome! You can learn more about the [development process](./introduction/development/), [our roadmap](./introduction/development/#roadmap) and also visit the [Github repo](https://github.com/modelcreate/epanet-js/).

To get started in using the epanet-js toolkit in your applications, follow the instruction below to install the library. To see complex applications built on top of epanet-js, check out the [showcase](./introduction/showcase). If you have a project which uses epanet-js and want to share it, please let us know!

## Install

To install the stable version with npm:

```
$ npm install epanet-js
```

or with yarn:

```
$ yarn add epanet-js
```

For those without a module bundler, the epanet-js package will soon be available on unpkg as a precompiled UMD build. This will allow you to drop a UMD build in a `<script>` tag on your page and access it on the window.epanetJs global variable.

## Usage

### Load and run an existing inp File

[Run this example on CodeSandbox](https://codesandbox.io/embed/musing-chandrasekhar-7tp1y?fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.js&theme=dark)

```js
import { Project, Workspace } from "epanet-js";
import fs from "fs";

// Read an existing inp file from the disk
const net1 = fs.readFileSync("net1.inp");

// Initialise a new Workspace and Project object
const ws = new Workspace();
const model = new Project(ws);

// Write a copy of the inp file to the workspace
ws.writeFile("net1.inp", net1);

// Runs toolkit methods: EN_open, EN_solveH & EN_close
model.open("net1.inp", "report.rpt", "out.bin");
model.solveH();
model.close();
```

See the complete list of examples in the [examples page](examples).
