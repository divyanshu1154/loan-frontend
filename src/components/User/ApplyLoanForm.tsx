// src/components/ApplyLoanForm.tsx

import React, { useState } from 'react';
import axios from 'axios';
import './ApplyLoanForm.css';

interface ApplyLoanFormProps {
  onClose: () => void; // Prop to handle form close
}

const ApplyLoanForm: React.FC<ApplyLoanFormProps> = ({ onClose }) => {
  const [fullName, setFullName] = useState('');
  const [loanAmount, setLoanAmount] = useState<number | string>('');
  const [loanTenure, setLoanTenure] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [reason, setReason] = useState('');
  const [employmentAddress, setEmploymentAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const loanData = {
      fullName,
      loanAmount,
      loanTenure,
      employmentStatus,
      reason,
      employmentAddress,
    };

    try {
      const URL = "https://loan-backend-je6j.onrender.com/api/loans";
      const response = await axios.post(URL, loanData);
      setMessage(response.data.message);
      // Clear form fields after submission
      setFullName('');
      setLoanAmount('');
      setLoanTenure('');
      setEmploymentStatus('');
      setReason('');
      setEmploymentAddress('');
    } catch (error) {
      setMessage('Failed to submit loan request. Please try again.');
      console.error('Error submitting loan request:', error);
    }
  };

  return (
    <div className="loan-application-overlay">
      <div className="loan-application">
        <button className="close-button" onClick={onClose}>✖</button> {/* Close button */}
        <h2>Apply for a Loan</h2>
        {message && <p>{message}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="loanAmount">Loan Amount:</label>
              <input
                type="number"
                id="loanAmount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="loanTenure">Loan Tenure:</label>
              <input
                type="text"
                id="loanTenure"
                value={loanTenure}
                onChange={(e) => setLoanTenure(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="employmentStatus">Employment Status:</label>
              <input
                type="text"
                id="employmentStatus"
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="reason">Reason for Loan:</label>
              <input
                type="text"
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="employmentAddress">Employment Address:</label>
              <input
                type="text"
                id="employmentAddress"
                value={employmentAddress}
                onChange={(e) => setEmploymentAddress(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default ApplyLoanForm;
