import React, { useEffect, useState } from "react";
import SearchBar from './Component/Search_bar';
import Cards from './Component/Card'

const HomePage = () => {
    const [books, setBooks] = useState([]);
    const [searched, setSearched] = useState(false);
    const [loading, setLoading] = useState(false);

    // const [bookdata, setbookdata] = useState([]);

    // useEffect(() => {
    //     // fetchBooks()
    //     // DataBooks()

    // }, [])


    // async function DataBooks(bookTitle) {
    // const url=`https://openlibrary.org/search.json?title=${encodeURIComponent(bookTitle)}`;
    // let response = await fetch(url)
    // response= await response.json()

    // setbookdata(response.docs)
    // }

    // console.log(bookdata)


    const fetchBooks = async (title) => {
        setSearched(true);
        setLoading(true); //  show loading message
        try {
            const response = await fetch(
                `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`
            );
            const data = await response.json();
            setBooks(data.docs.slice(0, 20));   // show data only 20 
        } catch (error) {
            console.error("Error fetching books:", error);
        } finally {
            setLoading(false); // hide loading message after fetch
        }
    };

    return (
        <div >

            <SearchBar onSearch={fetchBooks}></SearchBar>

            <h1 className="text-2xl  pt-7 pb-2 text-center font-bold text-amber-700 ">All books Details</h1>
            <hr className="p-5 w-full" />
            {/* Loading state */}
            {loading && (
                <p className="text-center mt-6 text-blue-500 font-semibold">
                    Please wait... fetching books
                </p>
            )}

            {/* If searched but no results */}
            {searched && !loading && books.length === 0 && (

                <p className="text-center mt-6 font-2xl text-red-500">No books found.</p>
            )}
            {/* Show books */}
            <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                {
                    !loading &&
                    books.map((book, index) => (

                        <div key={index}>

                         <div className="p-5">
                               <Cards book={book} />
                         </div>
                        </div>


                    ))}
            </div>
        </div>


    );
};

export default HomePage;
