// @ts-nocheck
"use client";

import { Button } from "../../ui/button"
import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <Button size="icon-sm" variant="ghost" aria-label="Notifications">
      <IconPlaceholder
        lucide="BellIcon"
        tabler="IconBell"
        hugeicons="NotificationIcon"
        phosphor="BellIcon"
        remixicon="RiNotificationLine"
        aria-hidden="true"
      />
    </Button>
  )
}
