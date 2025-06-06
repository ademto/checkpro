import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
    const [state, handleSubmit] = useForm("mblydywd");
    // if (state.succeeded) {
    //     return (
    //         <div className="max-w-3xl mx-auto pt-40 text-green-800 px-6 py-4 rounded text-center">
    //         ✅ Thank you! Your message has been sent successfully.
    //         </div>
    //     )
    // }
    return (
      <div className="min-h-screen bg-gray-50 pt-30 px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold text-green-800">We'd love to hear from you!</h1>
          <p className="mt-4 text-gray-600">
            Whether you have questions about financial tools, need support, or just want to say hello — we're here to help.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow space-y-6">
        {state.succeeded && <p>✅ Thank you! Your message has been sent successfully.</p>}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              id="name"
              name="name"
              className="w-full mt-1 p-3 border rounded-md focus:ring-green-400 focus:border-green-600"
            />
            <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              className="w-full mt-1 p-3 border rounded-md focus:ring-green-400 focus:border-green-600"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="How can we help you?"
              className="w-full mt-1 p-3 border rounded-md focus:ring-green-400 focus:border-green-600"
            ></textarea>
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
          </div>
  
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-800 transition"
            disabled={state.submitting}
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  