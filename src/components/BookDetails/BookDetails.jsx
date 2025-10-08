import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredBook } from '../../Utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    console.log(data);
    const singleBook = data.find(book => book.bookId == id);
    console.log(singleBook)

    const handleMarksAsRead = (id) => {

        MySwal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
        addToStoredBook(id);
    }
    return (
        <div>
            <h1 className='text-xl mt-[30px] mb-[20px]'>Book Details</h1>
            <div className='flex flex-col justify-center items-center'>
                <img className='h-[450px] w-[300px] mb-[10px]' src={singleBook.image} alt="" />
                <h2 className='text-xl font-bold mb-[30px]'>{singleBook.bookName}</h2>
                <div className='mb-[30px]'>
                    <button onClick={() => handleMarksAsRead(id)} className='btn mr-[10px]'>Read</button>
                    <button className='btn btn-primary'>WishList</button>
                </div>
            </div>

        </div>
    );
};

export default BookDetails;