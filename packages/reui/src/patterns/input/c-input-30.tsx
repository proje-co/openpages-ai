// @ts-nocheck
"use client";

import { Field, FieldLabel } from "../../ui/field"
import { Input } from "../../ui/input"

export default function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="pill-input">Search</FieldLabel>
      <Input
        id="pill-input"
        className="rounded-full px-4"
        placeholder="Search everything..."
      />
    </Field>
  )
}
