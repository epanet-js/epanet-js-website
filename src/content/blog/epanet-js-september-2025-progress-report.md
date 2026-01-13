---
draft: false
title: "epanet-js September 2025 Progress Report"
snippet: "Roadmaps, Redrawing, and Reports"
image:
  {
    src: "https://epanetjs.com/assets/blog/progress-report/2025-09/roadmap.png",
    alt: "",
  }
publishDate: "2025-10-07 09:15"
category: "Progress report"
author: "lbutler"
tags: [Progress report]
---

**Roadmaps, Redrawing, and Reports!**

September was a milestone month for epanet-js. We’ve been working hard not only on new tools to make building and editing networks faster, but also on opening up the direction of the project itself.

This month, we introduced our [public roadmap](https://roadmap.epanetjs.com){:target="\_blank"} — a place where anyone can see what’s coming next, share ideas, and help shape the future of epanet-js.

<figure markdown="span">
  <a href="https://roadmap.epanetjs.com" target="_blank" rel="noopener">
    ![epanet-js roadmap](/assets/blog/progress-report/2025-09/roadmap.png){ width="700" }
  </a>
  <figcaption style="margin-top: 0rem">The new public roadmap is live — see what's coming next and help shape the future of epanet-js!</figcaption>
</figure>

<!-- more -->

Alongside that, we hosted our first live webinar, rolled out new editing tools for reversing and redrawing pipes, improved the demo networks, and added new workflow features to make debugging and model cleanup even smoother.

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

## **Product Updates and Announcements**

### Our Public Roadmap Is Live

The biggest news this month is the launch of the [epanet-js Roadmap](https://roadmap.epanetjs.com/){:target="\_blank"}\!

We’ve made our entire development plan public so you can see what we’re working on, what’s planned next, and what ideas are still being explored. More importantly, you can now take part directly — vote on the features you’d like to see, comment on ideas, or suggest new ones entirely.

We believe _epanet-js_ should be a community-led project. By opening up the roadmap, we’re inviting everyone to help guide where we go next. Whether you’re an engineer, researcher, or utility manager, your input will directly influence the priorities of future releases.

The roadmap will automatically update as we move features from ideas into development, and you’ll receive updates on the items you follow. It’s a simple but powerful way to stay involved and help us build the tools you want to see.

<figure markdown="span">
    ![epanet-js feedback](/assets/blog/progress-report/2025-09/feedback.png){ width="700" }
  <figcaption style="margin-top: 0rem">Vote, comment, and follow along — your feedback now helps shape every feature in epanet-js.</figcaption>
</figure>

### Watch the Webinar on YouTube

Last week, we hosted our first community webinar, _Introducing epanet-js_, which brought together over a hundred people live and more than two hundred registrants in total. The response was incredible — thank you to everyone who joined us\!

In the session, we talked about the state of hydraulic modeling today, why we built _epanet-js_, and how we’re building an open and sustainable future for the industry. We also gave a live demo of the app, shared what’s next on our roadmap, introduced the Teams plan, and finished with a long Q\&A that covered everything from engine details to future features.

If you missed it, you can now [watch the full recording on YouTube](https://www.youtube.com/watch?v=tbbYdd4kWYE){:target="\_blank"}. The video includes bookmarks so you can jump straight to the sections or questions that interest you most.

<iframe width="688" height="380" src="https://www.youtube.com/embed/tbbYdd4kWYE?si=M6EeYtvX-lLOlARX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Introducing the Teams Plan

During the webinar, we also introduced the new **Teams plan** — designed for growing organizations that need flexibility and collaboration.

Teams can now purchase floating licenses, pay by invoice, and receive volume discounts. The plan also includes priority support and access to additional features tailored for professional users.

This is a great option for utilities and consultancies looking to use _epanet-js_ across multiple users.

<figure markdown="span">
    ![epanet-js Teams plan](/assets/blog/progress-report/2025-09/teams-plan.png){ width="700" }
  <figcaption style="margin-top: 0rem">Introducing the Teams plan — flexible licensing and collaboration for organizations using epanet-js.</figcaption>
</figure>

### Usage and Growth

We also shared some of our usage stats during the webinar, and the results have been amazing to see.

There was an initial big spike when we launched in July — which naturally settled — but since then, activity has continued to climb as we’ve added new features and refined the app.

In September, we reached **1,839 monthly active users**, up from **1,542 in August**. Weekly and daily active users are also growing steadily, showing that more people are not just trying the app, but continuing to use it regularly.

We’re incredibly proud of this growth for a free, open-source app still early in development, and we know it’s just the beginning.

![epanet-js weekly active users](/assets/blog/progress-report/2025-09/DAU.png){ width="700" }
![epanet-js weekly active users](/assets/blog/progress-report/2025-09/WAU.png){ width="700" }
![epanet-js weekly active users](/assets/blog/progress-report/2025-09/MAU.png){ width="700" }

## **Features updates and improvements**

### Select Assets from the Report

One of the small but very useful additions this month is the ability to **select assets directly from the EPANET report**.

When you click an item in the report, _epanet-js_ will automatically pan and zoom the map to that asset and select it.

This makes it much easier to debug issues, investigate results, or quickly understand what’s happening in your model — for example, locating where a pump turned on or a valve changed state during a simulation.

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
    ><source src="/assets/blog/progress-report/2025-09/report.mp4" type="video/mp4"></video>
</figure>

### Split Assets When Drawing

Editing and extending networks just got easier.

When drawing junctions on existing pipes, _epanet-js_ will now automatically split those pipes for you. The same behavior applies when creating new pipes, pumps, or valves, or even when dragging an existing asset like a junction onto a pipe — it will snap into place and split the pipe automatically.

This small change makes a big difference when cleaning up or building networks, saving time and reducing manual rework.

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
    ><source src="/assets/blog/progress-report/2025-09/split-pipes.mp4" type="video/mp4"></video>
</figure>

### Reverse Link Direction

You can now quickly reverse the direction of any link asset — including pipes, pumps, and valves — directly from the toolbar, context menu, or by pressing **R** on your keyboard.

This flips the upstream and downstream nodes instantly, letting you fix incorrect orientations or adjust the layout of your network in seconds.

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
    ><source src="/assets/blog/progress-report/2025-09/reverse.mp4" type="video/mp4"></video>
</figure>

### Redraw Pipes

We’ve added a new way to reshape and reroute pipes without losing any of their properties.

When you select a link (pipe, pump, or valve), you can activate the **Redraw Tool** from the toolbar, context menu, or by pressing **E**. The tool lets you pick a new upstream node, place new vertices, and then select the downstream node to complete the redraw.

You’ll see the old alignment in light blue, so you can easily adjust the geometry while keeping the original attributes like diameter and roughness. Whether you’re fixing pipe geometry or connecting to a new part of the network, this tool keeps your data intact.

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
    ><source src="/assets/blog/progress-report/2025-09/redraw.mp4" type="video/mp4"></video>
</figure>

### Updated Demo Networks

Both of our demo networks — **Drumchapel** and **Waterdown** — have been updated to include **customer points**, giving everyone a chance to see how this feature works in action.

If you open _epanet-js_ for the first time, you’ll see these demos right on the splash screen, ready to explore.

### Bug Fixes

We fixed a small but important issue where the **Next** button in the Model Build wizard could disappear if your browser window wasn’t tall enough. You can now scroll and continue through the steps normally, even on smaller screens.

## **Community and Closing**

### Community Highlights

One of the most rewarding parts of this project is seeing how people all over the world are using _epanet-js_ and sharing it in their own work.

This month, we saw more posts, videos, and discussions from the community — and we’ll highlight a few of them here.

We're deeply grateful for everyone who takes the time to talk about _epanet-js_ publicly. It helps us reach new users and keep the conversation growing. If you do share something, remember to tag [Iterating](https://www.linkedin.com/company/iteratinginc/), [Sam](https://www.linkedin.com/in/sapagat/), or [Luke](https://www.linkedin.com/in/lukepbutler/), and we'll make sure to amplify it.

Thank you [John Paulo Agrimano](https://www.linkedin.com/in/john-paulo-agrimano-636374117/), [Moise K.](https://www.linkedin.com/in/moise-k-b1a629176/), [Suherman suherman](https://www.linkedin.com/in/suhermanstp/), [Lucas Soma Capapelo](https://www.linkedin.com/in/lucas-soma-capapelo-bb3949210/), [Geosaber](https://www.linkedin.com/company/geosaber/posts/?feedView=all), [Álvaro Ribeiro](https://www.linkedin.com/in/%C3%A1lvaro-ribeiro-62127327/), [Victor Hernán Garzón](https://www.linkedin.com/in/vhgarzonr/) and [Yusuke Shinoda](https://www.linkedin.com/in/yusuke-shinoda-a78754aa/)!

<style>
  .community-grid {
    column-count: 2;
    column-gap: 1rem;
  }
  .community-grid figure {
    break-inside: avoid;
    margin-bottom: 1rem; 
  }
  .community-grid figure:last-child {
    margin-bottom: 0;
  }
  .community-grid figure img {
    width: 100%; height: auto; box-sizing: border-box; border-style: solid; border-color: #e5e7eb; overflow: hidden; border-radius: .25rem; border-width: 1px; box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
  }

</style>

<div class="community-grid">
    <figure >
        <a href="https://www.linkedin.com/posts/john-paulo-agrimano-636374117_epanetjs-watermodeling-hydraulicengineering-ugcPost-7379347613654974464-zhtZ" target="_blank">
            <img width="350" 
            src="/assets/blog/progress-report/2025-09/linkedin-1.png">
        </a>
    </figure>

    <figure >
        <a href="https://www.linkedin.com/posts/suhermanstp_epanet-js-aplikasi-epanet-berbasis-web-activity-7377225471123492864-0pp5" target="_blank">
        <img width="350"
        src="/assets/blog/progress-report/2025-09/linkedin-2.png">
        </a>
    </figure>

    <figure >
        <a href="https://www.linkedin.com/posts/geosaber_the-epanet-you-know-but-modern-enhanced-activity-7374804123386368000-B8Ah" target="_blank">
        <img width="350"
        src="/assets/blog/progress-report/2025-09/linkedin-3.png">
        </a>
    </figure>

    <figure >
        <a href="https://www.linkedin.com/posts/moise-k-b1a629176_epanet-js-epanet-in-your-browser-start-activity-7373554115311894528-xT1u" target="_blank">
        <img width="350"
        src="/assets/blog/progress-report/2025-09/linkedin-4.png">
        </a>
    </figure>
    <figure >
        <a href="https://www.linkedin.com/posts/lucas-soma-capapelo-bb3949210_in-recent-days-i-developed-a-hydraulic-model-ugcPost-7372749648077144064-2Uut" target="_blank">
        <img width="350"
        src="/assets/blog/progress-report/2025-09/linkedin-5.png">
        </a>
    </figure>

    <figure >
        <a href="https://www.linkedin.com/posts/%C3%A1lvaro-ribeiro-62127327_create-a-water-network-in-under-a-minute-ugcPost-7369905056323735552-dGlz" target="_blank">
        <img width="350"
        src="/assets/blog/progress-report/2025-09/linkedin-6.png">
        </a>


    <figure >
        <a href="https://www.linkedin.com/posts/vhgarzonr_ense%C3%B1ando-con-epanetjs-ugcPost-7368003706199392259-ZWjH" target="_blank">
        <img width="350"
        src="/assets/blog/progress-report/2025-09/linkedin-7.png">
        </a>


    <figure >
        <a href="https://www.linkedin.com/posts/yusuke-shinoda-a78754aa_now-we-have-beta-version-of-japanese-language-activity-7364978108019429399-0fVG" target="_blank">
        <img width="350"
        src="/assets/blog/progress-report/2025-09/linkedin-8.png">
        </a>
    </figure>

</div>

### Closing

Thank you again for being part of this journey and for all the feedback that continues to shape _epanet-js_. The open discussions, ideas, and community support make all of this possible.

Support EPANET by using software that supports it back.

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

— Luke and Sam
