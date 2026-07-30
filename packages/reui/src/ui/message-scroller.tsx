// @ts-nocheck
"use client";

import * as React from "react";
import { cn } from "../lib/utils";

/** Stub — ReUI message-scroller depends on unpublished @shadcn/react. */
function MessageScrollerProvider({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}
function MessageScroller({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn(className)} {...props} />;
}
function MessageScrollerContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn(className)} {...props} />;
}
function useMessageScroller() {
  return {};
}
function useMessageScrollerScrollable() {
  return {};
}
function useMessageScrollerVisibility() {
  return { isVisible: true };
}

export {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerContent,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
};
