import React from "react"
import { useForm } from "react-hook-form"

import "../styling/form.scss"

const ContactForm = () => {
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = values => {
    console.log(values)
  }

  return (
    <div className="form-container">
      <form name="contact" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <div className="name">
            <label>
              My name is
              <input
                type="text"
                name="name"
                placeholder="First &amp; Last Name"
                ref={register({
                  required: "*",
                  pattern: {
                    value: /([a-zA-Z]+[\s]?([a-zA-Z]?['-]?[a-zA-Z])*[\s]{0})/,
                    message: "Please enter your name",
                  },
                })}
              />
              {errors.name && errors.name.message}
            </label>
          </div>

          <div className="company">
            <label>
              and I'm from
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                ref={register}
              />
            </label>
          </div>

          <div className="request">
            <label>
              I would like to
              <input
                type="text"
                name="topic"
                placeholder="a topic"
                ref={register({
                  required: "*",
                  pattern: {
                    value: /([\w\d\s.',\-!@#$&*`~[\]?<>":;\\/{}|%^()+=]{4,196})/,
                    message: "Must be between 4 and 196 char",
                  },
                })}
              />
              {errors.topic && errors.topic.message}
            </label>
          </div>

          <div className="phone">
            <label>
              You can call me at
              <input
                type="phonenumber"
                name="phone"
                placeholder="1(555)555-5555"
                ref={register({
                  pattern: {
                    value: /([\d]{0,1}[(.-]?[\d]{3}[).-\s]?[\d]{3}[.-]?[\d]{4})/g,
                    message: "Enter a phone number",
                  },
                })}
              />
              {errors.phone && errors.phone.message}
            </label>
          </div>

          <div className="email">
            <label>
              or send me an email
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                ref={register({
                  pattern: {
                    value: /([_]?[a-zA-Z0-9]+[_]?[.]?[a-zA-Z0-9]*[.]?[_]{0,1}@[\w\d]+[.]{1}[\w\d]+[.]?[\w\d]+)/g,
                    message: "Enter an email address",
                  },
                })}
              />
            </label>
            {errors.email && errors.email.message}
          </div>

          <div className="form-button-wrapper">
            <button className="form-button" type="submit">
              SEND
            </button>
            <br />
            <br />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
