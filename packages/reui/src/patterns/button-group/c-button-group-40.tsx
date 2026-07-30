// @ts-nocheck
"use client";

import { cn } from "../../lib/utils"
import { Button } from "../../ui/button"
import { ButtonGroup } from "../../ui/button-group"

export default function Pattern() {
  return (
    <ButtonGroup orientation="vertical">
      <Button variant="outline" className={cn("bg-muted justify-start")}>
        Dashboard
      </Button>
      <Button variant="outline" className="justify-start">
        Analytics
      </Button>
      <Button variant="outline" className="justify-start">
        Settings
      </Button>
      <Button variant="outline" className="justify-start">
        Help
      </Button>
    </ButtonGroup>
  )
}
