import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import { ChatMessage } from "../store";
import Locale from "../locales";

import styles from "./thinking-content.module.scss";
import MaxIcon from "../icons/max.svg";
import MinIcon from "../icons/min.svg";

export function ThinkingContent({ message }: { message: ChatMessage }) {
  const [expanded, setExpanded] = useState(false);
  const thinkingContentRef = useRef<HTMLDivElement>(null);

  const thinkingContent = message.reasoningContent;
  const isThinking =
    message.streaming && thinkingContent && thinkingContent.length > 0;

  // Auto-scroll to bottom of thinking container
  useEffect(() => {
    if (isThinking && thinkingContentRef.current) {
      requestAnimationFrame(() => {
        if (thinkingContentRef.current) {
          thinkingContentRef.current.scrollTop =
            thinkingContentRef.current.scrollHeight;
        }
      });
    }
  }, [thinkingContent, isThinking, expanded]);

  if (!thinkingContent) return null;

  return (
    <div
      className={clsx(
        styles["thinking-container"],
        expanded && styles["expanded"],
      )}
    >
      <div className={styles["thinking-header"]}>
        <div className={styles["thinking-title"]}>
          {Locale.Chat.Thinking.Title}
        </div>
        <div
          className={styles["thinking-toggle"]}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <MinIcon /> : <MaxIcon />}
        </div>
      </div>
      <div className={styles["thinking-content-wrapper"]}>
        {!expanded && <div className={styles["thinking-content-top"]}></div>}
        <div
          className={clsx(
            styles["thinking-content"],
            expanded && styles["expanded"],
          )}
          ref={thinkingContentRef}
        >
          <div className={styles["thinking-content-text"]}>
            {thinkingContent}
          </div>
        </div>
        {!expanded && <div className={styles["thinking-content-bottom"]}></div>}
      </div>
    </div>
  );
}
