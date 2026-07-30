// @ts-nocheck
"use client";

import { Field } from "../../ui/field"
import { Input } from "../../ui/input"
import { Label } from "../../ui/label"

export default function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <Label htmlFor="label-optional">
        Phone number
        <span className="text-muted-foreground">(optional)</span>
      </Label>
      <Input id="label-optional" type="tel" placeholder="+1 (555) 000-0000" />
    </Field>
  )
}
