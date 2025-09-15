import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '18d633333827804c845ef6e7a6e95b45',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'RooLone Magazine',
  domain: 'magazine.roolone.me',
  author: 'Plainbox',

  // open graph metadata (optional)
  description: 'ようこそ「さまよう旅人」のためのウェブサイトへ！RooLone Magazineは「さまよう旅人」へ向けたウェブマガジン。旅の参考に1mmぐらいはなるような情報をローペースで発信する予定です。',

  // social usernames (optional)
  // twitter: 'sumogasbord', // unused and deleted
  github: 'sumogasbord',
  // linkedin: '#',
  mastodon: 'https://vandrare.page/@sumogasbord', // optional mastodon profile URL, provides link verification
  misskey: 'https://misskey.roolone.me/@sumogasbord', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
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
  pageUrlOverrides: {
       '/about': '26f63333382780cd8376edada6e9d380',
       '/all-posts': '26f633333827807eb29ee450952968ed',
       '/privacypolicy': '26f63333382780199a31ff80bc68fa2d',
    },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '26f63333382780cd8376edada6e9d380'
    },
    {
      title: 'All-Post',
      pageId: '26f633333827807eb29ee450952968ed'
    },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  ]
})
