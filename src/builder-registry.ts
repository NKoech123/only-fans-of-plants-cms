"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import PlantCare from "./components/PlantCare/PlantCare";

// Note: builder.init() is called in the main builder.tsx component

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(PlantCare, {
  name: "PlantCare",
  inputs: [
    {
      name: "posts",
      type: "list",
      subFields: [
        {
          name: "id",
          type: "string",
        },
        {
          name: "name",
          type: "string",
        },
        {
          name: "data",
          type: "object",
        },
        {
          name: "url",
          type: "string",
        },
        {
          name: "lastUpdated",
          type: "number",
        },
      ],
    },
    {
      name: "model",
      type: "string",
      defaultValue: "plant-care-post",
      helperText: "The Builder.io model to fetch content from",
    },
    {
      name: "limit",
      type: "number",
      defaultValue: 24,
      helperText: "Maximum number of posts to display",
    },
  ],
});
