
import { ErrorMessage } from "formik";
import Input from "./Input";
import Radio from "./Radio";


const RadioField = (props) => {
    const { field, placeholder, label, form, type, disabled, icon,option,handleChange } = props;
    const { name,value,onChange,onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
  
    const handleC = (e)=>{
        handleChange();
        const changeEvent = {
            target:{
                name: name,
                value: e.target.value
            }
        }
        onChange(changeEvent);
    }
    return (
        <>
            <div style={{ color: '#444' }}>{label}</div>
           {
             option.map((option)=>{
                return (<>
                <input type="radio" name="name"  id ={option.value} value={option.value} onChange ={(event)=>handleC(event)}  checked={value===option.value}/>
                <label htmlFor={option.value}>{option.name}</label>
            </>)})
           }
           <ErrorMessage name={name} component={FeeBack} />
        </>
    );
};
function FeeBack(){
    return <span>ngu</span>
}
export default RadioField;
