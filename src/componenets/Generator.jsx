import { useState } from "react";

import ParagraphSlider from "./ParagraphSlider";
import SentenceSlider from "./SentenceSlider";
import TagSelection from "./TagSelection";
import IncludeSelection from "./IncludeSelection";
import TextOutput from "./TextOutput";

function Content() {
  const [paragraphSliderValue, setParagraphSliderValue] = useState(1);
  const [sentenceSliderValue, setSentenceSliderValue] = useState(5);
  const [includeSelectionValue, setIncludeSelectionValue] = useState("no");
  const [tagSelectionValue, setTagSelectionValue] = useState("p");

  const handleParagraphValue = (value) => {
    setParagraphSliderValue(value);
  }

  const handleWordValue = (value) => {
    setSentenceSliderValue(value);
  }

  const handleTagSelection = (value) => {
    setTagSelectionValue(value);
  }

  const handleIncludeSelection = (value) => {
    setIncludeSelectionValue(value);
  }

  return (
    <div className="generator">
      <h1>Lorem Ipsum Generator</h1>
      <ParagraphSlider value={paragraphSliderValue} onChange={handleParagraphValue}/>
      <SentenceSlider value={sentenceSliderValue} onChange={handleWordValue}/>
      <IncludeSelection value={includeSelectionValue} onChange={(handleIncludeSelection)}/>
      <TagSelection onChange={handleTagSelection}/>
      <TextOutput words={sentenceSliderValue} paragraphs={paragraphSliderValue} tag={tagSelectionValue} include={includeSelectionValue}/>
    </div>
  )
}

export default Content;