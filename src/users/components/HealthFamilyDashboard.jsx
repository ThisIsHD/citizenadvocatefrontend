import React, { useState } from "react";
import { motion } from "framer-motion";

function HealthFamilyDashboard() {
  const institutionData = {
    101: "AIIMS Delhi",
    202: "Apollo Hospitals",
    303: "Fortis Healthcare",
    404: "Max Healthcare",
    505: "Narayana Health",
    606: "Tata Memorial Hospital",
    707: "Medanta Hospital",
    808: "Manipal Hospitals",
    909: "CMC Vellore",
  };

  const sampleComplaints = {
    101: [
      { description: "Long waiting time for consultations.", status: "Pending" },
      { description: "Issues with hospital hygiene.", status: "Resolved" },
    ],
    202: [
      { description: "Overcharging for medical procedures.", status: "Pending" },
      { description: "Shortage of critical medicines.", status: "Resolved" },
    ],
    303: [
      { description: "Emergency services are slow.", status: "Pending" },
      { description: "Doctors not available on time.", status: "Resolved" },
    ],
  };

  const [complaint, setComplaint] = useState({
    institutionId: "",
    institutionName: "",
    date: "",
    time: "",
    description: "",
    document: null,
  });

  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "institutionId") {
      const institutionName = institutionData[value] || "";
      setComplaint({ ...complaint, institutionId: value, institutionName });

      if (sampleComplaints[value]) {
        setFilteredComplaints(sampleComplaints[value]);
      } else {
        setFilteredComplaints([]);
      }
    } else {
      setComplaint({ ...complaint, [name]: value });
    }
  };

  const handleRepostComplaint = (desc) => {
    setComplaint((prev) => ({
      ...prev,
      description: desc,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("✅ Complaint Submitted Successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-100">
      <motion.h1 className="text-4xl font-extrabold text-blue-800 text-center mt-6">
        Ministry of Health & Family Welfare Dashboard
      </motion.h1>

      <motion.div
        className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg mt-6 flex flex-col gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {successMessage && (
          <motion.div
            className="w-full text-center text-lg font-semibold text-green-700 bg-green-100 py-2 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {successMessage}
          </motion.div>
        )}

        <h2 className="text-xl font-bold text-gray-800">File a New Complaint</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium">Hospital ID</label>
            <input
              type="text"
              name="institutionId"
              value={complaint.institutionId}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter Hospital ID"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Hospital Name</label>
            <input
              type="text"
              name="institutionName"
              value={complaint.institutionName}
              className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
              readOnly
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <label className="block text-lg font-medium">Choose Date</label>
            <input
              type="date"
              name="date"
              value={complaint.date}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Choose Time</label>
            <input
              type="time"
              name="time"
              value={complaint.time}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-lg font-medium">Complaint Description</label>
          <textarea
            name="description"
            value={complaint.description}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Describe your complaint"
            rows="3"
          />
        </div>

        <div className="mt-4">
          <label className="block text-lg font-medium">Upload Supporting Document</label>
          <input type="file" className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-2 mt-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
        >
          Submit Complaint
        </button>
      </motion.div>
    </div>
  );
}

export default HealthFamilyDashboard;
