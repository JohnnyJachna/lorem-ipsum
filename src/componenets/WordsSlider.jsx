function WordsSlider({value, onChange}) {

  return (
    <>
      <h3>Words per Paragraph: {value}</h3>
      <input
        type="range"
        min={1}
        max={100}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}

export default WordsSlider;