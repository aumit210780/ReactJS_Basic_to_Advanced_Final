import { useState } from "react"

export const LearnForm = () => {
    /*const [firstName, setfirstName] = useState("Aumit")
    const [lastName, setLastName] = useState("Hasan")
    const handleFirstName = (e) =>{
        setfirstName(e.target.value)
    }
    const handleLastName = (e) =>{
        setLastName(e.target.value)
    }*/

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
    })
    const handleChange = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log("Submit Button Clicked", formData);
    }
  return (
    <>
     <form action="" onSubmit={handleFormSubmit}>
{/*
        First Name: <input type="text" name="firstName" value={firstName} onChange={handleFirstName}/><br />
        <br />
        Last Name: <input type="text" name="lastName" value={lastName} onChange={handleLastName}/><br /><br />
  */}
        First Name: <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/><br />
        <br />
        Last Name: <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/><br /><br />
        <button type="submit">Submit</button>
     </form>
    </>
  )
}
