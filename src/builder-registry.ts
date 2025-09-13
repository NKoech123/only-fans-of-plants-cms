"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";

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
