import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import Books from '../Books/Books';
import Book from '../Book/Book';
const ReadList = () => {
    const data = useLoaderData();
    const [readlist, setreadlist] = useState([]);
    const [sort,setSort]=useState("");
    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBook = storedBookData.map(data => parseInt(data));
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId));
        setreadlist(myReadList);
    }, []);
    const handleSort=(type)=>{
        setSort(type);
        if(type=='pages'){
            const sortedByPage=[...readlist].sort((a,b)=>a.totalPages-b.totalPages);
            setreadlist(sortedByPage);

        }
        if(type=='rating'){
            const sortedByRating=[...readlist].sort((a,b)=>a.rating-b.rating);
            setreadlist(sortedByRating);
        }
    }
    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Short By {sort?sort:""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=>handleSort('pages')}><a>Pages Number</a></li>
                    <li onClick={()=>handleSort('rating')}><a>Rating</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>Check WishList</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I read: {readlist.length}</h2>
                    {
                        readlist.map(b => <Book key={b.bookId} singlebook={b}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;