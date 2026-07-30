// @ts-nocheck
"use client";

import { Button } from "../../ui/button"
import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <Button variant="outline">
      <IconPlaceholder
        lucide="PlusIcon"
        tabler="IconPlus"
        hugeicons="PlusSignIcon"
        phosphor="PlusIcon"
        remixicon="RiAddLine"
        aria-hidden="true"
      />
      Add Item
    </Button>
  )
}
