
const MovieSearchForm = ({ searchParams, setSearchParams, onSubmit }) => {
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      onSubmit(form.elements.keyword.value);
      form.reset();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="keyword" />
        <button type="submit">Search</button>
      </form>
    );
  };
  
  export default MovieSearchForm;
  