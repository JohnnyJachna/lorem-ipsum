import { useState } from "react";

//import Slider from "./Slider"
import ParagraphSlider from "./ParagraphSlider";
import WordsSlider from "./WordsSlider";
import TagSelection from "./TagSelection";
import IncludeSelection from "./IncludeSelection";
import GeneratorButton from "./GeneratorButton";
import TextOutput from "./TextOutput";

function Content() {
  const [paragraphSliderValue, setParagraphSliderValue] = useState(1);
  const [wordSliderValue, setWordSliderValue] = useState(5);
  const [includeSelectionValue, setIncludeSelectionValue] = useState("yes");
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
    setWordSliderValue(value);
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
      <WordsSlider value={wordSliderValue} onChange={handleWordValue}/>
      <IncludeSelection value={includeSelectionValue} onChange={(handleIncludeSelection)}/>
      <TagSelection onChange={handleTagSelection}/>
      {/* <GeneratorButton onClick={handleClick}/> */}
      <TextOutput words={wordSliderValue} paragraphs={paragraphSliderValue} tag={tagSelectionValue} include={includeSelectionValue}/>
    </>
  )
}

export default Content;