// @ts-nocheck
"use client";

import { Field } from "../../ui/field"
import {
  InputGroup,
  InputGroupInput,
} from "../../ui/input-group"

export default function Pattern() {
  return (
    <Field className="max-w-xs" data-disabled="true">
      <InputGroup>
        <InputGroupInput placeholder="Disabled field" disabled />
      </InputGroup>
    </Field>
  )
}
