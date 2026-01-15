---
draft: false
title: "epanet-js August 2025 Progress Report"
snippet: "Introducing Customer Points, a UI Refresh, and More!"
image:
  {
    src: "/assets/blog/progress-report/2025-08/cust-point-1.png",
    alt: "",
  }
publishDate: "2025-09-08 09:15"
category: "Progress report"
author: "lbutler"
tags: [Progress report]
---

**Introducing Customer Points, a UI Refresh, and More!**

August was a huge month for epanet-js! We've been working hard on one of our biggest features yet, focused on making it dramatically easier to get accurate demand data into your models.

Alongside that, we’ve rolled out a some UI refreshers to improve your workflow, added a new language, and squashed some important bugs.

<figure markdown="span">
  <img src="/assets/blog/progress-report/2025-08/cust-point-1.png" alt="">
  <figcaption style="margin-top: -0.5rem">Customer points are now in epanet-js!</figcaption>
</figure>

<!-- more -->

We're also hosting our [very first live webinar](https://www.crowdcast.io/c/introducing-epanet-js)! Join us on October 1st to hear the story behind epanet-js, see the latest features in action, and learn about what’s next. It’s a great chance to connect with us directly, and we’d love to see you there.

Let's dive into what's new.

## **The Easiest Way to Model Water Demand**

We know one of the biggest challenges in building an accurate hydraulic model is allocating demands correctly. Traditionally, this has been a complex, time-consuming process often done outside of your main modeling tool. The best way to represent demand is to model it where it comes from: your individual customers.

We're excited to announce that we've made this process incredibly simple with our new **Customer Points** feature!

<figure>
    <video width=720 autoplay muted loop playsinline style="
    box-sizing: border-box;
    border-style: solid;
    border-color: #e5e7eb;
    overflow: hidden;
    border-radius: .75rem;
    border-width: 1px;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);"
    ><source src="/assets/blog/progress-report/2025-08/cust-import.mp4" type="video/mp4"></video>
</figure>

You can now import a GeoJSON file of your customers directly into epanet-js. Our new import wizard guides you through the process, automatically allocating each customer to the nearest pipe. Here’s how it makes your life easier:

- **Intelligent Allocation:** The system uses a set of rules to connect customers to the right pipes. You can customize these rules, setting maximum pipe diameters and search distances to ensure customers are assigned logically (e.g., connect to smaller distribution mains before large transmission lines).
- **Clear Demand Tracking:** When you select a junction, you'll see a new **Customer Demand** field showing the total demand from all connected customers. You can click this field to see a list of every individual customer allocated to that junction.
- **Easy Manual Adjustments:** If a customer is assigned to the wrong pipe, you can easily **Reconnect** them. Just select the customer, click the reconnect tool, and click the correct pipe. It’s that simple.

We think this is a game-changing feature that will make it much faster to create, calibrate, and manage your models. What used to be a complex external task is now a streamlined, integrated part of your workflow.

