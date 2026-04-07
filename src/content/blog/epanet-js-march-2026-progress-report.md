---
draft: true
title: "epanet-js March 2026 Progress Report"
snippet: "TBD"
image:
  {
    src: "/assets/blog/progress-report/2026-02/2026-02-00-epanet23-cover.png",
    alt: "",
  }
publishDate: "2026-04-7 08:15"
category: "Progress report"
author: "Luke Butler"
tags: [Progress report]
---

## Features

### Projections

- Allow to project the network within the app
- Allow to start a project on a grid

These two features:

1. The first one allows you to load an IMP, and you'll come up with an option to select your projection system. This will let you have the base map in epanet-js so you can start by either searching for a location, and then it will place that location map and give you some potential options for projection systems. When you click them, it'll place the assets on the map, and you can confirm that the projection system is correct. Alternatively, you can just also put in the projection code, and it will work automatically. I will just replace it automatically.
2. Start a project on a grid. This is the x y grid feature that we've talked about previously. The idea is that you can start a new project and go straight into a project with an x y grid from a new project, instead of loading one with an x y grid. Obviously, with the projecting one, you can also choose to go to x y grid.

You can now add a basemap directly in epanet-js.

This new feature makes it much easier to get your model up and running and understand where your assets sit in the real world. You can search for a location to find the right projection, or enter an EPSG code manually if you already know it.

One of the biggest benefits is that your model now stays in its original coordinate system. Previously, you had to convert everything to lat/long to get it onto a map. That’s no longer needed.

It’s another step from all of us at Iterating to make using EPANET and epanet-js as easy as possible.

### Customer points

- Allow to add customer points
- Allow to edit a customer point
- Allow to remove a customer point

Made some further upgrades to customer points, such as:

- being able to manually add customer points
- edit the individual features
- being able to delete them as well
  Just generally being able to manage customer points directly

### Custom elevation sources

Add custom elevations sources (GeoTIFF)

You can now manage your own elevation data in epanet-js, so you can load a GeoTIFF and reference the elevation data directly from that file. This allows you to use high-resolution local files for elevation data in your hydraulic models. You can also choose the offset. It applies to the Mapbox default layer, the global layer, and there are individual layers. You can load in multiple data sets and multiple files in each data set as well.
For example, you could:

1. If you have ultra-high resolution data for small parts of your network, you can load those in first.
2. You can load in a more general tile set.
3. Finally, you can fall back into the global elevation data sources.

I also mentioned how you could apply the offsets. The other thing is you can enable and disable the map box data too if you want.

### Simulation upgrades

- Allow to choose pressure units
- Energy consumption analysis
- Allow to enable/disable emitter backflow

We've added some new simulation options:

1. You can now choose your pressure units. When you start a new project, you can choose the pressure units. This is a new feature in EPANET 2.3, so you can actually mix pressure units now. You can have gallons per minute and meters, which can be quite common in some locations, or metric units plus psi.

"EPANET 2.3 introduced the ability to separate flow units and pressure units, and this is now supported in epanet-js.

This means you’re no longer restricted to a single unit system. You can, for example, run a model using gallons per minute for flow while reporting pressure in meters, or use metric flows and pipe diameters while keeping pressures in PSI.

This flexibility reflects how many utilities actually work in practice. In places like Canada, it’s common to use metric units for flows and pipe sizes but PSI for pressures.

EPANET 2.3 now allows you to set pressure as any of the following:

- Pounds per sq. inch (psi)
- Kilopascals (kPa)
- Meters (m)
- Feet (ft)
- Bar (bar)

You can now take advantage of this capability in epanet-js when starting new projects."

Energy consumption analysis and data is now available. If you look at your pumps, you can see the average costs and the amount of kilowatts of power that it's used. You can find these in your EPANET options.

"We’ve added pump energy reporting to epanet-js.

When you select a pump in your model, you can now see the energy results directly in the asset panel. This includes average energy usage, peak usage, and the average cost over the simulation period.

With the new extended simulation settings, you can now define efficiency curves and energy price patterns. These can be applied globally across the entire network or set for individual pumps.

This addition makes it much easier to understand operational costs when you are changing settings or comparing different scenarios. It is a practical way to see the financial impact of your modeling decisions - give it a try and let us know what you think."

There is a new option for EPANET 2.3 which allows you to disable backflow from the emitter if there was negative pressure.

### UX – Quality of life

- Reopen a recent network (only available in Chromium-based browsers)

We've basically made an improvement where you have your recent projects when you're in the welcome screen. When you first load in, any projects that you had previously opened will be there as a little card that you can load in and click. This makes it much more convenient for you to load in networks that you've previously worked on, which are located directly on your desktop computer.

