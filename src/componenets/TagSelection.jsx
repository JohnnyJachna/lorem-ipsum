function TagSelection({onChange}) {
  return (
    <>
      <label htmlFor="tagSelection">Tag: </label>
      <select 
        name="tag selection" 
        id="tagSelection"
        defaultValue={"p"}
        onChange={(e) => onChange(e.target.value)}>
        <option value="p">p</option>
        <option value="span">span</option>
        <option value="h1">h1</option>
        <option value="h2">h2</option>
        <option value="h3">h3</option>
        <option value="h4">h4</option>
        <option value="h5">h5</option>
        <option value="h6">h5</option>
      </select>
    </>
  )
}

export default TagSelection;