/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually

  packagesSidebar: [
    {
      id: "packages/index",
      label: "Packages",
      type: "doc",
    },
    {
      items: [
        {
          href: "https://www.npmjs.com/package/create-discordx",
          label: "NPM",
          type: "link",
        },
        {
          id: "packages/create-discordx/README",
          label: "Readme",
          type: "doc",
        },
      ],
      label: "create-discordx",
      type: "category",
    },
    {
      items: [
        {
          href: "https://www.npmjs.com/package/discordx",
          label: "NPM",
          type: "link",
        },
        {
          id: "packages/discordx/README",
          label: "Readme",
          type: "doc",
        },
        {
          id: "packages/discordx/getting-started",
          label: "Getting Started",
          type: "doc",
        },
        {
          items: [
            {
              dirName: "packages/discordx/guides",
              type: "autogenerated",
            },
          ],
          label: "Guides",
          type: "category",
        },
      ],
      label: "discordx",
      type: "category",
    },
    {
      items: [
        {
          href: "https://www.npmjs.com/package/@discordx/changelog",
          label: "NPM",
          type: "link",
        },
        {
          id: "packages/changelog/README",
          label: "Readme",
          type: "doc",
        },
      ],
      label: "@discordx/changelog",
      type: "category",
    },
    {
      items: [
        {
          href: "https://www.npmjs.com/package/@discordx/di",
          label: "NPM",
          type: "link",
        },
        {
          id: "packages/di/README",
          label: "Readme",
          type: "doc",
        },
      ],
      label: "@discordx/di",
      type: "category",
    },
    {
      items: [
        {
          href: "https://www.npmjs.com/package/@discordx/importer",
          label: "NPM",
          type: "link",
        },
        {
          id: "packages/importer/README",
          label: "Readme",
          type: "doc",
        },
      ],
      label: "@discordx/importer",
      type: "category",
    },
    {
      items: [
        {
          href: "https://www.npmjs.com/package/@discordx/internal",
          label: "NPM",
          type: "link",
        },
        {
          id: "packages/internal/README",
          label: "Readme",
          type: "doc",
        },
      ],
      label: "@discordx/internal",
      type: "category",
    },
    {
      items: [
        {
          href: "https://www.npmjs.com/package/@discordx/koa",
          label: "NPM",
          type: "link",
        },
        {
          id: "packages/koa/README",
          label: "Readme",
          type: "doc",
        },
      ],
      label: "@discordx/koa",
      type: "category",
    },
    {
      items: [
        {
          href: "https://www.npmjs.com/package/@discordx/lava-player",
          label: "NPM",
          type: "link",
        },
        {
          id: "packages/lava-player/README",
          label: "Readme",
          type: "doc",
        },
      ],
      label: "@discordx/lava-player",
      type: "category",
    },
    {
      items: [
        {
          href: "https://www.npmjs.com/package/@discordx/lava-queue",
          label: "NPM",
          type: "link",
        },
        {
          id: "packages/lava-queue/README",
          label: "Readme",
          type: "doc",
        },
      ],
      label: "@discordx/lava-queue",
      type: "category",
    },
    {
      items: [
        {
          href: "https://www.npmjs.com/package/@discordx/music",
          label: "NPM",
          type: "link",
        },
        {
          id: "packages/music/README",
          label: "Readme",
          type: "doc",
        },
      ],
      label: "@discordx/music",
      type: "category",
    },
    {
      items: [
        {
          href: "https://www.npmjs.com/package/@discordx/pagination",
          label: "NPM",
          type: "link",
        },
        {
          id: "packages/pagination/README",
          label: "Readme",
          type: "doc",
        },
      ],
      label: "@discordx/pagination",
      type: "category",
    },
    {
      items: [
        {
          href: "https://www.npmjs.com/package/@discordx/socket.io",
          label: "NPM",
          type: "link",
        },
        {
          id: "packages/socket.io/README",
          label: "Readme",
          type: "doc",
        },
      ],
      label: "@discordx/socket.io",
      type: "category",
    },
    {
      items: [
        {
          href: "https://www.npmjs.com/package/@discordx/utilities",
          label: "NPM",
          type: "link",
        },
        {
          id: "packages/utilities/README",
          label: "Readme",
          type: "doc",
        },
      ],
      label: "@discordx/utilities",
      type: "category",
    },
  ],

  faqSidebar: [
    {
      dirName: "faq",
      type: "autogenerated",
    },
  ],
};
