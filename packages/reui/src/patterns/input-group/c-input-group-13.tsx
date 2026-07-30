// @ts-nocheck
"use client";

import { Field } from "../../ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../ui/input-group"
import { Kbd } from "../../ui/kbd"

export default function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <InputGroup>
        <InputGroupInput placeholder="Search documentation..." />
        <InputGroupAddon align="inline-end">
          <Kbd>⌘K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
