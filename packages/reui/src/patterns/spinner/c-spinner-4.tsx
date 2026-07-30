// @ts-nocheck
"use client";

import { Field, FieldLabel } from "../../ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../ui/input-group"
import { Spinner } from "../../ui/spinner"

export default function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="search-loading">Searching</FieldLabel>
      <InputGroup id="search-loading">
        <InputGroupInput placeholder="Search records…" />
        <InputGroupAddon>
          <Spinner className="size-4" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
