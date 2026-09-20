import { useDispatch } from 'react-redux';
import { removeCollection, removeToast } from '../redux/features/collectionSlice';

const CollectionCard = ({item}) => {

    const dispatch = useDispatch()

    const removeFromCollection = (item)=>{
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }
    return (
        <article className='window flex h-full flex-col'>
            <div className='titlebar text-base'>
                <span className='truncate'>{item.type}</span>
            </div>

            <a
                target='_blank'
                rel='noreferrer'
                className='bevel-in mx-3 mt-3 block aspect-4/3 overflow-hidden bg-ink'
                href={item.url}
            >
                {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt={item.title || ""} loading='lazy' /> : ''}
                {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted playsInline src={item.src}></video> : ''}
                {item.type == 'gif' ? <img className='h-full w-full object-cover object-center' src={item.src} alt={item.title || ""} loading='lazy' /> : ''}
            </a>

            <div id='bottom' className='flex flex-1 items-start justify-between gap-3 p-3'>
                <h2 className='line-clamp-2 min-h-2.5rem text-sm font-semibold capitalize sm:text-base'>{item.title}</h2>
                <button
                    onClick={() => {
                        removeFromCollection(item)
                    }}
                    className='retro-btn retro-btn-danger shrink-0 px-3 py-1 text-sm'
                >
                    Remove
                </button>
            </div>
        </article>
    )
}

export default CollectionCard
