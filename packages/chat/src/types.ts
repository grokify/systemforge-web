export interface ChatConfig {
  /** Base URL for the agent API */
  apiBaseUrl: string;
  /** Model ID to use for completions */
  modelId?: string;
  /** Whether to enable streaming responses */
  streaming?: boolean;
  /** Custom headers to include in requests */
  headers?: Record<string, string>;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  createdAt: Date;
  metadata?: Record<string, unknown>;
}

export interface Conversation {
  id: string;
  title?: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Event callbacks for integrating with host applications.
 */
export interface ChatEventCallbacks {
  /** Called when the chat widget is opened */
  onOpen?: () => void;
  /** Called when the chat widget is closed */
  onClose?: () => void;
  /** Called when a user message is sent */
  onMessageSent?: (message: Message) => void;
  /** Called when an assistant message is received */
  onMessageReceived?: (message: Message) => void;
  /** Called when streaming starts */
  onStreamStart?: () => void;
  /** Called when streaming ends */
  onStreamEnd?: () => void;
  /** Called when an error occurs */
  onError?: (error: Error) => void;
  /** Called when the conversation changes */
  onConversationChange?: (conversation: Conversation | null) => void;
}

export interface ChatProviderProps {
  /** Chat configuration */
  config: ChatConfig;
  /** Initial conversation to load */
  initialConversation?: Conversation;
  /** Event callbacks for host app integration */
  events?: ChatEventCallbacks;
  /** Children to render */
  children: React.ReactNode;
}

export interface SendMessageOptions {
  /** Optional metadata to attach to the message */
  metadata?: Record<string, unknown>;
}
