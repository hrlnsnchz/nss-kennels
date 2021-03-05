import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"


export const AnimalList = () => {
    const { animals, getAnimals, searchTerms } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

      // Empty dependency array - useEffect only runs after first render
    useEffect(() => {
        console.log("AnimalList: initial render before data")
        getLocations()
        .then(getCustomers)
        .then(getAnimals)
    }, [])
  

     // Since you are no longer ALWAYS displaying all of the animals
    const [ filteredAnimals, setFiltered ] = useState([])
    const history = useHistory()

    // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching animals
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
             // If the search field is blank, display all animals
            setFiltered(animals)
        }
    }, [searchTerms, animals])

    return (
        <>
          <h1>Animals</h1>
    
          <button onClick={() => history.push("/animals/create")}>
              Make Reservation
          </button>
          <div className="animals">
          {
            filteredAnimals.map(animal => {
                const customer = customers.find(c => c.id === animal.customerId)
                    const location = locations.find(l => l.id === animal.locationId)
                    console.log("In map owner:", customer)
                    return <AnimalCard key ={animal.id}
                                location={location}
                                customer={customer} 
                                animal={animal} />
              })
          }
          </div>
        </>
      )
    }
