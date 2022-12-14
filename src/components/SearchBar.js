import useForm from "../Hooks/useForm.js";
import "../stylesheets/SearchBar.css"

function SearchBar(){

  const formSubmit = () => {

    alert("Callback when form is submitted");
   // alert("Form Values: "+ values);
    console.log("Form Values: ", values);

  }

  const {handleChange, values, errors, handleSubmit} = useForm(formSubmit);

  return (
    <div className="MovieSearchContainer">
      <form onSubmit={handleSubmit}>
        <label>
        <input type="text" name="user_search" className = "MovieSearchInput" placeholder="Movie,TV Show, Actor..." onChange={handleChange}/>
        {
          errors.user_search && <h2>{errors.user_search}</h2>
        }
        </label>
        <input type="submit" className ="MovieSearchBtn" value = "Submit" />
      </form>
    </div>
  
  );
}

export default SearchBar;