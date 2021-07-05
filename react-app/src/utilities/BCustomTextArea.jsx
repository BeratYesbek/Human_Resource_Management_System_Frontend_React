import { useField } from 'formik'
import React from 'react'
import { FormField,Label } from 'semantic-ui-react'

export default function BCustomTextArea({ ...props }) {

    const [field, meta] = useField(props)
    return (
        <FormField>
            <textarea style={{height:"180px"}} {...field} {...props}></textarea>
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>

            ) : null}
        </FormField>
    )
}
