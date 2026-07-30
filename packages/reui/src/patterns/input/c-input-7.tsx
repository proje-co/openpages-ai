// @ts-nocheck
"use client";

import { Field, FieldLabel } from "../../ui/field"
import { Input } from "../../ui/input"

export default function Pattern() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-demo-password">Password</FieldLabel>
      <Input id="input-demo-password" type="password" placeholder="Password" />
    </Field>
  )
}
