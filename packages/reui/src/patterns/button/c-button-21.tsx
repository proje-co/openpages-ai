// @ts-nocheck
"use client";

import { Button } from "../../ui/button"
import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <Button variant="ghost">
      Logout
      <IconPlaceholder
        lucide="LogOutIcon"
        tabler="IconLogout"
        hugeicons="LogoutSquare01Icon"
        phosphor="SignOutIcon"
        remixicon="RiLogoutBoxRLine"
        aria-hidden="true"
      />
    </Button>
  )
}
