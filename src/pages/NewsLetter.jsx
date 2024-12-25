import axios from 'axios';
import React from 'react';
import { Form, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formDate = await request.formData();

  const data = Object.fromEntries(formDate);
  try {
    const response = await axios.post(newsletterUrl, data);
    toast.success(response.data.msg);
    return redirect('/');
  } catch (err) {
    console.log(err);
    toast.error(err?.response?.data?.msg);
    return err;
  }
};

const NewsLetter = () => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state == 'submitting';
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>our NewsLetter</h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" name="name" id="name" className="form-input" defaultValue="john" required />
      </div>
      {/* LastName */}
      <div className="form-row">
        <label htmlFor="LastName" className="form-label">
          lastName
        </label>
        <input type="text" name="lastName" id="lastName" className="form-input" defaultValue="smith" required />
      </div>

      {/* email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input type="text" name="email" id="email" className="form-input" defaultValue="test@test.com" />
      </div>
      <button type="submit" className="btn btn-block" style={{ marginTop: '0.5rem' }} disabled={isSubmitting}>
        {isSubmitting ? 'submitting' : 'submit'}
      </button>
    </Form>
  );
};

export default NewsLetter;
