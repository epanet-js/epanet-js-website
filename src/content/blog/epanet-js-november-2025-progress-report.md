---
draft: false
title: "epanet-js November 2025 Progress Report"
snippet: "Active topology, pump curves, and a new suite of utilities"
image:
  {
    src: "https://epanetjs.com/assets/blog/progress-report/2025-11/fire-flow.png",
    alt: "",
  }
publishDate: "2025-12-09 09:15"
category: "Progress report"
author: "lbutler"
tags: [Progress report]
---

**Active topology, pump curves, and a new suite of utilities**

It’s been another big, busy month working at epanet-js. We’ve been working across the board on three main features—Active Topology, Pump Curves, and Selections—to build up the fundamentals for some major capabilities coming next.

But we’ve also launched a range of interesting new utility tools. The standout is our new **Fire Flow Analysis**, which allows you to run thousands of simulations directly in your browser to instantly check your network's capacity to supply fire flows.

<figure markdown="span">
  <a href="https://utils.epanetjs.com/" target="_blank" rel="noopener">
    ![epanet-js roadmap](/assets/blog/progress-report/2025-11/fire-flow.png){ width="700" }
  </a>
  <figcaption style="margin-top: 0rem">You can now run fire flow simulations of your hydraulic model.</figcaption>
</figure>

<!-- more -->

We’ve overhauled our external utilities website to host these new tools, but that’s just one part of the story. Inside the core app, we’ve released features that allow you to manage complex network states, model pumps with greater precision, and select vast areas of your system in seconds.

<div style="text-align: center">
  <a href="https://app.epanetjs.com" style="
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 2rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: white;
    zoom: 75%;
    background-image: linear-gradient(to right, #2563eb, #9333ea);
    border-radius: 0.375rem;
    text-decoration: none;
  ">
    Launch epanet-js. No login needed.
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  </a>
</div>

## **Active topology is here**

You can now enable or disable links in your network, and those parts of the system will be excluded from the simulation. This lets you switch sections of your network on or off directly in the UI—no deleting assets, no copy-models, just clean control.

If you select an area and disable it, epanet-js automatically determines which connected junctions should also be excluded. That unlocks a whole new category of workflows:

- **Growth planning**: Enable new subdivisions as a city expands.
- **Master planning**: Test future layouts or staged upgrades.
- **Alternative infrastructure**: Compare tank locations or system expansions without rebuilding the model.
- **Small-scale testing**: Quickly toggle pump options or pipe alignments to see how they perform.

<figure>
    <video width=500 autoplay muted loop playsinline style="
    box-sizing: border-box;
    border-style: solid;
    border-color: #e5e7eb;
    overflow: hidden;
    border-radius: .75rem;
    border-width: 1px;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);"
    ><source src="/assets/blog/progress-report/2025-11/topology.mp4" type="video/mp4"></video>
      <figcaption style="margin-top: 0rem">Quickly enable or disable pipes and other assets to test layouts, upgrades, or scenarios on the fly.</figcaption>
</figure>

While active topology is already useful on its own, it’s also the foundation for something much bigger: **Scenario Management**. This is the core engine that will support complex, multi-year planning, alternative design pathways, and advanced modeling workflows—all within a single model.

Active topology moves epanet-js from simple simulations into true planning and scenario-based analysis.

## **Three-point pump curves**

Defining pumps just got a lot clearer. We’ve added support for **three-point curves**, letting you define shutoff, design, and max operating values directly.

This is the first step in bringing epanet-js closer to full EPANET standard support. We’ve already planned the next phase: full **user-defined pump curves**. While the three-point curve offers great flexibility now, we are working toward giving you complete control to include custom curves to model any pump.

<figure>
    <video width=500 autoplay muted loop playsinline style="
    box-sizing: border-box;
    border-style: solid;
    border-color: #e5e7eb;
    overflow: hidden;
    border-radius: .75rem;
    border-width: 1px;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);"
    ><source src="/assets/blog/progress-report/2025-11/3-point-pumps.mp4" type="video/mp4"></video>
          <figcaption style="margin-top: 0rem">epanet-js now supports three-point pump curves, letting you define shutoff, design, and max operating values directly.</figcaption>
</figure>

We also improved the one-point curve view. Now, instead of just entering design head and flow, the panel calculates and displays the shutoff head and maximum operating flow, giving you a better sense of the pump’s full operating range right in the attributes panel.

## **Polygonal selection tool**

Selecting multiple assets is now much faster. We’ve added a new area selection tool that works exactly as you’d expect on a map:

- **Draw a polygon** around the assets you want to select.
- **Hold Shift** to add more areas (the polygon turns purple).
- **Hold Alt** to remove areas (the polygon turns orange).

<figure>
    <video width=600 autoplay muted loop playsinline style="
    box-sizing: border-box;
    border-style: solid;
    border-color: #e5e7eb;
    overflow: hidden;
    border-radius: .75rem;
    border-width: 1px;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);"
    ><source src="/assets/blog/progress-report/2025-11/multi-select.mp4" type="video/mp4"></video>
          <figcaption style="margin-top: 0rem">Select multiple assets fast with the new polygon tool, with Shift to add and Alt to subtract.</figcaption>
