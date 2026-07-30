// @ts-nocheck
"use client";

import { Field } from "../../ui/field"
import { Input } from "../../ui/input"
import { Label } from "../../ui/label"

export default function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <Label htmlFor="label-demo-username">Username</Label>
      <Input id="label-demo-username" placeholder="Enter your username…" />
    </Field>
  )
}
