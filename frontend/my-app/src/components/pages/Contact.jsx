import React from 'react'
import { useGetAllMedicineQuery } from '../../services/medicine'
const Contact = () => {
  const res=useGetAllMedicineQuery()
  console.log("Result Info:",res);
  return (
    <div>Contact</div>
  )
}

export default Contact