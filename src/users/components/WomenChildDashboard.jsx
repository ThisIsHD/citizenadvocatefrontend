import { useState } from "react";
import { motion } from "framer-motion";

function WomenChildDashboard() {
  const issueData = {
    101: "Women Harassment",
    102: "Child Abuse",
    103: "Domestic Violence",
    104: "Dowry Cases",
    105: "Human Trafficking",
  };

  const sampleComplaints = {
    101: [
      { description: "Harassment in workplace.", status: "Pending" },
      { description: "Stalking incident reported.", status: "Resolved" },
    ],
    102: [
      { description: "Child labor observed in factory.", status: "Pending" },
      { description: "Physical abuse in foster home.", status: "Resolved" },
    ],
  };

  const [complaint, setComplaint] = useState({
    issueCode: "",
    issueType: "",
    description: "",
    date: "",
    document: null,
  });

  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "issueCode") {
      const issueType = issueData[value] || "";
      setComplaint({ ...complaint, issueCode: value, issueType });

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
      <motion.h1 className="text-4xl font-extrabold text-purple-800 text-center mt-6">
        Ministry of Women & Child Development Dashboard
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
            <label className="block text-lg font-medium">Issue Code</label>
            <input
              type="text"
              name="issueCode"
              value={complaint.issueCode}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter Issue Code"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Issue Type</label>
            <input
              type="text"
              name="issueType"
              value={complaint.issueType}
              className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
              readOnly
            />
          </div>
        </div>

        {filteredComplaints.length > 0 && (
          <div className="bg-gray-50 p-4 rounded-lg shadow-md w-full">
            <h3 className="text-lg font-bold mb-4">Existing Complaints for {complaint.issueType}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredComplaints.map((comp, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="font-semibold">{comp.description}</p>
                  <p className={`text-sm ${comp.status === "Resolved" ? "text-green-600" : "text-red-600"}`}>
                    Status: {comp.status}
                  </p>
                  <button
                    onClick={() => handleRepostComplaint(comp.description)}
                    className="mt-2 py-1 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                  >
                    Repost the Same Complaint
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

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
          className="w-full py-2 mt-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition"
        >
          Submit Complaint
        </button>
      </motion.div>
    </div>
  );
}

export default WomenChildDashboard;
