const getStoredBook=()=>{
    const storedBooksSTR=localStorage.getItem("readList");
    if(storedBooksSTR){
        const sotredBooksData=JSON.parse(storedBooksSTR);
        return sotredBooksData;
    }
    else{
        return [];
    }
}

const addToStoredBook=(id)=>{
    const sotredBooksData=getStoredBook();
    if(sotredBooksData.includes(id)){
        alert("Ei id already Exist");
    }
    else{
        sotredBooksData.push(id);
        const data=JSON.stringify(sotredBooksData);
        localStorage.setItem("readList",data);
    }
}

export {addToStoredBook,getStoredBook};