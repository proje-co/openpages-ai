// @ts-nocheck
"use client";

import { Button } from "../../ui/button"
import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <Button>
      Get Started
      <IconPlaceholder
        lucide="ArrowRightIcon"
        tabler="IconArrowRight"
        hugeicons="ArrowRight02Icon"
        phosphor="ArrowRightIcon"
        remixicon="RiArrowRightLine"
        aria-hidden="true"
      />
    </Button>
  )
}
