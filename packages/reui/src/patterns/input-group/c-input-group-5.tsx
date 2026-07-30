// @ts-nocheck
"use client";

import { Field } from "../../ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../ui/input-group"
import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <Field className="max-w-xs">
      <InputGroup>
        <InputGroupInput type="email" placeholder="you@example.com" />
        <InputGroupAddon align="inline-end">
          <IconPlaceholder
            lucide="MailIcon"
            tabler="IconMail"
            hugeicons="MailIcon"
            phosphor="EnvelopeIcon"
            remixicon="RiMailLine"
          />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
