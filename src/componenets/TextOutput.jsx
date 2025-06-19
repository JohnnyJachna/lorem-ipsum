import { loremIpsum, LoremIpsum } from "lorem-ipsum";

function TextOutput (props) {
  const sentenceNum = parseInt(props.words);
  const paragraphs = parseInt(props.paragraphs);
  const DynamicTag = `${props.tag}`;

  const isIncluded = () => {
    if(props.include === "yes") {
      return true;
    } else if(props.include === "no") {
      return false;
    }
  }

  const generateParagraph = () => {
    let loremText = loremIpsum({
      count: sentenceNum, 
      sentenceLowerBound: 2, 
      sentenceUpperBound: 15,
      format: "plain", 
      units: "sentences"});
    
    if(isIncluded()) {loremText = `<${DynamicTag}>${loremText}</${DynamicTag}>`};
    
    return loremText
  }

  return (
    <div className="lorem-text">
      {[...Array(paragraphs)].map((_, i) => <DynamicTag key={i}>{generateParagraph()}</DynamicTag>)}
    </div>
  )
}

export default TextOutput;