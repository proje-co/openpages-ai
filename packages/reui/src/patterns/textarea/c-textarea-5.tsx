// @ts-nocheck
"use client";

import { Field, FieldLabel } from "../../ui/field"
import { Textarea } from "../../ui/textarea"

export default function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <Field className="w-full">
        <FieldLabel htmlFor="textarea-disabled">Message (Disabled)</FieldLabel>
        <Textarea
          id="textarea-disabled"
          placeholder="Type your message here…"
          disabled
        />
      </Field>
    </div>
  )
}
