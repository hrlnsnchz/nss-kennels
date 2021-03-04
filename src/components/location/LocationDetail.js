import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"
// import { EmployeeContext } from "../employee/EmployeeProvider"
// import { AnimalContext } from "../animal/AnimalProvider"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)
  // const { getEmployeeById } = useContext(EmployeeContext)
  // const { getAnimalById } = useContext(AnimalContext)


	const [location, setLocation] = useState({})
  // const [employee, setEmployee] = useState({})
  // const [animal, setAnimal] = useState({})

	const {locationId} = useParams();

	const history = useHistory();

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
    }, [])

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__owner">{location.address}</div>
      {/* <div className="employee__name">{employee.name}</div>
      <div className="animal__name">{animal.name}</div> */}
    </section>
  )
}