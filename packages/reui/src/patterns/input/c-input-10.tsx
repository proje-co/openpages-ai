// @ts-nocheck
"use client";

import { Field, FieldLabel } from "../../ui/field"
import { Input } from "../../ui/input"

export default function Pattern() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-demo-number">Number</FieldLabel>
      <Input id="input-demo-number" type="number" placeholder="123" />
    </Field>
  )
}
