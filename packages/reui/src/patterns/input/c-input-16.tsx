// @ts-nocheck
"use client";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "../../ui/field"
import { Input } from "../../ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip"
import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <Field className="max-w-xs">
      <div className="flex items-center gap-2">
        <FieldLabel htmlFor="username">Username</FieldLabel>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="inline-flex items-center">
              <IconPlaceholder
                lucide="HelpCircleIcon"
                tabler="IconHelpCircle"
                hugeicons="HelpCircleIcon"
                phosphor="QuestionIcon"
                remixicon="RiQuestionLine"
                className="text-muted-foreground size-3.5"
              />
            </TooltipTrigger>
            <TooltipContent>
              Your unique identifier on the platform.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Input id="username" placeholder="johndoe" />
      <FieldDescription>
        Your unique identifier on the platform.
      </FieldDescription>
    </Field>
  )
}
