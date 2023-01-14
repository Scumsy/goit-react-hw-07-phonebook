import { selectFilter } from 'components/Redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { FilterStyle } from './Filter.styled';
import { setFilter } from '../Redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFormInput = evt => {
    dispatch(setFilter(evt.target.value));
  };
  return (
    <label>
      Find contacts by name
      <FilterStyle
        onChange={onFormInput}
        type="text"
        name="filter"
        value={filter}
      />
    </label>
  );
};
