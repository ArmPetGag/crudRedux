import Button from '../../components/Button'
import { deleteUser } from './userSlice'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

const UserList = () => {
  const users = useSelector(store => store.users)
  const dispatch = useDispatch();
  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id: id }));
  }
  const renderCard = () => users.map(user => (
    <div className='bg-gray-300 p-5 flex items-center justify-between' key={user.id}>
      <div>
        <h3 className='font-bold text-lg text-gray-700'>{user.name}</h3>
        <span className='font-normal text-gray-600'>{user.email}</span>
      </div>
      <div className='flex gap-4'>
        <Link to={`edit-user/${user.id}`}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
        </Link>
        <button onClick={() => handleRemoveUser(user.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  ))

  return (
    <div>
      <Link to="/add-user"><Button>Add User</Button></Link>

      <div className='grid gap-5 md:grid-cols-2'>
        {users.length ? renderCard() : <p className='text-center col-span-2 text-gray-700 font-semibold'>No User</p>}
      </div>

    </div>

  )
}

export default UserList