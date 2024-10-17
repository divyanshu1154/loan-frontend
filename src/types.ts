export interface Loan {
    _id: string;
    fullName: string;
    loanAmount: number;
    loanTenure: string;
    employmentStatus: string;
    reason: string;
    employmentAddress: string;
    status: "Pending" | "Approved" | "Rejected";
  }
  
export interface User {
    // id: string;
    name: string;
    email: string;
    password: string;
    role: "admin" | "user";
  }
  