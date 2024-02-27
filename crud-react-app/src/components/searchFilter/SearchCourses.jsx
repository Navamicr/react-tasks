
import { GoSearch } from "react-icons/go";
const SearchCourses = ({handleSearch}) => {
  return (
    <div className="searchBlock">
        
        <span><input type="text" placeholder="search courses..." onInput={e=> handleSearch(e.target.value)} /></span>
        <span className="searchIcon"><GoSearch /></span>
        
    </div>
  )
}

export default SearchCourses