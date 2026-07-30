// @ts-nocheck
"use client";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "../../reui/alert"

import { Button } from "../../ui/button"
import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <Alert>
      <IconPlaceholder
        lucide="ShieldCheckIcon"
        tabler="IconShieldCheck"
        hugeicons="ShieldEnergyIcon"
        phosphor="ShieldCheckIcon"
        remixicon="RiShieldCheckLine"
      />
      <AlertTitle>Security Update</AlertTitle>
      <AlertDescription>Update your password and enable 2FA.</AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          Dismiss
        </Button>
        <Button size="xs">Update</Button>
      </AlertAction>
    </Alert>
  )
}
