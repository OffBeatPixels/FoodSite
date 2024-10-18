import { useState } from "react";
import iq from "/src/assets/food/iq.png";

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
    <div className="flex flex-col md:flex-row mt-4  p-6 rounded-lg shadow-lg">
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <img
          src={iq}
          alt="Description"
          className="w-full h-full scale-75 rounded-lg "
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md text-gray-700 rounded-3xl mx-auto p-6"
        name="google-sheet"
      >
        <h1 className="uppercase font-semibold text-center text-2xl mb-4 text-teal-700">
          Inquiry Form
        </h1>

        <div className="mb-4 flex justify-between">
          <div className="w-1/2 pr-2">
            <label className="font-bold">NAME:</label>
            <input
              type="text"
              name="NAME"
              value={formData.NAME}
              onChange={handleChange}
              className="w-full border-2 border-teal-500 rounded-xl p-2 transition duration-200 focus:outline-none focus:border-teal-600"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label className="font-bold">EMAIL:</label>
            <input
              type="email"
              name="EMAIL"
              value={formData.EMAIL}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded-xl p-2 transition duration-200 focus:outline-none focus:border-gray-400"
              required
            />
          </div>
        </div>

        <div className="mb-4 flex justify-between">
          <div className="w-1/2 pr-2">
            <label className="font-bold">MOBILE:</label>
            <input
              type="tel"
              name="MOBILE"
              value={formData.MOBILE}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded-xl p-2 transition duration-200 focus:outline-none focus:border-gray-400"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label className="font-bold">OPTION:</label>
            <select
              name="OPTION"
              value={formData.OPTION}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded-xl p-2 transition duration-200 focus:outline-none focus:border-gray-400"
            >
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
              <option value="Option 5">Option 5</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="font-bold">MESSAGE:</label>
          <textarea
            name="MESSAGE"
            value={formData.MESSAGE}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-xl p-3 transition duration-200 focus:outline-none focus:border-gray-400"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-full bg-teal-600 text-white p-3 rounded-lg transition duration-300 hover:bg-teal-700 ${
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
