import { useDispatch } from "react-redux";
import { addUser, removeUser } from './Store/Slices/userSlice';
import { useSelector } from "react-redux";
import { useState } from "react";

const App = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch();
    const storeData = useSelector((state) => state?.user)

    const add = () => {
        if (name) {
            dispatch(addUser(name))
        } else {
            alert("Please Enter Name...!")
        }
        setName('');
    }

    const remove = (id) => {
        dispatch(removeUser(id))
    }

    return (
        <>
            <input type="text" value={name} className="Enter Name" onChange={(e) => setName(e.target.value)} />
            <button onClick={() => add()}>Add User</button>
            {
                storeData?.length ? storeData?.map((d, i) => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p key={i}>{d}</p>
                        <button style={{ marginLeft: '30px' }} onClick={() => remove(i)}>Delete</button>
                    </div>
                )) : null
            }
        </>
    )
}

export default App;
