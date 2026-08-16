
import RigthCard from "./RigthCard"

const RightContent = (props) => {
  
    
  return (
    <div className='h-full w-2/3 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl p-6'>
        {props.user.map(function(elem){

            return <RigthCard img={elem.img}/>
        })}
       
    </div>
  )
}

export default RightContent