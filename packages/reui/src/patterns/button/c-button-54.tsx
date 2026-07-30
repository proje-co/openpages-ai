// @ts-nocheck
"use client";

import { Button } from "../../ui/button"
import { Kbd } from "../../ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip"
import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Search">
            <IconPlaceholder
              lucide="SearchIcon"
              tabler="IconSearch"
              hugeicons="Search01Icon"
              phosphor="MagnifyingGlassIcon"
              remixicon="RiSearchLine"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="flex items-center gap-3">
          Search
          <Kbd className="-mr-1">⌘K</Kbd>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
