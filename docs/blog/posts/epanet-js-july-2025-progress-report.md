---
date: 2025-08-07
categories:
  - Blog
authors:
  - lbutler
draft: true
social:
  cards_layout_options:
    description: You can now build EPANET models from GIS data in seconds. Plus - tanks, check valves, new languages, and smarter translations.
---

# epanet-js July 2025 Progress Report

**GIS Model Builds, New Languages, and More!**

It’s been one month since we launched [epanet-js](https://epanetjs.com), and the response from the community has been incredible. Sam and I have been blown away by the feedback and are thrilled that over 3,000 of you from all around the world have already used the tool.

<figure markdown="span">
  ![Image title](/assets/blog/progress-report/2025-07/model-build-modal.png){ width="700"  }
  <figcaption style="margin-top: 0.5rem">GIS model builds are now in epanet-js!</figcaption>
</figure>

<!-- more -->

We've been busy adding new features and improving the experience. Highlights this month include full support for tanks and check valves, plus support for three new languages: Dutch, Portuguese, and French.

But the biggest news, and one of our most requested features, is finally here - GIS model builds!

## **Build Your Model from GIS Data**

We heard you loud and clear: drawing an entire network from scratch is a huge, if not impossible, task. While this feature is core to most commercial tools, it's been missing from the classic EPANET experience for years. We made it our number one priority to change that.

Now, you can bring your GIS data directly into epanet-js. For consultants building a new model for a utility or engineers who have their data on hand, this feature is a must.

<figure>
    <video width=720 autoplay loop playsinline style="
    box-sizing: border-box;
    border-style: solid;
    border-color: #e5e7eb;
    overflow: hidden;
    border-radius: .75rem;
    border-width: 1px;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);"
    ><source src="/assets/blog/progress-report/2025-07/model-build-quick.mp4" type="video/mp4"></video>
</figure>

The import process is designed to be fast and flexible:

1. **Set Defaults:** Start by choosing your default flow units and headloss formula.
2. **Import & Assign Layers:** Load your GIS files (both Shapefile and GeoJSON are supported!) and assign each layer to an EPANET element like pipes, tanks, or valves.
3. **Map Attributes:** Tell epanet-js which data columns correspond to EPANET attributes like pipe diameters or element IDs.

Our model builder then gets to work, intelligently connecting your network. It automatically handles connectivity for you—joining pipe ends to create junctions, connecting pipes at T-intersections, and splitting pipes to correctly insert point assets like pumps and valves. It even generates unique IDs and calculates junction elevations automatically.

As with everything in epanet-js, this process is built for speed. A moderate network of 10,000 pipes builds in under a second. We've even stress-tested networks of 200,000 pipes, which build in about ten seconds.

And we're not stopping here. We have a few tricks up our sleeves to make this even faster, and we're already planning future additions to make the process smoother, like intelligently detecting the direction of assets (such as pumps and PRVs) and tools to help clean up messy GIS data.

What used to take hours of manual (and less accurate) drawing can now be done before your coffee gets cold.

[SCREENSHOT AND LINK TO YOUTUBE DEMO]

Watch a quick demo of the new GIS model build feature and how it works.

## **More Realistic Models**

**Tanks and Check Valves are Here!**

To help you create more accurate models of your water systems, we’ve added two of the final major EPANET elements.

### Tanks

While epanet-js currently runs steady-state simulations where tanks behave like reservoirs with a fixed head, we know how important it is to represent your network as it truly exists. You can now add tanks to your model, set their initial, minimum, and maximum levels, and define their geometry. This makes your models more intuitive and ensures that when you export your .inp file, it's ready for any future analysis in other applications.

### Check Valves

Sometimes referred to as non-return valves, check valves are simple but critical devices that ensure water flows in only one direction. This feature was essential for accurately modeling common scenarios like pump stations or pressure zone boundaries

<figure markdown="span">
  ![Image title](/assets/blog/progress-report/2025-07/cv-tanks.png){ width="700"  loading=lazy}
</figure>

With tanks and check valves now included, you have a complete toolkit for laying out your network.

## **Speaking Your Language: Now in Dutch, Portuguese & French**

