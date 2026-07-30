// @ts-nocheck
"use client";

import {
  ButtonGroup,
  ButtonGroupText,
} from "../../ui/button-group"
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
      <ButtonGroup>
        <ButtonGroupText>https://</ButtonGroupText>
        <InputGroup>
          <InputGroupInput placeholder="example" />
          <InputGroupAddon align="inline-end">
            <IconPlaceholder
              lucide="InfoIcon"
              tabler="IconInfoCircle"
              hugeicons="InformationCircleIcon"
              phosphor="InfoIcon"
              remixicon="RiInformationLine"
              className="text-muted-foreground size-4"
            />
          </InputGroupAddon>
        </InputGroup>
        <ButtonGroupText>.com</ButtonGroupText>
      </ButtonGroup>
    </Field>
  )
}
