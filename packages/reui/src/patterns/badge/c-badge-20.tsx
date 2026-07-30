// @ts-nocheck
"use client";

import { Badge } from "../../reui/badge"

import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <Badge variant="outline">
      <IconPlaceholder
        lucide="CheckIcon"
        tabler="IconCheck"
        hugeicons="Tick02Icon"
        phosphor="CheckIcon"
        remixicon="RiCheckLine"
      />
      Badge
    </Badge>
  )
}
