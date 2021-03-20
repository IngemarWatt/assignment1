const TaskBoardSampleData = {
    tasks: {
        'task1': {id: 'task1', content: '701 Meeting', expanded: false, checked: false},
        'task2': {id: 'task2', content: 'Part 4 meeting', expanded: false, checked: false},
        'task3': {id: 'task3', content: 'Town', expanded: false, checked: false},
        'task4': {id: 'task4', content: 'Demo', expanded: false, checked: false},
        'task5': {id: 'task5', content: 'Testing', expanded: false, checked: false},
        'task6': {id: 'task6', content: 'Another one', expanded: false, checked: false},
        'task7': {id: 'task7', content: 'Walmart', expanded: false, checked: false},
        'task8': {id: 'task8', content: 'Decks', expanded: false, checked: false},
        'task9': {id: 'task9', content: 'Bar101', expanded: false, checked: false},
        'task10': {id: 'task10', content: 'Task 10', expanded: false, checked: false},
        'task11': {id: 'task11', content: 'Sample', expanded: false, checked: false},
        'task12': {id: 'task12', content: 'Headphones', expanded: false, checked: false},
        'task13': {id: 'task13', content: 'Meal Prep', expanded: false, checked: false},
        'task14': {id: 'task14', content: 'Texas', expanded: false, checked: false},
        'task15': {id: 'task15', content: 'Scooter', expanded: false, checked: false},
        'task16': {id: 'task16', content: 'Scooter', expanded: false, checked: false},
        'task17': {id: 'task17', content: 'Scooter', expanded: false, checked: false},
        'task18': {id: 'task18', content: 'Scooter', expanded: false, checked: false},
        'task19': {id: 'task19', content: 'Scooter', expanded: false, checked: false},
        'task20': {id: 'task20', content: 'Scooter', expanded: false, checked: false},
    },

    // Todo make selection state one of the props

    columns: {
        'Backlog': {
            id: 'Backlog',
            title: 'Backlog',
            taskIds: ['task1', 'task2', 'task3', 'task4', 'task5', 'task6', 'task7', 'task8', 'task9', 'task10'],
        },
        'In Progress': {
            id: 'In Progress',
            title: 'In Progress',
            taskIds: ['task11', 'task12'],
        },
        'Today\'s Tasks': {
            id: 'Today\'s Tasks',
            title: 'Today\'s Tasks',
            taskIds: ['task13', 'task14', 'task15', 'task16', 'task17', 'task18', 'task19', 'task20'],
        },
    },

    columnOrder: ['Backlog', 'In Progress', 'Today\'s Tasks'],
};

export default TaskBoardSampleData;