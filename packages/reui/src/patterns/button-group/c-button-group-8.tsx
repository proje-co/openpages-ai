// @ts-nocheck
"use client";

import { Button } from "../../ui/button"
import { ButtonGroup } from "../../ui/button-group"
import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <IconPlaceholder
          lucide="HeartIcon"
          tabler="IconHeart"
          hugeicons="FavouriteIcon"
          phosphor="HeartIcon"
          remixicon="RiHeartLine"
          aria-hidden="true"
        />
        Like
      </Button>
      <Button variant="outline" className="w-12" asChild>
        <span>1.2K</span>
      </Button>
    </ButtonGroup>
  )
}