For a step-by-step walkthrough, check out our new guide: **[How to Import Customer Points](https://help.epanetjs.com/Importing-customer-points-265e18c9f0f680f28bf2dbc0052b1c60)**.

## **Join Us for Our First Live Webinar!**

<div style="display:flex; flex-direction:row; align-items:center; justify-content:center; gap:2.5rem; margin-top:1rem;">
  
  <div style="display:flex; flex-direction:column; align-items:center; gap:1rem;">
    <img 
      alt="Luke Butler - Co-founder" 
      src="/assets/landing/lbutler.webp"
      style="display:block; width:9rem; height:9rem; margin: 0; border-radius:0.75rem; object-fit:cover; border:2px solid #e5e7eb; box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); "
    >
    <div style="text-align:center; display:flex; flex-direction:column; gap:0rem;">
      <p style="font-size:0.875rem; font-weight:600; color:#1f2937; margin:0;">Luke Butler</p>
      <p style="font-size:0.7rem; color:#4b5563; margin:0;">Co-founder</p>
    </div>
  </div>

  <div style="display:flex; flex-direction:column; align-items:center; gap:1rem;">
    <img 
      alt="Sam - Co-founder" 
      src="/assets/landing/spaya.webp"
      style="display:block; width:9rem; height:9rem; margin: 0; border-radius:0.75rem; object-fit:cover; border:2px solid #e5e7eb; box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); "
    >
    <div style="text-align:center; display:flex; flex-direction:column; gap:0rem;">
      <p style="font-size:0.875rem; font-weight:600; color:#1f2937; margin:0;">Sam Payá</p>
      <p style="font-size:0.7rem; color:#4b5563; margin:0;">Co-founder</p>
    </div>
  </div>

</div>

Want to see the new Customer Points feature in action and learn more about our vision for the future of water modeling? Join Sam and Luke on **October 1st** for our first community webinar. We'll be discussing why we built epanet-js, giving a live demo of the latest tools, and answering your questions. This is your chance to chat with us and connect with the growing epanet-js community.

<iframe width='100%' height='700' frameborder='0' marginheight='0' marginwidth='0' allowtransparency='true' src='https://www.crowdcast.io/c/introducing-epanet-js' style='border: 1px solid #EEE;border-radius:3px' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true' allow='microphone; camera;'></iframe><a ng-href='https://www.crowdcast.io/?utm_source=embed&utm_medium=website&utm_campaign=embed' style="color: #aaa; font-family: 'Helvetica', 'Arial', sans-serif;text-decoration: none;display: block;text-align: center;font-size: 13px;padding: 5px 0">powered by Crowdcast</a>

## **A Fresh New Look & A Smoother Start**

We also dedicated time this month to improving the overall user experience, starting from the moment you open the app.

### A Modern and Consistent Icon Set

We've refreshed the app with a new set of icons! We’ve moved from the [radix icon](https://www.radix-ui.com/icons) set to the much more extensive [**Lucide icon library**](https://lucide.dev/). This gives us thousands of icons to choose from, allowing us to create a more modern, consistent, and intuitive interface. You'll notice that buttons and tools, like **Save** and **Save As**, are now much clearer and easier to understand at a glance.

<figure markdown="span">
  <div style="position: relative; width: 700px;">
    <img 
      src="/assets/blog/progress-report/2025-08/toolbar-before.png" 
      width="700" 
      loading="lazy" 
      alt="toolbar before"
      style="margin: 0; position: absolute; top: 0; left: 0; transition: opacity 0.5s ease; cursor: crosshair;"
    >
    <img 
      src="/assets/blog/progress-report/2025-08/toolbar-after.png"
      width="700" 
      loading="lazy"
      alt="Toolbar after" 
      style="margin: 0; opacity: 0; transition: opacity 0.5s ease; cursor: crosshair;"
      onmouseover="this.style.opacity='1'; this.previousElementSibling.style.opacity='0';"
      onmouseout="this.style.opacity='0'; this.previousElementSibling.style.opacity='1';"
    >
  </div>
  <figcaption>Hover to see the previous version of the toolbar icons.</figcaption>
</figure>

### A Simpler, More Welcoming Start

First impressions matter. We've completely redesigned the welcome screen to be cleaner, simpler, and more helpful. The old screen was functional but cluttered. The new design guides you with clear, logical actions:

- **Getting Started:** A prominent button guides new users to the Quick Start Guide.
- **Build and Develop:** Quickly create a new project or open an existing one.
- **Explore the app:** Demo networks are clearly presented as a way to explore what epanet-js can do.

<figure markdown="span">
  <div style="position: relative; width: 700px;">
    <img 
      src="/assets/blog/progress-report/2025-08/welcome-after.png" 
      width="700" 
      loading="lazy" 
      alt="Welcome screen after"
      style="position: absolute; top: 0; left: 0; transition: opacity 0.5s ease; cursor: crosshair;"
    >
    <img 
      src="/assets/blog/progress-report/2025-08/welcome-before.png"
      width="700" 
      loading="lazy"
      alt="Welcome screen before" 
      style="opacity: 0; transition: opacity 0.5s ease; cursor: crosshair;"
      onmouseover="this.style.opacity='1'; this.previousElementSibling.style.opacity='0';"
      onmouseout="this.style.opacity='0'; this.previousElementSibling.style.opacity='1';"
    >
  </div>
  <figcaption style="margin-top: -0.5rem">Hover to see the previous version of the welcome screen.</figcaption>
</figure>

This new layout reduces friction and helps you get to work faster, whether you're a new user or a seasoned pro.

### Start Your Project in the Right Place

We heard your feedback loud and clear: starting a new project and having to zoom out from a default location to find your own area was a pain. We've fixed this. When you create a new project, you can now **search for your location** in an autocomplete search box. The model will be created zoomed directly to the city, town, or area you're working in. No more needless panning and zooming just to get started!

<figure>
    <video width=720 autoplay muted loop playsinline style="
    box-sizing: border-box;
    border-style: solid;
    border-color: #e5e7eb;
    overflow: hidden;
    border-radius: .75rem;
    border-width: 1px;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);"
    ><source src="/assets/blog/progress-report/2025-08/search-location.mp4" type="video/mp4"></video>
