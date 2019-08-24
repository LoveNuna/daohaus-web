import { FastField, useFormikContext, Field, ErrorMessage } from 'formik'
import React from 'react'

function PersonalInfo() {
  const { errors, touched } = useFormikContext()

  return (
    <div>
      <h3>Personal Info</h3>
      <h4>The summoner what to know a little about you.</h4>
      {/* <div>
        <label htmlFor="name">Your name: </label>
        <FastField name="name" id="name" />
      </div>
      <div>
        <label htmlFor="name">Your bio: </label>
        <FastField name="bio" id="bio" />
      </div> */}

      <Field name="name">
        {({ field }) => (
          <div className={field.value ? "Field HasValue" : "Field "}>
            <label>Your Name</label>
            <input type="text" {...field} />
          </div>
        )}
      </Field>
      <Field name="bio">
        {({ field }) => (
          <div className={field.value ? "Field HasValue" : "Field "}>
            <label>Tell us about yourself</label>
            <textarea {...field} />
          </div>
        )}
      </Field>
    </div>
  )
}

export default PersonalInfo