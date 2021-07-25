import React from 'react'
import { Formik, Form } from "formik";
import { FaEdit } from 'react-icons/fa';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import BCustomTextInput from '../utilities/BCustomTextInput';
import BCustomTextArea from '../utilities/BCustomTextArea';
import EducationService from '../services/EducationService'
import Button from '@material-ui/core/Button';
import * as Yup from "yup";

import {
    Card, Icon, Image, Container, GridColumn, Grid, Label,
} from 'semantic-ui-react'
import CoverLetterService from '../services/CoverLetterService';
export default function AddCoverLetter() {

    const [open, setOpen] = React.useState(false);



    const initialValues = { cover_letter_text: "", jobSeeker: {
        id:1
    } }


    const schema = Yup.object({
        cover_letter_text: Yup.string().required( "Cover letter is required"),
            
    })


    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    function addCoverLetter(values) {
        let coverLetterService  = new CoverLetterService()
        coverLetterService.add(values)
    
    }

    return (
        <div>
            <a onClick={handleClickOpen}><FaEdit size='30' style={{ float: 'right', margin: '10px', color: "#0275d8" }}></FaEdit></a>

            <Dialog fullWidth="1000px" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

                <DialogTitle id="form-dialog-title">Add Education</DialogTitle>
                <DialogContent>
                    <Formik initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            addCoverLetter(values)
                        }}
                    >
                        <Form style={{ marginTop: "15px" }} className="ui form">
                        <Label content="Cover Letter " style={{ marginBottom: "5px", marginTop: "5px", float: "left" }}></Label>
 
                            <BCustomTextArea
                                name="cover_letter_text"
                                placeholder="Cover Letter"
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
