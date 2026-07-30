// @ts-nocheck
"use client";

import { Field } from "../../ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../../ui/input-group"

export default function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <InputGroup>
        <InputGroupInput placeholder="Query..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
