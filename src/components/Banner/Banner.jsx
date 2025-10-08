import React from 'react';
import bookImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold mb-10">Books to freshen up <br /> your bookshelf</h1>
      
      <button className="btn btn-primary">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;