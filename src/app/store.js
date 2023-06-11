import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "../features/counter/counterSlice"
import {postSlice} from "../features/posts/postSlice"
import { userSlice } from "../features/users/usersSlice"
export const store=configureStore(
    {
        reducer:
        {
            users:userSlice.reducer,
            counter:counterSlice.reducer,
            posts:postSlice.reducer,
        }
    }
)