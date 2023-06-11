import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'
function postAuthor() {

    const users=useSelector(selectAllUsers)


}

export default postAuthor