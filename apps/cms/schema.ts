import { config } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import {
  text,
  relationship,
  timestamp,
  select,
  password,
} from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";
import { withAuth, session } from "./auth";

const lists = {
  User: {
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({ validation: { isRequired: true }, isIndexed: "unique" }),
      password: password({ validation: { isRequired: true } }),
      posts: relationship({ ref: "Post.author", many: true }),
    },
  },
  Author: {
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      bio: text(),
      workspaceId: text({ validation: { isRequired: true }, isIndexed: true }),
      siteId: text({ validation: { isRequired: true }, isIndexed: true }),
      posts: relationship({ ref: "Post.authorRef", many: true }),
    },
  },
  Category: {
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      slug: text({ validation: { isRequired: true }, isIndexed: "unique" }),
      workspaceId: text({ validation: { isRequired: true }, isIndexed: true }),
      siteId: text({ validation: { isRequired: true }, isIndexed: true }),
      posts: relationship({ ref: "Post.category", many: true }),
    },
  },
  Tag: {
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      slug: text({ validation: { isRequired: true }, isIndexed: "unique" }),
      workspaceId: text({ validation: { isRequired: true }, isIndexed: true }),
      siteId: text({ validation: { isRequired: true }, isIndexed: true }),
      posts: relationship({ ref: "Post.tags", many: true }),
    },
  },
  MediaRef: {
    access: allowAll,
    fields: {
      title: text(),
      url: text({ validation: { isRequired: true } }),
      kind: select({
        options: [
          { label: "Image", value: "image" },
          { label: "Video", value: "video" },
        ],
        defaultValue: "image",
      }),
      workspaceId: text({ validation: { isRequired: true }, isIndexed: true }),
      siteId: text({ validation: { isRequired: true }, isIndexed: true }),
    },
  },
  Post: {
    access: allowAll,
    fields: {
      title: text({ validation: { isRequired: true } }),
      slug: text({ validation: { isRequired: true }, isIndexed: true }),
      excerpt: text(),
      status: select({
        options: [
          { label: "Draft", value: "draft" },
          { label: "Published", value: "published" },
        ],
        defaultValue: "draft",
        ui: { displayMode: "segmented-control" },
      }),
      workspaceId: text({ validation: { isRequired: true }, isIndexed: true }),
      siteId: text({ validation: { isRequired: true }, isIndexed: true }),
      publishedAt: timestamp(),
      content: document({
        formatting: true,
        links: true,
        dividers: true,
      }),
      author: relationship({ ref: "User.posts" }),
      authorRef: relationship({ ref: "Author.posts" }),
      category: relationship({ ref: "Category.posts" }),
      tags: relationship({ ref: "Tag.posts", many: true }),
      coverUrl: text(),
    },
  },
};

export default withAuth(
  config({
    db: {
      provider: "sqlite",
      url: process.env.DATABASE_URL || "file:./keystone.db",
    },
    lists,
    session,
    server: {
      cors: { origin: true, credentials: true },
      port: 3001,
    },
    ui: {
      isAccessAllowed: () => true,
    },
  }),
);
