import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

const uiListMinMaxOpts = {
  min: 3,
  max: 6,
}

export default defineConfig({
  client: { skip: true },
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        label: "Questions",
        name: "question",
        path: "content/questions",
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            label: "Subtitle",
            name: "question",
            type: "string",
            required: true,
          },
          {
            label: "Section One",
            name: "section_one",
            type: "object",
            fields: [
              {
                label: "Positive Heading",
                name: "positive_title",
                type: "string",
              },
              {
                label: "Positive Points",
                name: "positive_points",
                type: "string",
                list: true,
                ui: uiListMinMaxOpts,
              },
              {
                label: "Negative Heading",
                name: "negative_title",
                type: "string",
              },
              {
                label: "Negative Points",
                name: "negative_points",
                type: "string",
                list: true,
                ui: uiListMinMaxOpts,
              }
            ]
          },
          {
            label: "Section Two: Make Your Move",
            name: "section_two",
            type: "object",
            fields: [
              {
                label: "Banner Action",
                name: "title",
                type: "string",
              },
              {
                label: "Bullet Points",
                name: "positive_points",
                type: "string",
                list: true,
                ui: uiListMinMaxOpts,
              },
            ]
          },
          {
            label: "Rabbit Hole",
            name: "rabbit_hole",
            type: "rich-text",
            isBody: true,
          },
        ],
      },
      {
        label: "About Page",
        name: "about",
        path: "content/about",
        match: {
          include: "index",
        },
        fields: [
          {
            label: "Long Site Title",
            name: "title_long",
            type: "string",
            required: true
          },
          {
            label: "Short Site Title",
            name: "title_short",
            type: "string",
            required: true
          },
          {
            label: "About Text",
            name: "body",
            type: "rich-text",
            required: true,
            isBody: true,
          },
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          }
        }
      },
    ],
  },
});
