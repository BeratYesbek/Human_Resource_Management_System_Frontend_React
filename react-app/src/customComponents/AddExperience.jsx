import React from 'react'
import { Formik, Form } from "formik";
import { FaEdit } from 'react-icons/fa';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import BCustomDatePicker from '../utilities/BCustomDatePicker';
import BCustomTextInput from '../utilities/BCustomTextInput';
import Button from '@material-ui/core/Button';
import * as Yup from "yup";
import ExperienceService from '../services/ExperienceService'
import {
    Card, Icon, Image, Container, GridColumn, Grid, Label,
} from 'semantic-ui-react'
export default function AddExperience() {

    const [open, setOpen] = React.useState(false);


    
    const initialValues = {workPlaceName: "",workPosition:"",startingDate:"",endDate:"",jobSeeker:{
        id:1
    }}


    const schema = Yup.object({
        workPlaceName: Yup.string().required("Work place name is required"),
        workPosition: Yup.string().required("Work position name is required"),
        startingDate: Yup.date().required("starting date is required"),
        endDate: Yup.date().required("end date is required"),
    })


    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    function addExperience(values) {
        let experienceService = new ExperienceService()
        experienceService.add(values)
    }

    return (
        <div>
            <a onClick={handleClickOpen}><FaEdit size='30' style={{ float: 'right', margin: '10px',color: "white" }}></FaEdit></a>

            <Dialog fullWidth="1000px" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

                <DialogTitle id="form-dialog-title">Add Experience</DialogTitle>
                <DialogContent>
                    <Formik initialValues={initialValues}
                            validationSchema={schema}
                            onSubmit={(values)=> {
                                addExperience(values)
                            }}
                    >
                        <Form style={{ marginTop: "15px" }} className="ui form">
                            <Label content="Work Place Name" style={{ marginBottom: "5px", float: "left" }}></Label>

                            <BCustomTextInput
                                name="workPlaceName"
                                placeholder="Work Place Name"
                            />

                            <BCustomTextInput
                                name="workPosition"
                                placeholder="Job Position"
                            />
                            <BCustomDatePicker name="startingDate" placeholder="Starting Date"></BCustomDatePicker>
                            <BCustomDatePicker name="endDate" placeholder="End Date"></BCustomDatePicker>
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
