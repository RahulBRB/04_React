//it can also be helpful to create different state variables for data that change separately
//It’s best to create multiple state variables based on which values tend to change together.

import React, { useState } from "react";

//INSTEAD OF TIHS 
function Musical() {
   const [state, setState] = useState({
    title: "Best Musical Ever",
    actors: ["George Wilson", "Tim Hughes", "Larry Clements"],
    locations: {
      Chicago: {
        dates: ["1/1", "2/2"], 
        address: "chicago theater"}, 
      SanFrancisco: {
        dates: ["5/2"], 
        address: "sf theater"
      }
    }
  })
 }


//DO THIS
function MusicalRefactored() {
    const [title, setTitle] = useState("Best Musical Ever")
    const [actors, setActors] = useState(["George Wilson", "Tim Hughes", "Larry Clements"])
    const [locations, setLocations] = useState({
      Chicago: {
        dates: ["1/1", "2/2"], 
        address: "chicago theater"}, 
      SanFrancisco: {
        dates: ["5/2"], 
        address: "sf theater"
      }
    })
}


