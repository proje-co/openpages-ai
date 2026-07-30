// @ts-nocheck
"use client";

import { IconTile } from "../../reui/icon-tile"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../../ui/empty"
import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <IconTile variant="frame" size="xl" aria-hidden="true">
              <IconPlaceholder
                lucide="FolderIcon"
                tabler="IconFolder"
                hugeicons="FolderIcon"
                phosphor="FolderIcon"
                remixicon="RiFolderLine"
              />
            </IconTile>
          </EmptyMedia>
          <EmptyTitle>No files yet</EmptyTitle>
          <EmptyDescription>
            Upload a file to get started. Everything you add shows up here.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  )
}
