import React, { useState } from 'react';

const CitizenDashboard = () => {
  const [selectedMinistry, setSelectedMinistry] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    contactDetails: '',
    pnrNumber: '',
    trainNumber: '',
    vehicleRegNumber: '',
    drivingLicenseNumber: '',
    productName: '',
    purchaseDate: '',
    retailerInfo: '',
    hospitalName: '',
    department: '',
    doctorName: '',
    incidentDate: '',
    incidentLocation: '',
    description: '',
    supportingDocuments: null,
  });

  const ministries = [
    'Ministry of Railways',
    'Ministry of Road Transport and Highways',
    'Ministry of Consumer Affairs, Food and Public Distribution',
    'Ministry of Health and Family Welfare',
    'Ministry of Home Affairs',
    'Ministry of Women and Child Development',
  ];

  const handleMinistryChange = (e) => {
    setSelectedMinistry(e.target.value);
    // Reset formData when ministry changes
    setFormData((prevData) => ({
      ...prevData,
      pnrNumber: '',
      trainNumber: '',
      vehicleRegNumber: '',
      drivingLicenseNumber: '',
      productName: '',
      purchaseDate: '',
      retailerInfo: '',
      hospitalName: '',
      department: '',
      doctorName: '',
      incidentDate: '',
      incidentLocation: '',
    }));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      supportingDocuments: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form validation here
    // Handle form submission logic here
    console.log('Complaint Submitted:', { selectedMinistry, ...formData });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Citizen Dashboard</h1>

      {/* File a New Complaint */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">File a New Complaint</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Select Ministry */}
          <div>
            <label htmlFor="ministry" className="block text-lg font-medium">Select Ministry</label>
            <select
              id="ministry"
              value={selectedMinistry}
              onChange={handleMinistryChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            >
              <option value="">Select Ministry</option>
              {ministries.map((ministry) => (
                <option key={ministry} value={ministry}>{ministry}</option>
              ))}
            </select>
          </div>

          {/* Common Fields */}
          <div>
            <label htmlFor="fullName" className="block text-lg font-medium">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="contactDetails" className="block text-lg font-medium">Contact Details</label>
            <input
              type="text"
              id="contactDetails"
              value={formData.contactDetails}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your contact details"
            />
          </div>

          {/* Ministry-Specific Fields */}
          {selectedMinistry === 'Ministry of Railways' && (
            <>
              <div>
                <label htmlFor="pnrNumber" className="block text-lg font-medium">PNR Number</label>
                <input
                  type="text"
                  id="pnrNumber"
                  value={formData.pnrNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Enter PNR Number"
                />
              </div>
              <div>
                <label htmlFor="trainNumber" className="block text-lg font-medium">Train Number</label>
                <input
                  type="text"
                  id="trainNumber"
                  value={formData.trainNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Enter Train Number"
                />
              </div>
            </>
          )}

          {selectedMinistry === 'Ministry of Road Transport and Highways' && (
            <>
              <div>
                <label htmlFor="vehicleRegNumber" className="block text-lg font-medium">Vehicle Registration Number</label>
                <input
                  type="text"
                  id="vehicleRegNumber"
                  value={formData.vehicleRegNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Enter Vehicle Registration Number"
                />
              </div>
              <div>
                <label htmlFor="drivingLicenseNumber" className="block text-lg font-medium">Driving License Number</label>
                <input
                  type="text"
                  id="drivingLicenseNumber"
                  value={formData.drivingLicenseNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Enter Driving License Number"
                />
              </div>
            </>
          )}

          {selectedMinistry === 'Ministry of Consumer Affairs, Food and Public Distribution' && (
            <>
              <div>
                <label htmlFor="productName" className="block text-lg font-medium">Product/Service Name</label>
                <input
                  type="text"
                  id="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Enter Product or Service Name"
                />
              </div>
              <div>
                <label htmlFor="purchaseDate" className="block text-lg font-medium">Purchase Date</label>
                <input
                  type="date"
                  id="purchaseDate"
                  value={formData.purchaseDate}
                  onChange={handle
::contentReference[oaicite:0]{index=0}
 
