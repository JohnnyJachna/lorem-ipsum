function SentenceSlider({value, onChange}) {

  return (
    <div className="sentence-slider">
      <h3>Sentences per Paragraph: {value}</h3>
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

export default SentenceSlider;