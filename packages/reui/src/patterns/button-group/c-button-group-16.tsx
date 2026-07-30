// @ts-nocheck
"use client";

import { Button } from "../../ui/button"
import { ButtonGroup } from "../../ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu"
import { Input } from "../../ui/input"
import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <ButtonGroup className="max-w-xs">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" aria-label="Filter">
            <IconPlaceholder
              lucide="ListFilterIcon"
              tabler="IconFilter2"
              hugeicons="FilterMailIcon"
              phosphor="FunnelSimpleIcon"
              remixicon="RiFilter3Line"
              aria-hidden="true"
            />
            Filter
            <IconPlaceholder
              lucide="ChevronDownIcon"
              tabler="IconChevronDown"
              hugeicons="ArrowDown01Icon"
              phosphor="CaretDownIcon"
              remixicon="RiArrowDownSLine"
              aria-hidden="true"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-40">
          <DropdownMenuItem>All Records</DropdownMenuItem>
          <DropdownMenuItem>Recent</DropdownMenuItem>
          <DropdownMenuItem>Archived</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Input placeholder="Filter records..." />
      <Button variant="outline" size="icon">
        <IconPlaceholder
          lucide="XIcon"
          tabler="IconX"
          hugeicons="MultiplicationSignIcon"
          phosphor="XIcon"
          remixicon="RiCloseLine"
          aria-hidden="true"
        />
      </Button>
    </ButtonGroup>
  )
}
