import Navbar from './Navbar'
import Page1Content from './Page1Content'
const Section1 = (props) => {
    console.log(props.user);
    
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Page1Content user={props.user} />
    </div>
  )
}

export default Section1
