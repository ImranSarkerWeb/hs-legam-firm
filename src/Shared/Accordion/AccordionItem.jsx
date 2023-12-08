import { RiArrowDropDownLine } from 'react-icons/ri'
import './Accordion.css'
import { useRef } from 'react';
import './Accordion.css'
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    const contentHeight = useRef();
    return (
        <div className="wrapper">
            <button
                className={`question-container ${isOpen ? "actives" : ""}`}
                onClick={onClick}
            >
                <p className="question-content">{question}</p>
                <RiArrowDropDownLine className={`arrow ${isOpen ? "actives" : ""}`} />
            </button>

            <div
                ref={contentHeight}
                className="answer-container"
                style={
                    isOpen
                        ? { height: contentHeight.current.scrollHeight }
                        : { height: "0px" }
                }
            >
                <p className="answer-content">{answer}</p>
            </div>
        </div>
    );
};

export default AccordionItem;