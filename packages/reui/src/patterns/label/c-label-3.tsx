// @ts-nocheck
"use client";

import { Field } from "../../ui/field"
import { Label } from "../../ui/label"
import { Textarea } from "../../ui/textarea"

export default function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <Label htmlFor="label-demo-message">Message</Label>
      <Textarea id="label-demo-message" placeholder="Type your message here…" />
    </Field>
  )
}
