import { useState } from "react";

//import Slider from "./Slider"
import ParagraphSlider from "./ParagraphSlider";
import SentenceSlider from "./SentenceSlider";
import TagSelection from "./TagSelection";
import IncludeSelection from "./IncludeSelection";
//import GeneratorButton from "./GeneratorButton";
import TextOutput from "./TextOutput";

function Content() {
  const [paragraphSliderValue, setParagraphSliderValue] = useState(1);
  const [sentenceSliderValue, setSentenceSliderValue] = useState(5);
  const [includeSelectionValue, setIncludeSelectionValue] = useState("no");
  const [tagSelectionValue, setTagSelectionValue] = useState("p");
  //const [loremText, setLoremText] = useState(1);

  // const handleClick = () => {
  //   console.log("Button Clicked");
  //   setLoremText("Button Clicked!");
  // }

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
    <>
      <ParagraphSlider value={paragraphSliderValue} onChange={handleParagraphValue}/>
      <SentenceSlider value={sentenceSliderValue} onChange={handleWordValue}/>
      <IncludeSelection value={includeSelectionValue} onChange={(handleIncludeSelection)}/>
      <TagSelection onChange={handleTagSelection}/>
      {/* <GeneratorButton onClick={handleClick}/> */}
      <TextOutput words={sentenceSliderValue} paragraphs={paragraphSliderValue} tag={tagSelectionValue} include={includeSelectionValue}/>
    </>
  )
}

export default Content;