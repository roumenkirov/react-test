const initialState = [
    {
        username: 'Pesho',
        password: '123',
        tickets: {}
    },
    {
        username: 'Marta',
        password: '234',
        tickets: {}
    },
    {
        username: 'Valeria',
        password: '345',
        tickets: {}
    }
];

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
