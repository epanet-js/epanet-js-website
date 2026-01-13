---
draft: false
title: "epanet-js December 2025 Progress Report"
snippet: "We are incredibly proud to announce that we have delivered our single biggest feature request: Extended Period Simulations (EPS) are now supported in epanet-js!"
image:
  {
    src: "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?fit=crop&w=600&h=335",
    alt: "",
  }
publishDate: "2026-01-13 09:15"
category: "blog"
author: "lbutler"
tags: [Progress report]
---

**Extended period simulations, a hands-on workshop, and more!**

December was a short month for the team, with the holidays compressing our development time into just three weeks. Despite the timeline, we were determined to close out the year with a bang.

We are incredibly proud to announce that we have delivered our single biggest feature request: Extended Period Simulations (EPS) are now supported in epanet-js!

<figure markdown="span">
    ![epanet-js with extended period simulations](/assets/blog/progress-report/2025-12/eps.png){ width="700" }
  <figcaption style="margin-top: 0rem">You can now run Extended Period Simulations directly in the browser.</figcaption>
</figure>

Alongside this major milestone, we’ve added new selection tools, enabled asset ID editing, and announced our next community webinar where we will be building a model from scratch together.

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

# Time to get dynamic: extended period simulations

Until now, epanet-js has been a tool for steady-state analysis - taking a snapshot of your network at a single moment in time. But water systems are dynamic. To truly understand how your network performs, you need to see how tank levels fluctuate, how pressures change during peak demand, and how your controls respond throughout the day.

We worked hard through December to unlock this core analysis type. You can now load, save, and run **extended period simulations (EPS)** models directly in the app.

<figure>
<video width=720 autoplay loop muted playsinline style="
box-sizing: border-box;
border-style: solid;
border-color: #e5e7eb;
overflow: hidden;
border-radius: .75rem;
border-width: 1px;
--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);"
><source src="/assets/blog/progress-report/2025-12/time-control.mp4" type="video/mp4"></video>
<figcaption style="margin-top: 0.5rem">Use the new time browser to visualize changes in your network over time.</figcaption>
</figure>

## The time browser

When you switch your project settings from "steady state" to "EPS," a new **time browser** appears in the top right corner of the map. This tool gives you full control over the simulation timeline:

- **Step through:** Move forward or backward in time step-by-step.
- **Jump:** Use the dropdown to instantly select the exact time you want to analyze.
- **Shortcuts:** We’ve added keyboard shortcuts to make moving through time even faster.

## Controls and patterns

This update also brings support for **simple controls** and **rule-based controls**. Currently, these are available as free-text fields. We know this is just the first step, and we plan to build a more user-friendly interface for defining rules in the future, but for now, your existing logic is fully preserved and editable.

<figure markdown="span">
 
    ![epanet-js roadmap](/assets/blog/progress-report/2025-12/controls.png){ width="700" }

</figure>

Additionally, **Time series demand patterns** are now accessible and included in the model. While these are currently read-only, we are actively working on allowing you to define your own patterns and apply them to demands in an upcoming release.

# Join us for a hands-on workshop

Building on the success of our first webinar, we are excited to announce our next event: **"From GIS to a running hydraulic model."**

This won't be just a presentation - it’s a hands-on workshop. Luke will guide you through the entire workflow of taking raw utility GIS data, cleaning it up, converting it into a network, and running a fire flow analysis.

<iframe width='100%' height='700' frameborder='0' marginheight='0' marginwidth='0' allowtransparency='true' src='https://www.crowdcast.io/c/epanet-js-hydraulic-modeling-workshop' style='border: 1px solid #EEE;border-radius:3px' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true' allow='microphone; camera;'></iframe><a ng-href='https://www.crowdcast.io/?utm_source=embed&utm_medium=website&utm_campaign=embed' style="color: #aaa; font-family: 'Helvetica', 'Arial', sans-serif;text-decoration: none;display: block;text-align: center;font-size: 13px;padding: 5px 0">powered by Crowdcast</a>

- **When:** Wednesday, Jan 21, 2026, 10:00 AM EST
- **What:** A practical session designed for engineers and modelers.
- **No prep needed:** Just bring your curiosity. We will provide the dataset and the recording afterward so you can repeat the process at your own pace.

We’ll also take some time to showcase the latest features we've built, including the new EPS capabilities. [Register now to secure your spot!](https://www.crowdcast.io/c/epanet-js-hydraulic-modeling-workshop)

# New ways to select

We’ve expanded the selection toolkit to give you more flexibility when working with complex models. While the polygon select tool is powerful, sometimes you just need a simple box or a quick lasso.

