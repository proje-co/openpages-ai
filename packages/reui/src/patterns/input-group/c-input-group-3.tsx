// @ts-nocheck
"use client";

import { Field } from "../../ui/field"
import {
  InputGroup,
  InputGroupInput,
} from "../../ui/input-group"

export default function Pattern() {
  return (
    <Field className="max-w-xs" data-invalid="true">
      <InputGroup>
        <InputGroupInput placeholder="Invalid field" aria-invalid="true" />
      </InputGroup>
    </Field>
  )
}
