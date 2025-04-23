export type Updater<T> = (updater: (value: T) => void) => void;

export const ROLES = ["system", "user", "assistant"] as const;
export type MessageRole = (typeof ROLES)[number];

export interface RequestMessage {
  role: MessageRole;
  content: string;
}

export type DalleSize = "1024x1024" | "1792x1024" | "1024x1792";
export type DalleQuality = "standard" | "hd";
export type DalleStyle = "vivid" | "natural";

export type GPTImageSize = "auto" | "1024x1024" | "1536x1024" | "1024x1536";
export type GPTImageQuality = "auto" | "high" | "medium" | "low";
export type GPTImageBackground = "auto" | "transparent" | "opaque";
