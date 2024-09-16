import { router } from "@inertiajs/react";
import React,{useState} from "react";

const HeaderSearch = () => {
    const [value, setValues] = useState({
        search: "",
    });
    const handleChange = (e) => {
      const search = e.target.value;
      setValues({ search: search });
    };
    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route("search"), value);
    };
    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                className="search-input"
                value={value.search}
                onChange={handleChange}
                placeholder="search movie"
            />
        </form>
    );
};

export default HeaderSearch;
