import { Radio } from "antd";
import { ErrorMessage } from "formik";
import Input from "./Input";


const InputField = (props) => {
    const { field, placeholder, label, form, type, disabled, icon } = props;
    const { name,value } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    return (
        <>
            <div style={{ color: '#444' }}>{label}</div>
            <Input id={name}
                {...field}
                placeholder={placeholder}
                type={type} />
           <ErrorMessage name={name} component={FeeBack} />
        </>
    );
};
function FeeBack(){
    return <span>ngu</span>
}
export default InputField;
