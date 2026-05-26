import React, { useEffect, useState } from 'react';

export default function BookForm({ initial = {}, onSubmit }){
  const [title, setTitle] = useState(initial.title || '');
  const [author, setAuthor] = useState(initial.author || '');

  useEffect(() => {
    setTitle(initial.title || '');
    setAuthor(initial.author || '');
  }, [initial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit({ title, author });
  };

  return (
    <form onSubmit={handleSubmit} className="form-row">
      <div>
        <label htmlFor="title">Book title</label>
        <input
          id="title"
          type="text"
          className="input-field"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter book title"
          required
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          className="input-field"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder="Enter author name"
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="button-primary">Save Book</button>
      </div>
    </form>
  );
}
