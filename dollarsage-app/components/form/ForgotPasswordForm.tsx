"use client"
import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import Button from '../button'
import {
    Container,
    Form,
    FormTitle
} from './ForgotPasswordElements'
import InputFeild from './InputFeild'

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState("")

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <FormTitle> Forgot Password </FormTitle>

                <InputFeild
                    placeholder={"Email"}
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    icon={<AiOutlineMail />}
                    required
                />

                <Button
                    title={"Submit"}
                    type="submit"
                />
            </Form>
        </Container>
    )
}

export default ForgotPasswordForm