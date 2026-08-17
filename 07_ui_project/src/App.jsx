import Section1 from './components/section1/Section1'

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Prime customers, that have access to bank credit and satisfied with current product',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1555421689-43cad7100750?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Your prime credit is great, but lets unlock exclusive premium rewards you deserve today.',
      tag: 'Underserved'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'You deserve more. Elevate your stable financial foundation with exclusive next-tier benefits now.',
      tag: 'Underbanked'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661777467209-d1fb895cd266?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'High-income individuals requiring personalized wealth management, premium lifestyle perks, and dedicated financial advice.',
      tag: 'Affluent'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Digital-first users seeking seamless mobile banking, micro-investing tools, and zero hidden credit card fees.',
      tag: 'Tech-Savvy'
    },
    {
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Active credit seekers facing strict approval barriers who need structured pathways and starter products to rebuild credit.',
      tag: 'Credit-Strained'
    },
    {
      img: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Small business owners searching for flexible lines of credit, integrated invoicing tools, and transparent merchant services.',
      tag: 'Entrepreneur'
    },
    {
      img: 'https://images.unsplash.com/photo-1686434538659-bb72333a1054?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Corporate executives looking for optimal asset protection, tax-advantaged accounts, and high-limit premium corporate credit lines.',
      tag: 'Executive'
    },
    {
      img: 'https://images.unsplash.com/photo-1682669328101-3a0f8a12d06d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Independent contractors and gig workers needing dynamic income smoothing tools and flexible tax withholding services.',
      tag: 'Freelancer'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661594668193-3f105ef4ce8d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Young professionals prioritizing high-yield savings, automated budgeting tools, and early-stage home financing options.',
      tag: 'Early-Career'
    },
    {
      img: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Established families looking to scale up their wealth with joint account management, college savings funds, and premium rewards.',
      tag: 'Family-Planner'
    },
    {
      img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Students navigating early adulthood who need zero-fee checkings, student loan refinance strategies, and entry-level cashback cards.',
      tag: 'Student'
    }
  ]

  return (
    <div>
      <Section1 user={users} />
    
    </div>
  )
}

export default App
