import { Accordion } from "@/components/parts/accordion/Accordion";
import { RESUME_QA_TITLE } from "@/data/data";
import { RESUME_QA_TEXT } from "./resumeQAText/ResumeQAText";

export const ResumeQA = () => {
  const data = RESUME_QA_TITLE.map((title) => ({
    id: title.id,
    question: title.title,
    answer: RESUME_QA_TEXT.find((text) => text.id === title.id)?.text || "",
  }));

  return (
      <Accordion items={data} />
  );
};
