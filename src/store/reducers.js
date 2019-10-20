const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PERSON':
            return {
                persons: state.persons.concat({
                    id: Math.random(), // not really unique but good enough here!
                    name: action.name,
                    age: action.age
                })
            };
        case 'DELETE_PERSON':
            return {
                persons: state.persons.filter(person => person.id !== action.id)
            };
        default:
            return state;
    }
};

export default reducer;