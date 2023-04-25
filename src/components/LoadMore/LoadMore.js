import { useDispatch, useSelector } from 'react-redux'
import css from './LoadMore.module.css'

import { fetchMoreUsers } from 'redux/users/operations';
import { selectIsEnd, selectIsLoading } from 'redux/users/selectors';

export default function LoadMore() {
    const dispatch = useDispatch();
    const isEnd = useSelector(selectIsEnd);
    const isLoading = useSelector(selectIsLoading);


    return !isEnd && (
        <div className={css.loadMore__container}>
            {
                isLoading ? <h3 className='loading'>Loading...</h3> :
                    <button className={css.loadMore__button} onClick={() => dispatch(fetchMoreUsers())}>
                        Load More
                </button>
            }
            
        </div>
    )
}