We’ve added **rectangular** and **freehand** selection options. You can cycle between the tools by right-clicking the toolbar icon, clicking it multiple times, or clicking and holding to choose the one that feels most natural for the task at hand.

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
><source src="/assets/blog/progress-report/2025-12/new-selection-tools.mp4" type="video/mp4"></video>
          <figcaption style="margin-top: 0rem">Select multiple assets fast with the new rectangular and freehand selection tools.</figcaption>
</figure>

# Customize your asset labels

You asked, and we listened. A frequent request from the community was the ability to rename assets without deleting and redrawing them.

You can now edit asset IDs directly in epanet-js. Just select an asset, click into the ID field in the panel, and type your new label. It updates instantly. It’s a small change, but it makes managing your model data significantly easier.

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
><source src="/assets/blog/progress-report/2025-12/RenameAsset.mp4" type="video/mp4"></video>

</figure>

# Improvements and bug squashing

We also squeezed in a number of improvements to make the daily experience of using epanet-js smoother.

## Zoom to extents

We replaced the old map geolocation button with a new zoom to extents button. One click now resets the map view to the full extent of your network - perfect for reorienting yourself after zooming in to work on fine details.

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
><source src="/assets/blog/progress-report/2025-12/zoom-to-extents.mp4" type="video/mp4"></video>

</figure>

## Better compatibility reporting

When opening an INP file, the reporting is now more descriptive. We’ve added counts for non-supported features and direct links to the roadmap for features that are partially supported, so you know exactly where your model stands.

<figure markdown="span">
  ![epanet-js roadmap](/assets/blog/progress-report/2025-12/compatibility.png){ width="700" }
</figure>

## Improved readability for numbers

We’ve updated the asset panel to use tabular numbers (monospaced digits). This makes comparing flow and pressure values across different assets much easier on the eyes.

<figure markdown="span">
  <div style="position: relative; width: 300px;
box-sizing: border-box;
border-style: solid;
border-color: #e5e7eb;
overflow: hidden;
border-radius: .75rem;
border-width: 1px;
--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);
  ">
    <img 
      src="/assets/blog/progress-report/2025-12/num-after.png" 
      width="700" 
      loading="lazy" 
      alt="toolbar before"
      style="position: absolute; top: 0; left: 0; transition: opacity 0.5s ease; cursor: crosshair;"
    >
    <img 
      src="/assets/blog/progress-report/2025-12/num-before.png"
      width="700" 
      loading="lazy"
      alt="Toolbar after" 
      style="opacity: 0; transition: opacity 0.5s ease; cursor: crosshair;"
      onmouseover="this.style.opacity='1'; this.previousElementSibling.style.opacity='0';"
      onmouseout="this.style.opacity='0'; this.previousElementSibling.style.opacity='1';"
    >
  </div>
  <figcaption>Hover to see the previous spacing of the asset panel numbers.</figcaption>
</figure>

## Shortcuts panel

We’ve got a ton of keyboard shortcuts in epanet-js and the list was getting pretty long, so we’ve reorganized the shortcut help into clear, logical sections to make everything easier to find.

<figure markdown="span">
 
    ![epanet-js roadmap](/assets/blog/progress-report/2025-12/shortcuts.png){ width="700" }

</figure>

## Multi-asset sorting

When you multi-select assets in epanet-js, the summary panel now lets you sort the results while inspecting properties and simulation data.

You can, for example, sort pipe diameters by size or by asset count - making it quick to find the smallest or largest pipes, or identify which sizes appear most often in your network.

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
><source src="/assets/blog/progress-report/2025-12/sort-multiasset-summary-short.mp4" type="video/mp4"></video>

</figure>

## Other Fixes

- **Help center:** We reorganized the content and updated the information to be more helpful.
- **Performance:** Optimized map performance after bulk updates of assets.
- **Utility apps:** Added a direct link to our external `utility apps` in the help dropdown.

# What's next

With extended period simulations now live, we are shifting our focus to the next major frontier in epanet-js: **scenario management**.

We are actively working on this feature, but we aren't just looking to port existing methods into the browser. We want to reimagine how scenarios work. Our goal is to build a system that is flexible enough to handle everything from quick, small-scale "what if" operational checks to massive, multi-year master plans. We want to break away from the rigid approaches set in stone by legacy software and give you a tool that adapts to how you need to solve problems.

We will soon be publishing a dedicated blog post detailing our plans for scenario management and how we expect it to work. We’d love your input on it.

In the meantime, thank you to everyone who has been sharing suggestions and feedback. Your input drives our roadmap and helps us focus on the features that matter most. We can’t wait to see you at the webinar on January 21st!

Support EPANET by using software that supports it back.

<div style="text-align: center">
<a href="[https://app.epanetjs.com](https://app.epanetjs.com)" style="
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
<svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

— Luke and Sam
