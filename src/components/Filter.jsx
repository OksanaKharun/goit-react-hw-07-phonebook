import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../redux/FilterSlice';
import { getFilter } from '../redux/Selectors';

const Filter = function () {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className="filter">
      Find contacts by name
      <input
        placeholder="Enter a name"
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;