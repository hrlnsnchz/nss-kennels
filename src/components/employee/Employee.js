import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom"

export const EmployeeCard = ({employee, location}) => (
    <section className="employee">
        <h3 className="employee__name">
        <Link to={`/employees/detail/${employee.id}`}>
          { employee.name }
        </Link></h3>
        <div className="employee__address">{location.name}</div>
    </section>
)