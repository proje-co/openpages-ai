// @ts-nocheck
"use client";

import { Field } from "../../ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../ui/input-group"
import { Spinner } from "../../ui/spinner"

export default function Pattern() {
  return (
    <Field className="max-w-xs" data-disabled="true">
      <InputGroup>
        <InputGroupInput defaultValue="shadcn_ui" disabled />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
