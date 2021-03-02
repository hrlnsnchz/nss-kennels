import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeCard } from "./Employee"
import "./Employee.css"


export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        console.log("CustomerList: useEffect - getEmployees")
        getLocations()
        .then(getEmployees)
    }, [])
    return (
        <div className="employees">
            {console.log("CustomerList: Render", employees)}
            {
                employees.map(employee => {
                    const location = locations.find(l => l.id === employee.locationId)
                    return <EmployeeCard key ={employee.id}
                                location={location}
                                employee={employee} />
                })
            }
        </div>
    )
}