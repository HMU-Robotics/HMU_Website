import "./Spliter.css"
import {useState} from "react"

function Slit(props){
    return(
        <div className={props.class}
        onMouseOver={props.handleMouseOver}
        onMouseOut={props.handleMouseOut}
        >
            <h1 className="slit-title">{props.name}</h1>
            <button className="slit-btn">See more</button>
        </div>
    )
}


function Spliter(){

    const [isState , setState] = useState(0)


    const handleMouseOverRight = () => {
        setState(2);
        console.log(isState)
      };
    
      const handleMouseOutRight = () => {
        setState(0)
        console.log(isState)
      };

      const handleMouseOverLeft = () => {
        setState(1);
        console.log(isState)
      };
    
      const handleMouseOutLeft = () => {
        setState(0)
        console.log(isState)
      };

      let class_right , class_left

      if(isState === 0){
        class_left = "split left"
        class_right = "split right"
      }
      else if(isState === 1){
        class_left = "split left hover"
        class_right = "split right sll"
      }else if(isState === 2){
        class_left = "split left sll"
        class_right = "split right hover"
      }

    return(
    <div className="spliter-container">
    
        <Slit class={class_left} handleMouseOver={handleMouseOverLeft} handleMouseOut={handleMouseOutLeft} name={"Projects"}/>
        <Slit class={class_right} handleMouseOver={handleMouseOverRight} handleMouseOut={handleMouseOutRight} name={"About"}/>

    </div>
    )
}

export default Spliter