</figure>

This update is about more than just convenience; it’s a prerequisite for **Multi-Element Editing**. To edit many assets at once, you first need a fast, precise way to select them.

This is just the start of our new selection toolkit. We are planning to add **Upstream and Downstream Tracing** (selecting assets based on flow direction) and a **Boundary Select** tool, which will let you extend a selection out to user-defined hydraulic boundaries like closed valves or PRVs.

## **New apps on the utilities site**

We’ve redesigned the epanet-js utilities website and launched three new standalone apps. These serve as proofs of concept—allowing us to get features into your hands quickly while we work on merging them into the core application.

<figure markdown="span">
  <a href="https://utils.epanetjs.com/" target="_blank" rel="noopener">
    ![epanet-js roadmap](/assets/blog/progress-report/2025-11/utility-site.png){ width="700" }
  </a>
  <figcaption style="margin-top: 0rem">We’ve launched three new utilities apps—fire flow, data extraction, and logger optimization—now live on the site.</figcaption>
</figure>

### Fire flow analysis

You can now run full **fire flow assessments** directly in your browser. The tool runs a rapid series of simulations—processing hundreds of nodes per second—to calculate three key checks:

- **Available fire flow**: The maximum flow the network can supply at a location before pressure drops below your minimum limit.
- **Needed fire flow**: If your required flow is lower than what’s available, this reports the actual residual pressure at that design flow.
- **Designed fire flow**: The critical system-wide check that ensures pulling fire flow at one node doesn’t violate pressure or velocity constraints anywhere else in the network.

<figure>
    <video width=600 autoplay muted loop playsinline style="
    box-sizing: border-box;
    border-style: solid;
    border-color: #e5e7eb;
    overflow: hidden;
    border-radius: .75rem;
    border-width: 1px;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);"
    ><source src="/assets/blog/progress-report/2025-11/fire-flow-poc.mp4" type="video/mp4"></video>
          <figcaption style="margin-top: 0rem">A faster way to run fire flow: hundreds of simulations per second, all in your browser.</figcaption>
</figure>

While this lives on the utilities site for now, the plan is to bring this capability directly into epanet-js so it becomes a native part of your analysis workflow.

We also published a YouTube video that walks through the entire process and explains each type of fire flow in detail.

<iframe width="688" height="380" src="https://www.youtube.com/embed/Rx9JsUwjS3Y?si=q1X0Do2WpPhpQdk9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Data extractor

A simple but essential utility. Drop in an `.inp` file to extract GIS data (as GeoJSON or SHP) or get a full CSV extract of your simulation results. Like the Fire Flow tool, we plan to bring this functionality into the main app to make data export seamless.

<figure markdown="span">
  <a href="https://utils.epanetjs.com/" target="_blank" rel="noopener">
    ![epanet-js roadmap](/assets/blog/progress-report/2025-11/data-extractor.png){ width="700" }
  </a>
  <figcaption style="margin-top: 0rem">A quick way to extract GIS layers and simulation results straight from your INP file.</figcaption>
</figure>

### Acoustic Logger Optimization

We’ve released a new tool for exploring acoustic logger placement, supporting both **manual planning** and **automatic optimization**. You can drop loggers onto the map to see their listening range instantly, giving you a clear visual of coverage and helping you test deployment ideas on the fly.

For more advanced analysis, the tool includes a **genetic algorithm** that searches thousands of combinations to find layouts that maximize coverage while minimizing cost. You can watch the solution improve live on the map as each generation updates.

<figure>
    <video width=500 autoplay muted loop playsinline style="
    box-sizing: border-box;
    border-style: solid;
    border-color: #e5e7eb;
    overflow: hidden;
    border-radius: .75rem;
    border-width: 1px;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);"
    ><source src="/assets/blog/progress-report/2025-11/acoustic-logger.mp4" type="video/mp4"></video>
          <figcaption style="margin-top: 0rem">Test logger locations on the fly and watch the optimizer improve your coverage in real time.</figcaption>
</figure>

<div style="text-align: center">
  <a href="https://app.epanetjs.com" style="
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 2rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: white;
    zoom: 75%;
    background-image: linear-gradient(to right, #2563eb, #9333ea);
    border-radius: 0.375rem;
    text-decoration: none;
  ">
    Launch epanet-js. No login needed.
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  </a>
</div>

## **Smoother workflows**

We also shipped a collection of quality-of-life improvements to make the drawing and editing experience smoother.

### Customize pipe defaults

A new floating panel lets you set diameter and roughness before you start drawing, saving you from editing attributes for every single new pipe.

<figure>
    <video width=600 autoplay muted loop playsinline style="
    box-sizing: border-box;
    border-style: solid;
    border-color: #e5e7eb;
    overflow: hidden;
    border-radius: .75rem;
    border-width: 1px;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);"
    ><source src="/assets/blog/progress-report/2025-11/set-diameter.mp4" type="video/mp4"></video>
     
