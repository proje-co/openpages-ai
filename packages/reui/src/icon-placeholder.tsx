// @ts-nocheck
"use client";

import * as LucideIcons from "lucide-react";
import type { ComponentProps, ComponentType } from "react";

type Props = ComponentProps<"svg"> & {
  lucide?: string;
  tabler?: string;
  hugeicons?: string;
  phosphor?: string;
  remixicon?: string;
};

export function IconPlaceholder({ lucide, className, ...rest }: Props) {
  const icons = LucideIcons as unknown as Record<string, ComponentType<any>>;
  const Icon = (lucide && icons[lucide]) || icons.Circle;
  return <Icon className={className} {...rest} />;
}
