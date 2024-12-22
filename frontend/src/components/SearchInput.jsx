import { BiSearch } from "react-icons/bi";
import { Search, SearchInput } from "../styles/search";

const InputSearch = ()=>{
return(
    <Search>
    <SearchInput placeholder="Encontre seus patrimonios" />
    <BiSearch/>
  </Search>
);
}

export default InputSearch;