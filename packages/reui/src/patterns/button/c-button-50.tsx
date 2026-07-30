// @ts-nocheck
"use client";

import { Button } from "../../ui/button"
import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <Button variant="link" className="group/back-button" asChild>
      <a href="#">
        <IconPlaceholder
          lucide="ChevronLeftIcon"
          tabler="IconChevronLeft"
          hugeicons="ArrowLeft01Icon"
          phosphor="CaretLeftIcon"
          remixicon="RiArrowLeftSLine"
          data-icon="inline-start"
          aria-hidden="true"
          className="transition-transform duration-200 group-hover/back-button:-translate-x-1"
        />
        Go back
      </a>
    </Button>
  )
}
