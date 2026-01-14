---
draft: false
title: "epanet-js October 2025 Progress Report"
snippet: "Network Reviews, a New Teammate, and a Focus on Fundamentals"
image:
  {
    src: "/assets/blog/progress-report/2025-10/01-network-review.png",
    alt: "",
  }
publishDate: "2025-11-06 09:15"
category: "Progress report"
author: "lbutler"
tags: [Progress report]
---

**Network Reviews, a New Teammate, and a Focus on Fundamentals**

October has been a massive month of building and growing for the epanet-js team. We've been laser-focused on one of the biggest challenges in modeling: getting your data in and making sure it's _correct_.

This focus resulted in over 300 commits and totaling over 35,000 new lines of code added to the [epanet-js open-source codebase](https://github.com/epanet-js/epanet-js) in October alone!

We’re thrilled to release the new **Network Review** toolset, a major feature designed to help you validate, clean, and quickly prepare your model for its first simulation. It’s all about making it easier to find and fix common topology and data quality issues right after a GIS import.

<figure markdown="span">
  <a href="https://roadmap.epanetjs.com" target="_blank" rel="noopener">
    <img src="/assets/blog/progress-report/2025-10/01-network-review.png" alt="epanet-js roadmap">
  </a>
  <figcaption style="margin-top: 0rem">You can now review your network data after a model build.</figcaption>
</figure>

This new feature set is just the start of the big news, as it was built entirely by the newest member of our team.

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

## Welcome, Sandra!

We are incredibly excited to share that our friend [Sandra Saornil](https://www.linkedin.com/in/ssaornil/) has joined Iterating full-time!

![Sandra joins Iterating](/assets/blog/progress-report/2025-10/02-sandra-at-iterating.jpeg)

With Sandra on board, the epanet-js team has grown to three, allowing us to build even faster. She brings deep experience and an incredible eye for detail, and as you'll see, she has already made a huge impact.

Sandra’s first project was building the entire Network Review feature from the ground up, a perfect example of her jumping straight in to tackle one of our users' biggest pain points. We’re so happy to have her on the team as we work together to build the next generation of open, accessible water modeling tools.

## Introducing the Network Review

The Network Review panel is your new command center for quality assurance. It runs a series of checks to validate your network's topology and data, which is essential after importing GIS data. The goal is to find all the little issues that would normally cause a model to fail _before_ you ever hit "run".

The review is broken down into four powerful tools:

### Orphan Assets

This check finds any asset (like a junction, valve, or tank) that is disconnected from any pipe. It lists them for you, and you can click on any asset in the list to instantly zoom to its location. From here you can either snap it to the nearest pipe, or delete it.

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
    ><source src="/assets/blog/progress-report/2025-10/03-orphan-assets.mp4" type="video/mp4"></video>
</figure>

### Proximity Check

This tool is perfect for finding pipes that are close to each other but not actually connected. It works by scanning around each junction and identifying nearby pipes that could be potential connections. These gaps often happen when pipes are drawn in GIS but don’t fully meet — commonly known as overshoots or undershoots.

Clicking on a potential connection will zoom the map to that location so you can review it and snap the assets together if needed. You can adjust the search distance to find more candidates — we recommend starting with a small value and increasing it gradually until you stop discovering real missed connections.

<figure>
    <video width=700 autoplay muted loop playsinline style="
    box-sizing: border-box;
    border-style: solid;
    border-color: #e5e7eb;
    overflow: hidden;
    border-radius: .75rem;
    border-width: 1px;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);"
    ><source src="/assets/blog/progress-report/2025-10/proximity-check.mp4" type="video/mp4"></video>
</figure>

### Crossing Pipes

This finds any pipes that intersect each other without a junction. Depending on your network standards, you may want to add a junction to connect all four pipes. This tool flags every instance so you can review and fix them.

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
    ><source src="/assets/blog/progress-report/2025-10/05-crossing-pipes.mp4" type="video/mp4"></video>
</figure>

### Connectivity Trace

This tool checks the connectivity of your entire network and highlights any subnetworks that are disconnected from the rest of the system. These can happen for many reasons — a gap between pipes, a missing junction, or a deleted asset that leaves a branch floating on its own.

Disconnected subnetworks are one of the most common sources of early simulation errors, especially when a model has been imported directly from GIS and the data hasn’t been fully cleaned up yet. By locating these issues early, you can quickly confirm whether the isolation is intentional (for example, a future development area or assets not yet in service) or if something needs to be reconnected.

For each disconnected area, the tool also checks whether it has a water supply source, such as a reservoir or tank. This helps you verify that every part of the network can be supplied — a key requirement for a successful simulation.

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
    ><source src="/assets/blog/progress-report/2025-10/06-connectivity-trace.mp4" type="video/mp4"></video>
</figure>

## A Major UI and Workflow Refresh

We also revisited some core parts of the interface based on your feedback.

### New Single and Multi-Asset Panel

A common piece of feedback was that the asset panel was confusing. It was hard to tell which attributes were editable, which were read-only, and which were simulation results.

We’ve given the asset panel a major overhaul. The new layout clearly separates data into sections, and updated styling makes it obvious which attributes you can edit. We’ve also moved actions like _redraw_, _reverse_, and _delete_ directly into the panel so you don't have to hunt for them in the toolbar.''

The multi-select view is also much cleaner. Assets are now grouped by type (e.g., Junctions, Pipes), and these groups are collapsible, making it far easier to find what you're looking for.

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
    ><source src="/assets/blog/progress-report/2025-10/new-asset-panel.mp4" type="video/mp4"></video>

  <figcaption style="margin-top: 0rem">Before and after - the new asset panel!</figcaption>
</figure>

### New Panel Toggle Buttons

We’ve updated how you open and close the panels in the app. Previously, you could drag the panel closed — but that left a tiny button to reopen it, which wasn’t always easy to spot.

Now, with the addition of the Network Review panel on the left, we needed a more intuitive way to manage both sides of the interface. So we’ve introduced new toggle buttons on the toolbar that let you quickly open or collapse each panel. The icons also reflect whether a panel is currently visible or hidden, making it clearer what’s on or off at a glance.

This change gives you more control over your workspace and makes it much easier to keep the view clean while you focus on the map.

<figure>
    <video width=700 autoplay muted loop playsinline style="
    box-sizing: border-box;
    border-style: solid;
    border-color: #e5e7eb;
    overflow: hidden;
    border-radius: .75rem;
    border-width: 1px;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);"
    ><source src="/assets/blog/progress-report/2025-10/panel-toggles.mp4" type="video/mp4"></video>
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

