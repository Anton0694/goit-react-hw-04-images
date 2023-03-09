import { useState, useEffect } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import  {Modal}  from './Modal/Modal';
import { getGallery } from '../API'
import { Searchbar } from './Searchbar/Searchbar';

import { ToastContainer, toast} from 'react-toastify';
import { APP, ButtonLoad} from './App.styled'



export const App = () => {
  const [searchText, setSearchText] = useState('')
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [isLoad, setIsLoad] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState('')
  

 const onHandleSubmit = event => {
    const searchText = event.target.name.value.toLowerCase()
    event.preventDefault();

    if (searchText.trim() === '') {
      return toast.error("Empty field!")
    }

   setSearchText(searchText)
   setIsLoad(true)
   setImages([])
   setPage(1);
  };


  useEffect(() => {
    if (searchText === '') return;
    setIsLoad(true)
    
    try {
      getGallery(searchText, page).then(({ data }) => {
        if (data.hits.length === 0) {
          return toast.error('No results found!');
        }
        
        setImages((prevImages) => [...prevImages, ...data.hits]);
        setIsLoad(false)
      });
    } catch (error) {
      setError(true)
      setIsLoad(false)
    }
}, [page, searchText])

const onLoadMoreBtnClick = () => {
  setIsLoad(true)
  setPage((prevPage) => prevPage + 1)
  
  };
  
const onSelect = (data) => {
  setModalData(data)
  setShowModal(true)
  };
  
  const toggleModal = (event) => {
  
  if (event.target === event.currentTarget) {
    setShowModal(prevState => !prevState.showModal )
  }
  };
  
const closeModal = () => {
  setShowModal(false);
};
  return (
    <APP>
      <Searchbar onHandleSubmit={onHandleSubmit} />
      <ImageGallery images={images} onSelect={onSelect} />
      {showModal && (
        <Modal closeModal={closeModal} onModalClick={toggleModal} data={modalData} />
      )}
        
      {isLoad ? (
        <Loader />)
        :
        (images.length > 0 && <ButtonLoad onClick={onLoadMoreBtnClick}>Load More</ButtonLoad>
        )}
      <ToastContainer autoClose={2000} />
    </APP>
  );
};