We’ve added a "Recent Projects" list to epanet-js to help you get back to work faster. When you open the app, you will now see a list of the models you have been working on. You can jump straight back into a project from the welcome screen or via a new dropdown in the toolbar.

The important part is that epanet-js still works entirely with files on your own computer. There is no cloud involved and we do not store your data on our servers.

We have just added a convenient way for the browser to remember your local file paths so you do not have to hunt through your folders every time you start a session.

## Improvements

- Allow disabling default Mapbox elevation source
- Allow to pick the map link/node default color
- Initialize scenario with a main simulation
- Allow collapsing/expanding asset panel sections
- Display tank and reservoir Net flow
- Support more simulation options
- Improve dialogs design

## Pricing: Teams tier pricing policy update. Not an improvement per se, maybe in a "Other" section?

We’ve done something unheard of in hydraulic modeling software.
We’ve reduced the price of our software - this isn’t an April Fool’s joke! We believe pricing shouldn’t be the barrier to using high-quality hydraulic modelling tools.
So we’ve moved from $2,500 per user/year to a new model of $600 per user/year + $4,400 fixed cost for our Teams plan - which for most teams means a significant reduction, often more than half.
Our goal at Iterating is simple: make epanet-js accessible, fairly priced, and sustainable, so more engineers, utilities, and teams can build, maintain, and understand their networks without being limited by cost.
If we want better tools in this space, they need to be usable by more people.
And of course, there’s still the free version, which already supports thousands of users who don’t need professional support or advanced features.
No catch, no trick - just great open source and sustainable hydraulic modelling software.

## Fixes

Highlight tanks and reservoirs from low zooms
Allow to draw elements in scenario while coloring by a property
Map clear when starting project from scratch
Issue when setting a library pump head curve on a pump with a local curve defined
Fix issue with numbers in French locale

## Community

Potential option if we want to do that this month

### LinkedIn Posts:

#### https://www.linkedin.com/posts/ibrahimax_i-recently-tested-epanet-js-by-iterating-ugcPost-7434238130657955840-W653

> Ibrahim BENBOUSSADIbrahim BENBOUSSAD Ingénieur hydraulique
> I recently tested Epanet-JS by Iterating, the ambitious project that brings the well-known hydraulic modeling software EPANET directly into a web browser.
>
> This is clearly a game changer for hydraulic engineers who rely on water network modeling on a regular basis. Epanet-JS provides a clean, visually comfortable graphical interface with a very solid UI/UX experience.
>
> Here are the features I particularly appreciated — and that will genuinely change the way I work:
>
> - Scenario management: No more duplicating model files and juggling countless open windows just to test technical alternatives. Managing scenarios within a single environment is a major step forward.
> - Upstream / downstream trace: With a single click, it becomes easy to identify which areas are supplied by a given pipe, or to track through which pipe a specific sector is fed. This is extremely practical for diagnostics and impact analysis.
>
> As a long-time EPANET user with well-established habits, I also see a few areas for improvement:
>
> - Greater flexibility in adjusting node and link thickness (especially proportional-to-value display options).
> - The ability to integrate calibration datasets directly into the model environment to streamline model tuning workflows.
>
> Overall, a very promising tool that pushes hydraulic modeling toward a more modern, accessible, and collaborative future.

#### https://www.linkedin.com/posts/marcnoblen_i-spent-my-weekend-diving-into-iterating-ugcPost-7436532511268208640-aR58

