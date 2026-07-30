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
      <Button size="sm" variant="outline">
        <IconPlaceholder
          lucide="UserPlusIcon"
          tabler="IconUserPlus"
          hugeicons="UserAdd01Icon"
          phosphor="UserPlusIcon"
          remixicon="RiUserAddLine"
          aria-hidden="true"
        />
        Follow
      </Button>
      <ButtonGroupText className="text-muted-foreground">
        2.4k followers
      </ButtonGroupText>
    </ButtonGroup>
  )
}
