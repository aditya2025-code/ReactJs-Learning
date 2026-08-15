import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobsOpening = [
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/072/677/661/small/google-search-logo-icon-free-png.png",
    name: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer, Full Stack",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/028/339/965/non_2x/microsoft-icon-logo-symbol-free-png.png",
    name: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Engineering Intern",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$35/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/019/766/223/small_2x/amazon-logo-amazon-icon-transparent-free-png.png",
    name: "Amazon",
    datePosted: "3 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    name: "Meta",
    datePosted: "2 weeks ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://pngimg.com/uploads/apple_logo/apple_logo_PNG19666.png",
    name: "Apple",
    datePosted: "10 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://pngimg.com/uploads/netflix/netflix_PNG10.png",
    name: "Netflix",
    datePosted: "3 weeks ago",
    post: "Backend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/078/805/239/non_2x/nvidia-circle-icon-on-a-transparent-background-free-png.png",
    name: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI/ML Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/5969/5969147.png",
    name: "IBM",
    datePosted: "6 days ago",
    post: "Cloud Software Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://www.pngplay.com/wp-content/uploads/5/Oracle-Logo-Transparent-Images-preview.webp",
    name: "Oracle",
    datePosted: "2 weeks ago",
    post: "Java Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$40/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logoeps.com/wp-content/uploads/2025/02/salesforce-logo.png",
    name: "Salesforce",
    datePosted: "10 weeks ago",
    post: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$32/hour",
    location: "Kolkata, India"
  }
];

  console.log(jobsOpening)

  return (
    <div className='parent'>
      {jobsOpening.map(function(elem){
        
        return <Card company={elem.name} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} brandLogo={elem.brandLogo} datePosted={elem.datePosted} pay={elem.pay} location={elem.location} />
      })}

    </div>
  )
}

export default App