> Marc Noblen De La CruzMarc Noblen De La Cruz Civil Engineer and Environmental Engineer
>
> I spent my weekend diving into Iterating epanet‑js, and genuinely had such a great time with it. It’s one of the most intuitive water network modelling tools I’ve ever used. I even switched the interface to Japanese just to challenge myself > haha. Huge thanks to Yusuke Shinoda for the beta. 本当にありがとうございます
>
> I’ve always loved learning new tools in water network engineering, and while exploring epanet‑js, I felt that sense of flow - the kind where hours pass without you noticing. Running scenarios, testing ideas, and just playing around with the > model felt effortless.
>
> Here are some of the cool stuff that stood out:
>
> 1. Easy, intuitive, and honestly… fun
>    It doesn’t overwhelm you like some hydraulic software does. It actually feels like you’re exploring something cool, almost like a game, rather than using a technical modelling tool.
>    Plus, the fact that it’s web‑based is such a big win. No installation. No licences. Just open and go. The UI also feels surprisinglyfresh like updating your iPhone OS and immediately wanting to click around to see what’s new. Coming from classic > EPANET (1993), this feels like such a huge upgrade. It really shows what next‑generation, powerful, and accessible modelling tools should look like.
> 2. Scenarios are so easy to manage
>    No need to open another project window - just switch tabs like Excel sheets. It keeps things organised and encourages you to try more ideas.
> 3. Smooth and thoughtful language switching
>    Changing languages is instant - Spanish, French, Japanese. (Still no Tagalog, maybe one day!)
>    The only tiny thing I noticed is that the view sometimes shifts to another part of the map after changing languages, but the 'Fit to Network' button fixes it in a click.
> 4. Great 'help' documentation
>    I use Notion every day, so when I saw the help site built in Notion, it just felt right. It fits the whole vibe of the tool - modern, clean, and easy to explore.
>    CTRL + P is honestly the most powerful feature. Just type a word and it immediately brings you to the right section. That’s actually how I ended up revisiting the Wheelwright and Roseberry worked example again.
>
> I know more features are coming, and that really excites me. As someone who loves pushing himself to learn more, I would really love to explore and contribute in the future, perhaps in areas such as:
> 1 Extended Period Simulation (EPS)
> 2 Fire Flow Analysis
> 3 Criticality Analysis
> 4 Flushing Analysis
> 5 Water Quality (water age, constituent analysis)
> 6 Trace Analysis
> 7 Pipe Break Analysis
>
> I also enjoyed the Philippine Young Water Professionals (PYWP)webinar. The part where Luke Butler joked about whether he and Sam Paya were being brave or foolish for developing this tool genuinely made me laughed (his words, not mine! haha Check around 32:40) https://lnkd.in/eTyuCkfS
>
> Kudos to the whole team - this tool means a lot to people who are passionate about the water industry and love learning new things. I’ll definitely keep exploring and learning!

#### https://www.linkedin.com/posts/raamiz-missi-toure-b980a4358_epanet-hydraulique-epanet-ugcPost-7434271052215709696-tVBr

> Raamiz MISSI TOURERaamiz MISSI TOURE
> 𝐒é𝐫𝐢𝐞: 𝐎𝐮𝐭𝐢𝐥𝐬 & 𝐌é𝐭𝐢𝐞𝐫𝐬 𝐝𝐞 𝐥'𝐞𝐚𝐮 🌊
>
> 𝐏𝐨𝐬𝐭 3 — 𝐄𝐏𝐀𝐍𝐄𝐓
>
> Derrière chaque 𝐫é𝐬𝐞𝐚𝐮 𝐝'𝐞𝐚𝐮 𝐩𝐨𝐭𝐚𝐛𝐥𝐞 performant, il y a une modélisation précise.
> Je poursuis cette série dédiée aux outils, logiciels et métiers de l’eau 🌊, pour montrer concrètement comment les professionnels conçoivent, analysent et optimisent les infrastructures hydrauliques face aux défis techniques et environnementaux.
>
> Aujourd’hui, focus sur hashtag#EPANET, logiciel développé par la United States Environmental Protection Agency (EPA), devenu une référence mondiale en 𝐦𝐨𝐝é𝐥𝐢𝐬𝐚𝐭𝐢𝐨𝐧 des réseaux d’eau potable.
> Dans cet épisode, je réponds à des questions essentielles :
> • Comment garantir une pression suffisante pour chaque usager ?
> • Comment anticiper les pertes de charge et les déséquilibres du réseau ?
> • Pourquoi simuler avant d’investir est devenu indispensable ?
> • Comment analyser la qualité de l’eau dans un réseau de distribution ?
> • En quoi EPANET-JS ouvre-t-il la voie à une hydraulique plus numérique et collaborative ?
>
> 🌊 L’objectif : rendre visible le travail des ingénieurs hydrauliciens, comprendre comment un réseau se conçoit scientifiquement, et montrer en quoi la simulation permet de sécuriser les investissements et d’améliorer la performance des systèmes d’eau potable.
> Dans un contexte de croissance urbaine, de pertes importantes dans les réseaux et de pression accrue sur la ressource, la modélisation n’est plus une option — elle est une nécessité stratégique.

#### https://www.linkedin.com/posts/mfrankel923_tldr-hydraulic-modeling-is-cool-and-you-activity-7442226191949934593-c0jc

