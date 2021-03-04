import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./Location"
import "./Location.css"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { AnimalContext } from "../animal/AnimalProvider"


export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect(() => {
        console.log("LocationList: useEffect - getLocations")
        getEmployees()
        .then(getLocations)
        .then(getAnimals)
    }, [])
    return (
        <div className="locations">
            {console.log("LocationList: Render", locations)}
            {
                locations.map(location => {
                    const empNum = employees.filter(emp => emp.locationId === location.id)
                    const aniNum = animals.filter(ani => ani.locationId === location.id)
                    return <LocationCard key ={location.id} 
                                animals={aniNum}
                                employees={empNum}
                                location={location} />
                })
            }
        </div>
    )
}