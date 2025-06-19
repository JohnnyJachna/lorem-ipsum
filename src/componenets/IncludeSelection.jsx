function IncludeSelection({value, onChange}) {
  return (
    <div className="include-selection">
      <h3>Include HTML:</h3>
        <input 
          type="radio" 
          id="yes" 
          name="includeHTML" 
          value="yes"
          checked={value === "yes"} 
          onChange={(e) => onChange(e.target.value)}/>
        <label htmlFor="yes">Yes</label>
        
        <input 
          type="radio" 
          id="no" 
          name="includeHTML" 
          value="no"
          checked={value === "no"} 
          onChange={(e) => onChange(e.target.value)}/>
        <label htmlFor="no">No</label>
    </div>
  )
}

export default IncludeSelection;