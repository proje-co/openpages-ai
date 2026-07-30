// @ts-nocheck
"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb"
import { IconPlaceholder } from "../../icon-placeholder"

export default function Pattern() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <IconPlaceholder
            lucide="ChevronsRightIcon"
            tabler="IconChevronsRight"
            hugeicons="ArrowRightDoubleIcon"
            phosphor="CaretDoubleRightIcon"
            remixicon="RiArrowRightDoubleLine"
          />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Resources</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <IconPlaceholder
            lucide="ChevronsRightIcon"
            tabler="IconChevronsRight"
            hugeicons="ArrowRightDoubleIcon"
            phosphor="CaretDoubleRightIcon"
            remixicon="RiArrowRightDoubleLine"
          />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Documentation</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
