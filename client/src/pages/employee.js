import React, {useEffect, useState} from "react";
import API from "../utils/API";
import { FormBtn } from "../../../../04-Stu_AJAXFormDelete/client/src/components/Form";


function Employee(){
    const [employees, setEmployees] = useState([]);
    const [formObject, setFormobject] = useState({});

    useEffect(()=>{
        // on load call api and insert response
    },[])

    function loadEmployee(){
        API.getEmployees().then(res=>setEmployees(res.data)).catch(err=>console.log(err))
    }

function handleInputChange(e){
    e.preventDefault()
    const userInput = e.target.value
    setFormobject(userInput)
}

function handleFormSubmit(e){
    e.preventDefault()
    const userInput = e.target.value
    // do a call to search the db to find employee
}


        return(
            <contianer>
                <h1>Find Employees!</h1>
                <form>
                    <Input 
                    onChange={handleInputChange}
                    name="name"
                    placeholder="Search Employees... (required)"
                    />
                    <FormBtn
                    disabled={!(formObject.employee)}
                    onClick={handleFormSubmit}
                    />
                </form>
            </contianer>
        )


}