import React from 'react'

const Footer = () => {
  return (
    <footer
      className="md:px-15 grid grid-cols-1 content-center gap-y-10
    bg-gray-100 px-5 py-10 text-gray-700 md:grid-cols-2 lg:grid-cols-4"
    >
      <div>
        <h5 className="font-medium">ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>Learn about new features</p>
        <p>Newsroom</p>
        <p>Learn about new features</p>
        <p>Careers</p>
        <p>Investors</p>
        <p>Airbnb Luxe</p>
      </div>
      <div>
        <h5 className="font-medium">SUPPORT</h5>
        <p>Help Center</p>
        <p>Safety information</p>
        <p>Cancellation options</p>
        <p>Our COVID-19 Response</p>
        <p>Supporting people with disabilities</p>
        <p>Report a neighborhood concern</p>
      </div>
      <div>
        <h5 className="font-medium">COMMUNITY</h5>
        <p>Airbnb.org: disaster relief housing</p>
        <p>Support Afghan refugees</p>
        <p>Combating discrimination</p>
      </div>
      <div>
        <h5 className="font-medium">HOSTING</h5>
        <p>Try hosting</p>
        <p>AirCover: protection for Hosts</p>
        <p>Explore hosting resources</p>
        <p>Visit our community forum</p>
        <p>How to host responsibly</p>
      </div>
    </footer>
  )
}

export default Footer
