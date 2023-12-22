import { useState } from 'react';
import Swal from 'sweetalert2';


const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Making a POST request using fetch
          const response = await fetch('https://task-management-server-hazel.vercel.app/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            Swal.fire({
              icon: 'success',
              title: 'Submitted!',
              text: 'Your message has been sent successfully.',
            });
            console.log('Form submitted successfully!');
            setFormData({
              name: '',
              email: '',
              message: '',
            });
          } else {
            throw new Error('Network response was not ok.');
          }
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong. Please try again!',
          });
          console.error('Error submitting the form:', error);
        }
      };

  return (
    <div className=" mx-auto pt-20 bg-slate-300 flex flex-col items-center">
      <h1 className="text-4xl mb-5">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[80%] mx-auto">
        <div>
          <p className="text-lg">
            Have a question or feedback? Feel free to reach out to us by filling out the form below.
          </p>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="space-y-4">
              <input
                className="w-full border rounded-md p-2"
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                className="w-full border rounded-md p-2"
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <textarea
                className="w-full border rounded-md p-2 resize-none"
                rows={4}
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              <button className="bg-blue-500 btn py-2 px-4 rounded-md" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div>
          <p className="text-lg">
            You can also contact us directly at:
            <br />
            Email: contact@surveyly.com
            <br />
            Phone: +1 (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
