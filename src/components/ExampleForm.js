import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from '../core-components/FormInput.js';

const ExampleForm = () => {

    const methods = useForm();
    const { handleSubmit } = methods;

    const onSubmit = (data) => {
        console.log(data);
        const { name, gender, newsletter } = data
        alert(`Your registration detail: \n 
        Name: ${name} \n
        Gender: ${gender} \n
        Signed up to Newsletter? ${newsletter} \n `)
      }

    return (
            <FormProvider {...methods} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput 
                        type="text"
                        name="name"
                        validation = {{ required: true }}
                        label="Name:"
                    />

                    <FormInput
                        type="radio"
                        name="gender"
                        items={["Male", "Female", "Other"]}
                        label="Gender:"
                        validation = {{ required: true }}
                    />

                    <FormInput
                        type="checkbox"
                        name="newsletter"
                        label="Signup to Newsletter?"
                        validation = {{ required: false }}
                        checkedByDefault={true}
                    />

                    <button className="btn-1">Submit</button>
                </form>
            </FormProvider>
    )

}

export default ExampleForm