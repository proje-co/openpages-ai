// @ts-nocheck
"use client";

import { Checkbox } from "../../ui/checkbox"
import { Field, FieldLabel } from "../../ui/field"

export default function Pattern() {
  return (
    <Field orientation="horizontal" data-disabled className="w-auto">
      <Checkbox id="disabled-2" disabled defaultChecked />
      <FieldLabel htmlFor="disabled-2">Disabled checkbox</FieldLabel>
    </Field>
  )
}
