import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { format } from 'date-fns'

const Search = () => {
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query

  var formattedStartDate
  var formattedEndDate
  if (startDate && endDate) {
    formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
    formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
  }

  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div className="">
      <Head>
        <title>Airbnb 1.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow p-3 pt-14 md:p-5 md:px-10">
          <p className="text-xs">
            300+ Stays - {range} for {noOfGuests} guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>
          <div className="mb-3 hidden select-none items-center space-x-3 whitespace-nowrap text-gray-800 md:flex">
            <button className="sortBtn">Cancellation Flexibility</button>
            <button className="sortBtn">Type of Place</button>
            <button className="sortBtn">Price</button>
            <button className="sortBtn">Rooms and Beds</button>
            <button className="sortBtn">More Filters</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search
