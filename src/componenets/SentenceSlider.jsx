function SentenceSlider({value, onChange}) {

  return (
    <>
      <h3>Sentences per Paragraph: {value}</h3>
      <input
        type="range"
        min={1}
        max={10}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}

export default SentenceSlider;