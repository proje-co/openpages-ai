// @ts-nocheck
"use client";

import { Badge } from "../../reui/badge"

import { Button } from "../../ui/button"

export default function Pattern() {
  return (
    <Button aria-label="Updates (new)">
      Updates
      <Badge variant="success" size="xs" aria-hidden="true">
        New
      </Badge>
    </Button>
  )
}
