// @ts-nocheck
"use client";

import { Field } from "../../ui/field"
import { Input } from "../../ui/input"
import { Label } from "../../ui/label"

export default function Pattern() {
  return (
    <Field data-disabled={true} className="w-full max-w-xs">
      <Label htmlFor="label-demo-disabled">Disabled Field</Label>
      <Input id="label-demo-disabled" placeholder="Disabled input…" disabled />
    </Field>
  )
}
