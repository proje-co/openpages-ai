// @ts-nocheck
"use client";

import { PhoneInput } from "../../reui/phone-input"

export default function Pattern() {
  return (
    <PhoneInput
      readOnly
      value="+12125551234"
      placeholder="Enter phone number"
    />
  )
}
