import { useState } from "react";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import iq from "/src/assets/food/iq.webp";

function InquiryForm() {
  const [formData, setFormData] = useState({
    NAME: "",
    EMAIL: "",
    MOBILE: "",
    MESSAGE: "",
    OPTION: "OPTION 1",
  });

  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Define the script URL for Google Sheets
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxl56fFBAxQRiWpCAdapRKQw_kiY2O3xexbK4NPl-Yp9pOnzyi5zEZmLN7tvu_WeVyWvA/exec";

    // Create FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("NAME", formData.NAME);
    formDataToSend.append("MOBILE", formData.MOBILE);
    formDataToSend.append("EMAIL", formData.EMAIL);
    formDataToSend.append("MESSAGE", formData.MESSAGE);
    formDataToSend.append("OPTION", formData.OPTION);
    formDataToSend.append("access_key", "f5469db6-6aae-4631-99e2-1f04d9e7ec65");

    // Send the form data to Google Sheets
    fetch(scriptURL, {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => {
        setFeedbackMessage(
          "Thanks for contacting us! We will contact you soon."
        );
        setLoading(false);
        // Clear form data after submission
        setFormData({
          NAME: "",
          EMAIL: "",
          MOBILE: "",
          MESSAGE: "",
          OPTION: "OPTION 1",
        });
      })
      .catch((error) => {
        setFeedbackMessage("Error submitting the form. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col md:flex-row p-8 md:p-14 rounded-lg bg-[#E7E8EA] relative">
      <div className="w-full flex flex-col md:flex-row mb-4 md:mb-0">
        <div className="md:ml-8 pt-10 md:pt-20 flex flex-col items-start text-center md:text-left">
          <h1 className="oswald uppercase leading-snug  text-xl md:text-3xl">
            Connect with <br />
            <span className="pt-5"> Us!</span>
          </h1>
          <p className="flex font-mono text-[#C27B2F] gap-2 mb-4 items-center">
            <IoCall /> +916232610999
          </p>
          <p className="flex font-mono text-[#C27B2F] gap-2 mb-4 items-center">
            <IoMdMail /> mail.droolah@gmail.com
          </p>
          <p className="flex font-mono text-[#C27B2F] gap-2 mb-4 items-center">
            <FaLocationDot /> 79PQ+5V3, Bhopal, Madhya Pradesh 462001
          </p>
        </div>

        <iframe
          className="md:h-[70%] w-full md:w-[400px] h-64 shadow-2xl mt-4 md:mt-0 md:absolute top-24 md:left-[35vw] z-[1]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.8365659915125!2d77.3896719!3d23.2853875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6812104e7075%3A0x135cd4f3cfac9d25!2s79PQ%2B5V3%2C%20Bhopal%2C%20Madhya%20Pradesh%20462001!5e0!3m2!1sen!2sin!4v1730976496875!5m2!1sen!2sin"
          width="400"
          height="250"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <form
        onSubmit={handleSubmit}
        className="shadow-xl text-gray-700 bg-white rounded-3xl w-full md:w-[90%] mx-auto p-6 md:p-10 mt-8 md:mt-0"
        name="google-sheet"
      >
        <div className="mb-4 md:ml-40 flex flex-col font-mono">
          <div className="w-full mb-6 flex flex-col md:flex-row items-center border-b-2">
            <label className="font-bold md:w-1/4">NAME:</label>
            <input
              type="text"
              name="NAME"
              value={formData.NAME}
              onChange={handleChange}
              className="w-full md:ml-4 p-2 transition duration-200 focus:outline-none focus:border-teal-600"
              required
            />
          </div>

          <div className="w-full mb-6 flex flex-col md:flex-row items-center border-b-2">
            <label className="font-bold md:w-1/4">EMAIL:</label>
            <input
              type="email"
              name="EMAIL"
              value={formData.EMAIL}
              onChange={handleChange}
              className="w-full md:ml-4 p-2 transition duration-200 focus:outline-none focus:border-gray-400"
              required
            />
          </div>

          <div className="w-full mb-6 flex flex-col md:flex-row items-center border-b-2">
            <label className="font-bold md:w-1/4">MOBILE:</label>
            <input
              type="tel"
              name="MOBILE"
              value={formData.MOBILE}
              onChange={handleChange}
              className="w-full md:ml-4 p-2 transition duration-200 focus:outline-none focus:border-gray-400"
            />
          </div>

          <div className="w-full mb-6 flex flex-col md:flex-row items-center border-b-2">
            <label className="font-bold md:w-1/4">OPTIONS:</label>
            <select
              name="OPTION"
              value={formData.OPTION}
              onChange={handleChange}
              className="w-full md:ml-4 p-2 transition duration-200 focus:outline-none focus:border-gray-400"
            >
              <option value="Option 1">Choose Service</option>
              <option value="Option 2">
                Industrial/Institutional Catering
              </option>
              <option value="Option 3">Outdoor Catering</option>
              <option value="Option 4">Club Operations</option>
              <option value="Option 5">Operations & Maintenance</option>
            </select>
          </div>

          <label className="font-bold font-mono">MESSAGE:</label>
          <textarea
            name="MESSAGE"
            value={formData.MESSAGE}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-xl p-3 transition duration-200 focus:outline-none focus:border-gray-400 mb-6"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-full md:ml-40 md:w-[60%] bg-[#C27B2F] text-white p-3 rounded-lg font-extrabold transition duration-300 hover:bg-green-700 ${
            loading ? "is-loading" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Inquiry"}
        </button>

        {feedbackMessage && (
          <div
            style={{
              margin: "20px 0",
              fontWeight: "bold",
              color: loading ? "green" : "red",
              padding: "8px",
              backgroundColor: "beige",
              borderRadius: "4px",
              borderColor: "aquamarine",
            }}
          >
            {feedbackMessage}
          </div>
        )}
      </form>
    </div>
  );
}

export default InquiryForm;
