import React, { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState({ name: '', age: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} aria-label="demo-form" className="space-y-4">
        <div>
          <label htmlFor="" className="block text-sm font-medium">Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full border rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium">Age</label>
          <input
            id="age"
            name="age"
            value={form.age}
            onChange={handleChange}
            className="mt-1 block w-full border rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            id=""
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full border rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-1 block w-full border rounded p-2"
          />
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
      </form>

      {submitted && (
        <div role="status" className="mt-4 p-3 bg-green-100 rounded">
          <strong>Submitted</strong>
          <div data-testid="submitted-values">
            Name: {form.name} | Age: {form.age} | Email: {form.email} | Phone: {form.phone}
          </div>
        </div>
      )}
    </div>
  );
}