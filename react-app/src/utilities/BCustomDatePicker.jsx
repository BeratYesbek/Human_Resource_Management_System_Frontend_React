import { useField } from 'formik'
import React from 'react'
import { DateInput } from 'semantic-ui-calendar-react'
import { FormField, Label } from 'semantic-ui-react'

export default function BCustomDatePicker({...props}) {
    const [field,meta] = useField(props)
    return (
        <FormField>
            <input type="date" {...field} {...props} ></input>
            {meta.touched && !!meta.error ? (
                 <Label pointing basic color="red" content={meta.error}></Label>
                 ):null
             }
        </FormField>
    )
}