</figure>

## **Making epanet-js More Global**

Our international community continues to grow, and we've made some major strides in making the app more accessible to everyone.

### ようこそ！Welcome, Japanese Speakers!

We are thrilled to add **Japanese** as our fourth community language! A huge thank you to Yusuke Shinoda for his incredible effort in translating and providing feedback to ensure the accuracy was top-notch.

<figure markdown="span">
  <img src="/assets/blog/progress-report/2025-08/japanese.png" loading="lazy" />

  <figcaption style="margin-top: -0.5rem">ようこそ！Welcome, Japanese Speakers!</figcaption>
</figure>

### Smarter Translations and Easier Access

Previously, community-translated languages had to be activated manually in the settings. We now have enough confidence in our translation quality to **enable community languages by default**. If your browser is set to French, Dutch, Japanese, or Portuguese, epanet-js will now load in your language automatically.

This was made possible by a major rewrite of our automated translation service. Building on last month's work, the new system is more robust, reliable, and scalable. It provides us with better notifications and allows us to add new languages much more quickly. Expect to see even more languages coming soon!

## **Improvements and Bug Squashing**

### Corrected Import Connectivity

We fixed a bug in the import process where assets with a specific ID format could cause junctions to be connected incorrectly. You can now safely use any ID format in your model build, and all connections will be made correctly.

<figure markdown="span">
  <div style="position: relative; width: 700px;">
    <img 
      src="/assets/blog/progress-report/2025-08/import-bug-before.png" 
      width="700" 
      loading="lazy" 
      alt="toolbar before"
      style="margin: 0; position: absolute; top: 0; left: 0; transition: opacity 0.5s ease; cursor: crosshair;"
    >
    <img 
      src="/assets/blog/progress-report/2025-08/import-bug-after.png"
      width="700" 
      loading="lazy"
      alt="Toolbar after" 
      style="margin: 0; opacity: 0; transition: opacity 0.5s ease; cursor: crosshair;"
      onmouseover="this.style.opacity='1'; this.previousElementSibling.style.opacity='0';"
      onmouseout="this.style.opacity='0'; this.previousElementSibling.style.opacity='1';"
    >
  </div>
  <figcaption style="margin-top: -0.5rem">Hover to see the network after the bug fix.</figcaption>
</figure>

## **Closing**

Thank you for your continued support and fantastic feedback. Seeing the community embrace these new tools fuels our work and reinforces the powerful demand for a more open and accessible future in water modeling.

If you haven’t already, please [register for the upcoming webinar](https://www.crowdcast.io/c/introducing-epanet-js), even if you can’t make it on the day, we’ll send you a recording of the event!

Thank you for supporting EPANET by using software that supports it back.

<div style="text-align: center">
  <a href="https://app.epanetjs.com" style="
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 2rem;
    font-weight: 500;
    color: white;
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

— Luke and Sam
