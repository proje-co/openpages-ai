// @ts-nocheck
"use client";

import { Checkbox } from "../../ui/checkbox"
import { Field } from "../../ui/field"
import { Label } from "../../ui/label"

export default function Pattern() {
  return (
    <Field orientation="horizontal" className="mx-auto w-auto">
      <Checkbox id="label-demo-terms" />
      <Label htmlFor="label-demo-terms">Accept terms and conditions</Label>
    </Field>
  )
}