When we launched with English and Spanish, we were thrilled to see a global community embrace epanet-js from day one. However, this created a challenge: many of you were using your browser's built-in "Translate Page" feature, which we discovered was causing [a tricky bug](https://issues.chromium.org/issues/41407169) that made simulations fail.

<figure markdown="span">
  ![Image title](/assets/blog/progress-report/2025-07/epanet-js-languages.gif){ width="700" }

  <figcaption style="margin-top: -1rem">epanet-js in English, Spanish, Portuguese, French, and Dutch.</figcaption>
</figure>

To ensure the app was stable, we had to disable the browser's in-built translation tool. But we were determined to find a better way to support our international users.

![Image title](/assets/blog/progress-report/2025-07/language-menu.png){ align=right width="250"}

Our first step was to build a more robust foundation. Sam replaced our original home-grown translation library with i18next, a powerful and widely-used solution. With that in place, we began adding community languages based on where you, our users, are coming from. Portuguese was an easy first choice, as users from Brazil are our third-largest group. French was next, followed by a fantastic community contribution for Dutch.

But as we celebrated supporting five languages, we realized we had traded one problem for another. Every new feature or text change required complex manual updates, creating a significant maintenance burden. To keep moving fast, we knew we had to innovate.

### A Smarter, Automated Way to Translate

This challenge led to another major project this month: a fully automated translation system. We built a script that automatically runs every morning, checking for any new text added to epanet-js, and uses Google's Gemini AI to translate only the changes. It cleverly includes the surrounding source text for context, ensuring high-quality and consistent translations.

This system allows us to maintain many languages with minimal overhead. It means we can be more responsive, support even more of the community languages in the future, and make it easier for you to help!

If you are a native speaker and spot a translation that could be improved, we’d love your help. You can contribute directly via our [GitHub locales repository](https://github.com/epanet-js/epanet-js-locales).

<figure markdown="span">
  ![Image title](/assets/blog/progress-report/2025-07/translate-github.png){ width="700"  loading=lazy}

  <figcaption style="margin-top: -0.5rem">Community languages are now automatically translated used Google's Gemini AI.</figcaption>
</figure>

Finally, we’ve published [the script](https://github.com/epanet-js/epanet-js-locales/blob/main/translate.ts) and its automated process as open source! So if you’re using i18next or another internationalization library, you can also benefit from this work.

## **Improvements and Bug Squashing**

We also made a number of smaller tweaks and fixes to make your workflow smoother.

### Improved Junction Visibility

A subtle but important change. We tweaked our automatic contrast logic so that junctions with light fill colors now have a more distinct outline, making them clearly visible even on light-colored satellite maps.

<figure markdown="span">
  ![Image title](/assets/blog/progress-report/2025-07/node-stroke.gif){ width="700"  loading=lazy}

  <figcaption style="margin-top: -0.5rem">Watch the white junctions in the center to see the improved junction visibility.</figcaption>
</figure>

### No More Accidental Moves

We fixed a frustrating bug where clicking just outside a junction could accidentally move it. Now, you have to be much more deliberate to move a node, preventing unwanted changes to your layout.

<figure>
    <video width=400 autoplay loop playsinline style="
    box-sizing: border-box;
    border-style: solid;
    border-color: #e5e7eb;
    overflow: hidden;
    border-radius: .75rem;
    border-width: 1px;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);"
    ><source src="/assets/blog/progress-report/2025-07/clicking-bug.mp4" type="video/mp4"></video>
</figure>

### Color Pipes by Roughness

You can now visualize pipe roughness directly on the map. This is a great way to get a quick overview of where older pipes (which cause more friction and headloss) are located in your network.

### Drawing Tiny Pipes

Previously, trying to draw very short pipes at low zoom levels could cause a crash. We've fixed this, so you can now model even the smallest connections without issue.

## **Closing**

Thank you again for an amazing first month. We're thrilled by the thousands of you using the app and blown away that over 1,000 people are now following our company, [Iterating, on LinkedIn](https://www.linkedin.com/company/iteratinginc). This incredible growth shows a powerful public demand for change in the world of water modeling.

If you haven’t already, [please give us a follow](https://www.linkedin.com/company/iteratinginc). You’ll get the latest epanet-js updates as they happen, and your support helps build momentum for a more open and sustainable future.

Support EPANET by using software that supports it back.

— Luke and Sam
