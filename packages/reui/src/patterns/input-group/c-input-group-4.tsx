// @ts-nocheck
"use client";

import { Field } from "../../ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../ui/input-group"
import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <Field className="max-w-xs">
      <InputGroup>
        <InputGroupAddon>
          <IconPlaceholder
            lucide="SearchIcon"
            tabler="IconSearch"
            hugeicons="Search01Icon"
            phosphor="MagnifyingGlassIcon"
            remixicon="RiSearchLine"
          />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
    </Field>
  )
}
