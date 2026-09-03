import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from 'react-toastify';


const initialState = {
    item: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.item.find(
                item => item.id === action.payload.id
            )

            if (!alreadyExists) {
                state.item.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.item))
            }
        },
        removeCollection: (state, action) => {
            state.item = state.item.filter(
                item => item.id !== action.payload
            )
            localStorage.setItem('collection', JSON.stringify(state.item))

        },
        clearCollection: (state) => {
            state.item = []
            localStorage.removeItem('collection')
        },
        addedToast: () => {
            toast.success('Added to Collection ✅', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        },
        removeToast: () => {
            toast.error('Removed from Collection', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        }
}})


export const { addCollection, removeCollection, clearCollection, addedToast, removeToast } = collectionSlice.actions
export default collectionSlice.reducer