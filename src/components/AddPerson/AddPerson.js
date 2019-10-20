import React, { useState } from 'react';

import './AddPerson.css';

function AddPerson({personAdded}) {
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);

    return <div className="AddPerson">
        <form onSubmit={e => {e.preventDefault(); return personAdded(name, age)}}>
            <input type="text" name="name" required placeholder="Enter your name..." onChange={e => setName(e.target.value)}/>
            <input type="number" name="age" required placeholder="Enter your age..." onChange={e => setAge(e.target.value)}/>
            <button>Add Person</button>
        </form>
    </div>
};

export default AddPerson;