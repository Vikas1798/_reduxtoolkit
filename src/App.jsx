import { useDispatch } from "react-redux";
import { addUser, removeUser } from './Store/Slices/userSlice';
import { useSelector } from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    const storeData = useSelector((state) => state?.user)

    const add = (payload) => {
        dispatch(addUser(payload))
    }

    const remove = (payload) => {
        console.log(payload)
        // dispatch(removeUser(payload))
    }

    return (
        <>
            <button onClick={() => add('vikas')}>Add User</button>
            {
                storeData?.length ? storeData?.map((d, i) => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p key={i}>{d} {i}</p>
                        <button style={{ marginLeft: '30px' }} onClick={() => remove(i)}>Delete</button>
                    </div>
                )) : null
            }
        </>
    )
}

export default App;
