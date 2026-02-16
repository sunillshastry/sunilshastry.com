# Sunil Shastry

[![Netlify Status](https://api.netlify.com/api/v1/badges/75a8326a-2d92-4226-9157-ae3bb777879e/deploy-status)](https://app.netlify.com/projects/sunilshastry/deploys)
![Website Status](https://img.shields.io/website?url=https://sunilshastry.com)
![License](https://img.shields.io/github/license/sunillshastry/sunilshastry.com)

![X (formerly Twitter) Follow](https://img.shields.io/twitter/follow/sunillshastry)

[https://www.sunilshastry.com](https://www.sunilshastry.com)

---

_Welcome to the public GitHub repository of my personal website. Built with Next.js, with TypeScript integration and TailwindCSS for styling._

## Local Setup

1. Make sure `Node` (minimum v20) is installed on your system. You can install it for your device from the [Official Node](https://nodejs.org/) website. Alternatively, you can install it via [Homebrew](https://formulae.brew.sh/formula/node).

2. You can confirm if the `Node` installation was successful by running the following command on your terminal. As long as it starts with "v20" you are ready for the next step.

   ```bash
   node --version
   ```

3. Clone the project, and navigate into the directory.

   ```bash
   git clone git@github.com:sunillshastry/sunilshastry.com.git
   ```

   ```bash
   cd sunilshastry.com
   ```

4. To ensure the project has its dependencies installed, run the following command in the root directory, for Node (via `npm`) to fetch and download all package dependencies

   ```bash
   npm install
   ```

5. Upon successfully installing the project's dependencies, you should not see a `node_modules/` directory in the root folder. If you do not see this, you have not installed the dependencies correctly. In the unlikely event that `npm` failed to install the dependencies, refer to this [Stack Overflow](https://stackoverflow.com/questions/21250849/npm-install-doesnt-create-node-modules-directory) exchange for helpful tips.

6. With the `node_modules` directory installed correctly, you can now run the following command to spin up a local development server running the project by simply running the following command:

   ```bash
   npm run dev
   ```

7. Alternatively, you can mimic a production site locally with the following commands:

   ```bash
   npm run build # This will create a "production" build as .next/ folder
   ```

   ```bash
   npm run start # Starts a server using the production build
   ```

8. You can now access and view the running project on `localhost` at `http://localhost:3000`.

## Font Face

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load the font face.

The website uses the [Inter](https://rsms.me/inter/) font-face. Inter is open-source font-face, available for commercial and non-commercial projects. The website uses Inter via Google Fonts, which can be viewed [here](https://fonts.google.com/specimen/Inter).

## Primary Dependencies

- Core: Next.js, React, TypeScript.
- Styling: TailwindCSS, shadcn-ui.
- Deployment: Netlify, GitHub CI/CD, Netlify CI/CD.
- Formatting: Prettier, Husky, eslint and lint-staged.
- Icons: Lucide React.

## Sitemap

The website's sitemap can be viewed [here](https://www.sunilshastry.com/sitemap.xml).

## Contributions

Project will not be accepting any contributions or PRs.

## Hosting

Hosted on [Netlify](https://netlify.app/), with Netlify's automated CI/CD workflow ([View more](https://www.netlify.com/platform/core/build/)).

## License

Licensed under the [GNU General Public License v3.0](https://github.com/sunillshastry/sunilshastry.com/blob/master/LICENSE).
