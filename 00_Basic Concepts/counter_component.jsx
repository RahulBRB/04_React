import Button from "./Button"

import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'
import AppleContainer from "./AppleContainer"

import './AppleCounter.css'
import { useState } from "react"

const AppleCounter = () => {

  let totalApples = 10;
  const [rightApples, setRightApples] = useState(0);
  const [leftApples, setLeftApples] = useState(totalApples-rightApples);


  const leftClickHandler = () =>{
    if(rightApples>0){
      setRightApples(rightApples-1);
      setLeftApples(leftApples+1);
    }

  }

  const rightClickHandler = () =>{
    if(leftApples>0){
      setRightApples(rightApples+1);
      setLeftApples(leftApples-1);
    }
  }

  return (
    <section>
        <AppleContainer appleCount={leftApples} ContainerName="Container 1" />
        <Button clickHandler = {leftClickHandler} imageUrl={LeftArrow} buttonName="Left Arrow"/>
        <Button clickHandler = {rightClickHandler}  imageUrl={RightArrow} buttonName="Right Arrow"/>
        <AppleContainer appleCount={rightApples} ContainerName="Container 2" />
    </section>
  )
}

export default AppleCounter
