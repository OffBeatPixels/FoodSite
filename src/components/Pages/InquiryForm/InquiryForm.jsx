import { useState } from "react";

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
    <form
      onSubmit={handleSubmit}
      className="max-w-md border-blue-600 border text-black bg-white/50 rounded-3xl mx-auto p-4"
      name="google-sheet"
    >
      <div className="mb-4">
        <h1 className="uppercase font-semibold flex justify-center text-xl">
          Inquiry Form
        </h1>
        <label className="font-bold">NAME:</label>
        <input
          type="text"
          name="NAME"
          value={formData.NAME}
          onChange={handleChange}
          className="w-full border p-2 "
          required
        />
      </div>

      <div className="mb-4">
        <label className="font-bold">EMAIL:</label>
        <input
          type="email"
          name="EMAIL"
          value={formData.EMAIL}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="font-bold">MOBILE:</label>
        <input
          type="phone"
          name="MOBILE"
          value={formData.MOBILE}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>

      <div className="mb-4" required>
        <label className="font-bold">OPTION:</label>
        <select
          name="OPTION"
          value={formData.OPTION}
          onChange={handleChange}
          className="w-full border text-black p-2"
        >
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
          <option value="Option 5">Option 5</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="font-bold">MESSAGE:</label>
        <textarea
          name="MESSAGE"
          value={formData.MESSAGE}
          onChange={handleChange}
          className="w-full border p-2 text-black"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className={`bg-blue-500 text-white p-2 ${loading ? "is-loading" : ""}`}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Inquiry"}
      </button>

      {feedbackMessage && (
        <div
          style={{
            margin: "20px",
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
  );
}

export default InquiryForm;
