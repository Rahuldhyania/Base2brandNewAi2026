"use client";

import dynamic from "next/dynamic";

export const DeferredRocketScrollNavigator = dynamic(
  () =>
    import("./RocketScrollNavigator").then((m) => m.RocketScrollNavigator),
  { ssr: false },
);
