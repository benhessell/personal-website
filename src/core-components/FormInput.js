import React, {useState} from 'react';
import { useFormContext, useForm } from 'react-hook-form';


export default function FormInput(props) {

    const {
        name,
        placeholder,
        label,
        type, 
        validation,
        items,
        checkedByDefault
    } = props;

    const { register, formState: {errors }, setValue } = useFormContext();
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(checkedByDefault);

    const {
        required,
        minLength
    } = validation

    const checkboxHandler = () => {
        setValue(name, !isCheckboxChecked);
        setIsCheckboxChecked(!isCheckboxChecked);
    }

     let formField;
     // INPUT COMPONENT
     if (type === "text") {
        let classes = "ds-input";
        {errors[name] && (classes = "ds-input ds-input_error")}
        formField = (
            <div className="ds-formfield_container">
                <label className="ds-input_label" htmlFor={name}>{label}</label>
                <input
                    className={classes}
                    type="text"
                    placeholder={placeholder}
                    {...register(name, {required: required, minLength: minLength})}
                />
                {errors[name]?.type === 'required' && <p className="ds-form_error-message">This is a required field</p>}
                {errors[name]?.type === 'minLength' && <p className="ds-form_error-message">This must be greater than 2 characters</p>}
            </div>
        )
     }
     // RADIO COMPONENT
     if (type === "radio") {
        let classes = "ds-checkbox";
        {errors[name] && (classes = "ds-checkbox ds-checkbox_error")}
        formField = (
            <div className="ds-formfield_container">
                <label className="ds-checkbox_title">{label}</label>
                {items.map((item) => (
                    <div>
                        <input
                            className={classes}
                            type="radio"
                            id={item}
                            name={name} 
                            value={item}
                            {...register(name, {required: required})}
                        />
                        <label className="ds-checkbox_label" htmlFor={item}>{item}</label>
                    </div>
                    )
                )}
                {errors[name]?.type === 'required' && <p className="ds-form_error-message">This is a required field</p>}
                {errors[name]?.type === 'minLength' && <p className="ds-form_error-message">This must be greater than 2 characters</p>}
            </div>
        )
     }
     // CHECKBOX COMPONENT
     if (type === "checkbox") {
        let classes = "ds-checkbox";
        {errors[name] && (classes = "ds-checkbox ds-checkbox_error")}
        formField = (
            <div className="ds-formfield_container">
                <input
                    className={classes}
                    type="checkbox"
                    name={name}
                    checked={isCheckboxChecked}
                    {...register(name, {required: required})}
                />
                <label className="ds-checkbox_label" htmlFor={name} onClick={checkboxHandler}>{label}</label>
                {errors[name]?.type === 'required' && <p className="ds-form_error-message">This is a required field</p>}
                {errors[name]?.type === 'minLength' && <p className="ds-form_error-message">This must be greater than 2 characters</p>}
            </div>
        )
     }

    return (
        <div className="inputfield_container">
            {formField}
        </div>
    );
}