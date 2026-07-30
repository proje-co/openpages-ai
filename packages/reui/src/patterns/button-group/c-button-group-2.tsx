// @ts-nocheck
"use client";

import { Button } from "../../ui/button"
import { ButtonGroup } from "../../ui/button-group"
import { Input } from "../../ui/input"

export default function Pattern() {
  return (
    <ButtonGroup>
      <Button variant="outline">Button</Button>
      <Input placeholder="Type something here..." />
    </ButtonGroup>
  )
}
