import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "redux/users/selectors";
import { fetchUsersByFilter } from "redux/users/operations";

import css from './Dropdown.module.css'

function DropdownList() {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const handleChange = e => {
        dispatch(fetchUsersByFilter(e.target.value));
    }
    
    return (
        <select className={css.dropdown} value={filter} onChange={handleChange}>
            <option className={css.dropdown__option} value="all">All</option>
            <option className={css.dropdown__option} value="follow">Follow</option>
            <option className={css.dropdown__option} value="followings">Followings</option>
        </select>
    );
}

export default DropdownList;