import { loremIpsum, LoremIpsum } from "lorem-ipsum";

function TextOutput (props) {
  const words = parseInt(props.words);
  const paragraphs = parseInt(props.paragraphs);
  const DynamicTag = `${props.tag}`;

  const isIncluded = () => {
    if(props.include === "yes") {
      return true;
    } else if(props.include === "no") {
      return false;
    }
  }

  const generateText = () => {
    let loremText = loremIpsum({count: words, format: "plain", units: "words"});
    
    if(isIncluded()) {loremText = `<${DynamicTag}>${loremText}</${DynamicTag}>`};
    
    return loremText
  }

  return (
    <div className="lorem-text">
      {[...Array(paragraphs)].map((_, i) => <DynamicTag key={i}>{generateText()}</DynamicTag>)}
    </div>
  )
}

export default TextOutput;