// @ts-nocheck
"use client";

import { Field } from "../../ui/field"
import { Input } from "../../ui/input"
import { Label } from "../../ui/label"

export default function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <Label htmlFor="label-required">
        Email address
        <span className="text-destructive">*</span>
      </Label>
      <Input
        id="label-required"
        type="email"
        placeholder="you@example.com"
        required
      />
    </Field>
  )
}
