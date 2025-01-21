import { useParams } from "react-router-dom"

const StudentDetails = () => {
    const params = useParams()
    const {studentId} = params
  return (
    <div>StudentDetails of {studentId}</div>
  )
}

export default StudentDetails