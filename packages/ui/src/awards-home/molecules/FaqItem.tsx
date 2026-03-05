import * as React from "react";
import { cn } from "../../lib/utils";
import { IconEmbed } from "../atoms/IconEmbed";

const caretSvg =
  "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22currentColor%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M16%2018.4L11.2%2013.6H20.8L16%2018.4Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E";

export type FaqItemProps = {
  question: string;
  answer: React.ReactNode;
  className?: string;
};

export function FaqItem({ question, answer, className }: FaqItemProps) {
  return (
    <details className={cn("tickets-faq_dropdown", "s-in", className)}>
      <summary className="start-faq_dropdown-toggle">
        <h5 className="tickets-faq-dropdown_question is--waysconf25">
          {question}
        </h5>
        <IconEmbed
          className="icon-embed-small"
          html={decodeURIComponent(caretSvg)}
        />
      </summary>
      <div className="tickets-faq_dropdown-list">
        <p className="is--paragraph is--text-color-silver is--tickets-faq">
          {answer}
        </p>
      </div>
    </details>
  );
}
