import { useState } from 'react';
import { withRouter } from 'react-router-dom';

const MovieSearchForm = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/movies?keyword=${keyword}`);
    setKeyword('');
  };

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="keyword" value={keyword} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default withRouter(MovieSearchForm);
