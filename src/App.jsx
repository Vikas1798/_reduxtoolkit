import { useDispatch } from "react-redux";
import { addUser, removeUser, ClearAllUser } from './Store/Slices/userSlice';
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

    const deleteAllsUsers = () => {
        dispatch(ClearAllUser())
    }

    return (
        <div style={{ width: '30%', margin: 'auto', position: "relative" }}>
            <input style={{ marginBottom: '10px', width: '100%', padding: '6px', borderRadius: '4px' }} type="text" value={name} placeholder="Please enter your name" onChange={(e) => setName(e.target.value)} />
            <div style={{ margin: 'auto', width: '40%' }}>
                <button onClick={() => add()} style={{ width: '100%', margin: 'auto', cursor: 'pointer', border: 'none', borderRadius: '4px', color: 'white', background: 'blue', padding: '5px' }}>Add User</button>
            </div>
            <div style={{ marginTop: '20px' }}>
                {
                    storeData?.length ? storeData?.map((d, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: "1px solid gray", padding: '5px', marginTop: '8px', borderRadius: '4px' }}>
                            <p style={{ margin: '0' }}>{d}</p>
                            <button onClick={() => remove(i)} style={{ paddingBlock: '4px', background: 'red', border: 'none', borderRadius: '4px', color: 'white', fontSize: '12px', cursor: 'pointer' }}>Delete</button>
                        </div>
                    )) : null
                }
            </div>
            <div style={{ margin: 'auto', width: '40%' }}>

                {storeData?.length ?
                    <button onClick={deleteAllsUsers} style={{ paddingBlock: '4px', background: 'green', border: 'none', borderRadius: '4px', color: 'white', fontSize: '12px', cursor: 'pointer', marginTop: '10px', width: '100%' }}>Remove All</button>
                    : null
                }
            </div>
        </div>
    )
}

export default App;
