import { useState } from "react";

export type FaqEntry = {
  question: string;
  answer?: string;
};

type FaqListProps = {
  items: FaqEntry[];
};

export function FaqList({ items }: FaqListProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const open = openIndex === index && Boolean(item.answer);
        return (
          <article className="faq-item" key={item.question}>
            <button
              className="faq-trigger"
              type="button"
              aria-expanded={open}
              onClick={() => {
                if (!item.answer) return;
                setOpenIndex(open ? -1 : index);
              }}
            >
              <span>{item.question}</span>
              <span className="faq-icon">
                <img src={open ? "/assets/icon-minus.svg" : "/assets/icon-plus.svg"} alt="" />
              </span>
            </button>
            {open && item.answer ? <p className="faq-answer">{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
