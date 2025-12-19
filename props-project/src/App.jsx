import React from 'react'
import Card from './Components/Card'

const App = () => {
  const jobs = [
  {
    companyName: "Google",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    posted: "5 days ago",
    role: "Software Engineer",
    jobType: "Full Time",
    level: "Junior",
    pay: "$40–55 / hour",
    location: "Bangalore, India"
  },
  {
    companyName: "Microsoft",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    posted: "2 weeks ago",
    role: "Cloud Engineer",
    jobType: "Full Time",
    level: "Senior",
    pay: "$70–90 / hour",
    location: "Hyderabad, India"
  },
  {
    companyName: "Amazon",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    posted: "5 days ago",
    role: "Backend Developer",
    jobType: "Full Time",
    level: "Junior",
    pay: "$45–60 / hour",
    location: "Chennai, India"
  },
  {
    companyName: "Apple",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    posted: "2 weeks ago",
    role: "iOS Developer",
    jobType: "Full Time",
    level: "Senior",
    pay: "$85–110 / hour",
    location: "Bangalore, India"
  },
  {
    companyName: "Meta",
    companyLogo: "https://tse1.mm.bing.net/th/id/OIP.mzp7qjNYxT5a1WBZG52e0AHaHI?pid=Api&P=0&h=180",
    posted: "5 days ago",
    role: "Frontend Engineer",
    jobType: "Part Time",
    level: "Junior",
    pay: "$35–50 / hour",
    location: "Remote (India)"
  },
  {
    companyName: "Netflix",
    companyLogo: "https://tse2.mm.bing.net/th/id/OIP.CJnMgj-ZpoJw9NQChwSU_QHaEK?pid=Api&P=0&h=180",
    posted: "2 weeks ago",
    role: "Data Engineer",
    jobType: "Full Time",
    level: "Senior",
    pay: "$90–120 / hour",
    location: "Mumbai, India"
  },
  {
    companyName: "IBM",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    posted: "5 days ago",
    role: "System Analyst",
    jobType: "Full Time",
    level: "Junior",
    pay: "$30–40 / hour",
    location: "Pune, India"
  },
  {
    companyName: "Oracle",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    posted: "2 weeks ago",
    role: "Database Engineer",
    jobType: "Full Time",
    level: "Senior",
    pay: "$65–85 / hour",
    location: "Noida, India"
  },
  {
    companyName: "Tesla",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    posted: "5 days ago",
    role: "Software Automation Engineer",
    jobType: "Full Time",
    level: "Senior",
    pay: "$75–95 / hour",
    location: "Bangalore, India"
  },
  {
    companyName: "Samsung",
    companyLogo: "https://up.yimg.com/ib/th/id/OIP.9oCIolbn1TtW1VgCM5INgwHaEK?pid=Api&rs=1&c=1&qlt=95&w=177&h=99",
    posted: "2 weeks ago",
    role: "AI Research Engineer",
    jobType: "Part Time",
    level: "Junior",
    pay: "$28–38 / hour",
    location: "Delhi NCR, India"
  }
];


 

  return (
    <div className='parent'>
   {jobs.map(function (elem, idx) {
  return <div key={idx}>
    <Card company={elem.companyName} role={elem.role} posted={elem.posted} logo={elem.companyLogo} jobType={elem.jobType}
  level={elem.level} pay={elem.pay} location={elem.location}/>
   </div>
})}

    </div>
  )
}

export default App