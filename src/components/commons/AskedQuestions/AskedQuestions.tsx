import { useState } from 'react';
import dropDown from '../../../assets/images/dropdown_ativo.png';
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
        <h3>{question}</h3>
        <img src={dropDown} alt="dropdown" className="dropdown-icon"/>
      </div>
      <div className="answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}

interface FaqContent {
  question: string;
  answer: string;
}

interface FaqProps {
  faqTheme: FaqContent[];
}

export function AskedQuestions({ faqTheme }: FaqProps) {
  return (
    <div className="faq-title">
      <h2 className="lead title-procedures">Principais dúvidas e queixas dos pacientes</h2>
      <div className="border-line" />
      <section className="accordion">
        {faqTheme.map((faq, index) => (
          <Question key={index} question={faq.question} answer={faq.answer} />
        ))}
      </section>
      <div className="btn-group">
        <a href="index.html" className="btn btn-blue schedule btn-ortodontia">Clique aqui para agendar sua avaliação inicial com a Dra. Priscila Ferraz Fuzimoto</a>
      </div>
    </div>
  );
}
