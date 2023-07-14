'use client'
 
export default function Error({ error, reset }) {
  return (
    <div className="flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center">
            <h2 className="text-lg text-red-500 capitalize">{error.message || "Something went wrong!"}</h2>
            <button className="rounded-lg py-3 px-2 bg-[#ff4343]" onClick={() => reset()}>Try again</button>
        </div>
    </div>
  )
}