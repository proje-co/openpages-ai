// @ts-nocheck
"use client";

import { Card } from "../../ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "../../ui/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "../../ui/radio-group"
import { Separator } from "../../ui/separator"

export default function Pattern() {
  return (
    <Card className="w-full max-w-xs p-0">
      <RadioGroup defaultValue="standard">
        <FieldGroup className="gap-0">
          <Field>
            <FieldLabel className="px-4 py-3">
              <RadioGroupItem value="standard" id="ship-standard" />
              <FieldTitle>Standard Shipping</FieldTitle>
            </FieldLabel>
          </Field>
          <Separator />
          <Field>
            <FieldLabel className="px-4 py-3">
              <RadioGroupItem value="express" id="ship-express" />
              <FieldTitle>Express Shipping</FieldTitle>
            </FieldLabel>
          </Field>
          <Separator />
          <Field>
            <FieldLabel className="px-4 py-3">
              <RadioGroupItem value="overnight" id="ship-overnight" />
              <FieldTitle>Overnight Shipping</FieldTitle>
            </FieldLabel>
          </Field>
        </FieldGroup>
      </RadioGroup>
    </Card>
  )
}
