// @ts-nocheck
"use client";

import { Button } from "../../ui/button"
import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <Button size="lg">
      <IconPlaceholder
        lucide="ZapIcon"
        tabler="IconBolt"
        hugeicons="ZapIcon"
        phosphor="LightningIcon"
        remixicon="RiFlashlightLine"
        aria-hidden="true"
      />
      Upgrade Now
    </Button>
  )
}
