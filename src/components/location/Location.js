import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const LocationCard = ({location, employees, animals}) => (
    <section className="location">
        <h3 className="location__name">
        <Link to={`/locations/detail/${location.id}`}>
          { location.name }
        </Link>
        </h3>
        <div className="location__address">{location.address}</div>
        <div className="employee__amount">{employees.length} Employees</div>
        <div className="animal__amount">{animals.length} Animals</div>
    </section>
)