> Matthew Frankel
> tl;dr hydraulic modeling is cool and you should do it more.
>
> That was the key message from my guest lecture to an undergrad class in hydrology and hydraulics at Case Western Reserve University yesterday, at the invitation of my friend and colleague Dr. Kendall Grimm.
>
> In this lecture, we covered:
>
> - How hydraulic models are used to diagnose infrastructure issues and test out proposed solutions
> - The key differences between EPANET and SWMM and history of EPANET development
> - Introduced the field of hydroinformatics, combining hydraulic modeling, data science, and advanced optimization techniques
> - Some of my prior work using EPANET, including an academic publication analyzing uncertainty in EPANET-MSX models, and supporting Innovation: Africa to ensure excellent water quality
> - Basics of using EPANET, like interacting with the interface, running a simulation, and extracting meaningful results
>
> We finished the class with an analysis of a real-world distribution system, analyzing the effect of aging pipes and a proposed development in light of environmental regulations using the scenario manager in epanetjs from Iterating.
>
> I was a bit disappointed to learn that only one of the students understood my analogy that hydraulic modeling is like roller coaster tycoon but in real life 😂 . But other than that, was great to be back in the classroom and expose the students to this important topic!

#### https://www.linkedin.com/feed/update/urn:li:activity:7427659970982219776/?actorCompanyId=107572754

> Alexander Baekelandt Water Supply Engineer
>
> I think what Luke Butler is doing is amazing. Hydraulic modelling is key to addressing Non-Revenue Water, but for so many utilities (especially in middle or low-income countries), the traditional software packages are too expensive and complex (experienced this myself in Iraq).
>
> Iterating is building so much functionality open-source, totally free. With his first paid feature (significantly cheaper than competitors), they are trying to make this financially sustainable. Still by far the best deal out there for so many smaller utilities.
>
> I hope development actors are paying attention. This should be the standard package when doing NRW work in developing countries.
>
> Really cool, keep going Luke Butler!

Youtube:

#### https://www.youtube.com/watch?v=e5whuYyFHck

> waterBIM - Minu esimene veevõrgu mudel (epanet-js)
> Käesolev video teeb kiire sissejuhatuse veebipõhisesse EPANET tarkvarasse, millega luuakse lihtne veevõrgu mudel (epanet-js, https://app.epanetjs.com/). Pane tähele, et aja jooksul võib funktsionaalsus muutuda. Veebirakenduses koostatud mudelit saab avada ka installeeritud EPANET tarkvaraga (antud videos seda ei vaadata). Video loomise hetkel on konto loomine vabatahtlik (videos ei ole kontoga sisse logitud).

- We hit 2000 + registered members
- We had a best month yet for MAU, 2,606 unique people used the app in March

- EPANET UI was released - I know this might seem like posting about competition but people are generally excited about this so i think it could make sense to celebrate it

"A big moment for the EPANET community. Lew Rossman, the original creator of EPANET, has released a new user interface for EPANET as part of the version 2.3 release. The interface has been published through Open Water Analytics, alongside the many improvements to the EPANET engine contributed by the volunteer community over the past few years.

It’s the first new official interface from Lew in over two decades, and it’s a major step forward for the open EPANET ecosystem.

The new interface includes a range of modern capabilities, including cross-platform support (Windows, Linux, and macOS), integration with the latest EPANET 2.3 engine with pressure-dependent demands and FAVAD leakage, full support for MSX multi-species water quality modelling, GIS and CAD data import, dynamic web basemaps, and expanded reporting tools such as energy audits, variability plots, and fire flow analysis.

What this really represents is choice.

Hydraulic modellers now have more open tools than ever before. If you want a traditional desktop interface closely aligned with the official EPANET engine, Lew’s new interface through Open Water Analytics is the natural place to start. If you prefer web-based workflows focused on collaboration and modern industry methods, platforms like Iterating's epanet-js provide another path.

Either way, it’s an exciting time for open hydraulic modelling."

- Spoke at the Optimatics event: https://www.linkedin.com/feed/update/urn:li:activity:7438226672027353089/?actorCompanyId=107572754
  "Thanks to Optimatics for inviting me to speak at the Optimatics UK User Conference. I had the chance to talk about the future of open hydraulic modelling and EPANET, and it was encouraging to see such strong support in the room for the work the open-source community has been doing around the engine.

Two themes kept coming up in conversations afterwards. The first was the potential for a much more innovative ecosystem around water models. When the core tools are open and accessible, utilities can use their models in many more ways - sharing them with researchers to expand knowledge, enabling startups to experiment with new solutions, and generally making systems easier to integrate and build upon.

The second was about access. Not every utility needs, or can afford, large commercial modelling platforms. A strong open EPANET ecosystem can give engineers everywhere, including those working in developing countries, the ability to run professional hydraulic analyses without the barriers that have traditionally existed.

If we work together on this, we can strengthen the EPANET ecosystem in a way that benefits utilities, researchers, and engineers across the world.

Thank you everyone who is supporting our work at Iterating in improving open hydraulic modelling."

## What’s next

- Water quality simulations
- Team plan management
- More features around model build (zone polygons, user attributes)
