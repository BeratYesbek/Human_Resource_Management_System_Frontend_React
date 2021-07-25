import React from 'react'
import { Formik, Form } from "formik";
import { FaEdit } from 'react-icons/fa';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import BCustomTextInput from '../utilities/BCustomTextInput';
import BCustomNumberInput from '../utilities/BCustomNumberInput';
import AbilityService from '../services/AbilityService'
import Button from '@material-ui/core/Button';
import * as Yup from "yup";

import {
    Card, Icon, Image, Container, GridColumn, Grid, Label,
} from 'semantic-ui-react'
export default function AddAbility() {

    const [open, setOpen] = React.useState(false);



    const initialValues = { technologyName: "", rating:" ", jobSeeker:{
        id:1
    }}


    const schema = Yup.object({
        rating: Yup.number().required("Rating is required"),
        technologyName: Yup.string().required("Technology name is required"),

    })


    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    function addAbility(values) {
        let abilityService = new AbilityService()
        abilityService.add(values)
    
    }

    return (
        <div>
            <a onClick={handleClickOpen}><FaEdit size='30' style={{ float: 'right', margin: '10px', color: "white" }}></FaEdit></a>

            <Dialog fullWidth="1000px" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

                <DialogTitle id="form-dialog-title">Add Education</DialogTitle>
                <DialogContent>
                    <Formik initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            addAbility(values)
                        }}
                    >
                        <Form style={{ marginTop: "15px" }} className="ui form">

                            <Label content="Technology Name" style={{ marginBottom: "5px", marginTop: "5px", float: "left" }}></Label>

                            <BCustomTextInput
                                name="technologyName"
                                placeholder="Technology Name"
                            />

                            <Label content="Rating" style={{ marginBottom: "5px", marginTop: "5px", float: "left" }}></Label>

                            <BCustomNumberInput
                                name="rating"
                                max="5"
                                min="0"

                                placeholder="Rating"
                            />

                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button type="submit" color="primary">
                                    Add
                                </Button>
                            </DialogActions>
                        </Form>
                    </Formik>

                </DialogContent>

            </Dialog>

        </div>
    )
}
