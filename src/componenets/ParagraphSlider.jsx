function ParagraphSlider({value, onChange}) {

  return (
    <>
      <h3>Paragraphs: {value}</h3>
      <input
        type="range"
        id="paragraphSlider"
        min={1}
        max={10}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}

export default ParagraphSlider;