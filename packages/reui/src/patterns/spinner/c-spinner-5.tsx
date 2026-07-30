// @ts-nocheck
"use client";

import { Button } from "../../ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../../ui/empty"
import { Spinner } from "../../ui/spinner"

export default function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Empty className="min-h-[300px] w-full max-w-md">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Spinner className="size-4" />
          </EmptyMedia>
          <EmptyTitle>Loading projects</EmptyTitle>
          <EmptyDescription>
            Please wait while we fetch your project data. This should only take
            a moment.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline" disabled>
            Cancel
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
