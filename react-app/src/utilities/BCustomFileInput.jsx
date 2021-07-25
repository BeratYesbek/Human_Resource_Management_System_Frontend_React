import React from 'react'
import { useField } from 'formik'
import { FormField, Label } from 'semantic-ui-react'
export default function BCustomFileInput({ ...props }) {

    const [field, meta] = useField(props)

    return (
        <FormField>
            <input type="file" {...field} {...props}></input>
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
            ) : null}
        </FormField>
    )
}
