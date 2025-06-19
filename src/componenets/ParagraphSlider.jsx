function ParagraphSlider({value, onChange}) {

  return (
    <div className="paragraph-slider">
      <h3>Paragraphs: {value}</h3>
      <input
        type="range"
        min={1}
        max={10}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default ParagraphSlider;