// @ts-nocheck
"use client";

import { Button } from "../../ui/button"
import { Kbd, KbdGroup } from "../../ui/kbd"
import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <Button variant="outline" aria-label="Search (Command K)">
      <IconPlaceholder
        lucide="SearchIcon"
        tabler="IconSearch"
        hugeicons="Search01Icon"
        phosphor="MagnifyingGlassIcon"
        remixicon="RiSearchLine"
        aria-hidden="true"
      />
      <span>Search</span>
      <KbdGroup aria-hidden="true">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </Button>
  )
}
