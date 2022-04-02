import React from 'react'

const SingleCard = ({ img, title, description, text }) => {
  return (
    <section className="relative pb-10">
      <div className="relative">
        <img
          className="h-60 w-full rounded-lg object-cover object-bottom md:h-80"
          src={img}
          alt="hero2"
        />
      </div>
      <div className="absolute top-[15%] left-5 w-52 space-y-4 md:top-[20%] md:left-12">
        <h3 className="text-2xl font-medium md:text-4xl">{title}</h3>
        <p>{description}</p>
        <button
          className="rounded-lg bg-black px-4
        py-2 text-sm text-white transition ease-in-out hover:bg-red-400"
        >
          {text}
        </button>
      </div>
    </section>
  )
}

export default SingleCard
