import RightCardContent from "./RightCardContent"

const RigthCard = (props) => {
  return (
    <div id="right" className="h-full w-80 relative overflow-hidden shrink-0 rounded-4xl">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent id={props.id} intro={props.intro} tag={props.tag} />
    </div>
  )
}

export default RigthCard