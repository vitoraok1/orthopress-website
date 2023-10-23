import { useState } from 'react';
import { faqOrtodontia } from '../../../components-mock';
import './AskedQuestions.css';

type QuestionProps = {
  question: string;
  answer: string;
};

function Question({ question, answer }: QuestionProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e: any) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const faqClasses = `faq ${isDropdownOpen ? 'active' : ''}`;

  return (
    <div className={faqClasses} onClick={toggleDropdown}>
      <div className="question">
        <h2>{question}</h2>
        <svg width="15" height="10" viewBox="0 0 42 25">
          <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round" />
        </svg>
      </div>
      <div className="answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export function AskedQuestions() {
  return (
    <div>
      <h2 className="lead title-procedures">Principais dúvidas e queixas dos pacientes</h2>
      <div className="border-line" />
      <section className="accordion">
        {faqOrtodontia.map((faq, index) => (
          <Question key={index} question={faq.question} answer={faq.answer} />
        ))}
      </section>
    </div>
  );
}
