import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Logo } from './index.js'
import { useForm } from 'react-hook-form'
import service from '../appwrite/config.js'


function ContactUs() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState } = useForm()

  const create = async (data) => {
    setError("")
    try {
      await service.createMessage(data)
      setSubmitted(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Write your message</h2>
        <br></br>
        <br></br>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        {submitted && (
          <div>
            <p className="text-green-600 mt-8 text-center">We will contact you within 48 hours.</p>
            <p className="text-green-600 mt-8 text-center">redirect to home page</p>
          </div>
        )}
        {!submitted && (
          <form onSubmit={handleSubmit(create)}>
            <div className='space-y-5'>
              <Input
                label="Full Name: "
                placeholder="Enter your full name"
                {...register("name", {
                  required: true,
                })}
              />
              <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address",
                  }
                })}
              />
              <Input
                label="Subject: "
                type="text"
                placeholder="Enter Subject"
                {...register("subject", {
                  required: true,
                })}
              />
              <Input
                label="Message: "
                type="textarea"
                placeholder="your message"
                {...register("message", {
                  required: true,
                })}
              />
              {!formState.isValid && (
                <Button className="w-full bg-red-400">
                  Fill deatails first
                </Button>)}
              {formState.isValid && (
                <Button type="submit" className="w-full bg-green-800">
                  Send Message
                </Button>)}
            </div>
          </form>
        )}
      </div>

    </div>
  )
}

export default ContactUs




