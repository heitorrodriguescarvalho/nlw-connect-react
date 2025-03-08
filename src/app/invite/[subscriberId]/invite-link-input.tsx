'use client'

import Button from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { CheckIcon, CopyIcon, Link } from 'lucide-react'
import { useState } from 'react'

interface InviteLinkInputProps {
  inviteLink: string
}

export default function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(inviteLink)

    setCopied(true)

    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField readOnly defaultValue={inviteLink} />
      <Button size="icon" className="group -mr-2" onClick={handleCopyLink}>
        {copied ? <CheckIcon /> : <CopyIcon />}
      </Button>
    </InputRoot>
  )
}