## Polishing the Fundamentals

Alongside the big features, we shipped a whole set of improvements focused on the fundamental, moment-to-moment experience of building a model.

### Replace Model Elements

You no longer have to delete and redraw node assets to swap them. Just select a new element (like a tank) from the toolbar and click directly onto an existing one (like a junction) to replace it.

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
    ><source src="/assets/blog/progress-report/2025-10/swap-asset.mp4" type="video/mp4"></video>
</figure>

### Merge Nodes When Dragging

You can now clean up duplicate or misaligned nodes just by dragging one onto another. The nodes merge into a single junction, and all connected pipes come along with it. The tool also respects asset types — for example, if you drag a junction onto a tank or reservoir, the tank or reservoir stays in place and the pipes are correctly connected.

This makes it far easier to tidy GIS imports — especially when there’s a gap between major assets like tanks and the surrounding pipework.

<figure>
    <video width=700 autoplay muted loop playsinline style="
    box-sizing: border-box;
    border-style: solid;
    border-color: #e5e7eb;
    overflow: hidden;
    border-radius: .75rem;
    border-width: 1px;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);"
    ><source src="/assets/blog/progress-report/2025-10/merge-nodes.mp4" type="video/mp4"></video>
</figure>

### Snap to Vertex

Previously, if you snapped a new junction to the corner of a pipe, the pipe’s bend would remain in its original place rather than being replaced by the junction. So even though everything looked correct, the geometry still included that extra vertex.

Now, when you snap to a vertex, the bend is removed and the junction becomes the new connection point. This results in cleaner geometry and pipes that move as you’d expect when adjusting the junction later.

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
    ><source src="/assets/blog/progress-report/2025-10/snap-to-vertex.mp4" type="video/mp4"></video>
</figure>

### Performance Improvement with Selection

We re-engineered how asset selection works. This fixes a Mapbox bug that caused stuttering and frame drops when selecting a large number of assets, which was essential for the new Connectivity Trace tool and makes the whole app feel faster.

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
    ><source src="/assets/blog/progress-report/2025-10/selection-improvement.mp4" type="video/mp4"></video>

  <figcaption style="margin-top: 0rem">Before and after - a huge improvement in performance!</figcaption>
</figure>

### Ctrl-Draw Feedback

We added a small but helpful visual cue. When you hold the **Ctrl** key while drawing a pipe (a shortcut to add a junction and keep drawing), a small junction icon now appears so you know exactly what's about to happen.

