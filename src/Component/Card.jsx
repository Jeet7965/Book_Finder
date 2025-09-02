
import './Card.css'

function Cards({ book }) {

  return (

<>

    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">


      <div className="p-6 flex flex-col justify-center md:w-2/3  bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition">
        <h2 className="text-xl font-bold text-gray-800">{book.title}</h2>
        <p className="text-gray-600 mt-2"> Author: {book.author_name ? book.author_name.join(", ") : "Unknown"}</p>
        <p className="text-gray-500 mt-4"> First Published: {book.first_publish_year || "N/A"}</p>


      </div>
    </div>
</>
  )


}

export default Cards