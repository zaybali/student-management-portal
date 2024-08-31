"use client"
import { createContext, useState } from "react";

 
 const mainContext = createContext(null);

 export default function Studentcontext({children} : {children: React.ReactNode}) {
  let studentData = [
    {
      name: "Zayb Ali",
      fatherName: "Muhammad Ismail",
      rollNumber: 175561,
      feeStatus: true
    },
    {
      name: "Muhammad Umar",
      fatherName: "Mehmood",
      rollNumber: 175580,
      feeStatus: false
    }
  ];

  const [allStudents, setAllStudents] = useState(studentData);

  return (
    <mainContext.Provider value={{allStudents, setAllStudents}}>
      {children}
    </mainContext.Provider>
  )
 }