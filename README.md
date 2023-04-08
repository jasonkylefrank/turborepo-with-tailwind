# My customizations / experimentations on the "Turborepo Tailwind CSS starter"

I needed to support things that Turborepo's Tailwind starter did not support, so I created this repo to figure out how to get those things to work.

Turborepo was using `tsup` to build the `ui` package before the `web` and `docs` apps consumed it. That worked fine for basic React and Tailwind components. But it fell apart when I needed to use a CSS Module file since `tsup` only has **experimental** support for CSS at the time of this writing (and I could not get it to work).

As such, I've tried a few other approaches to be able to use both Tailwind CSS and CSS modules in the `ui` package. I have a few different branches that use some of these different approaches.

These approaches range from not building _anything_ in the `ui` package (and transpiling them in the consuming packages) to using `Vite`'s "library mode" to build the `ui` components and styles before being consumed by the apps.

Using `Vite`'s "library mode" worked decent but I could not find a way to hot-reload changes made to components in the `ui` package when consuming them in the apps. `Vite` does support hot-reloading when you're using instances of your components _in the same project_, but I have not yet found a way to extend that hot-reloading to _other (consuming) projects_ in the same monorepo.

As such, the best approach I've found so far is to not compile the components or styles in the `ui` package and instead transpile in the consuming apps of the monorepo.

## Branch descriptions

As of this writing, I've published a few branches, each of which shows a different compilation strategy for the `ui` package:

- `transpile`: The `ui` package does not compile anything. Instead, the consuming apps (`web` and `docs`) use the `transpileModules` property in the `next.config.js` file to instruct the Next.js build script to compile the `ui` package.
- `vite-css-modules`: The `ui` package is compiled by Vite, using the **"library mode"** approach. You can see the specifics about that in the `vite.config.ts` file in the `ui` package. Note that I performed additional adjustments to the `ui` package's `package.json` to get this appraoch to work compared to the `transpile` approach.
