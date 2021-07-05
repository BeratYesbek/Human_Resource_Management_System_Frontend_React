import React, { Component, useState } from 'react'
import { Formik, Form, Field } from "formik";

import {
    Button,
    Grid,
    Label,
    Select,
} from 'semantic-ui-react'

import * as Yup from "yup";
import BCustomTextInput from '../utilities/BCustomTextInput'
import BCustomNumberInput from '../utilities/BCustomNumberInput';
import BCustomDatePicker from '../utilities/BCustomDatePicker';
import BCustomTextArea from '../utilities/BCustomTextArea';
import JobAdvertisementService from '../services/JobAdvertisementService';
import BCustomSelect from '../utilities/BCustomSelect';
export default function JobAdvertisementAdd() {

    const initialValues = { jobPosition: "", jobDescription: "", maxSalary: "", minSalary: "", applicationDeadline: "", location: "",numberOfPosition:"",approve :false }


    const schema = Yup.object({
        jobPosition: Yup.string().required("Job position is required"),
        jobDescription: Yup.string().required("Job description is required"),
        maxSalary: Yup.number().required("Max salary is required"),
        minSalary: Yup.number().required("Min salary is required"),
        applicationDeadline: Yup.date().required("Min Salary is required"),
        location: Yup.string().required("location is required"),
        numberOfPosition: Yup.number().required("number of position is required"),
        approve: Yup.bool(),
    })

    function addJobAdvertisement(value) {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.add(value)
    }


    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    addJobAdvertisement(values)
                }}
            >
                <Form style={{ marginTop: "15px" }} className="ui form">

                    <Label content="Job Position" style={{ marginBottom: "5px", float: "left" }}></Label>
                    <BCustomTextInput name="jobPosition" placeholder="Job Position" />

                    <Label content="Job Description" style={{ marginBottom: "5px", float: "left" }}></Label>
                    <BCustomTextArea name="jobDescription" placeholder="Job Description" />

                    <Grid widths="equal">
                        <Grid.Row>
                            <Grid.Column width="6">
                                <Label content="Max Salary" style={{ marginBottom: "5px", float: "left" }}></Label>
                                <BCustomNumberInput name="maxSalary" placeholder="Max Salary" />
                            </Grid.Column>
                            <Grid.Column width="6">
                                <Label content="Min Salary" style={{ marginBottom: "5px", float: "left" }}></Label>

                                <BCustomNumberInput name="minSalary" placeholder="Min Salary" />

                            </Grid.Column>
                            <Grid.Column width="4">
                                <Label content="Number Of Position" style={{ marginBottom: "5px", float: "left" }}></Label>

                                <BCustomNumberInput name="numberOfPosition" placeholder="Number Of Position" />

                            </Grid.Column>


                        </Grid.Row>


                    </Grid>
                    <Label content="Location" style={{ marginBottom: "5px", float: "left", marginTop: "10px" }}></Label>
                    <BCustomSelect name="location" placeholder="Select Location" ></BCustomSelect>
                    <Label content="Application DeadLine" style={{ marginBottom: "5px", float: "left" }}></Label>
                    <BCustomDatePicker name="applicationDeadline" placeholder="DeadLine"></BCustomDatePicker>
                    <Button style={{ float: "left" }} color="blue" type="submit">Add</Button>
                </Form>
            </Formik>
        </div>
    )

}
