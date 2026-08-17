
import RigthCard from "./RigthCard"

const RightContent = (props) => {


  return (
    <div id="scroll-container" className='h-full w-2/3 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl p-6'>
      {props.user.map(function (elem, idx) {

        return <RigthCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag} />
      })}

    </div>
  )
}

export default RightContent