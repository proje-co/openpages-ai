// @ts-nocheck
"use client";

import { Field, FieldLabel } from "../../ui/field"
import { Textarea } from "../../ui/textarea"

export default function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <Field className="w-full">
        <FieldLabel htmlFor="textarea-with-label">Your Message</FieldLabel>
        <Textarea
          id="textarea-with-label"
          placeholder="Type your message here…"
          rows={6}
        />
      </Field>
    </div>
  )
}
