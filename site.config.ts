import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '11c6333338278086b70bf4b4af41b0c1',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'RooLone Magazine',
  domain: 'magazine.roolone.me',
  author: 'Sumögåsbord',

  // open graph metadata (optional)
  description: 'This is a test.',

  // social usernames (optional)
  // twitter: '#',
  github: 'sumogasbord',
  // linkedin: '@',
  mastodon: 'https://vandrare.page/@sumogasbord', // optional mastodon profile URL, provides link verification
  misskey: 'https://misskey.roolone.me/@sumogasbord',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://media.roolone.me/magazine/logos/magazine_logo-object.jpg',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '11c63333382781e9a02cf16001ccb65e'
    },
    {
      title: 'Contact',
      pageId: '11c6333338278192823af4ce5dd0e980'
    }
  ]
})