<figure>
    <video width=700 autoplay muted loop playsinline style="
    box-sizing: border-box;
    border-style: solid;
    border-color: #e5e7eb;
    overflow: hidden;
    border-radius: .75rem;
    border-width: 1px;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);"
    ><source src="/assets/blog/progress-report/2025-10/ctrl-draw.mp4" type="video/mp4"></video>

  <figcaption style="margin-top: 0rem">Hold Ctrl while drawing to place nodes and keep going — now with visual feedback!</figcaption>
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

## More User-Focused Updates

A few more updates focused on customization and privacy:

### Manage Customer Point Visibility

Customer points are useful, but they can clutter the map when you don’t need to see them. In the Map tab, you can now toggle the visibility of customer points on or off to keep things clear while you work.

And as a quick tip — if you want to simplify the map further, you can hide road labels using the `T` icon next to the basemap layer.

<figure>
    <video width=700 autoplay muted loop playsinline style="
    box-sizing: border-box;
    border-style: solid;
    border-color: #e5e7eb;
    overflow: hidden;
    border-radius: .75rem;
    border-width: 1px;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);"
    ><source src="/assets/blog/progress-report/2025-10/hide-cust-points.mp4" type="video/mp4"></video>

</figure>

### Visualize Demand on the Map:

Based on direct user feedback, you can now visualize demand directly on the map. In the Map tab, you can select 'Actual Demand' to color-code your junctions, making it easy to spot high-demand areas or verify your demand allocation at a glance.

![Visualize actual demand](/assets/blog/progress-report/2025-10/actual-demand.png){ width="700" }

### Custom IDs for Customer Points

When you import customer points, you can now map one of your data fields to be the asset's ID, rather than just getting a sequential number.

![Customer IDs](/assets/blog/progress-report/2025-10/cust-ids.png){ width="700" }

### Manage Privacy Settings

We're committed to respecting your privacy. New guest users will now see a pop-up asking for consent to collect anonymous usage analytics and error reports. This data is vital for helping us find bugs and understand which features to improve, but the choice is yours.

![Manage privacy settings](/assets/blog/progress-report/2025-10/user-privacy.png){ width="700" }

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

## Bug Fixes and Minor Tweaks

We were also busy squashing bugs to improve stability.

- Avoids a "flash" of deleted assets (from the undo tree) when switching between satellite and base map views.
- Corrected an issue where the snapping-feedback visuals would show even for a tiny drag. The snap feedback now only appears when you've moved the asset far enough.
- The `Ctrl+Click` shortcut was breaking redraw functionality — this has now been fixed.
- Standardized the heights of modal pop-ups across the app for a more consistent feel.
- Reworked the customer point importer to be more resilient. It no longer fails on null geometries and provides much clearer error messages.

## Community and Growth

It’s been amazing to watch the community grow. This month, we were thrilled to see epanet-js pass **1,000 registered users**! Thank you to everyone who has signed up and is finding value in the tool.

<figure>
    <video width=400 autoplay muted loop playsinline style="
    box-sizing: border-box;
    border-style: solid;
    border-color: #e5e7eb;
    overflow: hidden;
    border-radius: .75rem;
    border-width: 1px;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);"
    ><source src="/assets/blog/progress-report/2025-10/user-count.mp4" type="video/mp4"></video>
</figure>

- **New YouTube Video:** We posted a [new video walking through how to visualize your simulation results](https://www.youtube.com/watch?v=IgQHWNpcDVY). It covers everything in the Map Tab, from setting color ramps for pressure and flow to adjusting classification breaks.
- **IWA Water Loss Conference:** Luke was invited to present at the IWA Water Loss Group, where he discussed how modern, accessible hydraulic models can be a powerful tool in the fight against water loss. Check out the [recording of the session on YouTube](https://www.youtube.com/watch?v=eKPhihGw7AQ).
- **Thank You for the Feedback!** We've been getting a ton of excellent ideas and feedback through our [roadmap](https://roadmap.epanetjs.com/). Please keep it coming—it directly helps us decide what to build next. In fact, a common suggestion was to make it easier to set attributes _before_ drawing, like default pipe diameters or roughness. We're excited to say we are already working on this, and it's a perfect example of your feedback in action!

## What's Next

We're shifting our attention to some highly requested improvements that we're very excited about:

- **Pump Curves:** Adding better support for user-defined pump curves.
- **Multi-Select Editing:** Making it even faster and easier to select multiple elements at once and then edit their attributes.
- **Active Topology:** Giving you the ability to choose which assets are included in a simulation without deleting them—perfect for scenario and planning work.

Thank you for your incredible support and for helping us build a better, more open future for water modeling.

Support EPANET by using software that supports it back.

— Luke and Sam (and Sandra!)

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
