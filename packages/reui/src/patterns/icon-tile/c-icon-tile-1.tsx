// @ts-nocheck
"use client";

import { IconTile } from "../../reui/icon-tile"

import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <IconTile aria-hidden="true">
        <IconPlaceholder
          lucide="FolderIcon"
          tabler="IconFolder"
          hugeicons="FolderIcon"
          phosphor="FolderIcon"
          remixicon="RiFolderLine"
        />
      </IconTile>
    </div>
  )
}
