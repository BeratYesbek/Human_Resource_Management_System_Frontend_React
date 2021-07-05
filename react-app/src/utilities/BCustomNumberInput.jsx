import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function BCustomNumberInput({...props}) {
    const [field,meta] = useField(props)

    return (
        <FormField>
            <input type="number" {...field} {...props}/>
            {meta.touched && !!meta.error ?  (
                <Label pointing basic color="red" content={meta.error}></Label>
            ):null
        }
        </FormField>
    )
}
