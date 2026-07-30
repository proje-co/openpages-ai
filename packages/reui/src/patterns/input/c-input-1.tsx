// @ts-nocheck
"use client";

import { Field } from "../../ui/field"
import { Input } from "../../ui/input"

export default function Pattern() {
  return (
    <Field className="max-w-xs">
      <Input id="basic-input" type="text" placeholder="Basic Input" />
    </Field>
  )
}
