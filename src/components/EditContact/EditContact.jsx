import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editContactData } from '../../Service/Action/contactAction';

const EditContact = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Access the contact from the location state
    const { contact } = location.state || {};

    const [fromdata, setFormData] = useState(contact || {
        fname: '',
        lname: '',
        company: '',
        jobtitle: '',
        email: '',
        phone: '',
        bday: '',
        bmonth: '',
        byear: '',
        notes: '',
    });

    // Update the form state when contact changes
    useEffect(() => {
        if (contact) {
            setFormData(contact);
        }
    }, [contact]);

    const handleFrom = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...fromdata, [name]: value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(fromdata);
        
        // Pass the contact ID along with the updated data
        dispatch(editContactData(contact.id, fromdata));
        
        navigate('/');
    };

  return (
   
    <div className="p-8 max-w-3xl mx-auto bg-white shadow-xl rounded-lg mt-8">
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleUpdate}
    >
      <div className="flex items-center justify-between mb-5">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12H3m9 9l-9-9 9-9"
            />
          </svg>
          Back
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          type="submit"
        >
          Update
        </button>
      </div>

      {/* Name and Last Name Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="fname"
            value={fromdata.fname}
            onChange={handleFrom}
            className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter First Name"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lname"
            value={fromdata.lname}
            onChange={handleFrom}
            className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter Last Name"
          />
        </div>
      </div>

      {/* Company and Job Title Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={fromdata.company}
            onChange={handleFrom}
            className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Company"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobtitle"
            value={fromdata.jobtitle}
            onChange={handleFrom}
            className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Job Title"
          />
        </div>
      </div>

      {/* Email Section */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={fromdata.email}
          onChange={handleFrom}
          className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Email"
        />
      </div>

      {/* Phone Number Section */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={fromdata.phone}
          onChange={handleFrom}
          className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="(123) 456-7890"
        />
      </div>

      {/* Date of Birth Section */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div>
          <input
            type="number"
            placeholder="MM"
            name="bday"
            value={fromdata.bday}
            onChange={handleFrom}
            className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            min="1"
            max="12"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="DD"
            name="bmonth"
            value={fromdata.bmonth}
            onChange={handleFrom}
            className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            min="1"
            max="31"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="YYYY"
            name="byear"
            value={fromdata.byear}
            onChange={handleFrom}
            className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>
      </div>

      {/* Additional Notes Section */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={fromdata.notes}
          onChange={handleFrom}
          className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Additional notes..."
          rows="4"
        />
      </div>
    </form>
  </div>
  );
}

export default EditContact