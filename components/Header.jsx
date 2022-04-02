import React, { useState } from 'react'
import { Close, Group, Language, Menu, Search } from '@mui/icons-material'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'
import { useRouter } from 'next/router'

const Header = ({ placeholder }) => {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1)

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  return (
    <header
      className={`sticky top-0 z-[9999] bg-white p-3 shadow-md md:p-5 md:px-10 ${
        searchInput != '' && 'h-screen overflow-scroll'
      }`}
    >
      <div className="flex items-center justify-between">
        <img
          onClick={() => router.push('/')}
          className="hidden w-28 cursor-pointer object-contain md:inline-flex md:w-32"
          src="/logo.png"
          alt="logo"
        />
        <img
          onClick={() => router.push('/')}
          className="w-10 cursor-pointer object-contain md:hidden md:w-32"
          src="/logo_small.png"
          alt="logo_small"
        />
        <div className="max-w-2xl items-center rounded-full py-2 md:flex md:border-2 md:shadow-sm lg:flex-grow">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-grow bg-transparent pl-5 text-gray-600 outline-none md:mr-2"
            type="text"
            placeholder={placeholder || 'Start your search'}
          />
          {searchInput && (
            <span
              onClick={() => setSearchInput('')}
              className="mr-3 hidden cursor-pointer items-center md:flex"
            >
              <Close className="text-lg text-gray-600" />
            </span>
          )}
          <span
            className="hidden cursor-pointer items-center rounded-full bg-red-400 p-2 transition ease-in-out
          hover:bg-red-500 md:mr-2 md:flex"
          >
            <Search className=" text-white" />
          </span>
        </div>
        <div className="flex items-center space-x-5 font-medium text-gray-500">
          <span className="hidden cursor-pointer hover:underline lg:inline-flex">
            Become a host
          </span>
          <Language className="hidden lg:inline-flex" />
          <div
            className="flex items-center space-x-3 rounded-full border-gray-300 p-1
        md:border-2 md:p-2 md:shadow-sm lg:border"
          >
            <Menu className="ml-2 cursor-pointer transition ease-out hover:scale-110" />
            <img
              className="hidden w-10 cursor-pointer rounded-full transition ease-out hover:scale-105 lg:inline-flex"
              src="/avatar.png"
              alt="avatar"
            />
          </div>
        </div>
      </div>

      {searchInput && (
        <div className="mt-5 flex flex-col items-center lg:mr-48">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className="mx-10 mb-4 flex w-full items-center border-b md:w-7/12 lg:w-1/3">
            <h2 className="flex-grow text-2xl font-medium">Number of Guests</h2>
            <Group />
            <input
              min={1}
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              className="w-12 pl-2 text-lg text-red-400 outline-none"
              type="number"
            />
          </div>
          <div className="mt-5 flex w-1/2 items-center gap-x-5">
            <button
              onClick={() => setSearchInput('')}
              className="flex-grow cursor-pointer rounded-lg bg-gray-400 px-5 
            py-3 font-medium text-white transition ease-in-out hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                router.push({
                  pathname: '/search',
                  query: {
                    location: searchInput,
                    startDate: startDate.toDateString(),
                    endDate: endDate.toDateString(),
                    noOfGuests,
                  },
                }),
                  setSearchInput('')
              }}
              className="flex-grow cursor-pointer rounded-lg bg-red-400 px-5 
            py-3 font-medium text-white transition ease-in-out hover:bg-red-500"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
