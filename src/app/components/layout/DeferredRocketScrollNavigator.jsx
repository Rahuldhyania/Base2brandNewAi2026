"use client";

import dynamic from "next/dynamic";

const RocketScrollNavigator = dynamic(
  () =>
    import("./RocketScrollNavigator").then((m) => m.RocketScrollNavigator),
  { ssr: false },
);

export function DeferredRocketScrollNavigator(props) {
  return <RocketScrollNavigator {...props} />;
}