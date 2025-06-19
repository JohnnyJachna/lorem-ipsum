function ParagraphSlider({type, value, min, max, onChange}) {

  return (
    <>
      <h3>{type}s {value}</h3>
      <input
        type="range"
        id="paragraphSlider"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}

export default ParagraphSlider;