</figure>

### Auto-split pipes

When you draw a valve, pump, or pipe directly on top of an existing pipe, epanet-js now automatically splits the underlying pipe and connects everything correctly. No more duplicate parallel pipes!

<figure>
    <video width=600 autoplay muted loop playsinline style="
    box-sizing: border-box;
    border-style: solid;
    border-color: #e5e7eb;
    overflow: hidden;
    border-radius: .75rem;
    border-width: 1px;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);"
    ><source src="/assets/blog/progress-report/2025-11/split-inline.mp4" type="video/mp4"></video>
     
</figure>

### Sticky headers

The action buttons in the asset panel are now sticky, so they remain visible even when you scroll down long lists of attributes.

<figure markdown="span">
 
    ![epanet-js roadmap](/assets/blog/progress-report/2025-11/sticky-header.png){ width="700" }

</figure>

### Empty state

We’ve cleaned up the asset panel to show a helpful empty state when nothing is selected, removing the old tutorial text.

<figure markdown="span">
 
    ![epanet-js roadmap](/assets/blog/progress-report/2025-11/empty-state.png){ width="700" }

</figure>

### Loop detection

You’ll now see a cursor hint if you try to create a loop where a pipe starts and ends at the same node.

<figure markdown="span">
 
    ![epanet-js roadmap](/assets/blog/progress-report/2025-11/no-loop.png){ width="700" }

</figure>

### Customer points on pipes

You can now see the aggregated demand and list of specific customers directly on the Pipe asset, not just the Junction.

<figure markdown="span">
 
    ![epanet-js roadmap](/assets/blog/progress-report/2025-11/cust-points-pipes.png){ width="700" }

</figure>

### Better shortcuts

We’ve reorganized the Keyboard Shortcuts menu into logical groups so it’s easier to find what you need.

<figure markdown="span">
 
    ![epanet-js roadmap](/assets/blog/progress-report/2025-11/shortcuts.png){ width="700" }

</figure>

<div style="text-align: center">
  <a href="https://app.epanetjs.com" style="
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 2rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: white;
    zoom: 75%;
    background-image: linear-gradient(to right, #2563eb, #9333ea);
    border-radius: 0.375rem;
    text-decoration: none;
  ">
    Launch epanet-js. No login needed.
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  </a>
</div>

## **Community & events**

### IWA water loss webinar

Luke presented to the IWA Water Loss Specialist Group on using hydraulic models to reduce water loss. You can watch the recording below.

<iframe width="688" height="380" src="https://www.youtube.com/embed/eKPhihGw7AQ?si=1iP058eIQppPm-LR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Conferences

The team attended the Suez and Optimatics user group in Portland, the CwMAG conference in the UK, and Luke presented at the WEAO Intelligent Water Solutions seminar in Ontario.

<figure markdown="span">

    ![Luke at WEAO](/assets/blog/progress-report/2025-11/luke-weao.jpeg){ width="700" }

  <figcaption style="margin-top: 1rem">Luke introducing epanet-js at the WEAO Intelligent Water Solutions seminar in Ontario.</figcaption>
</figure>

### Join our hands-on webinar in January

We are hosting a special **hands-on webinar in January**. We will provide a real GIS dataset, and together we will walk through the entire process of building a model, getting it running, and performing a fire flow test live. It’s the perfect way to learn the workflow.

[From GIS to running model: a hands-on hydraulic modeling workshop - register now!](https://www.crowdcast.io/c/epanet-js-hydraulic-modeling-workshop)

<iframe width='100%' height='800' frameborder='0' marginheight='0' marginwidth='0' allowtransparency='true' src='https://www.crowdcast.io/c/epanet-js-hydraulic-modeling-workshop' style='border: 1px solid #EEE;border-radius:3px' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true' allow='microphone; camera;'></iframe><a ng-href='https://www.crowdcast.io/?utm_source=embed&utm_medium=website&utm_campaign=embed' style="color: #aaa; font-family: 'Helvetica', 'Arial', sans-serif;text-decoration: none;display: block;text-align: center;font-size: 13px;padding: 5px 0">powered by Crowdcast</a>

## **What's next**

We recently polled the community on LinkedIn to ask what you wanted next: **Scenario Management** or **Extended Period Simulations (EPS)**.

<figure markdown="span">
 
    ![linkedin votes](/assets/blog/progress-report/2025-11/linkedin-votes.png){ width="450" }

</figure>

While Active Topology laid the foundation for scenarios, the vote was clear—**you want EPS first**. We’re listening.

In December, our primary focus is making Extended Period Simulations work correctly in epanet-js. We’re putting scenarios on hold for the new year to open up the tool for the widest possible range of users right now.

Support EPANET by using software that supports it back.

— Luke and Sam

<div style="text-align: center">
  <a href="https://app.epanetjs.com" style="
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 2rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: white;
    zoom: 75%;
    background-image: linear-gradient(to right, #2563eb, #9333ea);
    border-radius: 0.375rem;
    text-decoration: none;
  ">
    Launch epanet-js. No login needed.
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  </a>
</div>
