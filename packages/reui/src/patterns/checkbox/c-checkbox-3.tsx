// @ts-nocheck
"use client";

import { Checkbox } from "../../ui/checkbox"
import { Field, FieldLabel } from "../../ui/field"

export default function Pattern() {
  return (
    <Field orientation="horizontal" className="w-auto" data-invalid>
      <Checkbox id="invalid" aria-invalid />
      <FieldLabel htmlFor="invalid">Invalid checkbox</FieldLabel>
    </Field>
  )
}
