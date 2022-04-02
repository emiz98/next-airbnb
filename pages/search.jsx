import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import LocationCard from '../components/LocationCard'
import dynamic from 'next/dynamic'

const DynamicMapWithNoSSR = dynamic(() => import('../components/Map'), {
  ssr: false,
})

const Search = ({ searchResults }) => {
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
    <div className="noselect">
      <Head>
        <title>Airbnb 1.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex flex-col">
        <section className="flex-grow p-3 pt-14 md:p-5 md:px-10">
          <p className="ml-2 select-none text-xs">
            300+ Stays -
            <span className="mx-2 rounded-md bg-red-400 px-2 py-1 text-white">
              {formattedStartDate}
            </span>
            -
            <span className="mx-2 rounded-md bg-red-400 px-2 py-1 text-white">
              {formattedEndDate}
            </span>
            for {noOfGuests} guests
          </p>
          <h1 className="mt-2 ml-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>
          <div className="mb-3 hidden select-none items-center space-x-3 whitespace-nowrap text-gray-800 md:flex">
            <button className="sortBtn">Cancellation Flexibility</button>
            <button className="sortBtn">Type of Place</button>
            <button className="sortBtn">Price</button>
            <button className="sortBtn">Rooms and Beds</button>
            <button className="sortBtn">More Filters</button>
          </div>
          <div className="flex flex-col gap-y-2">
            {searchResults.map(
              (
                { img, location, title, description, star, price, total },
                i
              ) => (
                <LocationCard
                  key={i}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="p-3 pt-6 md:p-5 md:px-10 md:pt-14">
          <DynamicMapWithNoSSR locations={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch('https://jsonkeeper.com/b/5NPS').then(
    (res) => res.json()
  )

  return {
    props: {
      searchResults,
    },
  }
}
