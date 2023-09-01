import { useState } from "react"
import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from '@mui/material'
import { Close, DeleteOutline } from '@mui/icons-material'
import useApi from "../hooks/useApi"
import { API_URLS } from "../services/api.urls"


const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0'
}

const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
    // parent ke help sey child target karnae we use &
    '& > p': {
        fontSize: 14,
        fontweight: 500,
    }
});

const RecepientsWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& > div': {
        fontSize: 14,
        borderBottom: '1px solid #F5F5F5',
        marginTop: 10,
    }

})

const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',

})

const SendButton = styled(Button)({
    background: '#0B57D0',
    color: '#fff',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: 18,
    width: 100
})


const ComposeMail = ({ openDialog, setOpenDialog }) => {

    const [data, setData] = useState({});
    const sentEmailService = useApi(API_URLS.saveSentEmail)
    const saveDraftService = useApi(API_URLS.saveDraftEmails)

    const config = {
        Host: "smtp.elasticemail.com",
        Username: process.env.REACT_APP_USERNAME,
        Password: process.env.REACT_APP_PASSWORD,
        Port: 2525,
    }
    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const sendMail = (e) => {
        e.preventDefault();

        if (window.Email) {
            window.Email.send({
                ...config,
                To: data.to,
                From: 'yashika7.u@gmail.com',
                Subject: data.subject,
                Body: data.body,
            }).then(
                message => alert(message)
            );
        }
        // Payload

        const payload = {
            to: data.to,
            from: 'yashika7.u@gmail.com',
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: '',
            name: 'Yashika.U',
            starred: false,
            type: 'sent'
        }

        sentEmailService.call(payload);

        if (!sentEmailService.error) {
            setOpenDialog(false);
            setData({});
        }
        else {

        }


        setOpenDialog(false);
    }




    const closeComposeMail = (e) => {
        e.preventDefault();


        const payload = {
            to: data.to,
            from: 'yashika7.u@gmail.com',
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: '',
            name: 'Yashika.U',
            starred: false,
            type: 'drafts'
        }

        saveDraftService.call(payload);

        if (!saveDraftService.error) {
            setOpenDialog(false);
            setData({});
        }
        else {

        }
    }




    return (
        <Dialog
            open={openDialog}
            PaperProps={{ sx: dialogStyle }}
        >
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={(e) => { closeComposeMail(e) }} />
            </Header>

            <RecepientsWrapper>
                <InputBase placeholder='Recepients' name="to" onChange={(e) => { onValueChange(e) }} />
                <InputBase placeholder='Subject' name="subject" onChange={(e) => { onValueChange(e) }} />

            </RecepientsWrapper>
            <TextField
                multiline
                rows={22}
                //to handleinternal classes
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                name="body"
                onChange={(e) => {
                    onValueChange(e)
                }}

            />
            <Footer>
                <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
                <DeleteOutline onClick={() => setOpenDialog(false)} />

            </Footer>
        </Dialog>
    )
}

export default ComposeMail;