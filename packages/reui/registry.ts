// @ts-nocheck
import { lazy, type ComponentType, type LazyExoticComponent } from "react";

export type ReuiRegistryItem = {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  component: LazyExoticComponent<ComponentType<any>> | ComponentType<any>;
  display?: boolean;
};

export const reuiRegistry: ReuiRegistryItem[] = [
  {
    id: "reui-c-accordion-1",
    name: "A basic single-expand accordion",
    description: "A basic single-expand accordion",
    category: "reui-accordion",
    tags: ["reui","accordion"],
    component: lazy(() =>
      import("./src/patterns/accordion/c-accordion-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-accordion-4",
    name: "Accordion embedded within a Card",
    description: "Accordion embedded within a Card",
    category: "reui-accordion",
    tags: ["reui","accordion"],
    component: lazy(() =>
      import("./src/patterns/accordion/c-accordion-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-accordion-7",
    name: "Accordion items integrated within Frame and FramePanel",
    description: "Accordion items integrated within Frame and FramePanel",
    category: "reui-accordion",
    tags: ["reui","accordion"],
    component: lazy(() =>
      import("./src/patterns/accordion/c-accordion-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-accordion-11",
    name: "Accordion pattern for onboarding or setup steps with icons, badges, and QR codes",
    description: "Accordion pattern for onboarding or setup steps with icons, badges, and QR codes",
    category: "reui-accordion",
    tags: ["reui","accordion"],
    component: lazy(() =>
      import("./src/patterns/accordion/c-accordion-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-accordion-3",
    name: "Accordion with borders and rounded corners",
    description: "Accordion with borders and rounded corners",
    category: "reui-accordion",
    tags: ["reui","accordion"],
    component: lazy(() =>
      import("./src/patterns/accordion/c-accordion-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-accordion-5",
    name: "Accordion with disabled items and highlighted state",
    description: "Accordion with disabled items and highlighted state",
    category: "reui-accordion",
    tags: ["reui","accordion"],
    component: lazy(() =>
      import("./src/patterns/accordion/c-accordion-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-accordion-2",
    name: "Accordion with plus/minus indicators",
    description: "Accordion with plus/minus indicators",
    category: "reui-accordion",
    tags: ["reui","accordion"],
    component: lazy(() =>
      import("./src/patterns/accordion/c-accordion-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-accordion-10",
    name: "Accordion with rotating arrow indicator",
    description: "Accordion with rotating arrow indicator",
    category: "reui-accordion",
    tags: ["reui","accordion"],
    component: lazy(() =>
      import("./src/patterns/accordion/c-accordion-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-accordion-6",
    name: "Advanced accordion with custom icons and badges",
    description: "Advanced accordion with custom icons and badges",
    category: "reui-accordion",
    tags: ["reui","accordion"],
    component: lazy(() =>
      import("./src/patterns/accordion/c-accordion-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-accordion-8",
    name: "Nested accordion example with bordered items",
    description: "Nested accordion example with bordered items",
    category: "reui-accordion",
    tags: ["reui","accordion"],
    component: lazy(() =>
      import("./src/patterns/accordion/c-accordion-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-accordion-9",
    name: "User list accordion with avatars and role indicators",
    description: "User list accordion with avatars and role indicators",
    category: "reui-accordion",
    tags: ["reui","accordion"],
    component: lazy(() =>
      import("./src/patterns/accordion/c-accordion-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-12",
    name: "Alert integrated within a Frame with reset borders",
    description: "Alert integrated within a Frame with reset borders",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-14",
    name: "Alert with actions integrated within a Frame",
    description: "Alert with actions integrated within a Frame",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-11",
    name: "Alert with description and action buttons",
    description: "Alert with description and action buttons",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-2",
    name: "Alert with icon",
    description: "Alert with icon",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-10",
    name: "Alert with icon and action buttons",
    description: "Alert with icon and action buttons",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-3",
    name: "Alert with icon and action buttons",
    description: "Alert with icon and action buttons",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-1",
    name: "Basic alert",
    description: "Basic alert",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-4",
    name: "Destructive alert with icon and action buttons",
    description: "Destructive alert with icon and action buttons",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-8",
    name: "Error alert",
    description: "Error alert",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-18",
    name: "Feature discovery alert",
    description: "Feature discovery alert",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-18").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-5",
    name: "Info alert with icon and action buttons",
    description: "Info alert with icon and action buttons",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-9",
    name: "Invert alert",
    description: "Invert alert",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-15",
    name: "Inverted alert variant",
    description: "Inverted alert variant",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-17",
    name: "Service status summary stacked within a frame",
    description: "Service status summary stacked within a frame",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-13",
    name: "Stacked alerts within a Frame",
    description: "Stacked alerts within a Frame",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-6",
    name: "Success alert",
    description: "Success alert",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-16",
    name: "Urgent billing notice",
    description: "Urgent billing notice",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-19",
    name: "User message notification alert",
    description: "User message notification alert",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-19").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-20",
    name: "User message notification alert",
    description: "User message notification alert",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-20").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-7",
    name: "Warning alert",
    description: "Warning alert",
    category: "reui-alert",
    tags: ["reui","alert"],
    component: lazy(() =>
      import("./src/patterns/alert/c-alert-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-dialog-8",
    name: "Account deactivation confirmation",
    description: "Account deactivation confirmation",
    category: "reui-alert-dialog",
    tags: ["reui","alert-dialog"],
    component: lazy(() =>
      import("./src/patterns/alert-dialog/c-alert-dialog-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-dialog-14",
    name: "Advanced security audit confirmation",
    description: "Advanced security audit confirmation",
    category: "reui-alert-dialog",
    tags: ["reui","alert-dialog"],
    component: lazy(() =>
      import("./src/patterns/alert-dialog/c-alert-dialog-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-dialog-6",
    name: "Alert dialog nested within a standard Dialog component",
    description: "Alert dialog nested within a standard Dialog component",
    category: "reui-alert-dialog",
    tags: ["reui","alert-dialog"],
    component: lazy(() =>
      import("./src/patterns/alert-dialog/c-alert-dialog-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-dialog-3",
    name: "Alert dialog with icon",
    description: "Alert dialog with icon",
    category: "reui-alert-dialog",
    tags: ["reui","alert-dialog"],
    component: lazy(() =>
      import("./src/patterns/alert-dialog/c-alert-dialog-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-dialog-1",
    name: "Basic alert dialog with title, description, and action buttons",
    description: "Basic alert dialog with title, description, and action buttons",
    category: "reui-alert-dialog",
    tags: ["reui","alert-dialog"],
    component: lazy(() =>
      import("./src/patterns/alert-dialog/c-alert-dialog-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-dialog-12",
    name: "Billing warning for expired subscriptions or failed payments",
    description: "Billing warning for expired subscriptions or failed payments",
    category: "reui-alert-dialog",
    tags: ["reui","alert-dialog"],
    component: lazy(() =>
      import("./src/patterns/alert-dialog/c-alert-dialog-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-dialog-10",
    name: "Confirmation for successful e-ticket registration",
    description: "Confirmation for successful e-ticket registration",
    category: "reui-alert-dialog",
    tags: ["reui","alert-dialog"],
    component: lazy(() =>
      import("./src/patterns/alert-dialog/c-alert-dialog-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-dialog-5",
    name: "Destructive alert dialog for irreversible actions like deletion",
    description: "Destructive alert dialog for irreversible actions like deletion",
    category: "reui-alert-dialog",
    tags: ["reui","alert-dialog"],
    component: lazy(() =>
      import("./src/patterns/alert-dialog/c-alert-dialog-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-dialog-13",
    name: "Logout confirmation dialog",
    description: "Logout confirmation dialog",
    category: "reui-alert-dialog",
    tags: ["reui","alert-dialog"],
    component: lazy(() =>
      import("./src/patterns/alert-dialog/c-alert-dialog-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-dialog-2",
    name: "Small size alert dialog for quick confirmations",
    description: "Small size alert dialog for quick confirmations",
    category: "reui-alert-dialog",
    tags: ["reui","alert-dialog"],
    component: lazy(() =>
      import("./src/patterns/alert-dialog/c-alert-dialog-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-dialog-4",
    name: "Small size alert dialog with media (icon)",
    description: "Small size alert dialog with media (icon)",
    category: "reui-alert-dialog",
    tags: ["reui","alert-dialog"],
    component: lazy(() =>
      import("./src/patterns/alert-dialog/c-alert-dialog-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-dialog-11",
    name: "System update notification requiring application restart",
    description: "System update notification requiring application restart",
    category: "reui-alert-dialog",
    tags: ["reui","alert-dialog"],
    component: lazy(() =>
      import("./src/patterns/alert-dialog/c-alert-dialog-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-dialog-7",
    name: "Task success confirmation",
    description: "Task success confirmation",
    category: "reui-alert-dialog",
    tags: ["reui","alert-dialog"],
    component: lazy(() =>
      import("./src/patterns/alert-dialog/c-alert-dialog-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-alert-dialog-9",
    name: "Warning for unsaved changes when navigating away",
    description: "Warning for unsaved changes when navigating away",
    category: "reui-alert-dialog",
    tags: ["reui","alert-dialog"],
    component: lazy(() =>
      import("./src/patterns/alert-dialog/c-alert-dialog-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-aspect-ratio-3",
    name: "1:1 square aspect ratio",
    description: "1:1 square aspect ratio",
    category: "reui-aspect-ratio",
    tags: ["reui","aspect-ratio"],
    component: lazy(() =>
      import("./src/patterns/aspect-ratio/c-aspect-ratio-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-aspect-ratio-8",
    name: "16:10 computer monitor aspect ratio",
    description: "16:10 computer monitor aspect ratio",
    category: "reui-aspect-ratio",
    tags: ["reui","aspect-ratio"],
    component: lazy(() =>
      import("./src/patterns/aspect-ratio/c-aspect-ratio-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-aspect-ratio-1",
    name: "16:9 widescreen aspect ratio",
    description: "16:9 widescreen aspect ratio",
    category: "reui-aspect-ratio",
    tags: ["reui","aspect-ratio"],
    component: lazy(() =>
      import("./src/patterns/aspect-ratio/c-aspect-ratio-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-aspect-ratio-4",
    name: "21:9 ultrawide aspect ratio",
    description: "21:9 ultrawide aspect ratio",
    category: "reui-aspect-ratio",
    tags: ["reui","aspect-ratio"],
    component: lazy(() =>
      import("./src/patterns/aspect-ratio/c-aspect-ratio-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-aspect-ratio-6",
    name: "3:2 classic photography aspect ratio",
    description: "3:2 classic photography aspect ratio",
    category: "reui-aspect-ratio",
    tags: ["reui","aspect-ratio"],
    component: lazy(() =>
      import("./src/patterns/aspect-ratio/c-aspect-ratio-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-aspect-ratio-2",
    name: "4:3 standard aspect ratio",
    description: "4:3 standard aspect ratio",
    category: "reui-aspect-ratio",
    tags: ["reui","aspect-ratio"],
    component: lazy(() =>
      import("./src/patterns/aspect-ratio/c-aspect-ratio-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-aspect-ratio-7",
    name: "4:5 social media portrait aspect ratio",
    description: "4:5 social media portrait aspect ratio",
    category: "reui-aspect-ratio",
    tags: ["reui","aspect-ratio"],
    component: lazy(() =>
      import("./src/patterns/aspect-ratio/c-aspect-ratio-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-aspect-ratio-5",
    name: "9:16 portrait aspect ratio",
    description: "9:16 portrait aspect ratio",
    category: "reui-aspect-ratio",
    tags: ["reui","aspect-ratio"],
    component: lazy(() =>
      import("./src/patterns/aspect-ratio/c-aspect-ratio-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-autocomplete-3",
    name: "Auto highlight option as you type",
    description: "Auto highlight option as you type",
    category: "reui-autocomplete",
    tags: ["reui","autocomplete"],
    component: lazy(() =>
      import("./src/patterns/autocomplete/c-autocomplete-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-autocomplete-1",
    name: "Basic autocomplete control",
    description: "Basic autocomplete control",
    category: "reui-autocomplete",
    tags: ["reui","autocomplete"],
    component: lazy(() =>
      import("./src/patterns/autocomplete/c-autocomplete-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-autocomplete-4",
    name: "Control with label",
    description: "Control with label",
    category: "reui-autocomplete",
    tags: ["reui","autocomplete"],
    component: lazy(() =>
      import("./src/patterns/autocomplete/c-autocomplete-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-autocomplete-2",
    name: "Disabled state",
    description: "Disabled state",
    category: "reui-autocomplete",
    tags: ["reui","autocomplete"],
    component: lazy(() =>
      import("./src/patterns/autocomplete/c-autocomplete-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-autocomplete-12",
    name: "Form integration",
    description: "Form integration",
    category: "reui-autocomplete",
    tags: ["reui","autocomplete"],
    component: lazy(() =>
      import("./src/patterns/autocomplete/c-autocomplete-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-autocomplete-11",
    name: "Large autocomplete",
    description: "Large autocomplete",
    category: "reui-autocomplete",
    tags: ["reui","autocomplete"],
    component: lazy(() =>
      import("./src/patterns/autocomplete/c-autocomplete-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-autocomplete-10",
    name: "Small autocomplete",
    description: "Small autocomplete",
    category: "reui-autocomplete",
    tags: ["reui","autocomplete"],
    component: lazy(() =>
      import("./src/patterns/autocomplete/c-autocomplete-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-autocomplete-7",
    name: "With clear and trigger buttons",
    description: "With clear and trigger buttons",
    category: "reui-autocomplete",
    tags: ["reui","autocomplete"],
    component: lazy(() =>
      import("./src/patterns/autocomplete/c-autocomplete-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-autocomplete-5",
    name: "With clear button",
    description: "With clear button",
    category: "reui-autocomplete",
    tags: ["reui","autocomplete"],
    component: lazy(() =>
      import("./src/patterns/autocomplete/c-autocomplete-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-autocomplete-8",
    name: "With groups and labels",
    description: "With groups and labels",
    category: "reui-autocomplete",
    tags: ["reui","autocomplete"],
    component: lazy(() =>
      import("./src/patterns/autocomplete/c-autocomplete-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-autocomplete-9",
    name: "With search results",
    description: "With search results",
    category: "reui-autocomplete",
    tags: ["reui","autocomplete"],
    component: lazy(() =>
      import("./src/patterns/autocomplete/c-autocomplete-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-autocomplete-6",
    name: "With trigger button",
    description: "With trigger button",
    category: "reui-autocomplete",
    tags: ["reui","autocomplete"],
    component: lazy(() =>
      import("./src/patterns/autocomplete/c-autocomplete-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-12",
    name: "Avatar group with an icon count",
    description: "Avatar group with an icon count",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-23",
    name: "Avatar group with hover effect",
    description: "Avatar group with hover effect",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-23").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-24",
    name: "Avatar group with hover effect and tooltips",
    description: "Avatar group with hover effect and tooltips",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-24").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-22",
    name: "Avatar group with hover tooltips and lift effect",
    description: "Avatar group with hover tooltips and lift effect",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-22").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-29",
    name: "Avatar group with icon count and button",
    description: "Avatar group with icon count and button",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-29").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-11",
    name: "Avatar group with numerical count",
    description: "Avatar group with numerical count",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-25",
    name: "Avatar group with numerical count",
    description: "Avatar group with numerical count",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-25").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-18",
    name: "Avatar group with online status on one",
    description: "Avatar group with online status on one",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-18").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-28",
    name: "Avatar inside an empty state example",
    description: "Avatar inside an empty state example",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-28").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-19",
    name: "Avatar inside small outline button",
    description: "Avatar inside small outline button",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-19").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-20",
    name: "Avatar social proof with text label",
    description: "Avatar social proof with text label",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-20").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-13",
    name: "Avatar with a distinct border ring",
    description: "Avatar with a distinct border ring",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-15",
    name: "Avatar with a solid background color fallback",
    description: "Avatar with a solid background color fallback",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-6",
    name: "Avatar with an online status badge",
    description: "Avatar with an online status badge",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-7",
    name: "Avatar with badge icon",
    description: "Avatar with badge icon",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-31",
    name: "Avatar with custom badge",
    description: "Avatar with custom badge",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-31").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-8",
    name: "Avatar with different badge positions",
    description: "Avatar with different badge positions",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-9",
    name: "Avatar with different badge positions",
    description: "Avatar with different badge positions",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-2",
    name: "Avatar with fallback",
    description: "Avatar with fallback",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-33",
    name: "Avatar with gradient animated ring",
    description: "Avatar with gradient animated ring",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-33").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-17",
    name: "Avatar with grayscale image filter",
    description: "Avatar with grayscale image filter",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-14",
    name: "Avatar with light background color fallback",
    description: "Avatar with light background color fallback",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-30",
    name: "Avatar with loading state demonstration",
    description: "Avatar with loading state demonstration",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-30").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-34",
    name: "Avatar with multiple badges",
    description: "Avatar with multiple badges",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-34").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-32",
    name: "Avatar with ring animation",
    description: "Avatar with ring animation",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-32").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-16",
    name: "Avatar with user details and badge",
    description: "Avatar with user details and badge",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-5",
    name: "Avatars with custom sizes",
    description: "Avatars with custom sizes",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-4",
    name: "Avatars with different border radiuses",
    description: "Avatars with different border radiuses",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-3",
    name: "Avatars with different sizes",
    description: "Avatars with different sizes",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-1",
    name: "Basic avatar",
    description: "Basic avatar",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-10",
    name: "Basic avatar group",
    description: "Basic avatar group",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-35",
    name: "Compact avatar dropdown menu",
    description: "Compact avatar dropdown menu",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-35").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-21",
    name: "Compact social proof with initials",
    description: "Compact social proof with initials",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-21").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-27",
    name: "Pilled small button with avatar",
    description: "Pilled small button with avatar",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-27").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-avatar-26",
    name: "Pilled small outline button with avatar",
    description: "Pilled small outline button with avatar",
    category: "reui-avatar",
    tags: ["reui","avatar"],
    component: lazy(() =>
      import("./src/patterns/avatar/c-avatar-26").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-23",
    name: "Badge rendered as a link",
    description: "Badge rendered as a link",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-23").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-18",
    name: "Badge size variations",
    description: "Badge size variations",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-18").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-21",
    name: "Badge with a dismiss button",
    description: "Badge with a dismiss button",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-21").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-22",
    name: "Badge with a status dot",
    description: "Badge with a status dot",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-22").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-20",
    name: "Badge with an icon",
    description: "Badge with an icon",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-20").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-24",
    name: "Badge with avatar",
    description: "Badge with avatar",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-24").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-25",
    name: "Badge with flag image",
    description: "Badge with flag image",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-25").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-19",
    name: "Badge with full radius (radius=\"full\")",
    description: "Badge with full radius (radius=\"full\")",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-19").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-1",
    name: "Default badge",
    description: "Default badge",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-3",
    name: "Destructive badge",
    description: "Destructive badge",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-14",
    name: "Destructive light badge",
    description: "Destructive light badge",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-9",
    name: "Destructive outline badge",
    description: "Destructive outline badge",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-5",
    name: "Info badge",
    description: "Info badge",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-16",
    name: "Info light badge",
    description: "Info light badge",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-10",
    name: "Info outline badge",
    description: "Info outline badge",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-7",
    name: "Outline badge",
    description: "Outline badge",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-13",
    name: "Primary light badge",
    description: "Primary light badge",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-8",
    name: "Primary outline badge",
    description: "Primary outline badge",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-2",
    name: "Secondary badge",
    description: "Secondary badge",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-4",
    name: "Success badge",
    description: "Success badge",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-15",
    name: "Success light badge",
    description: "Success light badge",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-11",
    name: "Success outline badge",
    description: "Success outline badge",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-6",
    name: "Warning badge",
    description: "Warning badge",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-17",
    name: "Warning light badge",
    description: "Warning light badge",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-badge-12",
    name: "Warning outline badge",
    description: "Warning outline badge",
    category: "reui-badge",
    tags: ["reui","badge"],
    component: lazy(() =>
      import("./src/patterns/badge/c-badge-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-breadcrumb-1",
    name: "Basic breadcrumb",
    description: "Basic breadcrumb",
    category: "reui-breadcrumb",
    tags: ["reui","breadcrumb"],
    component: lazy(() =>
      import("./src/patterns/breadcrumb/c-breadcrumb-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-breadcrumb-9",
    name: "Breadcrumb inside card",
    description: "Breadcrumb inside card",
    category: "reui-breadcrumb",
    tags: ["reui","breadcrumb"],
    component: lazy(() =>
      import("./src/patterns/breadcrumb/c-breadcrumb-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-breadcrumb-11",
    name: "Breadcrumb items containing badge with count",
    description: "Breadcrumb items containing badge with count",
    category: "reui-breadcrumb",
    tags: ["reui","breadcrumb"],
    component: lazy(() =>
      import("./src/patterns/breadcrumb/c-breadcrumb-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-breadcrumb-7",
    name: "Breadcrumb items with avatars",
    description: "Breadcrumb items with avatars",
    category: "reui-breadcrumb",
    tags: ["reui","breadcrumb"],
    component: lazy(() =>
      import("./src/patterns/breadcrumb/c-breadcrumb-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-breadcrumb-12",
    name: "Breadcrumb starting with home icon item",
    description: "Breadcrumb starting with home icon item",
    category: "reui-breadcrumb",
    tags: ["reui","breadcrumb"],
    component: lazy(() =>
      import("./src/patterns/breadcrumb/c-breadcrumb-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-breadcrumb-13",
    name: "Breadcrumb with a custom separator",
    description: "Breadcrumb with a custom separator",
    category: "reui-breadcrumb",
    tags: ["reui","breadcrumb"],
    component: lazy(() =>
      import("./src/patterns/breadcrumb/c-breadcrumb-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-breadcrumb-4",
    name: "Breadcrumb with a custom slash separator",
    description: "Breadcrumb with a custom slash separator",
    category: "reui-breadcrumb",
    tags: ["reui","breadcrumb"],
    component: lazy(() =>
      import("./src/patterns/breadcrumb/c-breadcrumb-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-breadcrumb-8",
    name: "Breadcrumb with double chevron separators",
    description: "Breadcrumb with double chevron separators",
    category: "reui-breadcrumb",
    tags: ["reui","breadcrumb"],
    component: lazy(() =>
      import("./src/patterns/breadcrumb/c-breadcrumb-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-breadcrumb-2",
    name: "Breadcrumb with dropdown menu",
    description: "Breadcrumb with dropdown menu",
    category: "reui-breadcrumb",
    tags: ["reui","breadcrumb"],
    component: lazy(() =>
      import("./src/patterns/breadcrumb/c-breadcrumb-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-breadcrumb-6",
    name: "Breadcrumb with ellipsis for long paths",
    description: "Breadcrumb with ellipsis for long paths",
    category: "reui-breadcrumb",
    tags: ["reui","breadcrumb"],
    component: lazy(() =>
      import("./src/patterns/breadcrumb/c-breadcrumb-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-breadcrumb-5",
    name: "Breadcrumb with icons for each item",
    description: "Breadcrumb with icons for each item",
    category: "reui-breadcrumb",
    tags: ["reui","breadcrumb"],
    component: lazy(() =>
      import("./src/patterns/breadcrumb/c-breadcrumb-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-breadcrumb-3",
    name: "Breadcrumb with Next.js link",
    description: "Breadcrumb with Next.js link",
    category: "reui-breadcrumb",
    tags: ["reui","breadcrumb"],
    component: lazy(() =>
      import("./src/patterns/breadcrumb/c-breadcrumb-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-breadcrumb-15",
    name: "Breadcrumb with project, user and document info",
    description: "Breadcrumb with project, user and document info",
    category: "reui-breadcrumb",
    tags: ["reui","breadcrumb"],
    component: lazy(() =>
      import("./src/patterns/breadcrumb/c-breadcrumb-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-breadcrumb-14",
    name: "Button-style breadcrumb",
    description: "Button-style breadcrumb",
    category: "reui-breadcrumb",
    tags: ["reui","breadcrumb"],
    component: lazy(() =>
      import("./src/patterns/breadcrumb/c-breadcrumb-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-breadcrumb-10",
    name: "Pill-style breadcrumb inside frame",
    description: "Pill-style breadcrumb inside frame",
    category: "reui-breadcrumb",
    tags: ["reui","breadcrumb"],
    component: lazy(() =>
      import("./src/patterns/breadcrumb/c-breadcrumb-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-43",
    name: "Animated hamburger / close toggle button",
    description: "Animated hamburger / close toggle button",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-43").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-44",
    name: "Async action button with loading and success states",
    description: "Async action button with loading and success states",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-44").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-13",
    name: "Button in a loading state",
    description: "Button in a loading state",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-27",
    name: "Button rendered as a Next.js Link",
    description: "Button rendered as a Next.js Link",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-27").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-14",
    name: "Button with an icon on the left",
    description: "Button with an icon on the left",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-34",
    name: "Button with an icon on the left",
    description: "Button with an icon on the left",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-34").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-12",
    name: "Button with an icon on the right",
    description: "Button with an icon on the right",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-15",
    name: "Button with an invalid state highlight",
    description: "Button with an invalid state highlight",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-39",
    name: "Button with an unread badge",
    description: "Button with an unread badge",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-39").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-55",
    name: "Button with avatar",
    description: "Button with avatar",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-55").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-40",
    name: "Button with icon, label, and shortcut keys",
    description: "Button with icon, label, and shortcut keys",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-40").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-46",
    name: "Button with status dot badge",
    description: "Button with status dot badge",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-46").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-41",
    name: "Copy button with feedback",
    description: "Copy button with feedback",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-41").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-1",
    name: "Default button",
    description: "Default button",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-5",
    name: "Destructive button",
    description: "Destructive button",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-22",
    name: "Destructive button with an icon on the left",
    description: "Destructive button with an icon on the left",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-22").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-23",
    name: "Destructive button with an icon on the right",
    description: "Destructive button with an icon on the right",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-23").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-10",
    name: "Disabled button",
    description: "Disabled button",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-51",
    name: "Expanding button from icon to label",
    description: "Expanding button from icon to label",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-51").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-7",
    name: "Extra small button",
    description: "Extra small button",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-24",
    name: "Extra small icon button",
    description: "Extra small icon button",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-24").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-4",
    name: "Ghost button",
    description: "Ghost button",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-47",
    name: "Ghost button with a status badge",
    description: "Ghost button with a status badge",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-47").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-20",
    name: "Ghost button with an icon on the left",
    description: "Ghost button with an icon on the left",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-20").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-21",
    name: "Ghost button with an icon on the right",
    description: "Ghost button with an icon on the right",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-21").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-33",
    name: "Ghost button with an invalid state",
    description: "Ghost button with an invalid state",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-33").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-35",
    name: "Ghost button with more/less toggle",
    description: "Ghost button with more/less toggle",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-35").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-49",
    name: "Go back link button",
    description: "Go back link button",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-49").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-50",
    name: "Go back link button with animation",
    description: "Go back link button with animation",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-50").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-11",
    name: "Icon button",
    description: "Icon button",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-48",
    name: "Icon button with notification badge",
    description: "Icon button with notification badge",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-48").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-42",
    name: "Icon-only copy button with feedback",
    description: "Icon-only copy button with feedback",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-42").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-26",
    name: "Large (lg) icon-only button",
    description: "Large (lg) icon-only button",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-26").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-9",
    name: "Large button",
    description: "Large button",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-30",
    name: "Large button with an icon on the left",
    description: "Large button with an icon on the left",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-30").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-31",
    name: "Large button with an icon on the right",
    description: "Large button with an icon on the right",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-31").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-6",
    name: "Link button variant",
    description: "Link button variant",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-28",
    name: "Link button with an icon on the left",
    description: "Link button with an icon on the left",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-28").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-29",
    name: "Link button with an icon on the right",
    description: "Link button with an icon on the right",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-29").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-52",
    name: "Multi-line button with icon, title & description",
    description: "Multi-line button with icon, title & description",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-52").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-3",
    name: "Outline button",
    description: "Outline button",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-18",
    name: "Outline button with an icon on the left",
    description: "Outline button with an icon on the left",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-18").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-19",
    name: "Outline button with an icon on the right",
    description: "Outline button with an icon on the right",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-19").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-32",
    name: "Outline button with an invalid state",
    description: "Outline button with an invalid state",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-32").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-56",
    name: "Outline button with avatar",
    description: "Outline button with avatar",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-56").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-45",
    name: "Outline button with inline count badge",
    description: "Outline button with inline count badge",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-45").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-37",
    name: "Outline like button with count",
    description: "Outline like button with count",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-37").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-2",
    name: "Secondary button",
    description: "Secondary button",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-16",
    name: "Secondary button with an icon on the left",
    description: "Secondary button with an icon on the left",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-17",
    name: "Secondary button with an icon on the right",
    description: "Secondary button with an icon on the right",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-54",
    name: "Shortcut Tooltip Button (Kbd hints)",
    description: "Shortcut Tooltip Button (Kbd hints)",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-54").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-53",
    name: "Sliding Icon Button (Hover reveal)",
    description: "Sliding Icon Button (Hover reveal)",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-53").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-8",
    name: "Small button",
    description: "Small button",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-57",
    name: "Small button with avatar",
    description: "Small button with avatar",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-57").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-25",
    name: "Small icon button",
    description: "Small icon button",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-25").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-58",
    name: "Small outline button with avatar",
    description: "Small outline button with avatar",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-58").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-60",
    name: "Social icon-only buttons with Remix icons",
    description: "Social icon-only buttons with Remix icons",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-60").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-59",
    name: "Social login buttons with Remix icons",
    description: "Social login buttons with Remix icons",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-59").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-36",
    name: "Social login buttons with Remix Icons",
    description: "Social login buttons with Remix Icons",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-36").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-38",
    name: "Star button with count",
    description: "Star button with count",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-38").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-61",
    name: "Theme toggle button with animated moon and sun icons",
    description: "Theme toggle button with animated moon and sun icons",
    category: "reui-button",
    tags: ["reui","button"],
    component: lazy(() =>
      import("./src/patterns/button/c-button-61").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-30",
    name: "Active state button group with count",
    description: "Active state button group with count",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-30").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-18",
    name: "Advanced git toolbar with branch selection and split commit button",
    description: "Advanced git toolbar with branch selection and split commit button",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-18").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-57",
    name: "Agent mode selector with credit cap dropdown",
    description: "Agent mode selector with credit cap dropdown",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-57").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-54",
    name: "API service environment and version selectors",
    description: "API service environment and version selectors",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-54").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-56",
    name: "Attachment button group with download action",
    description: "Attachment button group with download action",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-56").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-22",
    name: "Basic button group with disabled button",
    description: "Basic button group with disabled button",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-22").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-1",
    name: "Basic button group with two buttons",
    description: "Basic button group with two buttons",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-23",
    name: "Button group buttons with separators",
    description: "Button group buttons with separators",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-23").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-12",
    name: "Button group for editor text alignment controls",
    description: "Button group for editor text alignment controls",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-8",
    name: "Button group styled as a like button with a counter",
    description: "Button group styled as a like button with a counter",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-10",
    name: "Button group used for standard pagination",
    description: "Button group used for standard pagination",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-6",
    name: "Button group using icons for visual actions",
    description: "Button group using icons for visual actions",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-2",
    name: "Button group with button followed by input",
    description: "Button group with button followed by input",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-3",
    name: "Button group with buttons and badge",
    description: "Button group with buttons and badge",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-17",
    name: "Button group with comprehensive action menu",
    description: "Button group with comprehensive action menu",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-4",
    name: "Button group with dropdown menu",
    description: "Button group with dropdown menu",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-19",
    name: "Button group with dropdown menu and input group",
    description: "Button group with dropdown menu and input group",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-19").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-21",
    name: "Button group with dropdown menu and input group",
    description: "Button group with dropdown menu and input group",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-21").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-32",
    name: "Button group with dropdown menu and view toggle",
    description: "Button group with dropdown menu and view toggle",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-32").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-29",
    name: "Button group with follower count",
    description: "Button group with follower count",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-29").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-20",
    name: "Button group with input group and button",
    description: "Button group with input group and button",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-20").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-33",
    name: "Button group with select controls",
    description: "Button group with select controls",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-33").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-27",
    name: "Button group with select status addon",
    description: "Button group with select status addon",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-27").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-26",
    name: "Button group with user selection select",
    description: "Button group with user selection select",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-26").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-43",
    name: "Buy sell hold toggle group",
    description: "Buy sell hold toggle group",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-43").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-46",
    name: "Compact time interval selector",
    description: "Compact time interval selector",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-46").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-7",
    name: "Dropdown menu with status indicator",
    description: "Dropdown menu with status indicator",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-45",
    name: "Environment switcher with indicator",
    description: "Environment switcher with indicator",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-45").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-31",
    name: "Horizontal button group with primary and secondary labels",
    description: "Horizontal button group with primary and secondary labels",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-31").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-38",
    name: "Media player controls button group",
    description: "Media player controls button group",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-38").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-41",
    name: "Model selector with tier badges",
    description: "Model selector with tier badges",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-41").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-9",
    name: "Nested button groups for complex action sets",
    description: "Nested button groups for complex action sets",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-14",
    name: "Nested vertical button group for complex tool palettes",
    description: "Nested vertical button group for complex tool palettes",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-51",
    name: "New button with create dropdown",
    description: "New button with create dropdown",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-51").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-35",
    name: "Pagination button group",
    description: "Pagination button group",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-35").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-11",
    name: "Pagination split into page numbers and navigation arrows",
    description: "Pagination split into page numbers and navigation arrows",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-55",
    name: "Payout release controls with amount context",
    description: "Payout release controls with amount context",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-55").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-44",
    name: "Pipeline stage mover with dropdown",
    description: "Pipeline stage mover with dropdown",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-44").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-53",
    name: "Publish controls with split button and overflow",
    description: "Publish controls with split button and overflow",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-53").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-25",
    name: "Rating scale using numerical buttons",
    description: "Rating scale using numerical buttons",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-25").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-52",
    name: "Refresh share and export dropdown",
    description: "Refresh share and export dropdown",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-52").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-47",
    name: "Review actions split button",
    description: "Review actions split button",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-47").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-16",
    name: "Search input with filter menu and clear button",
    description: "Search input with filter menu and clear button",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-34",
    name: "Segmented control with dropdown inside button group",
    description: "Segmented control with dropdown inside button group",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-34").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-42",
    name: "Segmented order type selector",
    description: "Segmented order type selector",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-42").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-39",
    name: "Split button with dropdown trigger",
    description: "Split button with dropdown trigger",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-39").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-15",
    name: "Star button group with count and dropdown",
    description: "Star button group with count and dropdown",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-5",
    name: "Team activity and collaboration group",
    description: "Team activity and collaboration group",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-50",
    name: "Toolbar filter sort and more",
    description: "Toolbar filter sort and more",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-50").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-48",
    name: "Toolbar filter with export and view toggle",
    description: "Toolbar filter with export and view toggle",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-48").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-40",
    name: "Vertical button group",
    description: "Vertical button group",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-40").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-13",
    name: "Vertical button group orientation",
    description: "Vertical button group orientation",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-49",
    name: "Vertical nav links with icons",
    description: "Vertical nav links with icons",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-49").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-36",
    name: "View switcher button group",
    description: "View switcher button group",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-36").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-24",
    name: "View switcher for dashboard layouts",
    description: "View switcher for dashboard layouts",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-24").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-28",
    name: "Volume controller with plus/minus actions",
    description: "Volume controller with plus/minus actions",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-28").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-button-group-37",
    name: "Zoom controls button group",
    description: "Zoom controls button group",
    category: "reui-button-group",
    tags: ["reui","button-group"],
    component: lazy(() =>
      import("./src/patterns/button-group/c-button-group-37").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-19",
    name: "Appointment calendar",
    description: "Appointment calendar",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-19").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-1",
    name: "Basic calendar",
    description: "Basic calendar",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-27",
    name: "Calendar with date and appointment picker",
    description: "Calendar with date and appointment picker",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-27").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-30",
    name: "Calendar with date and time range picker",
    description: "Calendar with date and time range picker",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-30").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-24",
    name: "Calendar with date picker",
    description: "Calendar with date picker",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-24").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-28",
    name: "Calendar with date picker and presets",
    description: "Calendar with date picker and presets",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-28").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-26",
    name: "Calendar with date picker and year view",
    description: "Calendar with date picker and year view",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-26").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-25",
    name: "Calendar with date range picker",
    description: "Calendar with date range picker",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-25").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-22",
    name: "Calendar with event list",
    description: "Calendar with event list",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-22").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-15",
    name: "Calendar with presets",
    description: "Calendar with presets",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-18",
    name: "Calendar with presets",
    description: "Calendar with presets",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-18").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-17",
    name: "Calendar with pricing",
    description: "Calendar with pricing",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-11",
    name: "Current month button",
    description: "Current month button",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-13",
    name: "Custom navigation with year view",
    description: "Custom navigation with year view",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-5",
    name: "Custom select day style",
    description: "Custom select day style",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-6",
    name: "Custom select range style",
    description: "Custom select range style",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-3",
    name: "Disabled dates",
    description: "Disabled dates",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-20",
    name: "Display 2 months",
    description: "Display 2 months",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-20").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-21",
    name: "Display 2 months with range picker",
    description: "Display 2 months with range picker",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-21").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-10",
    name: "Display week numbers",
    description: "Display week numbers",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-23",
    name: "Localize calendar",
    description: "Localize calendar",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-23").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-8",
    name: "Month and year selection",
    description: "Month and year selection",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-4",
    name: "Multiple day selection",
    description: "Multiple day selection",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-14",
    name: "Preset time selection",
    description: "Preset time selection",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-2",
    name: "Range calendar",
    description: "Range calendar",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-29",
    name: "Range calendar with date picker and presets",
    description: "Range calendar with date picker and presets",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-29").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-16",
    name: "Range calendar with presets",
    description: "Range calendar with presets",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-7",
    name: "Right navigation",
    description: "Right navigation",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-12",
    name: "Today button",
    description: "Today button",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-calendar-9",
    name: "Year select with navigation",
    description: "Year select with navigation",
    category: "reui-calendar",
    tags: ["reui","calendar"],
    component: lazy(() =>
      import("./src/patterns/calendar/c-calendar-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-card-12",
    name: "Advanced clean login form card",
    description: "Advanced clean login form card",
    category: "reui-card",
    tags: ["reui","card"],
    component: lazy(() =>
      import("./src/patterns/card/c-card-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-card-1",
    name: "Basic card",
    description: "Basic card",
    category: "reui-card",
    tags: ["reui","card"],
    component: lazy(() =>
      import("./src/patterns/card/c-card-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-card-2",
    name: "Card header with border",
    description: "Card header with border",
    category: "reui-card",
    tags: ["reui","card"],
    component: lazy(() =>
      import("./src/patterns/card/c-card-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-card-3",
    name: "Card with border separation",
    description: "Card with border separation",
    category: "reui-card",
    tags: ["reui","card"],
    component: lazy(() =>
      import("./src/patterns/card/c-card-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-card-6",
    name: "Card with dropdown menu",
    description: "Card with dropdown menu",
    category: "reui-card",
    tags: ["reui","card"],
    component: lazy(() =>
      import("./src/patterns/card/c-card-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-card-9",
    name: "Card with full image",
    description: "Card with full image",
    category: "reui-card",
    tags: ["reui","card"],
    component: lazy(() =>
      import("./src/patterns/card/c-card-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-card-4",
    name: "Card with header and footer",
    description: "Card with header and footer",
    category: "reui-card",
    tags: ["reui","card"],
    component: lazy(() =>
      import("./src/patterns/card/c-card-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-card-16",
    name: "Card with header badge and actions",
    description: "Card with header badge and actions",
    category: "reui-card",
    tags: ["reui","card"],
    component: lazy(() =>
      import("./src/patterns/card/c-card-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-card-18",
    name: "Card with header label and link",
    description: "Card with header label and link",
    category: "reui-card",
    tags: ["reui","card"],
    component: lazy(() =>
      import("./src/patterns/card/c-card-18").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-card-17",
    name: "Card with icon, title and link",
    description: "Card with icon, title and link",
    category: "reui-card",
    tags: ["reui","card"],
    component: lazy(() =>
      import("./src/patterns/card/c-card-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-card-7",
    name: "Card with image",
    description: "Card with image",
    category: "reui-card",
    tags: ["reui","card"],
    component: lazy(() =>
      import("./src/patterns/card/c-card-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-card-8",
    name: "Card with image scale hover effect",
    description: "Card with image scale hover effect",
    category: "reui-card",
    tags: ["reui","card"],
    component: lazy(() =>
      import("./src/patterns/card/c-card-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-card-5",
    name: "Card with link",
    description: "Card with link",
    category: "reui-card",
    tags: ["reui","card"],
    component: lazy(() =>
      import("./src/patterns/card/c-card-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-card-11",
    name: "Card with stacked depth effect",
    description: "Card with stacked depth effect",
    category: "reui-card",
    tags: ["reui","card"],
    component: lazy(() =>
      import("./src/patterns/card/c-card-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-card-14",
    name: "Deployment status summary card",
    description: "Deployment status summary card",
    category: "reui-card",
    tags: ["reui","card"],
    component: lazy(() =>
      import("./src/patterns/card/c-card-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-card-13",
    name: "Expandable billing usage card",
    description: "Expandable billing usage card",
    category: "reui-card",
    tags: ["reui","card"],
    component: lazy(() =>
      import("./src/patterns/card/c-card-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-card-10",
    name: "Full card with image and shadow fade effect",
    description: "Full card with image and shadow fade effect",
    category: "reui-card",
    tags: ["reui","card"],
    component: lazy(() =>
      import("./src/patterns/card/c-card-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-card-15",
    name: "Stat card with trend and overflow menu",
    description: "Stat card with trend and overflow menu",
    category: "reui-card",
    tags: ["reui","card"],
    component: lazy(() =>
      import("./src/patterns/card/c-card-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-carousel-1",
    name: "Basic carousel with single item",
    description: "Basic carousel with single item",
    category: "reui-carousel",
    tags: ["reui","carousel"],
    component: lazy(() =>
      import("./src/patterns/carousel/c-carousel-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-carousel-5",
    name: "Carousel with autoplay plugin",
    description: "Carousel with autoplay plugin",
    category: "reui-carousel",
    tags: ["reui","carousel"],
    component: lazy(() =>
      import("./src/patterns/carousel/c-carousel-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-carousel-6",
    name: "Carousel with centered slide alignment",
    description: "Carousel with centered slide alignment",
    category: "reui-carousel",
    tags: ["reui","carousel"],
    component: lazy(() =>
      import("./src/patterns/carousel/c-carousel-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-carousel-7",
    name: "Carousel with custom spacing",
    description: "Carousel with custom spacing",
    category: "reui-carousel",
    tags: ["reui","carousel"],
    component: lazy(() =>
      import("./src/patterns/carousel/c-carousel-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-carousel-11",
    name: "Carousel with dots navigation and content overlays",
    description: "Carousel with dots navigation and content overlays",
    category: "reui-carousel",
    tags: ["reui","carousel"],
    component: lazy(() =>
      import("./src/patterns/carousel/c-carousel-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-carousel-8",
    name: "Carousel with images and overlays",
    description: "Carousel with images and overlays",
    category: "reui-carousel",
    tags: ["reui","carousel"],
    component: lazy(() =>
      import("./src/patterns/carousel/c-carousel-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-carousel-3",
    name: "Carousel with multiple items visible",
    description: "Carousel with multiple items visible",
    category: "reui-carousel",
    tags: ["reui","carousel"],
    component: lazy(() =>
      import("./src/patterns/carousel/c-carousel-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-carousel-10",
    name: "Carousel with overlay thumbnail navigation",
    description: "Carousel with overlay thumbnail navigation",
    category: "reui-carousel",
    tags: ["reui","carousel"],
    component: lazy(() =>
      import("./src/patterns/carousel/c-carousel-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-carousel-4",
    name: "Carousel with responsive basis",
    description: "Carousel with responsive basis",
    category: "reui-carousel",
    tags: ["reui","carousel"],
    component: lazy(() =>
      import("./src/patterns/carousel/c-carousel-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-carousel-9",
    name: "Carousel with thumbnail navigation",
    description: "Carousel with thumbnail navigation",
    category: "reui-carousel",
    tags: ["reui","carousel"],
    component: lazy(() =>
      import("./src/patterns/carousel/c-carousel-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-carousel-2",
    name: "Vertical carousel orientation",
    description: "Vertical carousel orientation",
    category: "reui-carousel",
    tags: ["reui","carousel"],
    component: lazy(() =>
      import("./src/patterns/carousel/c-carousel-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-6",
    name: "3D gradient bar chart",
    description: "3D gradient bar chart",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-8",
    name: "3D isometric bar chart",
    description: "3D isometric bar chart",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-22",
    name: "Active segment donut with center label",
    description: "Active segment donut with center label",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-22").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-11",
    name: "Animated monochrome bar chart",
    description: "Animated monochrome bar chart",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-16",
    name: "Area chart with glowing dot markers",
    description: "Area chart with glowing dot markers",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-1",
    name: "Basic bar chart",
    description: "Basic bar chart",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-21",
    name: "Bug priority pie with stripe patterns",
    description: "Bug priority pie with stripe patterns",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-21").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-3",
    name: "Diagonal stripe bar chart",
    description: "Diagonal stripe bar chart",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-20",
    name: "Donut chart with center stats",
    description: "Donut chart with center stats",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-20").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-19",
    name: "Donut chart with center total",
    description: "Donut chart with center total",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-19").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-9",
    name: "Dotted and solid bar chart",
    description: "Dotted and solid bar chart",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-4",
    name: "Dotted pattern bar chart",
    description: "Dotted pattern bar chart",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-10",
    name: "Duotone gradient bar chart",
    description: "Duotone gradient bar chart",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-24",
    name: "Filled radar with glowing stroke",
    description: "Filled radar with glowing stroke",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-24").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-17",
    name: "Forecast line chart with stripe pattern zone",
    description: "Forecast line chart with stripe pattern zone",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-13",
    name: "Gradient area chart with stripe overlay",
    description: "Gradient area chart with stripe overlay",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-7",
    name: "Gradient bar chart",
    description: "Gradient bar chart",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-25",
    name: "Lighthouse scores radial with labels",
    description: "Lighthouse scores radial with labels",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-25").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-2",
    name: "Multi-dataset bar chart",
    description: "Multi-dataset bar chart",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-23",
    name: "Radar chart with gradient fill",
    description: "Radar chart with gradient fill",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-23").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-18",
    name: "Stacked area chart with crosshatch pattern fill",
    description: "Stacked area chart with crosshatch pattern fill",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-18").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-14",
    name: "Stacked area chart with dashed strokes",
    description: "Stacked area chart with dashed strokes",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-15",
    name: "Step area chart with dotted pattern fill",
    description: "Step area chart with dotted pattern fill",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-5",
    name: "Striped and solid bar chart",
    description: "Striped and solid bar chart",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-chart-12",
    name: "Vertical bar chart",
    description: "Vertical bar chart",
    category: "reui-chart",
    tags: ["reui","chart"],
    component: lazy(() =>
      import("./src/patterns/chart/c-chart-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-15",
    name: "Avatar based card checkbox",
    description: "Avatar based card checkbox",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-1",
    name: "Basic checkbox with label",
    description: "Basic checkbox with label",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-11",
    name: "Card checkbox group with icons",
    description: "Card checkbox group with icons",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-12",
    name: "Card checkbox group with icons",
    description: "Card checkbox group with icons",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-9",
    name: "Card checkbox with group",
    description: "Card checkbox with group",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-8",
    name: "Checkbox group",
    description: "Checkbox group",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-10",
    name: "Checkbox group in a frame",
    description: "Checkbox group in a frame",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-19",
    name: "Checkbox group with badge",
    description: "Checkbox group with badge",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-19").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-22",
    name: "Checkbox with feature badge",
    description: "Checkbox with feature badge",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-22").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-5",
    name: "Checkbox with label and description",
    description: "Checkbox with label and description",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-18",
    name: "Checkbox with label and tooltip info",
    description: "Checkbox with label and tooltip info",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-18").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-20",
    name: "Checkbox with label and tooltip info",
    description: "Checkbox with label and tooltip info",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-20").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-7",
    name: "Circle checkbox",
    description: "Circle checkbox",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-6",
    name: "Colored checkbox",
    description: "Colored checkbox",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-13",
    name: "Custom positioned checkbox",
    description: "Custom positioned checkbox",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-14",
    name: "Custom positioned checkbox",
    description: "Custom positioned checkbox",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-2",
    name: "Disabled checkbox",
    description: "Disabled checkbox",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-4",
    name: "Indeterminate checkbox",
    description: "Indeterminate checkbox",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-21",
    name: "Inline horizontal checkbox group",
    description: "Inline horizontal checkbox group",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-21").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-3",
    name: "Invalid checkbox",
    description: "Invalid checkbox",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-16",
    name: "Nested checkbox group",
    description: "Nested checkbox group",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-checkbox-17",
    name: "Payment method card checkbox",
    description: "Payment method card checkbox",
    category: "reui-checkbox",
    tags: ["reui","checkbox"],
    component: lazy(() =>
      import("./src/patterns/checkbox/c-checkbox-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-collapsible-1",
    name: "Basic collapsible",
    description: "Basic collapsible",
    category: "reui-collapsible",
    tags: ["reui","collapsible"],
    component: lazy(() =>
      import("./src/patterns/collapsible/c-collapsible-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-collapsible-3",
    name: "Collapsible animated card",
    description: "Collapsible animated card",
    category: "reui-collapsible",
    tags: ["reui","collapsible"],
    component: lazy(() =>
      import("./src/patterns/collapsible/c-collapsible-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-collapsible-4",
    name: "Collapsible card with bottom trigger",
    description: "Collapsible card with bottom trigger",
    category: "reui-collapsible",
    tags: ["reui","collapsible"],
    component: lazy(() =>
      import("./src/patterns/collapsible/c-collapsible-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-collapsible-5",
    name: "Collapsible form fields",
    description: "Collapsible form fields",
    category: "reui-collapsible",
    tags: ["reui","collapsible"],
    component: lazy(() =>
      import("./src/patterns/collapsible/c-collapsible-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-collapsible-6",
    name: "Collapsible frame",
    description: "Collapsible frame",
    category: "reui-collapsible",
    tags: ["reui","collapsible"],
    component: lazy(() =>
      import("./src/patterns/collapsible/c-collapsible-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-collapsible-8",
    name: "Collapsible User profile",
    description: "Collapsible User profile",
    category: "reui-collapsible",
    tags: ["reui","collapsible"],
    component: lazy(() =>
      import("./src/patterns/collapsible/c-collapsible-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-collapsible-2",
    name: "Collapsible with checkbox settings",
    description: "Collapsible with checkbox settings",
    category: "reui-collapsible",
    tags: ["reui","collapsible"],
    component: lazy(() =>
      import("./src/patterns/collapsible/c-collapsible-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-collapsible-9",
    name: "Multi-level collapsible menu",
    description: "Multi-level collapsible menu",
    category: "reui-collapsible",
    tags: ["reui","collapsible"],
    component: lazy(() =>
      import("./src/patterns/collapsible/c-collapsible-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-collapsible-7",
    name: "Nested collapsible list with actions",
    description: "Nested collapsible list with actions",
    category: "reui-collapsible",
    tags: ["reui","collapsible"],
    component: lazy(() =>
      import("./src/patterns/collapsible/c-collapsible-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-collapsible-10",
    name: "Tree view with file actions",
    description: "Tree view with file actions",
    category: "reui-collapsible",
    tags: ["reui","collapsible"],
    component: lazy(() =>
      import("./src/patterns/collapsible/c-collapsible-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-1",
    name: "A basic combobox with a list of options",
    description: "A basic combobox with a list of options",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-3",
    name: "A combobox in an invalid state",
    description: "A combobox in an invalid state",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-10",
    name: "A combobox rendered inside a popup",
    description: "A combobox rendered inside a popup",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-17",
    name: "A combobox used within a dialog",
    description: "A combobox used within a dialog",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-11",
    name: "A combobox used within a form",
    description: "A combobox used within a form",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-4",
    name: "A combobox with a clear button",
    description: "A combobox with a clear button",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-18",
    name: "A combobox with a custom trigger icon",
    description: "A combobox with a custom trigger icon",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-18").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-8",
    name: "A combobox with a large list of options",
    description: "A combobox with a large list of options",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-9",
    name: "A combobox with an icon addon",
    description: "A combobox with an icon addon",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-5",
    name: "A combobox with auto-highlight enabled",
    description: "A combobox with auto-highlight enabled",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-16",
    name: "A combobox with custom item rendering",
    description: "A combobox with custom item rendering",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-6",
    name: "A combobox with grouped options",
    description: "A combobox with grouped options",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-7",
    name: "A combobox with grouped options and separators",
    description: "A combobox with grouped options and separators",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-25",
    name: "A date selection combobox with an optional custom picker dialog",
    description: "A date selection combobox with an optional custom picker dialog",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-25").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-2",
    name: "A disabled combobox",
    description: "A disabled combobox",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-13",
    name: "A disabled multi-select combobox",
    description: "A disabled multi-select combobox",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-23",
    name: "A lead selection combobox",
    description: "A lead selection combobox",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-23").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-26",
    name: "A multi-label selection combobox with a no-label mode",
    description: "A multi-label selection combobox with a no-label mode",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-26").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-24",
    name: "A multi-member selection combobox",
    description: "A multi-member selection combobox",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-24").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-12",
    name: "A multi-select combobox",
    description: "A multi-select combobox",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-14",
    name: "A multi-select combobox in an invalid state",
    description: "A multi-select combobox in an invalid state",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-19",
    name: "A multi-select combobox with user tags",
    description: "A multi-select combobox with user tags",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-19").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-15",
    name: "A multi-select with chips that cannot be removed",
    description: "A multi-select with chips that cannot be removed",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-22",
    name: "A priority change combobox",
    description: "A priority change combobox",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-22").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-21",
    name: "A status change combobox",
    description: "A status change combobox",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-21").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-27",
    name: "A team selection combobox",
    description: "A team selection combobox",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-27").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-28",
    name: "An assignee selection combobox",
    description: "An assignee selection combobox",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-28").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-combobox-20",
    name: "Invisible combobox with member tags",
    description: "Invisible combobox with member tags",
    category: "reui-combobox",
    tags: ["reui","combobox"],
    component: lazy(() =>
      import("./src/patterns/combobox/c-combobox-20").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-command-7",
    name: "Action palette with keyboard shortcuts",
    description: "Action palette with keyboard shortcuts",
    category: "reui-command",
    tags: ["reui","command"],
    component: lazy(() =>
      import("./src/patterns/command/c-command-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-command-1",
    name: "Basic command",
    description: "Basic command",
    category: "reui-command",
    tags: ["reui","command"],
    component: lazy(() =>
      import("./src/patterns/command/c-command-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-command-3",
    name: "Command with groups",
    description: "Command with groups",
    category: "reui-command",
    tags: ["reui","command"],
    component: lazy(() =>
      import("./src/patterns/command/c-command-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-command-4",
    name: "Command with many groups",
    description: "Command with many groups",
    category: "reui-command",
    tags: ["reui","command"],
    component: lazy(() =>
      import("./src/patterns/command/c-command-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-command-8",
    name: "Command with recent and favorites sections",
    description: "Command with recent and favorites sections",
    category: "reui-command",
    tags: ["reui","command"],
    component: lazy(() =>
      import("./src/patterns/command/c-command-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-command-2",
    name: "Command with shortcuts",
    description: "Command with shortcuts",
    category: "reui-command",
    tags: ["reui","command"],
    component: lazy(() =>
      import("./src/patterns/command/c-command-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-command-5",
    name: "File search command palette",
    description: "File search command palette",
    category: "reui-command",
    tags: ["reui","command"],
    component: lazy(() =>
      import("./src/patterns/command/c-command-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-command-6",
    name: "User search command with avatars",
    description: "User search command with avatars",
    category: "reui-command",
    tags: ["reui","command"],
    component: lazy(() =>
      import("./src/patterns/command/c-command-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-context-menu-1",
    name: "Basic context menu.",
    description: "Basic context menu.",
    category: "reui-context-menu",
    tags: ["reui","context-menu"],
    component: lazy(() =>
      import("./src/patterns/context-menu/c-context-menu-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-context-menu-5",
    name: "Context menu labels and separators.",
    description: "Context menu labels and separators.",
    category: "reui-context-menu",
    tags: ["reui","context-menu"],
    component: lazy(() =>
      import("./src/patterns/context-menu/c-context-menu-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-context-menu-10",
    name: "Context menu used inside a dialog component.",
    description: "Context menu used inside a dialog component.",
    category: "reui-context-menu",
    tags: ["reui","context-menu"],
    component: lazy(() =>
      import("./src/patterns/context-menu/c-context-menu-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-context-menu-6",
    name: "Context menu with checkbox items.",
    description: "Context menu with checkbox items.",
    category: "reui-context-menu",
    tags: ["reui","context-menu"],
    component: lazy(() =>
      import("./src/patterns/context-menu/c-context-menu-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-context-menu-8",
    name: "Context menu with destructive actions.",
    description: "Context menu with destructive actions.",
    category: "reui-context-menu",
    tags: ["reui","context-menu"],
    component: lazy(() =>
      import("./src/patterns/context-menu/c-context-menu-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-context-menu-9",
    name: "Context menu with different alignment sides.",
    description: "Context menu with different alignment sides.",
    category: "reui-context-menu",
    tags: ["reui","context-menu"],
    component: lazy(() =>
      import("./src/patterns/context-menu/c-context-menu-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-context-menu-2",
    name: "Context menu with icons for common actions.",
    description: "Context menu with icons for common actions.",
    category: "reui-context-menu",
    tags: ["reui","context-menu"],
    component: lazy(() =>
      import("./src/patterns/context-menu/c-context-menu-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-context-menu-3",
    name: "Context menu with keyboard shortcuts.",
    description: "Context menu with keyboard shortcuts.",
    category: "reui-context-menu",
    tags: ["reui","context-menu"],
    component: lazy(() =>
      import("./src/patterns/context-menu/c-context-menu-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-context-menu-4",
    name: "Context menu with nested submenus.",
    description: "Context menu with nested submenus.",
    category: "reui-context-menu",
    tags: ["reui","context-menu"],
    component: lazy(() =>
      import("./src/patterns/context-menu/c-context-menu-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-context-menu-7",
    name: "Context menu with radio items.",
    description: "Context menu with radio items.",
    category: "reui-context-menu",
    tags: ["reui","context-menu"],
    component: lazy(() =>
      import("./src/patterns/context-menu/c-context-menu-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-6",
    name: "Data grid with auto width table layout",
    description: "Data grid with auto width table layout",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-19",
    name: "Data grid with card container",
    description: "Data grid with card container",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-19").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-2",
    name: "Data grid with cell border",
    description: "Data grid with cell border",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-18",
    name: "Data grid with column controls",
    description: "Data grid with column controls",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-18").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-10",
    name: "Data grid with column icons",
    description: "Data grid with column icons",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-15",
    name: "Data grid with column resizing",
    description: "Data grid with column resizing",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-24",
    name: "Data grid with column totals footer",
    description: "Data grid with column totals footer",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-24").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-20",
    name: "Data grid with column visibility controls",
    description: "Data grid with column visibility controls",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-20").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-22",
    name: "Data grid with CRUD features",
    description: "Data grid with CRUD features",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-22").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-23",
    name: "Data grid with CRUD in frame container",
    description: "Data grid with CRUD in frame container",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-23").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-3",
    name: "Data grid with dense layout",
    description: "Data grid with dense layout",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-13",
    name: "Data grid with draggable columns",
    description: "Data grid with draggable columns",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-14",
    name: "Data grid with draggable rows",
    description: "Data grid with draggable rows",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-8",
    name: "Data grid with expandable rows",
    description: "Data grid with expandable rows",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-21",
    name: "Data grid with loading skeleton",
    description: "Data grid with loading skeleton",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-21").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-27",
    name: "Data grid with local infinite scroll",
    description: "Data grid with local infinite scroll",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-27").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-12",
    name: "Data grid with movable columns",
    description: "Data grid with movable columns",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-1",
    name: "Data grid with pagination",
    description: "Data grid with pagination",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-26",
    name: "Data grid with per-column aggregate footer",
    description: "Data grid with per-column aggregate footer",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-26").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-16",
    name: "Data grid with pinnable columns",
    description: "Data grid with pinnable columns",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-28",
    name: "Data grid with remote infinite scroll",
    description: "Data grid with remote infinite scroll",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-28").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-29",
    name: "Data grid with row pinning support",
    description: "Data grid with row pinning support",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-29").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-7",
    name: "Data grid with row selection",
    description: "Data grid with row selection",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-11",
    name: "Data grid with sortable columns",
    description: "Data grid with sortable columns",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-17",
    name: "Data grid with sticky header",
    description: "Data grid with sticky header",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-5",
    name: "Data grid with striped rows",
    description: "Data grid with striped rows",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-9",
    name: "Data grid with sub table",
    description: "Data grid with sub table",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-25",
    name: "Data grid with summary stats footer",
    description: "Data grid with summary stats footer",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-25").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-data-grid-4",
    name: "Data grid without table borders",
    description: "Data grid without table borders",
    category: "reui-data-grid",
    tags: ["reui","data-grid"],
    component: lazy(() =>
      import("./src/patterns/data-grid/c-data-grid-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-date-selector-1",
    name: "Basic date selector",
    description: "Basic date selector",
    category: "reui-date-selector",
    tags: ["reui","date-selector"],
    component: lazy(() =>
      import("./src/patterns/date-selector/c-date-selector-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-date-selector-3",
    name: "Date selector with dialog",
    description: "Date selector with dialog",
    category: "reui-date-selector",
    tags: ["reui","date-selector"],
    component: lazy(() =>
      import("./src/patterns/date-selector/c-date-selector-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-date-selector-4",
    name: "Date selector with dropdown menu",
    description: "Date selector with dropdown menu",
    category: "reui-date-selector",
    tags: ["reui","date-selector"],
    component: lazy(() =>
      import("./src/patterns/date-selector/c-date-selector-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-date-selector-2",
    name: "Date selector with popover",
    description: "Date selector with popover",
    category: "reui-date-selector",
    tags: ["reui","date-selector"],
    component: lazy(() =>
      import("./src/patterns/date-selector/c-date-selector-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dialog-1",
    name: "Basic dialog",
    description: "Basic dialog",
    category: "reui-dialog",
    tags: ["reui","dialog"],
    component: lazy(() =>
      import("./src/patterns/dialog/c-dialog-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dialog-7",
    name: "Confirmation dialog with destructive action",
    description: "Confirmation dialog with destructive action",
    category: "reui-dialog",
    tags: ["reui","dialog"],
    component: lazy(() =>
      import("./src/patterns/dialog/c-dialog-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dialog-8",
    name: "Cookie consent dialog",
    description: "Cookie consent dialog",
    category: "reui-dialog",
    tags: ["reui","dialog"],
    component: lazy(() =>
      import("./src/patterns/dialog/c-dialog-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dialog-5",
    name: "Dialog with custom close button",
    description: "Dialog with custom close button",
    category: "reui-dialog",
    tags: ["reui","dialog"],
    component: lazy(() =>
      import("./src/patterns/dialog/c-dialog-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dialog-10",
    name: "Dialog with full width button",
    description: "Dialog with full width button",
    category: "reui-dialog",
    tags: ["reui","dialog"],
    component: lazy(() =>
      import("./src/patterns/dialog/c-dialog-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dialog-9",
    name: "Dialog with keyboard shortcuts list",
    description: "Dialog with keyboard shortcuts list",
    category: "reui-dialog",
    tags: ["reui","dialog"],
    component: lazy(() =>
      import("./src/patterns/dialog/c-dialog-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dialog-2",
    name: "Dialog with scrollable content",
    description: "Dialog with scrollable content",
    category: "reui-dialog",
    tags: ["reui","dialog"],
    component: lazy(() =>
      import("./src/patterns/dialog/c-dialog-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dialog-3",
    name: "Dialog with scrollable content and sticky footer.",
    description: "Dialog with scrollable content and sticky footer.",
    category: "reui-dialog",
    tags: ["reui","dialog"],
    component: lazy(() =>
      import("./src/patterns/dialog/c-dialog-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dialog-4",
    name: "Dialog without a close button.",
    description: "Dialog without a close button.",
    category: "reui-dialog",
    tags: ["reui","dialog"],
    component: lazy(() =>
      import("./src/patterns/dialog/c-dialog-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dialog-6",
    name: "Full-screen fluid dialog with sticky header and footer",
    description: "Full-screen fluid dialog with sticky header and footer",
    category: "reui-dialog",
    tags: ["reui","dialog"],
    component: lazy(() =>
      import("./src/patterns/dialog/c-dialog-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-drawer-1",
    name: "A basic drawer with scrollable content",
    description: "A basic drawer with scrollable content",
    category: "reui-drawer",
    tags: ["reui","drawer"],
    component: lazy(() =>
      import("./src/patterns/drawer/c-drawer-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-drawer-3",
    name: "A drawer that opens from the left side",
    description: "A drawer that opens from the left side",
    category: "reui-drawer",
    tags: ["reui","drawer"],
    component: lazy(() =>
      import("./src/patterns/drawer/c-drawer-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-drawer-2",
    name: "A drawer that opens from the right side",
    description: "A drawer that opens from the right side",
    category: "reui-drawer",
    tags: ["reui","drawer"],
    component: lazy(() =>
      import("./src/patterns/drawer/c-drawer-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-drawer-4",
    name: "A drawer that opens from the top side",
    description: "A drawer that opens from the top side",
    category: "reui-drawer",
    tags: ["reui","drawer"],
    component: lazy(() =>
      import("./src/patterns/drawer/c-drawer-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-drawer-5",
    name: "Drawers opening from different sides",
    description: "Drawers opening from different sides",
    category: "reui-drawer",
    tags: ["reui","drawer"],
    component: lazy(() =>
      import("./src/patterns/drawer/c-drawer-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dropdown-menu-12",
    name: "Actions dropdown menu",
    description: "Actions dropdown menu",
    category: "reui-dropdown-menu",
    tags: ["reui","dropdown-menu"],
    component: lazy(() =>
      import("./src/patterns/dropdown-menu/c-dropdown-menu-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dropdown-menu-8",
    name: "Advance dropdown menu",
    description: "Advance dropdown menu",
    category: "reui-dropdown-menu",
    tags: ["reui","dropdown-menu"],
    component: lazy(() =>
      import("./src/patterns/dropdown-menu/c-dropdown-menu-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dropdown-menu-18",
    name: "AI model selector with provider icons",
    description: "AI model selector with provider icons",
    category: "reui-dropdown-menu",
    tags: ["reui","dropdown-menu"],
    component: lazy(() =>
      import("./src/patterns/dropdown-menu/c-dropdown-menu-18").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dropdown-menu-1",
    name: "Basic dropdown menu",
    description: "Basic dropdown menu",
    category: "reui-dropdown-menu",
    tags: ["reui","dropdown-menu"],
    component: lazy(() =>
      import("./src/patterns/dropdown-menu/c-dropdown-menu-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dropdown-menu-6",
    name: "Dropdown menu with checkboxes",
    description: "Dropdown menu with checkboxes",
    category: "reui-dropdown-menu",
    tags: ["reui","dropdown-menu"],
    component: lazy(() =>
      import("./src/patterns/dropdown-menu/c-dropdown-menu-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dropdown-menu-3",
    name: "Dropdown menu with icons",
    description: "Dropdown menu with icons",
    category: "reui-dropdown-menu",
    tags: ["reui","dropdown-menu"],
    component: lazy(() =>
      import("./src/patterns/dropdown-menu/c-dropdown-menu-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dropdown-menu-4",
    name: "Dropdown menu with keyboard shortcuts",
    description: "Dropdown menu with keyboard shortcuts",
    category: "reui-dropdown-menu",
    tags: ["reui","dropdown-menu"],
    component: lazy(() =>
      import("./src/patterns/dropdown-menu/c-dropdown-menu-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dropdown-menu-5",
    name: "Dropdown menu with nested submenus",
    description: "Dropdown menu with nested submenus",
    category: "reui-dropdown-menu",
    tags: ["reui","dropdown-menu"],
    component: lazy(() =>
      import("./src/patterns/dropdown-menu/c-dropdown-menu-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dropdown-menu-7",
    name: "Dropdown menu with radio groups",
    description: "Dropdown menu with radio groups",
    category: "reui-dropdown-menu",
    tags: ["reui","dropdown-menu"],
    component: lazy(() =>
      import("./src/patterns/dropdown-menu/c-dropdown-menu-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dropdown-menu-2",
    name: "Dropdown menus opening positions",
    description: "Dropdown menus opening positions",
    category: "reui-dropdown-menu",
    tags: ["reui","dropdown-menu"],
    component: lazy(() =>
      import("./src/patterns/dropdown-menu/c-dropdown-menu-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dropdown-menu-11",
    name: "Notifications dropdown menu",
    description: "Notifications dropdown menu",
    category: "reui-dropdown-menu",
    tags: ["reui","dropdown-menu"],
    component: lazy(() =>
      import("./src/patterns/dropdown-menu/c-dropdown-menu-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dropdown-menu-17",
    name: "Notifications dropdown with items",
    description: "Notifications dropdown with items",
    category: "reui-dropdown-menu",
    tags: ["reui","dropdown-menu"],
    component: lazy(() =>
      import("./src/patterns/dropdown-menu/c-dropdown-menu-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dropdown-menu-16",
    name: "Quick action menu",
    description: "Quick action menu",
    category: "reui-dropdown-menu",
    tags: ["reui","dropdown-menu"],
    component: lazy(() =>
      import("./src/patterns/dropdown-menu/c-dropdown-menu-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dropdown-menu-13",
    name: "Share and export dropdown menu",
    description: "Share and export dropdown menu",
    category: "reui-dropdown-menu",
    tags: ["reui","dropdown-menu"],
    component: lazy(() =>
      import("./src/patterns/dropdown-menu/c-dropdown-menu-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dropdown-menu-15",
    name: "User and create menu",
    description: "User and create menu",
    category: "reui-dropdown-menu",
    tags: ["reui","dropdown-menu"],
    component: lazy(() =>
      import("./src/patterns/dropdown-menu/c-dropdown-menu-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dropdown-menu-9",
    name: "User profile dropdown menu",
    description: "User profile dropdown menu",
    category: "reui-dropdown-menu",
    tags: ["reui","dropdown-menu"],
    component: lazy(() =>
      import("./src/patterns/dropdown-menu/c-dropdown-menu-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dropdown-menu-14",
    name: "User profile dropdown menu with theme toggle and status selector",
    description: "User profile dropdown menu with theme toggle and status selector",
    category: "reui-dropdown-menu",
    tags: ["reui","dropdown-menu"],
    component: lazy(() =>
      import("./src/patterns/dropdown-menu/c-dropdown-menu-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-dropdown-menu-10",
    name: "Workspace switcher dropdown menu",
    description: "Workspace switcher dropdown menu",
    category: "reui-dropdown-menu",
    tags: ["reui","dropdown-menu"],
    component: lazy(() =>
      import("./src/patterns/dropdown-menu/c-dropdown-menu-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-1",
    name: "Basic empty state",
    description: "Basic empty state",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-11",
    name: "Bookmarks empty state",
    description: "Bookmarks empty state",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-14",
    name: "Comments empty state with isometric board illustration",
    description: "Comments empty state with isometric board illustration",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-6",
    name: "Dashed upload empty state",
    description: "Dashed upload empty state",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-5",
    name: "Document empty state",
    description: "Document empty state",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-4",
    name: "Empty state with add button",
    description: "Empty state with add button",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-3",
    name: "Empty state with search input",
    description: "Empty state with search input",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-7",
    name: "Inbox empty state",
    description: "Inbox empty state",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-13",
    name: "No automations empty state with toggle illustration",
    description: "No automations empty state with toggle illustration",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-10",
    name: "No data analytics empty state",
    description: "No data analytics empty state",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-20",
    name: "No events empty state with calendar illustration",
    description: "No events empty state with calendar illustration",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-20").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-19",
    name: "No integrations empty state with connected nodes illustration",
    description: "No integrations empty state with connected nodes illustration",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-19").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-17",
    name: "No messages empty state with chat bubbles illustration",
    description: "No messages empty state with chat bubbles illustration",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-9",
    name: "No notifications empty state",
    description: "No notifications empty state",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-18",
    name: "No payments empty state with credit card illustration",
    description: "No payments empty state with credit card illustration",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-18").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-15",
    name: "No products empty state with stacked cards and blur effect",
    description: "No products empty state with stacked cards and blur effect",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-2",
    name: "Search empty state",
    description: "Search empty state",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-16",
    name: "Search empty state with stacked file cards illustration",
    description: "Search empty state with stacked file cards illustration",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-12",
    name: "Tasks empty state",
    description: "Tasks empty state",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-empty-8",
    name: "Team members empty state",
    description: "Team members empty state",
    category: "reui-empty",
    tags: ["reui","empty"],
    component: lazy(() =>
      import("./src/patterns/empty/c-empty-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-event-calendar-1",
    name: "Event calendar with all views and live settings",
    description: "Event calendar with all views and live settings",
    category: "reui-event-calendar",
    tags: ["reui","event-calendar"],
    component: lazy(() =>
      import("./src/patterns/event-calendar/c-event-calendar-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-event-calendar-3",
    name: "Event calendar with create and edit dialog",
    description: "Month calendar with event CRUD in one dialog: open from an empty day, an event, or Add event, commit via apiRef. Title, color, start, duration, all-day fields. ReUI EventCalendar, Nav, Toolbar; shadcn Dialog, Field, Select, Switch. Scheduling apps.",
    category: "reui-event-calendar",
    tags: ["reui","event-calendar"],
    component: lazy(() =>
      import("./src/patterns/event-calendar/c-event-calendar-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-event-calendar-4",
    name: "Event calendar with custom event chips",
    description: "Event calendar with custom event chips",
    category: "reui-event-calendar",
    tags: ["reui","event-calendar"],
    component: lazy(() =>
      import("./src/patterns/event-calendar/c-event-calendar-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-event-calendar-5",
    name: "Event calendar with drag-to-book appointments",
    description: "Event calendar with drag-to-book appointments",
    category: "reui-event-calendar",
    tags: ["reui","event-calendar"],
    component: lazy(() =>
      import("./src/patterns/event-calendar/c-event-calendar-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-event-calendar-2",
    name: "Event calendar with resource view for room bookings",
    description: "Event calendar with resource view for room bookings",
    category: "reui-event-calendar",
    tags: ["reui","event-calendar"],
    component: lazy(() =>
      import("./src/patterns/event-calendar/c-event-calendar-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-field-2",
    name: "Field with input and textarea",
    description: "Field with input and textarea",
    category: "reui-field",
    tags: ["reui","field"],
    component: lazy(() =>
      import("./src/patterns/field/c-field-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-field-6",
    name: "Field with OTP input",
    description: "Field with OTP input",
    category: "reui-field",
    tags: ["reui","field"],
    component: lazy(() =>
      import("./src/patterns/field/c-field-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-field-4",
    name: "Field with radio groups and checkboxes",
    description: "Field with radio groups and checkboxes",
    category: "reui-field",
    tags: ["reui","field"],
    component: lazy(() =>
      import("./src/patterns/field/c-field-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-field-3",
    name: "Field with select control",
    description: "Field with select control",
    category: "reui-field",
    tags: ["reui","field"],
    component: lazy(() =>
      import("./src/patterns/field/c-field-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-field-1",
    name: "Fields with input groups",
    description: "Fields with input groups",
    category: "reui-field",
    tags: ["reui","field"],
    component: lazy(() =>
      import("./src/patterns/field/c-field-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-field-5",
    name: "Filed with slider and switch",
    description: "Filed with slider and switch",
    category: "reui-field",
    tags: ["reui","field"],
    component: lazy(() =>
      import("./src/patterns/field/c-field-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-field-11",
    name: "Form with validation errors",
    description: "Form with validation errors",
    category: "reui-field",
    tags: ["reui","field"],
    component: lazy(() =>
      import("./src/patterns/field/c-field-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-field-10",
    name: "Notification preferences form",
    description: "Notification preferences form",
    category: "reui-field",
    tags: ["reui","field"],
    component: lazy(() =>
      import("./src/patterns/field/c-field-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-field-8",
    name: "Permission settings with checkboxes",
    description: "Permission settings with checkboxes",
    category: "reui-field",
    tags: ["reui","field"],
    component: lazy(() =>
      import("./src/patterns/field/c-field-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-field-9",
    name: "Responsive field layout",
    description: "Responsive field layout",
    category: "reui-field",
    tags: ["reui","field"],
    component: lazy(() =>
      import("./src/patterns/field/c-field-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-field-7",
    name: "Settings form with validation",
    description: "Settings form with validation",
    category: "reui-field",
    tags: ["reui","field"],
    component: lazy(() =>
      import("./src/patterns/field/c-field-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-file-upload-2",
    name: "Avatar upload",
    description: "Avatar upload",
    category: "reui-file-upload",
    tags: ["reui","file-upload"],
    component: lazy(() =>
      import("./src/patterns/file-upload/c-file-upload-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-file-upload-3",
    name: "Basic drag and drop file upload",
    description: "Basic drag and drop file upload",
    category: "reui-file-upload",
    tags: ["reui","file-upload"],
    component: lazy(() =>
      import("./src/patterns/file-upload/c-file-upload-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-file-upload-1",
    name: "Basic file upload",
    description: "Basic file upload",
    category: "reui-file-upload",
    tags: ["reui","file-upload"],
    component: lazy(() =>
      import("./src/patterns/file-upload/c-file-upload-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-file-upload-9",
    name: "Card file upload.",
    description: "Card file upload.",
    category: "reui-file-upload",
    tags: ["reui","file-upload"],
    component: lazy(() =>
      import("./src/patterns/file-upload/c-file-upload-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-file-upload-10",
    name: "Cover image upload.",
    description: "Cover image upload.",
    category: "reui-file-upload",
    tags: ["reui","file-upload"],
    component: lazy(() =>
      import("./src/patterns/file-upload/c-file-upload-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-file-upload-4",
    name: "Gallery file upload",
    description: "Gallery file upload",
    category: "reui-file-upload",
    tags: ["reui","file-upload"],
    component: lazy(() =>
      import("./src/patterns/file-upload/c-file-upload-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-file-upload-7",
    name: "Image upload",
    description: "Image upload",
    category: "reui-file-upload",
    tags: ["reui","file-upload"],
    component: lazy(() =>
      import("./src/patterns/file-upload/c-file-upload-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-file-upload-8",
    name: "Image upload with sorting.",
    description: "Image upload with sorting.",
    category: "reui-file-upload",
    tags: ["reui","file-upload"],
    component: lazy(() =>
      import("./src/patterns/file-upload/c-file-upload-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-file-upload-5",
    name: "Progress file upload",
    description: "Progress file upload",
    category: "reui-file-upload",
    tags: ["reui","file-upload"],
    component: lazy(() =>
      import("./src/patterns/file-upload/c-file-upload-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-file-upload-6",
    name: "Table file upload",
    description: "Table file upload",
    category: "reui-file-upload",
    tags: ["reui","file-upload"],
    component: lazy(() =>
      import("./src/patterns/file-upload/c-file-upload-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-filters-12",
    name: "Filters with async server-side search",
    description: "Filters with async server-side search",
    category: "reui-filters",
    tags: ["reui","filters"],
    component: lazy(() =>
      import("./src/patterns/filters/c-filters-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-filters-6",
    name: "Filters with custom controls",
    description: "Filters with custom controls",
    category: "reui-filters",
    tags: ["reui","filters"],
    component: lazy(() =>
      import("./src/patterns/filters/c-filters-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-filters-3",
    name: "Filters with custom trigger button",
    description: "Filters with custom trigger button",
    category: "reui-filters",
    tags: ["reui","filters"],
    component: lazy(() =>
      import("./src/patterns/filters/c-filters-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-filters-7",
    name: "Filters with data grid",
    description: "Filters with data grid",
    category: "reui-filters",
    tags: ["reui","filters"],
    component: lazy(() =>
      import("./src/patterns/filters/c-filters-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-filters-8",
    name: "Filters with data grid and async mode",
    description: "Filters with data grid and async mode",
    category: "reui-filters",
    tags: ["reui","filters"],
    component: lazy(() =>
      import("./src/patterns/filters/c-filters-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-filters-9",
    name: "Filters with i18n support",
    description: "Filters with i18n support",
    category: "reui-filters",
    tags: ["reui","filters"],
    component: lazy(() =>
      import("./src/patterns/filters/c-filters-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-filters-2",
    name: "Filters with input validation",
    description: "Filters with input validation",
    category: "reui-filters",
    tags: ["reui","filters"],
    component: lazy(() =>
      import("./src/patterns/filters/c-filters-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-filters-5",
    name: "Filters with large size controls",
    description: "Filters with large size controls",
    category: "reui-filters",
    tags: ["reui","filters"],
    component: lazy(() =>
      import("./src/patterns/filters/c-filters-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-filters-11",
    name: "Filters with prefetched async options",
    description: "Filters with prefetched async options",
    category: "reui-filters",
    tags: ["reui","filters"],
    component: lazy(() =>
      import("./src/patterns/filters/c-filters-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-filters-4",
    name: "Filters with small size controls",
    description: "Filters with small size controls",
    category: "reui-filters",
    tags: ["reui","filters"],
    component: lazy(() =>
      import("./src/patterns/filters/c-filters-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-filters-1",
    name: "Filters with various field types",
    description: "Filters with various field types",
    category: "reui-filters",
    tags: ["reui","filters"],
    component: lazy(() =>
      import("./src/patterns/filters/c-filters-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-filters-10",
    name: "Filters with virtualized large lists",
    description: "Filters with virtualized large lists",
    category: "reui-filters",
    tags: ["reui","filters"],
    component: lazy(() =>
      import("./src/patterns/filters/c-filters-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-1",
    name: "Basic frame",
    description: "Basic frame",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-5",
    name: "Frame with collapsible panels",
    description: "Frame with collapsible panels",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-18",
    name: "Frame with content-only panels",
    description: "Frame with content-only panels",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-18").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-16",
    name: "Frame with default border radius",
    description: "Frame with default border radius",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-11",
    name: "Frame with default spacing",
    description: "Frame with default spacing",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-7",
    name: "Frame with dense layout",
    description: "Frame with dense layout",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-17",
    name: "Frame with extra large border radius",
    description: "Frame with extra large border radius",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-9",
    name: "Frame with extra small spacing",
    description: "Frame with extra small spacing",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-6",
    name: "Frame with ghost(no outer border) variant",
    description: "Frame with ghost(no outer border) variant",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-15",
    name: "Frame with large border radius",
    description: "Frame with large border radius",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-12",
    name: "Frame with large spacing",
    description: "Frame with large spacing",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-14",
    name: "Frame with medium border radius",
    description: "Frame with medium border radius",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-2",
    name: "Frame with separated panels",
    description: "Frame with separated panels",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-13",
    name: "Frame with small border radius",
    description: "Frame with small border radius",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-10",
    name: "Frame with small spacing",
    description: "Frame with small spacing",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-19",
    name: "Frame with stacked content-only panels",
    description: "Frame with stacked content-only panels",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-19").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-3",
    name: "Frame with stacked panels",
    description: "Frame with stacked panels",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-8",
    name: "Frame with stacked panels",
    description: "Frame with stacked panels",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-frame-4",
    name: "Frame with stacked panels and dense style",
    description: "Frame with stacked panels and dense style",
    category: "reui-frame",
    tags: ["reui","frame"],
    component: lazy(() =>
      import("./src/patterns/frame/c-frame-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-gantt-2",
    name: "Gantt chart with drag-to-reorder tree rows",
    description: "Gantt chart with drag-to-reorder tree rows",
    category: "reui-gantt",
    tags: ["reui","gantt"],
    component: lazy(() =>
      import("./src/patterns/gantt/c-gantt-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-gantt-3",
    name: "Gantt chart with quarter roadmap and rollups",
    description: "Quarter-scale roadmap where workstream groups form swimlanes and parent rows roll children into one summary bar. Toolbar button calls addEvent via apiRef to schedule backlog items. ReUI Gantt, GanttNav, GanttToolbar, GanttView; shadcn Card, Button.",
    category: "reui-gantt",
    tags: ["reui","gantt"],
    component: lazy(() =>
      import("./src/patterns/gantt/c-gantt-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-gantt-1",
    name: "Gantt chart with settings menu and schedulable rows",
    description: "Gantt chart with settings menu and schedulable rows",
    category: "reui-gantt",
    tags: ["reui","gantt"],
    component: lazy(() =>
      import("./src/patterns/gantt/c-gantt-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-gantt-5",
    name: "Gantt chart with task table and progress",
    description: "Gantt chart with task table and progress",
    category: "reui-gantt",
    tags: ["reui","gantt"],
    component: lazy(() =>
      import("./src/patterns/gantt/c-gantt-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-gantt-4",
    name: "Gantt chart with weekly capacity board",
    description: "Gantt chart with weekly capacity board",
    category: "reui-gantt",
    tags: ["reui","gantt"],
    component: lazy(() =>
      import("./src/patterns/gantt/c-gantt-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-hover-card-1",
    name: "Basic hover card.",
    description: "Basic hover card.",
    category: "reui-hover-card",
    tags: ["reui","hover-card"],
    component: lazy(() =>
      import("./src/patterns/hover-card/c-hover-card-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-hover-card-6",
    name: "Hover card inside a dialog.",
    description: "Hover card inside a dialog.",
    category: "reui-hover-card",
    tags: ["reui","hover-card"],
    component: lazy(() =>
      import("./src/patterns/hover-card/c-hover-card-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-hover-card-5",
    name: "Hover card with an image and text content.",
    description: "Hover card with an image and text content.",
    category: "reui-hover-card",
    tags: ["reui","hover-card"],
    component: lazy(() =>
      import("./src/patterns/hover-card/c-hover-card-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-hover-card-4",
    name: "Hover card with icon",
    description: "Hover card with icon",
    category: "reui-hover-card",
    tags: ["reui","hover-card"],
    component: lazy(() =>
      import("./src/patterns/hover-card/c-hover-card-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-hover-card-8",
    name: "Hover card with paginated release notes",
    description: "Hover card with paginated release notes",
    category: "reui-hover-card",
    tags: ["reui","hover-card"],
    component: lazy(() =>
      import("./src/patterns/hover-card/c-hover-card-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-hover-card-2",
    name: "Hover card with positions.",
    description: "Hover card with positions.",
    category: "reui-hover-card",
    tags: ["reui","hover-card"],
    component: lazy(() =>
      import("./src/patterns/hover-card/c-hover-card-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-hover-card-3",
    name: "Hover card with profile information.",
    description: "Hover card with profile information.",
    category: "reui-hover-card",
    tags: ["reui","hover-card"],
    component: lazy(() =>
      import("./src/patterns/hover-card/c-hover-card-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-hover-card-7",
    name: "Timestamp hover card with active relative time",
    description: "Timestamp hover card with active relative time",
    category: "reui-hover-card",
    tags: ["reui","hover-card"],
    component: lazy(() =>
      import("./src/patterns/hover-card/c-hover-card-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-stack-5",
    name: "Empty state illustration",
    description: "Shadcn empty state illustration",
    category: "reui-icon-stack",
    tags: ["reui","icon-stack"],
    component: lazy(() =>
      import("./src/patterns/icon-stack/c-icon-stack-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-stack-4",
    name: "Icon badge stack",
    description: "Icon stack with badge overlay",
    category: "reui-icon-stack",
    tags: ["reui","icon-stack"],
    component: lazy(() =>
      import("./src/patterns/icon-stack/c-icon-stack-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-stack-3",
    name: "Icon stack colors",
    description: "Semantic icon stack colors",
    category: "reui-icon-stack",
    tags: ["reui","icon-stack"],
    component: lazy(() =>
      import("./src/patterns/icon-stack/c-icon-stack-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-stack-2",
    name: "Icon stack sizes",
    description: "Responsive icon stack sizes",
    category: "reui-icon-stack",
    tags: ["reui","icon-stack"],
    component: lazy(() =>
      import("./src/patterns/icon-stack/c-icon-stack-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-stack-1",
    name: "Isometric icon stack",
    description: "Layered isometric icon",
    category: "reui-icon-stack",
    tags: ["reui","icon-stack"],
    component: lazy(() =>
      import("./src/patterns/icon-stack/c-icon-stack-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-stack-6",
    name: "Item media stack",
    description: "Icon stack in shadcn item",
    category: "reui-icon-stack",
    tags: ["reui","icon-stack"],
    component: lazy(() =>
      import("./src/patterns/icon-stack/c-icon-stack-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-tile-4",
    name: "All variants",
    description: "Every icon tile variant",
    category: "reui-icon-tile",
    tags: ["reui","icon-tile"],
    component: lazy(() =>
      import("./src/patterns/icon-tile/c-icon-tile-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-tile-17",
    name: "Brand colors",
    description: "Elevated tile with a Tailwind color fill",
    category: "reui-icon-tile",
    tags: ["reui","icon-tile"],
    component: lazy(() =>
      import("./src/patterns/icon-tile/c-icon-tile-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-tile-6",
    name: "Circular tiles",
    description: "Icon tiles with circular shape",
    category: "reui-icon-tile",
    tags: ["reui","icon-tile"],
    component: lazy(() =>
      import("./src/patterns/icon-tile/c-icon-tile-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-tile-8",
    name: "Color tones",
    description: "Semantic icon tile color tones",
    category: "reui-icon-tile",
    tags: ["reui","icon-tile"],
    component: lazy(() =>
      import("./src/patterns/icon-tile/c-icon-tile-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-tile-7",
    name: "Custom sizing",
    description: "Icon tile with custom sizing",
    category: "reui-icon-tile",
    tags: ["reui","icon-tile"],
    component: lazy(() =>
      import("./src/patterns/icon-tile/c-icon-tile-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-tile-1",
    name: "Default icon tile",
    description: "Default icon tile",
    category: "reui-icon-tile",
    tags: ["reui","icon-tile"],
    component: lazy(() =>
      import("./src/patterns/icon-tile/c-icon-tile-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-tile-2",
    name: "Elevated icon tile",
    description: "Icon tile with elevated surface",
    category: "reui-icon-tile",
    tags: ["reui","icon-tile"],
    component: lazy(() =>
      import("./src/patterns/icon-tile/c-icon-tile-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-tile-12",
    name: "Empty state",
    description: "Icon tile in an empty state",
    category: "reui-icon-tile",
    tags: ["reui","icon-tile"],
    component: lazy(() =>
      import("./src/patterns/icon-tile/c-icon-tile-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-tile-11",
    name: "Feature card",
    description: "Icon tile in a feature card",
    category: "reui-icon-tile",
    tags: ["reui","icon-tile"],
    component: lazy(() =>
      import("./src/patterns/icon-tile/c-icon-tile-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-tile-3",
    name: "Framed icon tile",
    description: "Icon tile with framed surface",
    category: "reui-icon-tile",
    tags: ["reui","icon-tile"],
    component: lazy(() =>
      import("./src/patterns/icon-tile/c-icon-tile-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-tile-13",
    name: "Interactive tile",
    description: "Interactive icon tile",
    category: "reui-icon-tile",
    tags: ["reui","icon-tile"],
    component: lazy(() =>
      import("./src/patterns/icon-tile/c-icon-tile-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-tile-10",
    name: "List row",
    description: "Icon tile in a list row",
    category: "reui-icon-tile",
    tags: ["reui","icon-tile"],
    component: lazy(() =>
      import("./src/patterns/icon-tile/c-icon-tile-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-tile-5",
    name: "Sizes",
    description: "Icon tile size scale",
    category: "reui-icon-tile",
    tags: ["reui","icon-tile"],
    component: lazy(() =>
      import("./src/patterns/icon-tile/c-icon-tile-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-tile-15",
    name: "Soft tones",
    description: "Tone-adjustable soft variant",
    category: "reui-icon-tile",
    tags: ["reui","icon-tile"],
    component: lazy(() =>
      import("./src/patterns/icon-tile/c-icon-tile-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-tile-16",
    name: "Solid tones",
    description: "Tone-adjustable solid variant",
    category: "reui-icon-tile",
    tags: ["reui","icon-tile"],
    component: lazy(() =>
      import("./src/patterns/icon-tile/c-icon-tile-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-tile-14",
    name: "Status overlay",
    description: "Icon tile with status overlay",
    category: "reui-icon-tile",
    tags: ["reui","icon-tile"],
    component: lazy(() =>
      import("./src/patterns/icon-tile/c-icon-tile-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-icon-tile-9",
    name: "Text content",
    description: "Icon tile with text content",
    category: "reui-icon-tile",
    tags: ["reui","icon-tile"],
    component: lazy(() =>
      import("./src/patterns/icon-tile/c-icon-tile-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-23",
    name: "Advanced password strength indicator with progress",
    description: "Advanced password strength indicator with progress",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-23").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-1",
    name: "Basic input",
    description: "Basic input",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-22",
    name: "Basic password strength with dynamic hint and icons",
    description: "Basic password strength with dynamic hint and icons",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-22").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-28",
    name: "Color input",
    description: "Color input",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-28").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-15",
    name: "Complex input form with multiple fields",
    description: "Complex input form with multiple fields",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-4",
    name: "Disabled input",
    description: "Disabled input",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-17",
    name: "Input label with badge",
    description: "Input label with badge",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-19",
    name: "Input label with link and visibility toggle",
    description: "Input label with link and visibility toggle",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-19").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-18",
    name: "Input label with optional badge",
    description: "Input label with optional badge",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-18").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-16",
    name: "Input label with tooltip",
    description: "Input label with tooltip",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-27",
    name: "Input with bottom border only",
    description: "Input with bottom border only",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-27").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-6",
    name: "Input with character counter",
    description: "Input with character counter",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-25",
    name: "Input with custom focus ring",
    description: "Input with custom focus ring",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-25").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-11",
    name: "Input with date type",
    description: "Input with date type",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-3",
    name: "Input with description",
    description: "Input with description",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-5",
    name: "Input with error message",
    description: "Input with error message",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-12",
    name: "Input with file type",
    description: "Input with file type",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-20",
    name: "Input with horizontal orientation",
    description: "Input with horizontal orientation",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-20").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-2",
    name: "Input with label",
    description: "Input with label",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-21",
    name: "Input with multiple error messages",
    description: "Input with multiple error messages",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-21").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-10",
    name: "Input with number type",
    description: "Input with number type",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-7",
    name: "Input with password type",
    description: "Input with password type",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-8",
    name: "Input with phone type",
    description: "Input with phone type",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-24",
    name: "Input with pulsed background animation",
    description: "Input with pulsed background animation",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-24").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-13",
    name: "Input with required indicator",
    description: "Input with required indicator",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-26",
    name: "Input with subtle background",
    description: "Input with subtle background",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-26").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-14",
    name: "Input with time type",
    description: "Input with time type",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-9",
    name: "Input with URL type",
    description: "Input with URL type",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-31",
    name: "Minimal input without borders or background",
    description: "Minimal input without borders or background",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-31").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-30",
    name: "Pill-shaped input",
    description: "Pill-shaped input",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-30").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-29",
    name: "Range input with value indicator",
    description: "Range input with value indicator",
    category: "reui-input",
    tags: ["reui","input"],
    component: lazy(() =>
      import("./src/patterns/input/c-input-29").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-19",
    name: "AI Chat interface with file and context attachments",
    description: "AI Chat interface with file and context attachments",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-19").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-18",
    name: "AI Chat textarea with rich toolbar actions",
    description: "AI Chat textarea with rich toolbar actions",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-18").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-36",
    name: "API request input with method selector and send action",
    description: "API request input with method selector and send action",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-36").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-1",
    name: "Basic input group",
    description: "Basic input group",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-38",
    name: "Company search input with region selector",
    description: "Company search input with region selector",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-38").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-39",
    name: "Contact search input with filter and actions menu",
    description: "Contact search input with filter and actions menu",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-39").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-20",
    name: "Input group demonstrating label usage",
    description: "Input group demonstrating label usage",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-20").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-2",
    name: "Input group in disabled state",
    description: "Input group in disabled state",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-3",
    name: "Input group in invalid state",
    description: "Input group in invalid state",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-28",
    name: "Input group with a menu button (three dots) at the end",
    description: "Input group with a menu button (three dots) at the end",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-28").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-10",
    name: "Input group with action button addon",
    description: "Input group with action button addon",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-16",
    name: "Input group with block-start addon",
    description: "Input group with block-start addon",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-6",
    name: "Input group with both prefix and suffix icons",
    description: "Input group with both prefix and suffix icons",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-9",
    name: "Input group with both prefix and suffix text addons",
    description: "Input group with both prefix and suffix text addons",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-12",
    name: "Input group with dropdown menu selection",
    description: "Input group with dropdown menu selection",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-11",
    name: "Input group with icon button action",
    description: "Input group with icon button action",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-30",
    name: "Input group with inline addons (no separating borders)",
    description: "Input group with inline addons (no separating borders)",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-30").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-31",
    name: "Input group with inline start and block-end addon",
    description: "Input group with inline start and block-end addon",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-31").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-13",
    name: "Input group with keyboard shortcut (Kbd)",
    description: "Input group with keyboard shortcut (Kbd)",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-15",
    name: "Input group with loading spinner",
    description: "Input group with loading spinner",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-21",
    name: "Input group with multiple icons/buttons at the end",
    description: "Input group with multiple icons/buttons at the end",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-21").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-22",
    name: "Input group with popover trigger addon",
    description: "Input group with popover trigger addon",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-22").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-4",
    name: "Input group with prefix icon",
    description: "Input group with prefix icon",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-7",
    name: "Input group with prefix text addon",
    description: "Input group with prefix text addon",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-25",
    name: "Input group with search results count",
    description: "Input group with search results count",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-25").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-23",
    name: "Input group with Sparkles icon and complex Kbd shortcut",
    description: "Input group with Sparkles icon and complex Kbd shortcut",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-23").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-24",
    name: "Input group with success indicator circle",
    description: "Input group with success indicator circle",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-24").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-5",
    name: "Input group with suffix icon",
    description: "Input group with suffix icon",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-8",
    name: "Input group with suffix text addon",
    description: "Input group with suffix text addon",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-14",
    name: "Input group with tooltip action",
    description: "Input group with tooltip action",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-27",
    name: "Input group wrapped in a button group with text prefixes/suffixes",
    description: "Input group wrapped in a button group with text prefixes/suffixes",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-27").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-32",
    name: "Member row with avatar, email and role selection",
    description: "Member row with avatar, email and role selection",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-32").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-37",
    name: "Order search input with status filter",
    description: "Order search input with status filter",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-37").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-35",
    name: "Password input with visibility toggle",
    description: "Password input with visibility toggle",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-35").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-34",
    name: "Pill-shaped AI prompt bar with voice and audio icons",
    description: "Pill-shaped AI prompt bar with voice and audio icons",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-34").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-29",
    name: "Pill-shaped input group with a category dropdown at the end",
    description: "Pill-shaped input group with a category dropdown at the end",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-29").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-33",
    name: "Project save interface with status and action buttons",
    description: "Project save interface with status and action buttons",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-33").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-40",
    name: "Share link input with visibility selector and copy action",
    description: "Share link input with visibility selector and copy action",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-40").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-26",
    name: "Textarea input group with action buttons",
    description: "Textarea input group with action buttons",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-26").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-group-17",
    name: "Textarea input group with dynamic character limit",
    description: "Textarea input group with dynamic character limit",
    category: "reui-input-group",
    tags: ["reui","input-group"],
    component: lazy(() =>
      import("./src/patterns/input-group/c-input-group-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-otp-1",
    name: "Basic OTP input.",
    description: "Basic OTP input.",
    category: "reui-input-otp",
    tags: ["reui","input-otp"],
    component: lazy(() =>
      import("./src/patterns/input-otp/c-input-otp-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-otp-5",
    name: "OTP input for PIN codes.",
    description: "OTP input for PIN codes.",
    category: "reui-input-otp",
    tags: ["reui","input-otp"],
    component: lazy(() =>
      import("./src/patterns/input-otp/c-input-otp-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-otp-6",
    name: "OTP input verification code.",
    description: "OTP input verification code.",
    category: "reui-input-otp",
    tags: ["reui","input-otp"],
    component: lazy(() =>
      import("./src/patterns/input-otp/c-input-otp-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-otp-4",
    name: "OTP input with letters and numbers.",
    description: "OTP input with letters and numbers.",
    category: "reui-input-otp",
    tags: ["reui","input-otp"],
    component: lazy(() =>
      import("./src/patterns/input-otp/c-input-otp-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-otp-3",
    name: "OTP input with multiple separators.",
    description: "OTP input with multiple separators.",
    category: "reui-input-otp",
    tags: ["reui","input-otp"],
    component: lazy(() =>
      import("./src/patterns/input-otp/c-input-otp-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-input-otp-2",
    name: "OTP input with numeric digits.",
    description: "OTP input with numeric digits.",
    category: "reui-input-otp",
    tags: ["reui","input-otp"],
    component: lazy(() =>
      import("./src/patterns/input-otp/c-input-otp-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-item-12",
    name: "Activity feed items with avatars and actions",
    description: "Activity feed items with avatars and actions",
    category: "reui-item",
    tags: ["reui","item"],
    component: lazy(() =>
      import("./src/patterns/item/c-item-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-item-1",
    name: "Basic item with title and description",
    description: "Basic item with title and description",
    category: "reui-item",
    tags: ["reui","item"],
    component: lazy(() =>
      import("./src/patterns/item/c-item-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-item-4",
    name: "Clickable navigation items with icons and chevron",
    description: "Clickable navigation items with icons and chevron",
    category: "reui-item",
    tags: ["reui","item"],
    component: lazy(() =>
      import("./src/patterns/item/c-item-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-item-6",
    name: "File items with icon media, size, and actions",
    description: "File items with icon media, size, and actions",
    category: "reui-item",
    tags: ["reui","item"],
    component: lazy(() =>
      import("./src/patterns/item/c-item-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-item-11",
    name: "Integration items with connect actions",
    description: "Integration items with connect actions",
    category: "reui-item",
    tags: ["reui","item"],
    component: lazy(() =>
      import("./src/patterns/item/c-item-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-item-5",
    name: "Item group with status badges",
    description: "Item group with status badges",
    category: "reui-item",
    tags: ["reui","item"],
    component: lazy(() =>
      import("./src/patterns/item/c-item-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-item-10",
    name: "Item with header and footer sections",
    description: "Item with header and footer sections",
    category: "reui-item",
    tags: ["reui","item"],
    component: lazy(() =>
      import("./src/patterns/item/c-item-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-item-2",
    name: "Items with icon media and action buttons",
    description: "Items with icon media and action buttons",
    category: "reui-item",
    tags: ["reui","item"],
    component: lazy(() =>
      import("./src/patterns/item/c-item-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-item-7",
    name: "Items with keyboard shortcuts",
    description: "Items with keyboard shortcuts",
    category: "reui-item",
    tags: ["reui","item"],
    component: lazy(() =>
      import("./src/patterns/item/c-item-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-item-8",
    name: "Small-size items with badges",
    description: "Small-size items with badges",
    category: "reui-item",
    tags: ["reui","item"],
    component: lazy(() =>
      import("./src/patterns/item/c-item-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-item-9",
    name: "Team members with roles and multiple actions",
    description: "Team members with roles and multiple actions",
    category: "reui-item",
    tags: ["reui","item"],
    component: lazy(() =>
      import("./src/patterns/item/c-item-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-item-3",
    name: "User item with avatar, info, and follow button",
    description: "User item with avatar, info, and follow button",
    category: "reui-item",
    tags: ["reui","item"],
    component: lazy(() =>
      import("./src/patterns/item/c-item-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-kanban-5",
    name: "Feature roadmap kanban with progress",
    description: "Feature roadmap kanban with progress",
    category: "reui-kanban",
    tags: ["reui","kanban"],
    component: lazy(() =>
      import("./src/patterns/kanban/c-kanban-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-kanban-6",
    name: "Kanban board persisted to a backend",
    description: "Persist moves with onValueCommit, optimistic updates, and Sonner rollback",
    category: "reui-kanban",
    tags: ["reui","kanban"],
    component: lazy(() =>
      import("./src/patterns/kanban/c-kanban-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-kanban-2",
    name: "Kanban board with dynamic overlay",
    description: "Kanban board with dynamic overlay",
    category: "reui-kanban",
    tags: ["reui","kanban"],
    component: lazy(() =>
      import("./src/patterns/kanban/c-kanban-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-kanban-3",
    name: "Kanban board with frame columns",
    description: "Kanban board with frame columns",
    category: "reui-kanban",
    tags: ["reui","kanban"],
    component: lazy(() =>
      import("./src/patterns/kanban/c-kanban-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-kanban-1",
    name: "Kanban board with placeholder overlay",
    description: "Kanban board with placeholder overlay",
    category: "reui-kanban",
    tags: ["reui","kanban"],
    component: lazy(() =>
      import("./src/patterns/kanban/c-kanban-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-kanban-4",
    name: "Minimal kanban with stacked frame",
    description: "Minimal kanban with stacked frame",
    category: "reui-kanban",
    tags: ["reui","kanban"],
    component: lazy(() =>
      import("./src/patterns/kanban/c-kanban-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-kbd-1",
    name: "Basic keyboard keys.",
    description: "Basic keyboard keys.",
    category: "reui-kbd",
    tags: ["reui","kbd"],
    component: lazy(() =>
      import("./src/patterns/kbd/c-kbd-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-kbd-4",
    name: "Keyboard key within an input.",
    description: "Keyboard key within an input.",
    category: "reui-kbd",
    tags: ["reui","kbd"],
    component: lazy(() =>
      import("./src/patterns/kbd/c-kbd-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-kbd-3",
    name: "Keyboard keys combined with icons.",
    description: "Keyboard keys combined with icons.",
    category: "reui-kbd",
    tags: ["reui","kbd"],
    component: lazy(() =>
      import("./src/patterns/kbd/c-kbd-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-kbd-2",
    name: "Keyboard keys grouped together.",
    description: "Keyboard keys grouped together.",
    category: "reui-kbd",
    tags: ["reui","kbd"],
    component: lazy(() =>
      import("./src/patterns/kbd/c-kbd-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-kbd-5",
    name: "Keyboard shortcut in a tooltip.",
    description: "Keyboard shortcut in a tooltip.",
    category: "reui-kbd",
    tags: ["reui","kbd"],
    component: lazy(() =>
      import("./src/patterns/kbd/c-kbd-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-kbd-6",
    name: "Keyboard shortcuts reference list",
    description: "Keyboard shortcuts reference list",
    category: "reui-kbd",
    tags: ["reui","kbd"],
    component: lazy(() =>
      import("./src/patterns/kbd/c-kbd-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-label-1",
    name: "Basic label.",
    description: "Basic label.",
    category: "reui-label",
    tags: ["reui","label"],
    component: lazy(() =>
      import("./src/patterns/label/c-label-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-label-3",
    name: "Label for a textarea field.",
    description: "Label for a textarea field.",
    category: "reui-label",
    tags: ["reui","label"],
    component: lazy(() =>
      import("./src/patterns/label/c-label-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-label-4",
    name: "Label in a disabled state.",
    description: "Label in a disabled state.",
    category: "reui-label",
    tags: ["reui","label"],
    component: lazy(() =>
      import("./src/patterns/label/c-label-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-label-2",
    name: "Label paired with a checkbox.",
    description: "Label paired with a checkbox.",
    category: "reui-label",
    tags: ["reui","label"],
    component: lazy(() =>
      import("./src/patterns/label/c-label-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-label-8",
    name: "Label with badge indicator",
    description: "Label with badge indicator",
    category: "reui-label",
    tags: ["reui","label"],
    component: lazy(() =>
      import("./src/patterns/label/c-label-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-label-9",
    name: "Label with character counter",
    description: "Label with character counter",
    category: "reui-label",
    tags: ["reui","label"],
    component: lazy(() =>
      import("./src/patterns/label/c-label-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-label-11",
    name: "Label with error state",
    description: "Label with error state",
    category: "reui-label",
    tags: ["reui","label"],
    component: lazy(() =>
      import("./src/patterns/label/c-label-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-label-10",
    name: "Label with helper description text",
    description: "Label with helper description text",
    category: "reui-label",
    tags: ["reui","label"],
    component: lazy(() =>
      import("./src/patterns/label/c-label-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-label-12",
    name: "Label with inline edit toggle",
    description: "Label with inline edit toggle",
    category: "reui-label",
    tags: ["reui","label"],
    component: lazy(() =>
      import("./src/patterns/label/c-label-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-label-6",
    name: "Label with optional indicator",
    description: "Label with optional indicator",
    category: "reui-label",
    tags: ["reui","label"],
    component: lazy(() =>
      import("./src/patterns/label/c-label-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-label-5",
    name: "Label with required indicator",
    description: "Label with required indicator",
    category: "reui-label",
    tags: ["reui","label"],
    component: lazy(() =>
      import("./src/patterns/label/c-label-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-label-13",
    name: "Label with status indicator dot",
    description: "Label with status indicator dot",
    category: "reui-label",
    tags: ["reui","label"],
    component: lazy(() =>
      import("./src/patterns/label/c-label-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-label-7",
    name: "Label with tooltip info icon",
    description: "Label with tooltip info icon",
    category: "reui-label",
    tags: ["reui","label"],
    component: lazy(() =>
      import("./src/patterns/label/c-label-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-menubar-1",
    name: "Basic menubar.",
    description: "Basic menubar.",
    category: "reui-menubar",
    tags: ["reui","menubar"],
    component: lazy(() =>
      import("./src/patterns/menubar/c-menubar-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-menubar-5",
    name: "Menubar for formatting and media.",
    description: "Menubar for formatting and media.",
    category: "reui-menubar",
    tags: ["reui","menubar"],
    component: lazy(() =>
      import("./src/patterns/menubar/c-menubar-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-menubar-3",
    name: "Menubar with checkbox & radio items.",
    description: "Menubar with checkbox & radio items.",
    category: "reui-menubar",
    tags: ["reui","menubar"],
    component: lazy(() =>
      import("./src/patterns/menubar/c-menubar-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-menubar-2",
    name: "Menubar with dropdown submenus.",
    description: "Menubar with dropdown submenus.",
    category: "reui-menubar",
    tags: ["reui","menubar"],
    component: lazy(() =>
      import("./src/patterns/menubar/c-menubar-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-menubar-4",
    name: "Menubar with icons.",
    description: "Menubar with icons.",
    category: "reui-menubar",
    tags: ["reui","menubar"],
    component: lazy(() =>
      import("./src/patterns/menubar/c-menubar-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-native-select-1",
    name: "Basic native select.",
    description: "Basic native select.",
    category: "reui-native-select",
    tags: ["reui","native-select"],
    component: lazy(() =>
      import("./src/patterns/native-select/c-native-select-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-native-select-5",
    name: "Disabled native select.",
    description: "Disabled native select.",
    category: "reui-native-select",
    tags: ["reui","native-select"],
    component: lazy(() =>
      import("./src/patterns/native-select/c-native-select-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-native-select-6",
    name: "Invalid native select.",
    description: "Invalid native select.",
    category: "reui-native-select",
    tags: ["reui","native-select"],
    component: lazy(() =>
      import("./src/patterns/native-select/c-native-select-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-native-select-4",
    name: "Native select embedded within a field.",
    description: "Native select embedded within a field.",
    category: "reui-native-select",
    tags: ["reui","native-select"],
    component: lazy(() =>
      import("./src/patterns/native-select/c-native-select-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-native-select-2",
    name: "Native select with options grouped.",
    description: "Native select with options grouped.",
    category: "reui-native-select",
    tags: ["reui","native-select"],
    component: lazy(() =>
      import("./src/patterns/native-select/c-native-select-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-native-select-3",
    name: "Small native select.",
    description: "Small native select.",
    category: "reui-native-select",
    tags: ["reui","native-select"],
    component: lazy(() =>
      import("./src/patterns/native-select/c-native-select-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-navigation-menu-1",
    name: "Basic navigation menu.",
    description: "Basic navigation menu.",
    category: "reui-navigation-menu",
    tags: ["reui","navigation-menu"],
    component: lazy(() =>
      import("./src/patterns/navigation-menu/c-navigation-menu-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-navigation-menu-4",
    name: "Navigation menu with grid layout and learn more button.",
    description: "Navigation menu with grid layout and learn more button.",
    category: "reui-navigation-menu",
    tags: ["reui","navigation-menu"],
    component: lazy(() =>
      import("./src/patterns/navigation-menu/c-navigation-menu-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-navigation-menu-2",
    name: "Navigation menu with grid layout.",
    description: "Navigation menu with grid layout.",
    category: "reui-navigation-menu",
    tags: ["reui","navigation-menu"],
    component: lazy(() =>
      import("./src/patterns/navigation-menu/c-navigation-menu-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-navigation-menu-3",
    name: "Navigation menu with icons.",
    description: "Navigation menu with icons.",
    category: "reui-navigation-menu",
    tags: ["reui","navigation-menu"],
    component: lazy(() =>
      import("./src/patterns/navigation-menu/c-navigation-menu-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-number-field-1",
    name: "Basic number field",
    description: "Basic number field",
    category: "reui-number-field",
    tags: ["reui","number-field"],
    component: lazy(() =>
      import("./src/patterns/number-field/c-number-field-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-number-field-2",
    name: "Basic number field",
    description: "Basic number field",
    category: "reui-number-field",
    tags: ["reui","number-field"],
    component: lazy(() =>
      import("./src/patterns/number-field/c-number-field-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-number-field-3",
    name: "Basic number field",
    description: "Basic number field",
    category: "reui-number-field",
    tags: ["reui","number-field"],
    component: lazy(() =>
      import("./src/patterns/number-field/c-number-field-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-number-field-6",
    name: "Number field in form",
    description: "Number field in form",
    category: "reui-number-field",
    tags: ["reui","number-field"],
    component: lazy(() =>
      import("./src/patterns/number-field/c-number-field-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-number-field-5",
    name: "Number field with spinner buttons",
    description: "Number field with spinner buttons",
    category: "reui-number-field",
    tags: ["reui","number-field"],
    component: lazy(() =>
      import("./src/patterns/number-field/c-number-field-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-number-field-4",
    name: "Number filed wiith buttons on right",
    description: "Number filed wiith buttons on right",
    category: "reui-number-field",
    tags: ["reui","number-field"],
    component: lazy(() =>
      import("./src/patterns/number-field/c-number-field-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-pagination-1",
    name: "Basic pagination.",
    description: "Basic pagination.",
    category: "reui-pagination",
    tags: ["reui","pagination"],
    component: lazy(() =>
      import("./src/patterns/pagination/c-pagination-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-pagination-6",
    name: "Numbered pagination in card",
    description: "Numbered pagination in card",
    category: "reui-pagination",
    tags: ["reui","pagination"],
    component: lazy(() =>
      import("./src/patterns/pagination/c-pagination-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-pagination-14",
    name: "Numbered pagination with go-to-page input",
    description: "Numbered pagination with go-to-page input",
    category: "reui-pagination",
    tags: ["reui","pagination"],
    component: lazy(() =>
      import("./src/patterns/pagination/c-pagination-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-pagination-7",
    name: "Pagination with arrows buttons",
    description: "Pagination with arrows buttons",
    category: "reui-pagination",
    tags: ["reui","pagination"],
    component: lazy(() =>
      import("./src/patterns/pagination/c-pagination-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-pagination-4",
    name: "Pagination with circle buttons.",
    description: "Pagination with circle buttons.",
    category: "reui-pagination",
    tags: ["reui","pagination"],
    component: lazy(() =>
      import("./src/patterns/pagination/c-pagination-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-pagination-10",
    name: "Pagination with ellipsis indicator",
    description: "Pagination with ellipsis indicator",
    category: "reui-pagination",
    tags: ["reui","pagination"],
    component: lazy(() =>
      import("./src/patterns/pagination/c-pagination-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-pagination-5",
    name: "Pagination with go-to-page input",
    description: "Pagination with go-to-page input",
    category: "reui-pagination",
    tags: ["reui","pagination"],
    component: lazy(() =>
      import("./src/patterns/pagination/c-pagination-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-pagination-3",
    name: "Pagination with hover effect.",
    description: "Pagination with hover effect.",
    category: "reui-pagination",
    tags: ["reui","pagination"],
    component: lazy(() =>
      import("./src/patterns/pagination/c-pagination-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-pagination-11",
    name: "Pagination with outline style buttons",
    description: "Pagination with outline style buttons",
    category: "reui-pagination",
    tags: ["reui","pagination"],
    component: lazy(() =>
      import("./src/patterns/pagination/c-pagination-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-pagination-8",
    name: "Pagination with page info on center",
    description: "Pagination with page info on center",
    category: "reui-pagination",
    tags: ["reui","pagination"],
    component: lazy(() =>
      import("./src/patterns/pagination/c-pagination-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-pagination-9",
    name: "Pagination with page info on left",
    description: "Pagination with page info on left",
    category: "reui-pagination",
    tags: ["reui","pagination"],
    component: lazy(() =>
      import("./src/patterns/pagination/c-pagination-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-pagination-15",
    name: "Pagination with page info, numbered pages, ellipsis, and per-page select",
    description: "Pagination with page info, numbered pages, ellipsis, and per-page select",
    category: "reui-pagination",
    tags: ["reui","pagination"],
    component: lazy(() =>
      import("./src/patterns/pagination/c-pagination-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-pagination-13",
    name: "Pagination with page select dropdown and first/last navigation",
    description: "Pagination with page select dropdown and first/last navigation",
    category: "reui-pagination",
    tags: ["reui","pagination"],
    component: lazy(() =>
      import("./src/patterns/pagination/c-pagination-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-pagination-2",
    name: "Pagination without labels.",
    description: "Pagination without labels.",
    category: "reui-pagination",
    tags: ["reui","pagination"],
    component: lazy(() =>
      import("./src/patterns/pagination/c-pagination-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-pagination-12",
    name: "Rows per page select with range info and first/prev/next/last icons",
    description: "Rows per page select with range info and first/prev/next/last icons",
    category: "reui-pagination",
    tags: ["reui","pagination"],
    component: lazy(() =>
      import("./src/patterns/pagination/c-pagination-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-phone-input-1",
    name: "Basic phone input",
    description: "Basic phone input",
    category: "reui-phone-input",
    tags: ["reui","phone-input"],
    component: lazy(() =>
      import("./src/patterns/phone-input/c-phone-input-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-phone-input-4",
    name: "Disabled phone input",
    description: "Disabled phone input",
    category: "reui-phone-input",
    tags: ["reui","phone-input"],
    component: lazy(() =>
      import("./src/patterns/phone-input/c-phone-input-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-phone-input-3",
    name: "Large phone input",
    description: "Large phone input",
    category: "reui-phone-input",
    tags: ["reui","phone-input"],
    component: lazy(() =>
      import("./src/patterns/phone-input/c-phone-input-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-phone-input-6",
    name: "Phone input with error state",
    description: "Phone input with error state",
    category: "reui-phone-input",
    tags: ["reui","phone-input"],
    component: lazy(() =>
      import("./src/patterns/phone-input/c-phone-input-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-phone-input-5",
    name: "Phone input with preset value",
    description: "Phone input with preset value",
    category: "reui-phone-input",
    tags: ["reui","phone-input"],
    component: lazy(() =>
      import("./src/patterns/phone-input/c-phone-input-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-phone-input-7",
    name: "Phone input with specific default country",
    description: "Phone input with specific default country",
    category: "reui-phone-input",
    tags: ["reui","phone-input"],
    component: lazy(() =>
      import("./src/patterns/phone-input/c-phone-input-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-phone-input-8",
    name: "Read-only phone input",
    description: "Read-only phone input",
    category: "reui-phone-input",
    tags: ["reui","phone-input"],
    component: lazy(() =>
      import("./src/patterns/phone-input/c-phone-input-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-phone-input-2",
    name: "Small phone input",
    description: "Small phone input",
    category: "reui-phone-input",
    tags: ["reui","phone-input"],
    component: lazy(() =>
      import("./src/patterns/phone-input/c-phone-input-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-popover-1",
    name: "Basic popover.",
    description: "Basic popover.",
    category: "reui-popover",
    tags: ["reui","popover"],
    component: lazy(() =>
      import("./src/patterns/popover/c-popover-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-popover-4",
    name: "Popover alignment positions.",
    description: "Popover alignment positions.",
    category: "reui-popover",
    tags: ["reui","popover"],
    component: lazy(() =>
      import("./src/patterns/popover/c-popover-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-popover-10",
    name: "Popover with controls",
    description: "Popover with controls",
    category: "reui-popover",
    tags: ["reui","popover"],
    component: lazy(() =>
      import("./src/patterns/popover/c-popover-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-popover-7",
    name: "Popover with custom content",
    description: "Popover with custom content",
    category: "reui-popover",
    tags: ["reui","popover"],
    component: lazy(() =>
      import("./src/patterns/popover/c-popover-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-popover-3",
    name: "Popover with form.",
    description: "Popover with form.",
    category: "reui-popover",
    tags: ["reui","popover"],
    component: lazy(() =>
      import("./src/patterns/popover/c-popover-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-popover-8",
    name: "Popover with media preview.",
    description: "Popover with media preview.",
    category: "reui-popover",
    tags: ["reui","popover"],
    component: lazy(() =>
      import("./src/patterns/popover/c-popover-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-popover-11",
    name: "Popover with navigation",
    description: "Popover with navigation",
    category: "reui-popover",
    tags: ["reui","popover"],
    component: lazy(() =>
      import("./src/patterns/popover/c-popover-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-popover-6",
    name: "Popover with user profile details.",
    description: "Popover with user profile details.",
    category: "reui-popover",
    tags: ["reui","popover"],
    component: lazy(() =>
      import("./src/patterns/popover/c-popover-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-popover-5",
    name: "Popover within a dialog.",
    description: "Popover within a dialog.",
    category: "reui-popover",
    tags: ["reui","popover"],
    component: lazy(() =>
      import("./src/patterns/popover/c-popover-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-popover-2",
    name: "Popovers opening from different sides.",
    description: "Popovers opening from different sides.",
    category: "reui-popover",
    tags: ["reui","popover"],
    component: lazy(() =>
      import("./src/patterns/popover/c-popover-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-popover-9",
    name: "Relative time popover with timezone details",
    description: "Relative time popover with timezone details",
    category: "reui-popover",
    tags: ["reui","popover"],
    component: lazy(() =>
      import("./src/patterns/popover/c-popover-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-progress-1",
    name: "Basic progress.",
    description: "Basic progress.",
    category: "reui-progress",
    tags: ["reui","progress"],
    component: lazy(() =>
      import("./src/patterns/progress/c-progress-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-progress-5",
    name: "File upload list with progress & status.",
    description: "File upload list with progress & status.",
    category: "reui-progress",
    tags: ["reui","progress"],
    component: lazy(() =>
      import("./src/patterns/progress/c-progress-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-progress-3",
    name: "Large progress.",
    description: "Large progress.",
    category: "reui-progress",
    tags: ["reui","progress"],
    component: lazy(() =>
      import("./src/patterns/progress/c-progress-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-progress-7",
    name: "Multi-step progress indicator",
    description: "Multi-step progress indicator",
    category: "reui-progress",
    tags: ["reui","progress"],
    component: lazy(() =>
      import("./src/patterns/progress/c-progress-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-progress-8",
    name: "Progress bar with custom colors.",
    description: "Progress bar with custom colors.",
    category: "reui-progress",
    tags: ["reui","progress"],
    component: lazy(() =>
      import("./src/patterns/progress/c-progress-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-progress-6",
    name: "Progress bar with slider.",
    description: "Progress bar with slider.",
    category: "reui-progress",
    tags: ["reui","progress"],
    component: lazy(() =>
      import("./src/patterns/progress/c-progress-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-progress-4",
    name: "Progress bar with status messages.",
    description: "Progress bar with status messages.",
    category: "reui-progress",
    tags: ["reui","progress"],
    component: lazy(() =>
      import("./src/patterns/progress/c-progress-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-progress-2",
    name: "Small progress.",
    description: "Small progress.",
    category: "reui-progress",
    tags: ["reui","progress"],
    component: lazy(() =>
      import("./src/patterns/progress/c-progress-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-radio-group-12",
    name: "Avatar based card radio group",
    description: "Avatar based card radio group",
    category: "reui-radio-group",
    tags: ["reui","radio-group"],
    component: lazy(() =>
      import("./src/patterns/radio-group/c-radio-group-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-radio-group-1",
    name: "Basic radio group",
    description: "Basic radio group",
    category: "reui-radio-group",
    tags: ["reui","radio-group"],
    component: lazy(() =>
      import("./src/patterns/radio-group/c-radio-group-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-radio-group-7",
    name: "Card radio group with descriptions",
    description: "Card radio group with descriptions",
    category: "reui-radio-group",
    tags: ["reui","radio-group"],
    component: lazy(() =>
      import("./src/patterns/radio-group/c-radio-group-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-radio-group-5",
    name: "Colored radio group",
    description: "Colored radio group",
    category: "reui-radio-group",
    tags: ["reui","radio-group"],
    component: lazy(() =>
      import("./src/patterns/radio-group/c-radio-group-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-radio-group-2",
    name: "Disabled radio group",
    description: "Disabled radio group",
    category: "reui-radio-group",
    tags: ["reui","radio-group"],
    component: lazy(() =>
      import("./src/patterns/radio-group/c-radio-group-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-radio-group-16",
    name: "Inline horizontal radio group",
    description: "Inline horizontal radio group",
    category: "reui-radio-group",
    tags: ["reui","radio-group"],
    component: lazy(() =>
      import("./src/patterns/radio-group/c-radio-group-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-radio-group-4",
    name: "Invalid radio group",
    description: "Invalid radio group",
    category: "reui-radio-group",
    tags: ["reui","radio-group"],
    component: lazy(() =>
      import("./src/patterns/radio-group/c-radio-group-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-radio-group-13",
    name: "Payment method radio cards",
    description: "Payment method radio cards",
    category: "reui-radio-group",
    tags: ["reui","radio-group"],
    component: lazy(() =>
      import("./src/patterns/radio-group/c-radio-group-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-radio-group-17",
    name: "Pricing plan radio cards",
    description: "Pricing plan radio cards",
    category: "reui-radio-group",
    tags: ["reui","radio-group"],
    component: lazy(() =>
      import("./src/patterns/radio-group/c-radio-group-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-radio-group-9",
    name: "Radio group in card with icons",
    description: "Radio group in card with icons",
    category: "reui-radio-group",
    tags: ["reui","radio-group"],
    component: lazy(() =>
      import("./src/patterns/radio-group/c-radio-group-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-radio-group-8",
    name: "Radio group in card with separators",
    description: "Radio group in card with separators",
    category: "reui-radio-group",
    tags: ["reui","radio-group"],
    component: lazy(() =>
      import("./src/patterns/radio-group/c-radio-group-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-radio-group-10",
    name: "Radio group in frame",
    description: "Radio group in frame",
    category: "reui-radio-group",
    tags: ["reui","radio-group"],
    component: lazy(() =>
      import("./src/patterns/radio-group/c-radio-group-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-radio-group-15",
    name: "Radio group with badges",
    description: "Radio group with badges",
    category: "reui-radio-group",
    tags: ["reui","radio-group"],
    component: lazy(() =>
      import("./src/patterns/radio-group/c-radio-group-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-radio-group-11",
    name: "Radio group with grid layout",
    description: "Radio group with grid layout",
    category: "reui-radio-group",
    tags: ["reui","radio-group"],
    component: lazy(() =>
      import("./src/patterns/radio-group/c-radio-group-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-radio-group-6",
    name: "Radio group with legend and description",
    description: "Radio group with legend and description",
    category: "reui-radio-group",
    tags: ["reui","radio-group"],
    component: lazy(() =>
      import("./src/patterns/radio-group/c-radio-group-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-radio-group-14",
    name: "Radio group with tooltip info",
    description: "Radio group with tooltip info",
    category: "reui-radio-group",
    tags: ["reui","radio-group"],
    component: lazy(() =>
      import("./src/patterns/radio-group/c-radio-group-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-radio-group-3",
    name: "Radio with description",
    description: "Radio with description",
    category: "reui-radio-group",
    tags: ["reui","radio-group"],
    component: lazy(() =>
      import("./src/patterns/radio-group/c-radio-group-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-rating-1",
    name: "Basic rating.",
    description: "Basic rating.",
    category: "reui-rating",
    tags: ["reui","rating"],
    component: lazy(() =>
      import("./src/patterns/rating/c-rating-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-rating-8",
    name: "Emoji reaction rating",
    description: "Emoji reaction rating",
    category: "reui-rating",
    tags: ["reui","rating"],
    component: lazy(() =>
      import("./src/patterns/rating/c-rating-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-rating-7",
    name: "Interactive half-star rating",
    description: "Interactive half-star rating",
    category: "reui-rating",
    tags: ["reui","rating"],
    component: lazy(() =>
      import("./src/patterns/rating/c-rating-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-rating-2",
    name: "Rating with decimal value.",
    description: "Rating with decimal value.",
    category: "reui-rating",
    tags: ["reui","rating"],
    component: lazy(() =>
      import("./src/patterns/rating/c-rating-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-rating-4",
    name: "Rating with editable.",
    description: "Rating with editable.",
    category: "reui-rating",
    tags: ["reui","rating"],
    component: lazy(() =>
      import("./src/patterns/rating/c-rating-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-rating-6",
    name: "Rating with review summary",
    description: "Rating with review summary",
    category: "reui-rating",
    tags: ["reui","rating"],
    component: lazy(() =>
      import("./src/patterns/rating/c-rating-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-rating-9",
    name: "Rating with review text input",
    description: "Rating with review text input",
    category: "reui-rating",
    tags: ["reui","rating"],
    component: lazy(() =>
      import("./src/patterns/rating/c-rating-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-rating-3",
    name: "Rating with show value.",
    description: "Rating with show value.",
    category: "reui-rating",
    tags: ["reui","rating"],
    component: lazy(() =>
      import("./src/patterns/rating/c-rating-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-rating-5",
    name: "Rating with size.",
    description: "Rating with size.",
    category: "reui-rating",
    tags: ["reui","rating"],
    component: lazy(() =>
      import("./src/patterns/rating/c-rating-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-resizable-6",
    name: "Handle pill with spring scale on drag",
    description: "Handle pill with spring scale on drag",
    category: "reui-resizable",
    tags: ["reui","resizable"],
    component: lazy(() =>
      import("./src/patterns/resizable/c-resizable-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-resizable-5",
    name: "Handle with animated pill indicator",
    description: "Handle with animated pill indicator",
    category: "reui-resizable",
    tags: ["reui","resizable"],
    component: lazy(() =>
      import("./src/patterns/resizable/c-resizable-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-resizable-7",
    name: "Handle with large capsule expansion on drag",
    description: "Handle with large capsule expansion on drag",
    category: "reui-resizable",
    tags: ["reui","resizable"],
    component: lazy(() =>
      import("./src/patterns/resizable/c-resizable-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-resizable-1",
    name: "Horizontal resizable layout",
    description: "Horizontal resizable layout",
    category: "reui-resizable",
    tags: ["reui","resizable"],
    component: lazy(() =>
      import("./src/patterns/resizable/c-resizable-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-resizable-8",
    name: "Nested layout with animated pill handles",
    description: "Nested layout with animated pill handles",
    category: "reui-resizable",
    tags: ["reui","resizable"],
    component: lazy(() =>
      import("./src/patterns/resizable/c-resizable-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-resizable-3",
    name: "Nested mixed-direction resizable layout.",
    description: "Nested mixed-direction resizable layout.",
    category: "reui-resizable",
    tags: ["reui","resizable"],
    component: lazy(() =>
      import("./src/patterns/resizable/c-resizable-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-resizable-4",
    name: "Nested resizable",
    description: "Nested resizable",
    category: "reui-resizable",
    tags: ["reui","resizable"],
    component: lazy(() =>
      import("./src/patterns/resizable/c-resizable-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-resizable-10",
    name: "State-tracked resizable layout.",
    description: "State-tracked resizable layout.",
    category: "reui-resizable",
    tags: ["reui","resizable"],
    component: lazy(() =>
      import("./src/patterns/resizable/c-resizable-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-resizable-9",
    name: "Three-panel layout with animated pill handles",
    description: "Three-panel layout with animated pill handles",
    category: "reui-resizable",
    tags: ["reui","resizable"],
    component: lazy(() =>
      import("./src/patterns/resizable/c-resizable-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-resizable-2",
    name: "Vertical resizable layout.",
    description: "Vertical resizable layout.",
    category: "reui-resizable",
    tags: ["reui","resizable"],
    component: lazy(() =>
      import("./src/patterns/resizable/c-resizable-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-scroll-area-1",
    name: "Basic scroll area",
    description: "Basic scroll area",
    category: "reui-scroll-area",
    tags: ["reui","scroll-area"],
    component: lazy(() =>
      import("./src/patterns/scroll-area/c-scroll-area-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-scroll-area-3",
    name: "Scroll area with both scrollbars",
    description: "Scroll area with both scrollbars",
    category: "reui-scroll-area",
    tags: ["reui","scroll-area"],
    component: lazy(() =>
      import("./src/patterns/scroll-area/c-scroll-area-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-scroll-area-4",
    name: "Scroll area with fade effect",
    description: "Scroll area with fade effect",
    category: "reui-scroll-area",
    tags: ["reui","scroll-area"],
    component: lazy(() =>
      import("./src/patterns/scroll-area/c-scroll-area-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-scroll-area-2",
    name: "Scroll area with horizontal scrollbar",
    description: "Scroll area with horizontal scrollbar",
    category: "reui-scroll-area",
    tags: ["reui","scroll-area"],
    component: lazy(() =>
      import("./src/patterns/scroll-area/c-scroll-area-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-scroll-area-5",
    name: "Scroll area with scrollbar gutter",
    description: "Scroll area with scrollbar gutter",
    category: "reui-scroll-area",
    tags: ["reui","scroll-area"],
    component: lazy(() =>
      import("./src/patterns/scroll-area/c-scroll-area-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-scrollspy-2",
    name: "Basic scroll area",
    description: "Basic scroll area",
    category: "reui-scrollspy",
    tags: ["reui","scrollspy"],
    component: lazy(() =>
      import("./src/patterns/scrollspy/c-scrollspy-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-scrollspy-1",
    name: "Basic scrollspy",
    description: "Basic scrollspy",
    category: "reui-scrollspy",
    tags: ["reui","scrollspy"],
    component: lazy(() =>
      import("./src/patterns/scrollspy/c-scrollspy-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-1",
    name: "A basic select component with a list of options",
    description: "A basic select component with a list of options",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-25",
    name: "Country picker select with flag emojis",
    description: "Country picker select with flag emojis",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-25").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-31",
    name: "Font family select with preview",
    description: "Font family select with preview",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-31").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-30",
    name: "Priority select with colored badges",
    description: "Priority select with colored badges",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-30").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-10",
    name: "Select component in a disabled state",
    description: "Select component in a disabled state",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-9",
    name: "Select component in an invalid state",
    description: "Select component in an invalid state",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-13",
    name: "Select component inline with Input",
    description: "Select component inline with Input",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-11",
    name: "Select component inside a Dialog",
    description: "Select component inside a Dialog",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-4",
    name: "Select component with a large list of options",
    description: "Select component with a large list of options",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-6",
    name: "Select component with a subscription plan style",
    description: "Select component with a subscription plan style",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-14",
    name: "Select component with Button side by side",
    description: "Select component with Button side by side",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-3",
    name: "Select component with grouped options and labels",
    description: "Select component with grouped options and labels",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-7",
    name: "Select component with item alignment disabled",
    description: "Select component with item alignment disabled",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-15",
    name: "Select component with item alignment enabled",
    description: "Select component with item alignment enabled",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-12",
    name: "Select component with single selection",
    description: "Select component with single selection",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-5",
    name: "Select component with small trigger size",
    description: "Select component with small trigger size",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-8",
    name: "Select component within a Field with label and description",
    description: "Select component within a Field with label and description",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-29",
    name: "Select with avatar items for team member assignment",
    description: "Select with avatar items for team member assignment",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-29").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-21",
    name: "Select with clear button",
    description: "Select with clear button",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-21").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-17",
    name: "Select with colored bullets for status",
    description: "Select with colored bullets for status",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-23",
    name: "Select with colored status dots",
    description: "Select with colored status dots",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-23").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-16",
    name: "Select with custom access level descriptions",
    description: "Select with custom access level descriptions",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-22",
    name: "Select with custom chevrons up down icon",
    description: "Select with custom chevrons up down icon",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-22").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-27",
    name: "Select with description text per option",
    description: "Select with description text per option",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-27").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-24",
    name: "Select with grouped options and separators",
    description: "Select with grouped options and separators",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-24").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-32",
    name: "Select with icon-labeled categories",
    description: "Select with icon-labeled categories",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-32").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-2",
    name: "Select with icons and placeholder state",
    description: "Select with icons and placeholder state",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-20",
    name: "Select with indicator on the left side",
    description: "Select with indicator on the left side",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-20").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-19",
    name: "Select with status badges",
    description: "Select with status badges",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-19").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-18",
    name: "Select with user avatars",
    description: "Select with user avatars",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-18").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-33",
    name: "Size variant select with small trigger",
    description: "Size variant select with small trigger",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-33").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-26",
    name: "Status filter select with colored dots",
    description: "Status filter select with colored dots",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-26").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-select-28",
    name: "Timezone select with UTC offsets",
    description: "Timezone select with UTC offsets",
    category: "reui-select",
    tags: ["reui","select"],
    component: lazy(() =>
      import("./src/patterns/select/c-select-28").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-separator-4",
    name: "Horizontal separator between items in a list.",
    description: "Horizontal separator between items in a list.",
    category: "reui-separator",
    tags: ["reui","separator"],
    component: lazy(() =>
      import("./src/patterns/separator/c-separator-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-separator-1",
    name: "Horizontal separator for content sections.",
    description: "Horizontal separator for content sections.",
    category: "reui-separator",
    tags: ["reui","separator"],
    component: lazy(() =>
      import("./src/patterns/separator/c-separator-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-separator-6",
    name: "Order summary with separators",
    description: "Order summary with separators",
    category: "reui-separator",
    tags: ["reui","separator"],
    component: lazy(() =>
      import("./src/patterns/separator/c-separator-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-separator-5",
    name: "Separator with centered text label",
    description: "Separator with centered text label",
    category: "reui-separator",
    tags: ["reui","separator"],
    component: lazy(() =>
      import("./src/patterns/separator/c-separator-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-separator-2",
    name: "Vertical separator for inline elements.",
    description: "Vertical separator for inline elements.",
    category: "reui-separator",
    tags: ["reui","separator"],
    component: lazy(() =>
      import("./src/patterns/separator/c-separator-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-separator-3",
    name: "Vertical separator groups related menu items.",
    description: "Vertical separator groups related menu items.",
    category: "reui-separator",
    tags: ["reui","separator"],
    component: lazy(() =>
      import("./src/patterns/separator/c-separator-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sheet-1",
    name: "Sheet containing a form for editing profile information.",
    description: "Sheet containing a form for editing profile information.",
    category: "reui-sheet",
    tags: ["reui","sheet"],
    component: lazy(() =>
      import("./src/patterns/sheet/c-sheet-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sheet-2",
    name: "Sheet containing a form for editing profile information.",
    description: "Sheet containing a form for editing profile information.",
    category: "reui-sheet",
    tags: ["reui","sheet"],
    component: lazy(() =>
      import("./src/patterns/sheet/c-sheet-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sheet-4",
    name: "Sheet with scrollable content",
    description: "Sheet with scrollable content",
    category: "reui-sheet",
    tags: ["reui","sheet"],
    component: lazy(() =>
      import("./src/patterns/sheet/c-sheet-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sheet-3",
    name: "Sheets that open from any side.",
    description: "Sheets that open from any side.",
    category: "reui-sheet",
    tags: ["reui","sheet"],
    component: lazy(() =>
      import("./src/patterns/sheet/c-sheet-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-skeleton-2",
    name: "Skeleton loader for a card component.",
    description: "Skeleton loader for a card component.",
    category: "reui-skeleton",
    tags: ["reui","skeleton"],
    component: lazy(() =>
      import("./src/patterns/skeleton/c-skeleton-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-skeleton-8",
    name: "Skeleton loader for a card grid",
    description: "Skeleton loader for a card grid",
    category: "reui-skeleton",
    tags: ["reui","skeleton"],
    component: lazy(() =>
      import("./src/patterns/skeleton/c-skeleton-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-skeleton-6",
    name: "Skeleton loader for a dashboard stats row",
    description: "Skeleton loader for a dashboard stats row",
    category: "reui-skeleton",
    tags: ["reui","skeleton"],
    component: lazy(() =>
      import("./src/patterns/skeleton/c-skeleton-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-skeleton-5",
    name: "Skeleton loader for a data table.",
    description: "Skeleton loader for a data table.",
    category: "reui-skeleton",
    tags: ["reui","skeleton"],
    component: lazy(() =>
      import("./src/patterns/skeleton/c-skeleton-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-skeleton-4",
    name: "Skeleton loader for a form.",
    description: "Skeleton loader for a form.",
    category: "reui-skeleton",
    tags: ["reui","skeleton"],
    component: lazy(() =>
      import("./src/patterns/skeleton/c-skeleton-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-skeleton-9",
    name: "Skeleton loader for a full profile page",
    description: "Skeleton loader for a full profile page",
    category: "reui-skeleton",
    tags: ["reui","skeleton"],
    component: lazy(() =>
      import("./src/patterns/skeleton/c-skeleton-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-skeleton-7",
    name: "Skeleton loader for a list with actions",
    description: "Skeleton loader for a list with actions",
    category: "reui-skeleton",
    tags: ["reui","skeleton"],
    component: lazy(() =>
      import("./src/patterns/skeleton/c-skeleton-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-skeleton-1",
    name: "Skeleton loader for avatars and user info.",
    description: "Skeleton loader for avatars and user info.",
    category: "reui-skeleton",
    tags: ["reui","skeleton"],
    component: lazy(() =>
      import("./src/patterns/skeleton/c-skeleton-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-skeleton-10",
    name: "Skeleton loader for chat messages",
    description: "Skeleton loader for chat messages",
    category: "reui-skeleton",
    tags: ["reui","skeleton"],
    component: lazy(() =>
      import("./src/patterns/skeleton/c-skeleton-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-skeleton-3",
    name: "Skeleton loader for text and paragraphs.",
    description: "Skeleton loader for text and paragraphs.",
    category: "reui-skeleton",
    tags: ["reui","skeleton"],
    component: lazy(() =>
      import("./src/patterns/skeleton/c-skeleton-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-slider-1",
    name: "Basic slider.",
    description: "Basic slider.",
    category: "reui-slider",
    tags: ["reui","slider"],
    component: lazy(() =>
      import("./src/patterns/slider/c-slider-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-slider-8",
    name: "Color temperature slider",
    description: "Color temperature slider",
    category: "reui-slider",
    tags: ["reui","slider"],
    component: lazy(() =>
      import("./src/patterns/slider/c-slider-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-slider-2",
    name: "Disabled slider",
    description: "Disabled slider",
    category: "reui-slider",
    tags: ["reui","slider"],
    component: lazy(() =>
      import("./src/patterns/slider/c-slider-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-slider-12",
    name: "Rating slider with emoji feedback",
    description: "Rating slider with emoji feedback",
    category: "reui-slider",
    tags: ["reui","slider"],
    component: lazy(() =>
      import("./src/patterns/slider/c-slider-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-slider-7",
    name: "Slider synced with number input",
    description: "Slider synced with number input",
    category: "reui-slider",
    tags: ["reui","slider"],
    component: lazy(() =>
      import("./src/patterns/slider/c-slider-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-slider-5",
    name: "Slider with controlled value tracking",
    description: "Slider with controlled value tracking",
    category: "reui-slider",
    tags: ["reui","slider"],
    component: lazy(() =>
      import("./src/patterns/slider/c-slider-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-slider-11",
    name: "Slider with dynamic tooltip indicator",
    description: "Slider with dynamic tooltip indicator",
    category: "reui-slider",
    tags: ["reui","slider"],
    component: lazy(() =>
      import("./src/patterns/slider/c-slider-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-slider-3",
    name: "Slider with multiple discrete values",
    description: "Slider with multiple discrete values",
    category: "reui-slider",
    tags: ["reui","slider"],
    component: lazy(() =>
      import("./src/patterns/slider/c-slider-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-slider-6",
    name: "Slider with range selection",
    description: "Slider with range selection",
    category: "reui-slider",
    tags: ["reui","slider"],
    component: lazy(() =>
      import("./src/patterns/slider/c-slider-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-slider-9",
    name: "Slider with reference labels",
    description: "Slider with reference labels",
    category: "reui-slider",
    tags: ["reui","slider"],
    component: lazy(() =>
      import("./src/patterns/slider/c-slider-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-slider-10",
    name: "Slider with tick marks",
    description: "Slider with tick marks",
    category: "reui-slider",
    tags: ["reui","slider"],
    component: lazy(() =>
      import("./src/patterns/slider/c-slider-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-slider-4",
    name: "Vertical slider with range selection",
    description: "Vertical slider with range selection",
    category: "reui-slider",
    tags: ["reui","slider"],
    component: lazy(() =>
      import("./src/patterns/slider/c-slider-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-1",
    name: "Basic toast notification.",
    description: "Basic toast notification.",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-12",
    name: "Custom accent border toast",
    description: "Custom accent border toast",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-20",
    name: "Custom integration toast",
    description: "Custom integration toast",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-20").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-14",
    name: "Custom invert error toast with details",
    description: "Custom invert error toast with details",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-15",
    name: "Custom invert info toast with avatar",
    description: "Custom invert info toast with avatar",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-13",
    name: "Custom invert success toast",
    description: "Custom invert success toast",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-16",
    name: "Custom invert warning toast with countdown",
    description: "Custom invert warning toast with countdown",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-17",
    name: "Multi-action invert toast with avatar group",
    description: "Multi-action invert toast with avatar group",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-7",
    name: "Promise toast with loading state",
    description: "Promise toast with loading state",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-5",
    name: "Toast duration options",
    description: "Toast duration options",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-2",
    name: "Toast notification with description.",
    description: "Toast notification with description.",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-3",
    name: "Toast positions",
    description: "Toast positions",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-4",
    name: "Toast variants with colored icons",
    description: "Toast variants with colored icons",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-6",
    name: "Toast with action button",
    description: "Toast with action button",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-18",
    name: "Toast with close button on top-right",
    description: "Toast with close button on top-right",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-18").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-8",
    name: "Toast with custom close and cancel buttons",
    description: "Toast with custom close and cancel buttons",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-19",
    name: "Toast with custom icon",
    description: "Toast with custom icon",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-19").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-9",
    name: "Toast with custom rich content",
    description: "Toast with custom rich content",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-11",
    name: "Toast with status alert markup",
    description: "Toast with status alert markup",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-10",
    name: "Toast with upload progress simulation",
    description: "Toast with upload progress simulation",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sonner-21",
    name: "Updatable toast with ID",
    description: "Updatable toast with ID",
    category: "reui-sonner",
    tags: ["reui","sonner"],
    component: lazy(() =>
      import("./src/patterns/sonner/c-sonner-21").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sortable-7",
    name: "Sortable image gallery grid with frame",
    description: "Sortable image gallery grid with frame",
    category: "reui-sortable",
    tags: ["reui","sortable"],
    component: lazy(() =>
      import("./src/patterns/sortable/c-sortable-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sortable-1",
    name: "Sortable list of items with drag-and-drop",
    description: "Sortable list of items with drag-and-drop",
    category: "reui-sortable",
    tags: ["reui","sortable"],
    component: lazy(() =>
      import("./src/patterns/sortable/c-sortable-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sortable-2",
    name: "Sortable list of items with grid layout",
    description: "Sortable list of items with grid layout",
    category: "reui-sortable",
    tags: ["reui","sortable"],
    component: lazy(() =>
      import("./src/patterns/sortable/c-sortable-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sortable-3",
    name: "Sortable list of items with nested layout",
    description: "Sortable list of items with nested layout",
    category: "reui-sortable",
    tags: ["reui","sortable"],
    component: lazy(() =>
      import("./src/patterns/sortable/c-sortable-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sortable-8",
    name: "Sortable list persisted to a backend",
    description: "Persist the new order with onValueCommit, optimistic updates, and Sonner rollback",
    category: "reui-sortable",
    tags: ["reui","sortable"],
    component: lazy(() =>
      import("./src/patterns/sortable/c-sortable-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sortable-4",
    name: "Sortable playlist with frame",
    description: "Sortable playlist with frame",
    category: "reui-sortable",
    tags: ["reui","sortable"],
    component: lazy(() =>
      import("./src/patterns/sortable/c-sortable-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sortable-5",
    name: "Sortable settings priority with frame",
    description: "Sortable settings priority with frame",
    category: "reui-sortable",
    tags: ["reui","sortable"],
    component: lazy(() =>
      import("./src/patterns/sortable/c-sortable-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-sortable-6",
    name: "Sortable sidebar navigation with frame",
    description: "Sortable sidebar navigation with frame",
    category: "reui-sortable",
    tags: ["reui","sortable"],
    component: lazy(() =>
      import("./src/patterns/sortable/c-sortable-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-spinner-10",
    name: "Animated loading dots",
    description: "Animated loading dots",
    category: "reui-spinner",
    tags: ["reui","spinner"],
    component: lazy(() =>
      import("./src/patterns/spinner/c-spinner-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-spinner-1",
    name: "Basic spinner.",
    description: "Basic spinner.",
    category: "reui-spinner",
    tags: ["reui","spinner"],
    component: lazy(() =>
      import("./src/patterns/spinner/c-spinner-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-spinner-6",
    name: "Button loading states",
    description: "Button loading states",
    category: "reui-spinner",
    tags: ["reui","spinner"],
    component: lazy(() =>
      import("./src/patterns/spinner/c-spinner-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-spinner-8",
    name: "Full page loading state",
    description: "Full page loading state",
    category: "reui-spinner",
    tags: ["reui","spinner"],
    component: lazy(() =>
      import("./src/patterns/spinner/c-spinner-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-spinner-9",
    name: "Inline loading text with spinner",
    description: "Inline loading text with spinner",
    category: "reui-spinner",
    tags: ["reui","spinner"],
    component: lazy(() =>
      import("./src/patterns/spinner/c-spinner-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-spinner-7",
    name: "Overlay loading spinner",
    description: "Overlay loading spinner",
    category: "reui-spinner",
    tags: ["reui","spinner"],
    component: lazy(() =>
      import("./src/patterns/spinner/c-spinner-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-spinner-12",
    name: "Spinner color variants",
    description: "Spinner color variants",
    category: "reui-spinner",
    tags: ["reui","spinner"],
    component: lazy(() =>
      import("./src/patterns/spinner/c-spinner-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-spinner-5",
    name: "Spinner in empty state.",
    description: "Spinner in empty state.",
    category: "reui-spinner",
    tags: ["reui","spinner"],
    component: lazy(() =>
      import("./src/patterns/spinner/c-spinner-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-spinner-4",
    name: "Spinner in input group.",
    description: "Spinner in input group.",
    category: "reui-spinner",
    tags: ["reui","spinner"],
    component: lazy(() =>
      import("./src/patterns/spinner/c-spinner-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-spinner-11",
    name: "Spinner overlay on card",
    description: "Spinner overlay on card",
    category: "reui-spinner",
    tags: ["reui","spinner"],
    component: lazy(() =>
      import("./src/patterns/spinner/c-spinner-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-spinner-3",
    name: "Spinners in badges.",
    description: "Spinners in badges.",
    category: "reui-spinner",
    tags: ["reui","spinner"],
    component: lazy(() =>
      import("./src/patterns/spinner/c-spinner-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-spinner-2",
    name: "Spinners in buttons.",
    description: "Spinners in buttons.",
    category: "reui-spinner",
    tags: ["reui","spinner"],
    component: lazy(() =>
      import("./src/patterns/spinner/c-spinner-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-stepper-1",
    name: "Basic stepper",
    description: "Basic stepper",
    category: "reui-stepper",
    tags: ["reui","stepper"],
    component: lazy(() =>
      import("./src/patterns/stepper/c-stepper-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-stepper-4",
    name: "Controlled stepper",
    description: "Controlled stepper",
    category: "reui-stepper",
    tags: ["reui","stepper"],
    component: lazy(() =>
      import("./src/patterns/stepper/c-stepper-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-stepper-2",
    name: "Stepper with completed state",
    description: "Stepper with completed state",
    category: "reui-stepper",
    tags: ["reui","stepper"],
    component: lazy(() =>
      import("./src/patterns/stepper/c-stepper-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-stepper-10",
    name: "Stepper with content for each step",
    description: "Stepper with content for each step",
    category: "reui-stepper",
    tags: ["reui","stepper"],
    component: lazy(() =>
      import("./src/patterns/stepper/c-stepper-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-stepper-8",
    name: "Stepper with descriptions",
    description: "Stepper with descriptions",
    category: "reui-stepper",
    tags: ["reui","stepper"],
    component: lazy(() =>
      import("./src/patterns/stepper/c-stepper-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-stepper-7",
    name: "Stepper with icons and badges",
    description: "Stepper with icons and badges",
    category: "reui-stepper",
    tags: ["reui","stepper"],
    component: lazy(() =>
      import("./src/patterns/stepper/c-stepper-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-stepper-9",
    name: "Stepper with inline titles",
    description: "Stepper with inline titles",
    category: "reui-stepper",
    tags: ["reui","stepper"],
    component: lazy(() =>
      import("./src/patterns/stepper/c-stepper-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-stepper-3",
    name: "Stepper with loading state",
    description: "Stepper with loading state",
    category: "reui-stepper",
    tags: ["reui","stepper"],
    component: lazy(() =>
      import("./src/patterns/stepper/c-stepper-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-stepper-11",
    name: "Stepper with progress bar and titles",
    description: "Stepper with progress bar and titles",
    category: "reui-stepper",
    tags: ["reui","stepper"],
    component: lazy(() =>
      import("./src/patterns/stepper/c-stepper-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-stepper-6",
    name: "Stepper with progress bar indicator",
    description: "Stepper with progress bar indicator",
    category: "reui-stepper",
    tags: ["reui","stepper"],
    component: lazy(() =>
      import("./src/patterns/stepper/c-stepper-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-stepper-12",
    name: "Stepper with segmented progress bar",
    description: "Stepper with segmented progress bar",
    category: "reui-stepper",
    tags: ["reui","stepper"],
    component: lazy(() =>
      import("./src/patterns/stepper/c-stepper-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-stepper-5",
    name: "Stepper with title and indicator",
    description: "Stepper with title and indicator",
    category: "reui-stepper",
    tags: ["reui","stepper"],
    component: lazy(() =>
      import("./src/patterns/stepper/c-stepper-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-stepper-14",
    name: "Stepper with vertical orientation",
    description: "Stepper with vertical orientation",
    category: "reui-stepper",
    tags: ["reui","stepper"],
    component: lazy(() =>
      import("./src/patterns/stepper/c-stepper-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-stepper-13",
    name: "Stepper with vertical orientation and descriptions",
    description: "Stepper with vertical orientation and descriptions",
    category: "reui-stepper",
    tags: ["reui","stepper"],
    component: lazy(() =>
      import("./src/patterns/stepper/c-stepper-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-stepper-15",
    name: "Stepper with vertical orientation and titles",
    description: "Stepper with vertical orientation and titles",
    category: "reui-stepper",
    tags: ["reui","stepper"],
    component: lazy(() =>
      import("./src/patterns/stepper/c-stepper-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-switch-1",
    name: "Basic switch.",
    description: "Basic switch.",
    category: "reui-switch",
    tags: ["reui","switch"],
    component: lazy(() =>
      import("./src/patterns/switch/c-switch-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-switch-11",
    name: "Colored switches",
    description: "Colored switches",
    category: "reui-switch",
    tags: ["reui","switch"],
    component: lazy(() =>
      import("./src/patterns/switch/c-switch-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-switch-13",
    name: "Compact settings table with switches",
    description: "Compact settings table with switches",
    category: "reui-switch",
    tags: ["reui","switch"],
    component: lazy(() =>
      import("./src/patterns/switch/c-switch-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-switch-12",
    name: "Destructive switch with confirmation text",
    description: "Destructive switch with confirmation text",
    category: "reui-switch",
    tags: ["reui","switch"],
    component: lazy(() =>
      import("./src/patterns/switch/c-switch-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-switch-3",
    name: "Disabled switch.",
    description: "Disabled switch.",
    category: "reui-switch",
    tags: ["reui","switch"],
    component: lazy(() =>
      import("./src/patterns/switch/c-switch-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-switch-5",
    name: "Switch group",
    description: "Switch group",
    category: "reui-switch",
    tags: ["reui","switch"],
    component: lazy(() =>
      import("./src/patterns/switch/c-switch-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-switch-4",
    name: "Switch in different sizes.",
    description: "Switch in different sizes.",
    category: "reui-switch",
    tags: ["reui","switch"],
    component: lazy(() =>
      import("./src/patterns/switch/c-switch-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-switch-8",
    name: "Switch in frame",
    description: "Switch in frame",
    category: "reui-switch",
    tags: ["reui","switch"],
    component: lazy(() =>
      import("./src/patterns/switch/c-switch-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-switch-7",
    name: "Switch list in card with icons",
    description: "Switch list in card with icons",
    category: "reui-switch",
    tags: ["reui","switch"],
    component: lazy(() =>
      import("./src/patterns/switch/c-switch-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-switch-6",
    name: "Switch list in card with separators",
    description: "Switch list in card with separators",
    category: "reui-switch",
    tags: ["reui","switch"],
    component: lazy(() =>
      import("./src/patterns/switch/c-switch-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-switch-10",
    name: "Switch with badges",
    description: "Switch with badges",
    category: "reui-switch",
    tags: ["reui","switch"],
    component: lazy(() =>
      import("./src/patterns/switch/c-switch-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-switch-2",
    name: "Switch with description.",
    description: "Switch with description.",
    category: "reui-switch",
    tags: ["reui","switch"],
    component: lazy(() =>
      import("./src/patterns/switch/c-switch-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-switch-14",
    name: "Switch with descriptions in card grid",
    description: "Switch with descriptions in card grid",
    category: "reui-switch",
    tags: ["reui","switch"],
    component: lazy(() =>
      import("./src/patterns/switch/c-switch-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-switch-9",
    name: "Switch with tooltip info",
    description: "Switch with tooltip info",
    category: "reui-switch",
    tags: ["reui","switch"],
    component: lazy(() =>
      import("./src/patterns/switch/c-switch-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-table-9",
    name: "Activity log table with user avatars and timestamps",
    description: "Activity log table with user avatars and timestamps",
    category: "reui-table",
    tags: ["reui","table"],
    component: lazy(() =>
      import("./src/patterns/table/c-table-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-table-12",
    name: "API keys table with permission badges and actions",
    description: "API keys table with permission badges and actions",
    category: "reui-table",
    tags: ["reui","table"],
    component: lazy(() =>
      import("./src/patterns/table/c-table-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-table-1",
    name: "Basic table.",
    description: "Basic table.",
    category: "reui-table",
    tags: ["reui","table"],
    component: lazy(() =>
      import("./src/patterns/table/c-table-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-table-13",
    name: "File manager table with owners and sharing badges",
    description: "File manager table with owners and sharing badges",
    category: "reui-table",
    tags: ["reui","table"],
    component: lazy(() =>
      import("./src/patterns/table/c-table-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-table-14",
    name: "Issues table with priority, assignee, and labels",
    description: "Issues table with priority, assignee, and labels",
    category: "reui-table",
    tags: ["reui","table"],
    component: lazy(() =>
      import("./src/patterns/table/c-table-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-table-15",
    name: "Leaderboard table with rank, score, and level badges",
    description: "Leaderboard table with rank, score, and level badges",
    category: "reui-table",
    tags: ["reui","table"],
    component: lazy(() =>
      import("./src/patterns/table/c-table-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-table-7",
    name: "Orders table with customer info and payment status",
    description: "Orders table with customer info and payment status",
    category: "reui-table",
    tags: ["reui","table"],
    component: lazy(() =>
      import("./src/patterns/table/c-table-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-table-11",
    name: "Product inventory table with stock badges and prices",
    description: "Product inventory table with stock badges and prices",
    category: "reui-table",
    tags: ["reui","table"],
    component: lazy(() =>
      import("./src/patterns/table/c-table-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-table-8",
    name: "Projects table with team avatars and status",
    description: "Projects table with team avatars and status",
    category: "reui-table",
    tags: ["reui","table"],
    component: lazy(() =>
      import("./src/patterns/table/c-table-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-table-10",
    name: "Subscriptions table with plan badges and billing info",
    description: "Subscriptions table with plan badges and billing info",
    category: "reui-table",
    tags: ["reui","table"],
    component: lazy(() =>
      import("./src/patterns/table/c-table-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-table-4",
    name: "Table card with actions column.",
    description: "Table card with actions column.",
    category: "reui-table",
    tags: ["reui","table"],
    component: lazy(() =>
      import("./src/patterns/table/c-table-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-table-3",
    name: "Table in card with status badges.",
    description: "Table in card with status badges.",
    category: "reui-table",
    tags: ["reui","table"],
    component: lazy(() =>
      import("./src/patterns/table/c-table-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-table-2",
    name: "Table with footer.",
    description: "Table with footer.",
    category: "reui-table",
    tags: ["reui","table"],
    component: lazy(() =>
      import("./src/patterns/table/c-table-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-table-5",
    name: "Table with interactive elements.",
    description: "Table with interactive elements.",
    category: "reui-table",
    tags: ["reui","table"],
    component: lazy(() =>
      import("./src/patterns/table/c-table-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-table-6",
    name: "Team members table with avatars, roles, and status",
    description: "Team members table with avatars, roles, and status",
    category: "reui-table",
    tags: ["reui","table"],
    component: lazy(() =>
      import("./src/patterns/table/c-table-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-table-16",
    name: "Vertical table with employee profile details",
    description: "Vertical table with employee profile details",
    category: "reui-table",
    tags: ["reui","table"],
    component: lazy(() =>
      import("./src/patterns/table/c-table-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-table-17",
    name: "Vertical table with server configuration details",
    description: "Vertical table with server configuration details",
    category: "reui-table",
    tags: ["reui","table"],
    component: lazy(() =>
      import("./src/patterns/table/c-table-17").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tabs-1",
    name: "Basic tabs.",
    description: "Basic tabs.",
    category: "reui-tabs",
    tags: ["reui","tabs"],
    component: lazy(() =>
      import("./src/patterns/tabs/c-tabs-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tabs-9",
    name: "Segmented control tabs",
    description: "Segmented control tabs",
    category: "reui-tabs",
    tags: ["reui","tabs"],
    component: lazy(() =>
      import("./src/patterns/tabs/c-tabs-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tabs-7",
    name: "Tabs with badge counts",
    description: "Tabs with badge counts",
    category: "reui-tabs",
    tags: ["reui","tabs"],
    component: lazy(() =>
      import("./src/patterns/tabs/c-tabs-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tabs-6",
    name: "Tabs with icons",
    description: "Tabs with icons",
    category: "reui-tabs",
    tags: ["reui","tabs"],
    component: lazy(() =>
      import("./src/patterns/tabs/c-tabs-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tabs-8",
    name: "Tabs with icons and line variant",
    description: "Tabs with icons and line variant",
    category: "reui-tabs",
    tags: ["reui","tabs"],
    component: lazy(() =>
      import("./src/patterns/tabs/c-tabs-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tabs-5",
    name: "Tabs with icons.",
    description: "Tabs with icons.",
    category: "reui-tabs",
    tags: ["reui","tabs"],
    component: lazy(() =>
      import("./src/patterns/tabs/c-tabs-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tabs-2",
    name: "Tabs with line variant.",
    description: "Tabs with line variant.",
    category: "reui-tabs",
    tags: ["reui","tabs"],
    component: lazy(() =>
      import("./src/patterns/tabs/c-tabs-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tabs-4",
    name: "Tabs with vertical orientation and line variant.",
    description: "Tabs with vertical orientation and line variant.",
    category: "reui-tabs",
    tags: ["reui","tabs"],
    component: lazy(() =>
      import("./src/patterns/tabs/c-tabs-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tabs-3",
    name: "Tabs with vertical orientation.",
    description: "Tabs with vertical orientation.",
    category: "reui-tabs",
    tags: ["reui","tabs"],
    component: lazy(() =>
      import("./src/patterns/tabs/c-tabs-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-textarea-6",
    name: "Auto-resize textarea with character count",
    description: "Auto-resize textarea with character count",
    category: "reui-textarea",
    tags: ["reui","textarea"],
    component: lazy(() =>
      import("./src/patterns/textarea/c-textarea-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-textarea-1",
    name: "Basic textarea.",
    description: "Basic textarea.",
    category: "reui-textarea",
    tags: ["reui","textarea"],
    component: lazy(() =>
      import("./src/patterns/textarea/c-textarea-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-textarea-5",
    name: "Disabled textarea.",
    description: "Disabled textarea.",
    category: "reui-textarea",
    tags: ["reui","textarea"],
    component: lazy(() =>
      import("./src/patterns/textarea/c-textarea-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-textarea-2",
    name: "Invalid textarea.",
    description: "Invalid textarea.",
    category: "reui-textarea",
    tags: ["reui","textarea"],
    component: lazy(() =>
      import("./src/patterns/textarea/c-textarea-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-textarea-4",
    name: "Textarea with description.",
    description: "Textarea with description.",
    category: "reui-textarea",
    tags: ["reui","textarea"],
    component: lazy(() =>
      import("./src/patterns/textarea/c-textarea-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-textarea-3",
    name: "Textarea with label.",
    description: "Textarea with label.",
    category: "reui-textarea",
    tags: ["reui","textarea"],
    component: lazy(() =>
      import("./src/patterns/textarea/c-textarea-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-timeline-11",
    name: "Activity feed timeline with user avatars",
    description: "Activity feed timeline with user avatars",
    category: "reui-timeline",
    tags: ["reui","timeline"],
    component: lazy(() =>
      import("./src/patterns/timeline/c-timeline-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-timeline-1",
    name: "Basic timeline.",
    description: "Basic timeline.",
    category: "reui-timeline",
    tags: ["reui","timeline"],
    component: lazy(() =>
      import("./src/patterns/timeline/c-timeline-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-timeline-12",
    name: "Compact horizontal milestone timeline",
    description: "Compact horizontal milestone timeline",
    category: "reui-timeline",
    tags: ["reui","timeline"],
    component: lazy(() =>
      import("./src/patterns/timeline/c-timeline-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-timeline-10",
    name: "Deployment log timeline",
    description: "Deployment log timeline",
    category: "reui-timeline",
    tags: ["reui","timeline"],
    component: lazy(() =>
      import("./src/patterns/timeline/c-timeline-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-timeline-9",
    name: "Horizontal timeline with leading labels",
    description: "Horizontal timeline with leading labels",
    category: "reui-timeline",
    tags: ["reui","timeline"],
    component: lazy(() =>
      import("./src/patterns/timeline/c-timeline-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-timeline-4",
    name: "Timeline with git activity.",
    description: "Timeline with git activity.",
    category: "reui-timeline",
    tags: ["reui","timeline"],
    component: lazy(() =>
      import("./src/patterns/timeline/c-timeline-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-timeline-5",
    name: "Timeline with milestones.",
    description: "Timeline with milestones.",
    category: "reui-timeline",
    tags: ["reui","timeline"],
    component: lazy(() =>
      import("./src/patterns/timeline/c-timeline-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-timeline-3",
    name: "Timeline with order status.",
    description: "Timeline with order status.",
    category: "reui-timeline",
    tags: ["reui","timeline"],
    component: lazy(() =>
      import("./src/patterns/timeline/c-timeline-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-timeline-6",
    name: "Timeline with pipeline steps.",
    description: "Timeline with pipeline steps.",
    category: "reui-timeline",
    tags: ["reui","timeline"],
    component: lazy(() =>
      import("./src/patterns/timeline/c-timeline-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-timeline-7",
    name: "Timeline with roadmap items.",
    description: "Timeline with roadmap items.",
    category: "reui-timeline",
    tags: ["reui","timeline"],
    component: lazy(() =>
      import("./src/patterns/timeline/c-timeline-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-timeline-2",
    name: "Timeline with roadmap.",
    description: "Timeline with roadmap.",
    category: "reui-timeline",
    tags: ["reui","timeline"],
    component: lazy(() =>
      import("./src/patterns/timeline/c-timeline-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-timeline-8",
    name: "Vertical timeline",
    description: "Vertical timeline",
    category: "reui-timeline",
    tags: ["reui","timeline"],
    component: lazy(() =>
      import("./src/patterns/timeline/c-timeline-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-1",
    name: "Basic toggle.",
    description: "Basic toggle.",
    category: "reui-toggle",
    tags: ["reui","toggle"],
    component: lazy(() =>
      import("./src/patterns/toggle/c-toggle-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-13",
    name: "Disabled toggle states",
    description: "Disabled toggle states",
    category: "reui-toggle",
    tags: ["reui","toggle"],
    component: lazy(() =>
      import("./src/patterns/toggle/c-toggle-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-5",
    name: "Disabled toggle.",
    description: "Disabled toggle.",
    category: "reui-toggle",
    tags: ["reui","toggle"],
    component: lazy(() =>
      import("./src/patterns/toggle/c-toggle-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-11",
    name: "Social media reaction toggles",
    description: "Social media reaction toggles",
    category: "reui-toggle",
    tags: ["reui","toggle"],
    component: lazy(() =>
      import("./src/patterns/toggle/c-toggle-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-14",
    name: "Toggle as mute/unmute button",
    description: "Toggle as mute/unmute button",
    category: "reui-toggle",
    tags: ["reui","toggle"],
    component: lazy(() =>
      import("./src/patterns/toggle/c-toggle-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-3",
    name: "Toggle buttons in different sizes.",
    description: "Toggle buttons in different sizes.",
    category: "reui-toggle",
    tags: ["reui","toggle"],
    component: lazy(() =>
      import("./src/patterns/toggle/c-toggle-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-2",
    name: "Toggle buttons with outline variant.",
    description: "Toggle buttons with outline variant.",
    category: "reui-toggle",
    tags: ["reui","toggle"],
    component: lazy(() =>
      import("./src/patterns/toggle/c-toggle-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-8",
    name: "Toggle size variants showcase",
    description: "Toggle size variants showcase",
    category: "reui-toggle",
    tags: ["reui","toggle"],
    component: lazy(() =>
      import("./src/patterns/toggle/c-toggle-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-4",
    name: "Toggle with button and icon.",
    description: "Toggle with button and icon.",
    category: "reui-toggle",
    tags: ["reui","toggle"],
    component: lazy(() =>
      import("./src/patterns/toggle/c-toggle-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-9",
    name: "Toggle with icon swap on press",
    description: "Toggle with icon swap on press",
    category: "reui-toggle",
    tags: ["reui","toggle"],
    component: lazy(() =>
      import("./src/patterns/toggle/c-toggle-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-6",
    name: "Toggle with icon.",
    description: "Toggle with icon.",
    category: "reui-toggle",
    tags: ["reui","toggle"],
    component: lazy(() =>
      import("./src/patterns/toggle/c-toggle-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-7",
    name: "Toggle with notification count badge",
    description: "Toggle with notification count badge",
    category: "reui-toggle",
    tags: ["reui","toggle"],
    component: lazy(() =>
      import("./src/patterns/toggle/c-toggle-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-10",
    name: "Toggle with text label that changes",
    description: "Toggle with text label that changes",
    category: "reui-toggle",
    tags: ["reui","toggle"],
    component: lazy(() =>
      import("./src/patterns/toggle/c-toggle-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-12",
    name: "Toggle with tooltip",
    description: "Toggle with tooltip",
    category: "reui-toggle",
    tags: ["reui","toggle"],
    component: lazy(() =>
      import("./src/patterns/toggle/c-toggle-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-group-1",
    name: "Basic toggle group.",
    description: "Basic toggle group.",
    category: "reui-toggle-group",
    tags: ["reui","toggle-group"],
    component: lazy(() =>
      import("./src/patterns/toggle-group/c-toggle-group-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-group-10",
    name: "Toggle group for color theme",
    description: "Toggle group for color theme",
    category: "reui-toggle-group",
    tags: ["reui","toggle-group"],
    component: lazy(() =>
      import("./src/patterns/toggle-group/c-toggle-group-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-group-11",
    name: "Toggle group for font size",
    description: "Toggle group for font size",
    category: "reui-toggle-group",
    tags: ["reui","toggle-group"],
    component: lazy(() =>
      import("./src/patterns/toggle-group/c-toggle-group-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-group-14",
    name: "Toggle group for layout columns",
    description: "Toggle group for layout columns",
    category: "reui-toggle-group",
    tags: ["reui","toggle-group"],
    component: lazy(() =>
      import("./src/patterns/toggle-group/c-toggle-group-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-group-13",
    name: "Toggle group for notification channels",
    description: "Toggle group for notification channels",
    category: "reui-toggle-group",
    tags: ["reui","toggle-group"],
    component: lazy(() =>
      import("./src/patterns/toggle-group/c-toggle-group-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-group-16",
    name: "Toggle group for pricing tier",
    description: "Toggle group for pricing tier",
    category: "reui-toggle-group",
    tags: ["reui","toggle-group"],
    component: lazy(() =>
      import("./src/patterns/toggle-group/c-toggle-group-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-group-15",
    name: "Toggle group for sort direction",
    description: "Toggle group for sort direction",
    category: "reui-toggle-group",
    tags: ["reui","toggle-group"],
    component: lazy(() =>
      import("./src/patterns/toggle-group/c-toggle-group-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-group-7",
    name: "Toggle group for text alignment",
    description: "Toggle group for text alignment",
    category: "reui-toggle-group",
    tags: ["reui","toggle-group"],
    component: lazy(() =>
      import("./src/patterns/toggle-group/c-toggle-group-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-group-12",
    name: "Toggle group for time range filter",
    description: "Toggle group for time range filter",
    category: "reui-toggle-group",
    tags: ["reui","toggle-group"],
    component: lazy(() =>
      import("./src/patterns/toggle-group/c-toggle-group-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-group-8",
    name: "Toggle group for view mode switching",
    description: "Toggle group for view mode switching",
    category: "reui-toggle-group",
    tags: ["reui","toggle-group"],
    component: lazy(() =>
      import("./src/patterns/toggle-group/c-toggle-group-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-group-4",
    name: "Toggle group with custom spacing.",
    description: "Toggle group with custom spacing.",
    category: "reui-toggle-group",
    tags: ["reui","toggle-group"],
    component: lazy(() =>
      import("./src/patterns/toggle-group/c-toggle-group-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-group-5",
    name: "Toggle group with filter control.",
    description: "Toggle group with filter control.",
    category: "reui-toggle-group",
    tags: ["reui","toggle-group"],
    component: lazy(() =>
      import("./src/patterns/toggle-group/c-toggle-group-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-group-2",
    name: "Toggle group with outline variant.",
    description: "Toggle group with outline variant.",
    category: "reui-toggle-group",
    tags: ["reui","toggle-group"],
    component: lazy(() =>
      import("./src/patterns/toggle-group/c-toggle-group-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-group-6",
    name: "Toggle group with vertical orientation.",
    description: "Toggle group with vertical orientation.",
    category: "reui-toggle-group",
    tags: ["reui","toggle-group"],
    component: lazy(() =>
      import("./src/patterns/toggle-group/c-toggle-group-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-group-3",
    name: "Toggle groups in different sizes.",
    description: "Toggle groups in different sizes.",
    category: "reui-toggle-group",
    tags: ["reui","toggle-group"],
    component: lazy(() =>
      import("./src/patterns/toggle-group/c-toggle-group-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-toggle-group-9",
    name: "Vertical toggle group for settings",
    description: "Vertical toggle group for settings",
    category: "reui-toggle-group",
    tags: ["reui","toggle-group"],
    component: lazy(() =>
      import("./src/patterns/toggle-group/c-toggle-group-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tooltip-1",
    name: "Basic tooltip.",
    description: "Basic tooltip.",
    category: "reui-tooltip",
    tags: ["reui","tooltip"],
    component: lazy(() =>
      import("./src/patterns/tooltip/c-tooltip-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tooltip-8",
    name: "Toolbar with tooltip actions",
    description: "Toolbar with tooltip actions",
    category: "reui-tooltip",
    tags: ["reui","tooltip"],
    component: lazy(() =>
      import("./src/patterns/tooltip/c-tooltip-8").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tooltip-12",
    name: "Tooltip on disabled button with wrapper",
    description: "Tooltip on disabled button with wrapper",
    category: "reui-tooltip",
    tags: ["reui","tooltip"],
    component: lazy(() =>
      import("./src/patterns/tooltip/c-tooltip-12").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tooltip-5",
    name: "Tooltip on notification bell with badge count",
    description: "Tooltip on notification bell with badge count",
    category: "reui-tooltip",
    tags: ["reui","tooltip"],
    component: lazy(() =>
      import("./src/patterns/tooltip/c-tooltip-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tooltip-16",
    name: "Tooltip with action button inside",
    description: "Tooltip with action button inside",
    category: "reui-tooltip",
    tags: ["reui","tooltip"],
    component: lazy(() =>
      import("./src/patterns/tooltip/c-tooltip-16").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tooltip-11",
    name: "Tooltip with avatar and role badge",
    description: "Tooltip with avatar and role badge",
    category: "reui-tooltip",
    tags: ["reui","tooltip"],
    component: lazy(() =>
      import("./src/patterns/tooltip/c-tooltip-11").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tooltip-10",
    name: "Tooltip with feature badge and upgrade link",
    description: "Tooltip with feature badge and upgrade link",
    category: "reui-tooltip",
    tags: ["reui","tooltip"],
    component: lazy(() =>
      import("./src/patterns/tooltip/c-tooltip-10").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tooltip-14",
    name: "Tooltip with file info and badges",
    description: "Tooltip with file info and badges",
    category: "reui-tooltip",
    tags: ["reui","tooltip"],
    component: lazy(() =>
      import("./src/patterns/tooltip/c-tooltip-14").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tooltip-7",
    name: "Tooltip with icon and description",
    description: "Tooltip with icon and description",
    category: "reui-tooltip",
    tags: ["reui","tooltip"],
    component: lazy(() =>
      import("./src/patterns/tooltip/c-tooltip-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tooltip-3",
    name: "Tooltip with icon trigger.",
    description: "Tooltip with icon trigger.",
    category: "reui-tooltip",
    tags: ["reui","tooltip"],
    component: lazy(() =>
      import("./src/patterns/tooltip/c-tooltip-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tooltip-4",
    name: "Tooltip with keyboard shortcut.",
    description: "Tooltip with keyboard shortcut.",
    category: "reui-tooltip",
    tags: ["reui","tooltip"],
    component: lazy(() =>
      import("./src/patterns/tooltip/c-tooltip-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tooltip-15",
    name: "Tooltip with label badges",
    description: "Tooltip with label badges",
    category: "reui-tooltip",
    tags: ["reui","tooltip"],
    component: lazy(() =>
      import("./src/patterns/tooltip/c-tooltip-15").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tooltip-13",
    name: "Tooltip with online status indicator",
    description: "Tooltip with online status indicator",
    category: "reui-tooltip",
    tags: ["reui","tooltip"],
    component: lazy(() =>
      import("./src/patterns/tooltip/c-tooltip-13").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tooltip-6",
    name: "Tooltip with status badge",
    description: "Tooltip with status badge",
    category: "reui-tooltip",
    tags: ["reui","tooltip"],
    component: lazy(() =>
      import("./src/patterns/tooltip/c-tooltip-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tooltip-9",
    name: "Tooltip with warning badge",
    description: "Tooltip with warning badge",
    category: "reui-tooltip",
    tags: ["reui","tooltip"],
    component: lazy(() =>
      import("./src/patterns/tooltip/c-tooltip-9").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tooltip-2",
    name: "Tooltips opening from different sides.",
    description: "Tooltips opening from different sides.",
    category: "reui-tooltip",
    tags: ["reui","tooltip"],
    component: lazy(() =>
      import("./src/patterns/tooltip/c-tooltip-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tree-1",
    name: "Basic tree.",
    description: "Basic tree.",
    category: "reui-tree",
    tags: ["reui","tree"],
    component: lazy(() =>
      import("./src/patterns/tree/c-tree-1").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tree-5",
    name: "File explorer tree with type icons",
    description: "File explorer tree with type icons",
    category: "reui-tree",
    tags: ["reui","tree"],
    component: lazy(() =>
      import("./src/patterns/tree/c-tree-5").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tree-6",
    name: "Organization chart tree with avatars",
    description: "Organization chart tree with avatars",
    category: "reui-tree",
    tags: ["reui","tree"],
    component: lazy(() =>
      import("./src/patterns/tree/c-tree-6").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tree-7",
    name: "Permissions tree with checkboxes",
    description: "Permissions tree with checkboxes",
    category: "reui-tree",
    tags: ["reui","tree"],
    component: lazy(() =>
      import("./src/patterns/tree/c-tree-7").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tree-3",
    name: "Tree with custom indent.",
    description: "Tree with custom indent.",
    category: "reui-tree",
    tags: ["reui","tree"],
    component: lazy(() =>
      import("./src/patterns/tree/c-tree-3").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tree-4",
    name: "Tree with custom indent.",
    description: "Tree with custom indent.",
    category: "reui-tree",
    tags: ["reui","tree"],
    component: lazy(() =>
      import("./src/patterns/tree/c-tree-4").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
  {
    id: "reui-c-tree-2",
    name: "Tree with indented lines.",
    description: "Tree with indented lines.",
    category: "reui-tree",
    tags: ["reui","tree"],
    component: lazy(() =>
      import("./src/patterns/tree/c-tree-2").then((mod) => {
        const m = mod as any;
        const Comp = (m.default || m.Pattern || Object.values(m).find((x: unknown) => typeof x === "function")) as ComponentType<any>;
        return { default: Comp };
      })
    ),
    display: true,
  },
];

export const reuiById = Object.fromEntries(reuiRegistry.map((i) => [i.id, i]));
export const reuiCategories = [...new Set(reuiRegistry.map((i) => i.category))];
