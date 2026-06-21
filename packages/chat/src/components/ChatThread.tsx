'use client';

import { Thread } from '@assistant-ui/react';
import { cn } from '../utils';

export interface ChatThreadProps {
  /** Additional class names */
  className?: string;
  /** Custom welcome message */
  welcomeMessage?: string;
}

export function ChatThread({
  className,
  welcomeMessage = 'How can I help you today?',
}: ChatThreadProps) {
  return (
    <div className={cn('flex flex-col h-full', className)}>
      <Thread
        welcome={{
          message: welcomeMessage,
        }}
      />
    </div>
  );
}
