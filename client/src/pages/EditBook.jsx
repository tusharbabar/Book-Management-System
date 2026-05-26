import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { getBook, addBook, updateBook } from '../services/api';

export default function EditBook(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    let mounted = true;
    if(id){
      getBook(id).then(data => { if(mounted) setBook(data); }).catch(()=>{});
    }
    return () => { mounted = false; };
  }, [id]);

  const handleSubmit = async (data) => {
    if(id){
      await updateBook(id, data).catch(()=>{});
    } else {
      await addBook(data).catch(()=>{});
    }
    navigate('/');
  };

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="page-title">
          <h1>{id ? 'Edit Book' : 'Add New Book'}</h1>
          <p className="page-subtitle">Complete the form below to {id ? 'update' : 'add'} a title in your reading collection.</p>
        </div>
        <Link to="/" className="button-secondary">Back to library</Link>
      </div>
      <div className="form-panel">
        <BookForm initial={book || {}} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
