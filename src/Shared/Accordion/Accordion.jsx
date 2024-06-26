/* eslint-disable react/prop-types */
// import { RiArrowDropDownLine } from 'react-icons/ri'
import './Accordion.css'
import { useState } from 'react';
import AccordionItem from './AccordionItem';
// const AccordionItem = ({ question, answer, isOpen, onClick }) => {
//     const contentHeight = useRef();
//     return (
//         <div className="wrapper">
//             <button
//                 className={`question-container ${isOpen ? "active" : ""}`}
//                 onClick={onClick}
//             >
//                 <p className="question-content">{question}</p>
//                 <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
//             </button>

//             <div
//                 ref={contentHeight}
//                 className="answer-container"
//                 style={
//                     isOpen
//                         ? { height: contentHeight.current.scrollHeight }
//                         : { height: "0px" }
//                 }
//             >
//                 <p className="answer-content">{answer}</p>
//             </div>
//         </div>
//     );
// };

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const datas = [
        {
            question: 'What are accordion components?',
            answer: 'Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.',
        },
        {
            question: 'What are they used for?',
            answer: 'They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.',
        },
        {
            question: 'Accordion as a musical instrument',
            answer: 'The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.',
        },
        {
            question: 'Can I create an accordion component with a different framework?',
            answer: 'Yes of course, it is very possible to create an accordion component with another framework.',
        }
    ];

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
    return (
        <div className=" w-[95%] md:w-[80%] mx-auto  py-7">
            {datas.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={activeIndex === index}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;