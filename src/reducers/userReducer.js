const initialState = {
    name: '',
    level: '', // beginner, intermediate, advanced
    workoutDays: [], // dia 01 ao 0
    myWorkouts: [],
    lastWorkout: '', // ID
    dailyProgress: ['2019-09-13', '2019-09-12']
};

export default (state = initialState, action) => {
    switch(action.name) {
        case 'SET_NAME': 
            return {...state, name:action.payload.name};
            break;
    }

    return state;
}