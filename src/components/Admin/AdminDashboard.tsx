import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import { Loan } from '../../types';
import './adminDashboard.css';

const AdminDashboard: React.FC = () => {
  const [loans, setLoans] = useState<Loan[]>([]);

  useEffect(() => {
    const URL = "https://loan-backend-je6j.onrender.com/api/company/loans";
    axios.get(URL)
      .then(response => setLoans(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleStatusChange = async (loanId: string, status: "Approved" | "Rejected") => {
    try {
      const URL = `https://loan-backend-je6j.onrender.com/api/loans/status`;
      await axios.patch(URL, { loanId, status });
      // Update the local state to reflect the change
      setLoans(prevLoans => 
        prevLoans.map(loan => 
          loan._id === loanId ? { ...loan, status } : loan
        )
      );
    } catch (error) {
      console.error('Failed to update loan status:', error);
    }
  };

  return (
    <div>
      <div className="admin-navbar">
        <div>CREDIT APP</div>
        <div>Admin</div>
      </div>
      <div className="admin-dashboard">
        <div className="admin-sidebar">
          <ul>
            <li>Dashboard</li>
            <li>Borrowers</li>
            <li>Loans</li>
            <li>Repayments</li>
            <li>Loan Parameters</li>
            <li>Accounting</li>
            <li>Reports</li>
            <li>Collateral</li>
            <li>Access Configuration</li>
            <li>Savings</li>
            <li>Other Incomes</li>
          </ul>
        </div>
        <div className="admin-main">
          <h2>Dashboard</h2>
          <div className="admin-stats">

            <div className="card">
              <div className="icon-box">
              <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.0312 13.5461H26.4062C25.8734 13.5461 25.4375 13.9829 25.4375 14.5167V16.458C25.4375 16.9919 25.8734 17.4286 26.4062 17.4286H38.0312C38.5641 17.4286 39 16.9919 39 16.458V14.5167C39 13.9829 38.5641 13.5461 38.0312 13.5461ZM13.8125 16.458C18.0932 16.458 21.5625 12.9819 21.5625 8.69287C21.5625 4.40385 18.0932 0.927734 13.8125 0.927734C9.53184 0.927734 6.0625 4.40385 6.0625 8.69287C6.0625 12.9819 9.53184 16.458 13.8125 16.458ZM19.2375 18.3993H18.2264C16.8822 19.0181 15.3867 19.3699 13.8125 19.3699C12.2383 19.3699 10.7488 19.0181 9.39863 18.3993H8.3875C3.89492 18.3993 0.25 22.0513 0.25 26.5527V29.0764C0.25 30.684 1.55176 31.9883 3.15625 31.9883H24.4688C26.0732 31.9883 27.375 30.684 27.375 29.0764V26.5527C27.375 22.0513 23.7301 18.3993 19.2375 18.3993Z" fill="white"/>
              </svg>


              </div>
              <div className="card-content">
                <h2>200</h2>
                <p>ACTIVE USERS</p>
              </div>
            </div>

            <div className="card">
              <div className="icon-box">
                <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M38.0312 13.5461H26.4062C25.8734 13.5461 25.4375 13.9829 25.4375 14.5167V16.458C25.4375 16.9919 25.8734 17.4286 26.4062 17.4286H38.0312C38.5641 17.4286 39 16.9919 39 16.458V14.5167C39 13.9829 38.5641 13.5461 38.0312 13.5461ZM13.8125 16.458C18.0932 16.458 21.5625 12.9819 21.5625 8.69287C21.5625 4.40385 18.0932 0.927734 13.8125 0.927734C9.53184 0.927734 6.0625 4.40385 6.0625 8.69287C6.0625 12.9819 9.53184 16.458 13.8125 16.458ZM19.2375 18.3993H18.2264C16.8822 19.0181 15.3867 19.3699 13.8125 19.3699C12.2383 19.3699 10.7488 19.0181 9.39863 18.3993H8.3875C3.89492 18.3993 0.25 22.0513 0.25 26.5527V29.0764C0.25 30.684 1.55176 31.9883 3.15625 31.9883H24.4688C26.0732 31.9883 27.375 30.684 27.375 29.0764V26.5527C27.375 22.0513 23.7301 18.3993 19.2375 18.3993Z" fill="white"/>
                </svg>
              </div>
              <div className="card-content">
                <h2>100</h2>
                <p>BORROWERS</p>
              </div>
            </div>

            <div className="card">
              <div className="icon-box">
                <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12.5H46V36.5H10V12.5ZM28 18.5C29.5913 18.5 31.1174 19.1321 32.2426 20.2574C33.3679 21.3826 34 22.9087 34 24.5C34 26.0913 33.3679 27.6174 32.2426 28.7426C31.1174 29.8679 29.5913 30.5 28 30.5C26.4087 30.5 24.8826 29.8679 23.7574 28.7426C22.6321 27.6174 22 26.0913 22 24.5C22 22.9087 22.6321 21.3826 23.7574 20.2574C24.8826 19.1321 26.4087 18.5 28 18.5ZM18 16.5C18 17.5609 17.5786 18.5783 16.8284 19.3284C16.0783 20.0786 15.0609 20.5 14 20.5V28.5C15.0609 28.5 16.0783 28.9214 16.8284 29.6716C17.5786 30.4217 18 31.4391 18 32.5H38C38 31.4391 38.4214 30.4217 39.1716 29.6716C39.9217 28.9214 40.9391 28.5 42 28.5V20.5C40.9391 20.5 39.9217 20.0786 39.1716 19.3284C38.4214 18.5783 38 17.5609 38 16.5H18ZM2 20.5H6V40.5H38V44.5H2V20.5Z" fill="white"/>
                </svg>
              </div>
              <div className="card-content">
                <h2>1,000,000</h2>
                <p>CASH RECEIVED</p>
              </div>
            </div>

            <div className="card">
              <div className="icon-box">
                <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12.5H46V36.5H10V12.5ZM28 18.5C29.5913 18.5 31.1174 19.1321 32.2426 20.2574C33.3679 21.3826 34 22.9087 34 24.5C34 26.0913 33.3679 27.6174 32.2426 28.7426C31.1174 29.8679 29.5913 30.5 28 30.5C26.4087 30.5 24.8826 29.8679 23.7574 28.7426C22.6321 27.6174 22 26.0913 22 24.5C22 22.9087 22.6321 21.3826 23.7574 20.2574C24.8826 19.1321 26.4087 18.5 28 18.5ZM18 16.5C18 17.5609 17.5786 18.5783 16.8284 19.3284C16.0783 20.0786 15.0609 20.5 14 20.5V28.5C15.0609 28.5 16.0783 28.9214 16.8284 29.6716C17.5786 30.4217 18 31.4391 18 32.5H38C38 31.4391 38.4214 30.4217 39.1716 29.6716C39.9217 28.9214 40.9391 28.5 42 28.5V20.5C40.9391 20.5 39.9217 20.0786 39.1716 19.3284C38.4214 18.5783 38 17.5609 38 16.5H18ZM2 20.5H6V40.5H38V44.5H2V20.5Z" fill="white"/>
                </svg>
              </div>
              <div className="card-content">
                <h2>450</h2>
                <p>SAVINGS</p>
              </div>
            </div>
            
            <div className="card">
              <div className="icon-box">
                <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M38.0312 13.5461H26.4062C25.8734 13.5461 25.4375 13.9829 25.4375 14.5167V16.458C25.4375 16.9919 25.8734 17.4286 26.4062 17.4286H38.0312C38.5641 17.4286 39 16.9919 39 16.458V14.5167C39 13.9829 38.5641 13.5461 38.0312 13.5461ZM13.8125 16.458C18.0932 16.458 21.5625 12.9819 21.5625 8.69287C21.5625 4.40385 18.0932 0.927734 13.8125 0.927734C9.53184 0.927734 6.0625 4.40385 6.0625 8.69287C6.0625 12.9819 9.53184 16.458 13.8125 16.458ZM19.2375 18.3993H18.2264C16.8822 19.0181 15.3867 19.3699 13.8125 19.3699C12.2383 19.3699 10.7488 19.0181 9.39863 18.3993H8.3875C3.89492 18.3993 0.25 22.0513 0.25 26.5527V29.0764C0.25 30.684 1.55176 31.9883 3.15625 31.9883H24.4688C26.0732 31.9883 27.375 30.684 27.375 29.0764V26.5527C27.375 22.0513 23.7301 18.3993 19.2375 18.3993Z" fill="white"/>
                </svg>
              </div>
              <div className="card-content">
                <h2>30</h2>
                <p>REPAID LOAN</p>
              </div>
            </div>

          
            <div className="card">
              <div className="icon-box">
                <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12.5H46V36.5H10V12.5ZM28 18.5C29.5913 18.5 31.1174 19.1321 32.2426 20.2574C33.3679 21.3826 34 22.9087 34 24.5C34 26.0913 33.3679 27.6174 32.2426 28.7426C31.1174 29.8679 29.5913 30.5 28 30.5C26.4087 30.5 24.8826 29.8679 23.7574 28.7426C22.6321 27.6174 22 26.0913 22 24.5C22 22.9087 22.6321 21.3826 23.7574 20.2574C24.8826 19.1321 26.4087 18.5 28 18.5ZM18 16.5C18 17.5609 17.5786 18.5783 16.8284 19.3284C16.0783 20.0786 15.0609 20.5 14 20.5V28.5C15.0609 28.5 16.0783 28.9214 16.8284 29.6716C17.5786 30.4217 18 31.4391 18 32.5H38C38 31.4391 38.4214 30.4217 39.1716 29.6716C39.9217 28.9214 40.9391 28.5 42 28.5V20.5C40.9391 20.5 39.9217 20.0786 39.1716 19.3284C38.4214 18.5783 38 17.5609 38 16.5H18ZM2 20.5H6V40.5H38V44.5H2V20.5Z" fill="white"/>
                </svg>
              </div>
              <div className="card-content">
                <h2>50</h2>
                <p>LOANS</p>
              </div>
            </div>

          </div>
          <div>
            <h3>Recent Loans</h3>
            <table>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Loan Amount</th>
                  <th>Tenure</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {loans.map((loan) => (
                  <tr key={loan._id}>
                    <td>{loan.fullName}</td>
                    <td>{loan.loanAmount}</td>
                    <td>{loan.loanTenure}</td>
                    <td>
                      <select 
                        value={loan.status} 
                        onChange={(e) => handleStatusChange(loan._id, e.target.value as "Approved" | "Rejected")}
                        className={
                          loan.status === "Approved"
                            ? "status-approved"
                            : loan.status === "Pending"
                            ? "status-pending"
                            : "status-rejected"
                        }
                      >
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
