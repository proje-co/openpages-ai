// @ts-nocheck
"use client";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../reui/alert"

export default function Pattern() {
  return (
    <Alert>
      <AlertTitle>Alert!</AlertTitle>
      <AlertDescription>
        This is an alert with a title and description.
      </AlertDescription>
    </Alert>
  )
}
