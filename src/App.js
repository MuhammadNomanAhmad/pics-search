import SearchBar from './Components/SearchBar';
import './App.css';
import searchImages from './Api';
import { useState } from 'react';
import ImageList from './Components/ImageList';

function App() {
  const [images,setImages]=useState([])

  const handleSubmit=async (term)=>{
const response=await searchImages(term)

setImages(response)
  };
  return (
    <>App
    <SearchBar onSubmit={handleSubmit} />
    <ImageList images={images} />
    </>
  );
}

export default App;
