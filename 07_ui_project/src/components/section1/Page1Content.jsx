import LeftContent from './LeftContent'
import RightContent from './RightContent'
const Page1Content = (props) => {
  return (
    <div className='py-10 flex item-center gap-10 h-[90vh]  px-18'>
        <LeftContent />
        <RightContent user={props.user} />
    </div>
  )
}

export default Page1Content