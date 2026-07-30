// @ts-nocheck
"use client";

import { Button } from "../../ui/button"
import { Spinner } from "../../ui/spinner"

export default function Pattern() {
  return (
    <Button disabled>
      <Spinner aria-hidden="true" />
      Please wait
    </Button>
  )
}
