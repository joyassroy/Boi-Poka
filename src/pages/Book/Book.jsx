
import { Link } from 'react-router';

const Book = ({ singlebook }) => {

    return (
        <Link to={`/bookDetails/${singlebook.bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className='p-3'>
                <img
                    className='h-[250px]'
                    src={singlebook.image}
                    alt="Books" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {singlebook.bookName}
                    <div className="badge badge-secondary">{singlebook.publisher}</div>
                </h2>
                <p>By : {singlebook.author}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{singlebook.category}</div>
                    <div className="badge badge-outline">{singlebook.rating}</div>
                </div>
            </div>
        </div></Link>
    );
};

export default Book;