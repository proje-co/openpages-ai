// @ts-nocheck
"use client";

import { Button } from "../../ui/button"
import { ButtonGroup } from "../../ui/button-group"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../ui/input-group"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip"
import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <IconPlaceholder
            lucide="SendIcon"
            tabler="IconSend"
            hugeicons="SentIcon"
            phosphor="PaperPlaneTiltIcon"
            remixicon="RiSendInsLine"
            aria-hidden="true"
          />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput placeholder="Send a message..." />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupAddon align="inline-end">
                  <IconPlaceholder
                    lucide="AudioLinesIcon"
                    tabler="IconBrandGooglePodcasts"
                    hugeicons="AudioWave01Icon"
                    phosphor="WaveformIcon"
                    remixicon="RiVoiceprintLine"
                    aria-hidden="true"
                  />
                </InputGroupAddon>
              </TooltipTrigger>
              <TooltipContent>Voice Mode</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  )
}
