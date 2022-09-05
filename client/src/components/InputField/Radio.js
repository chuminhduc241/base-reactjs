const Radio = ({label,option,field,hadleChange,value,...rest}) => {
  console.log(option)
  console.log(field);
  const handelChange = ()=>{
    // onChange();
    // hadleChange();
  }
  return (
    <div>
       {
      
         option.map((option)=>{
            return (<>
            <input type="radio" name="name"  id ={option.value} value={option.value}  {...rest} checked={value===option.value}/>
            <label htmlFor={option.value}>{option.name}</label>
            </>)
        })
       }
    </div>
  )
}
export default Radio