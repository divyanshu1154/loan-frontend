import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loan } from '../../types';
import './UserDashboard.css';
import ApplyLoanForm from './ApplyLoanForm';

const UserDashboard: React.FC = () => {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [applyLoan, setApplyLoan] = useState(false);

  useEffect(() => {
    const URL = "http://localhost:5000/api/user/loans";
    axios.get(URL).then(response => setLoans(response.data)).catch(error => console.error(error));
  }, []);

  return (
    <div className="user-dashboard">
      <div className="navbar">
        <div>
          <h3>CREDIT APP</h3>
        </div>
        <div className="nav-main">
          <ul>
            <li>Home</li>
            <li>Payments</li>
            <li>Budget</li>
            <li>Card</li>
          </ul>
        </div>
        <div>
          User
        </div>
      </div>
      <button onClick={() => setApplyLoan(true)}>Apply Loan</button>
      {applyLoan && <ApplyLoanForm onClose={() => setApplyLoan(false)} />} {/* Pass the close function */}
      
      <h2>Previous Loans</h2>
      <div>
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
                <td>{loan.status}</td>
                {/* <td>{format(new Date(loan.createdAt), 'yyyy-MM-dd HH:mm:ss')}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;
