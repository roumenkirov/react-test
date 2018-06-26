const initialState = [
    {
        name: 'Serdika',
        workingHours: '10:00 - 23:30',
        address: 'Pametnika Levski',
        picture: '',
        program: [
            {
                title: 'Konan Varvarina',
                freePlaces: 10,
                starts: '10:30'
            },
            {
                title: 'Star Wars 19',
                freePlaces: 12,
                starts: '13:15'
            },
            {
                title: 'Vezdesushtiat',
                freePlaces: 3,
                starts: '16:30'
            },
            {
                title: 'Karate Kid',
                freePlaces: 11,
                starts: '19:30'
            }
        ]
    },
    {
        name: 'Iztok',
        workingHours: '9:30 - 23:00',
        address: 'Carigradsko Shose',
        picture: '',
        program: [
            {
                title: 'Konan Varvarina',
                freePlaces: 7,
                starts: '9:30'
            },
            {
                title: 'Star Wars 19',
                freePlaces: 20,
                starts: '11:45'
            },
            {
                title: 'Vezdesushtiat',
                freePlaces: 1,
                starts: '15:30'
            },
            {
                title: 'Karate Kid',
                freePlaces: 18,
                starts: '20:00'
            }
        ]
    },
    {
        name: 'Levski',
        workingHours: '12:00 - 24:00',
        address: 'bul. Madrid',
        picture: '',
        program: [
            {
                title: 'Konan Varvarina',
                freePlaces: 17,
                starts: '13:30'
            },
            {
                title: 'Star Wars 19',
                freePlaces: 2,
                starts: '16:00'
            },
            {
                title: 'Vezdesushtiat',
                freePlaces: 4,
                starts: '18:30'
            },
            {
                title: 'Karate Kid',
                freePlaces: 19,
                starts: '21:30'
            }
        ]
    }
];

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
