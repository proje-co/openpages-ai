// @ts-nocheck
"use client";

import { Field, FieldLabel } from "../../ui/field"
import { Input } from "../../ui/input"

export default function Pattern() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-demo-date">Date</FieldLabel>
      <Input id="input-demo-date" type="date" />
    </Field>
  )
}
