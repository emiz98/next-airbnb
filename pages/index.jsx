import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import SingleCard from '../components/SingleCard'
import ShopCard from '../components/ShopCard'
import SmallCard from '../components/SmallCard'

const Home = ({ exploreData, cardsData }) => {
  return (
    <div className="noselect">
      <Head>
        <title>Airbnb 1.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="mx-auto max-w-7xl space-y-10 px-5 sm:px-16">
        <section className="pt-6">
          <h2 className="hero_title">Explore Nearby</h2>
          <div
            className="grid grid-cols-1
          gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {exploreData.locations.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <ShopCard />
        <section>
          <h2 className="hero_title">Live Anywhere</h2>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {cardsData.stays.map(({ title, img }) => (
              <LargeCard key={img} title={title} img={img} />
            ))}
          </div>
        </section>
        <SingleCard
          img="/assets/single.webp"
          title="The Greatest Outdoors"
          description="Wishlist curated by Airbnb"
          text="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const exploreData = await fetch(
    'http://localhost:3000/api/getlocations'
  ).then((res) => res.json())

  const cardsData = await fetch('http://localhost:3000/api/getstays').then(
    (res) => res.json()
  )

  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}
