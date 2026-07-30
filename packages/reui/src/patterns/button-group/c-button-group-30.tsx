// @ts-nocheck
"use client";

import { Button } from "../../ui/button"
import {
  ButtonGroup,
  ButtonGroupText,
} from "../../ui/button-group"
import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <ButtonGroup>
      <Button
        size="sm"
        variant="default"
        aria-label="Following 2.4k"
        className="border-primary"
      >
        <IconPlaceholder
          lucide="StarIcon"
          tabler="IconStar"
          hugeicons="StarIcon"
          phosphor="StarIcon"
          remixicon="RiStarLine"
        />
        Star
      </Button>
      <ButtonGroupText className="border-primary">2.4k</ButtonGroupText>
    </ButtonGroup>
  )
}
