# Casa Amapola

## Sanity CMS

The website reads published content from Sanity project `pyefeumj`, public dataset
`production`. The separate [Studio](./studio) is the client's editing interface.

Hosted editing interface: [casa-amapola.sanity.studio](https://casa-amapola.sanity.studio/).
Local development and the temporary website origin
`https://casa-amapola.vercel.app` are allowed in Sanity CORS settings. Add the
final website origin when the production domain changes.

| Studio document | Editable content |
| --- | --- |
| English / Spanish / Swedish text | Hero highlights; about text; room names, descriptions, beds, size, bathrooms and seasonal availability; services; area text/cards; extras and hosts |
| Photos & room prices | Shared room prices and galleries; desktop/mobile hero images; about/area galleries; area card photos and hosts photo |

Layout, navigation, contact details, booking/social links and terms remain in code.
Prices and photos are shared across languages; text and photo descriptions are
edited separately for English, Spanish and Swedish. The four rooms, four area
cards and service order are fixed so their photos, colours and icons stay matched.
Galleries can be reordered, expanded or reduced to a minimum of one photo.
Images are displayed in full; crop them before uploading if needed.

### First-time setup

Use **Node.js 22.12 or newer** for the Studio. Install the website dependencies
first because the initial import reuses its existing translations and validation.

```sh
# Repository root
npm ci
cd studio
npm ci
npm run login
npm run seed:check
npm run seed
npm run dev
```

The import checks all three translations and 51 local photos, uploads photos and
creates **drafts** of the four documents. It requires your Sanity login with write
access to this project. It never overwrites an existing draft or published
document and can be rerun after an interrupted import. No write token belongs in
the website or source control. Review the imported text, prices and photo
descriptions, then **Publish each of the four documents** in Studio.

In [Sanity project management](https://www.sanity.io/manage/project/pyefeumj):

1. Keep `production` public and store only public website content there.
2. Under API / CORS origins, allow `http://localhost:3000` for local website
   development and your actual production website origin (including `https://`).
   Anonymous website reads do not need credentials. Also allow the local Studio
   origin `http://localhost:3333` and the deployed Studio origin with credentials
   enabled for authenticated editing.
3. Invite the client with a role that permits editing and publishing content.
4. Run `npm run deploy` from `studio` and follow the prompts to choose the Studio
   hostname. Give the client that hosted Studio URL.

Deploy the website using the normal `npm run build` workflow. Publishing content
does **not** require rebuilding the website. New page loads fetch published
documents through Sanity's CDN; allow a short CDN delay after publishing. Already
open pages need a refresh. Draft edits are not shown on the public website.

### Defaults, failures and configuration

The site renders the bundled text and photos immediately while Sanity loads.
Unpublished language documents use that language's bundled text; unpublished
media uses bundled photos and prices. Missing documents produce console warnings.
Network, permission, timeout or invalid-content failures produce a console error
and retain bundled content rather than breaking the site. Invalid responses are
rejected as a whole. The fetch times out after ten seconds.

Defaults are configured in [the website config](./src/cms/config.ts),
[Studio config](./studio/sanity.config.ts) and [CLI config](./studio/sanity.cli.ts).
Optional environment overrides:

- Website: `REACT_APP_SANITY_PROJECT_ID`, `REACT_APP_SANITY_DATASET`.
- Studio and import: `SANITY_STUDIO_PROJECT_ID`, `SANITY_STUDIO_DATASET`.

Keep those values aligned. Only public IDs belong in browser configuration;
never set a browser-side Sanity write token.

### Validation

```sh
# Repository root
npm test -- --watchAll=false --runInBand
npm run build

cd studio
npm run typecheck
npm run seed:check
npm run build
```

## React application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
