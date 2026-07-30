// @ts-nocheck
"use client";

import { Checkbox } from "../../ui/checkbox"
import { Field, FieldLabel } from "../../ui/field"

export default function Pattern() {
  return (
    <Field orientation="horizontal" className="w-auto">
      <Checkbox id="indeterminate" checked="indeterminate" />
      <FieldLabel htmlFor="indeterminate">Indeterminate state</FieldLabel>
    </Field>
  )
}
