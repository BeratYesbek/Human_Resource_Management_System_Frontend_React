import { Field, useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function BCustomSelect({ ...props }) {
    const [field, meta] = useField(props)

    const countryOptions = [
        { key: 1, value: 'af', text: 'Afghanistan' },
        { key: 2, value: 'ax', text: 'Aland Islands' },
        { key: 3, value: 'al', text: 'Albania' },
        { key: 4, value: 'dz', text: 'Algeria' },
        { key: 5, value: 'as', text: 'American Samoa' },
        { key: 6, value: 'ad', text: 'Andorra' },
        { key: 7, value: 'ao', text: 'Angola' },

    ]
    function onChange(value) {
        console.log(value)
    }

    return (

        <FormField>

            <select onChange={(e) => onChange(e.target.value)}  {...field} {...props} >
                {countryOptions.map((country) => (
                    <option value={country.text} key={country.key}>{country.text}</option>
                ))}
                {meta.touched && !!meta.error ? (
                    <Label pointing basic color="red" content={meta.error}></Label>
                ) : null}
            </select>

        </FormField>

    )

}
