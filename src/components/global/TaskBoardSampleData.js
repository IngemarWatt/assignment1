const TaskBoardSampleData = {
    tasks: {
        'task1': {id: 'task1', content: '701 Meeting'},
        'task2': {id: 'task2', content: 'Part 4 meeting'},
        'task3': {id: 'task3', content: 'Town'},
        'task4': {id: 'task4', content: 'Demo'},
        'task5': {id: 'task5', content: 'Testing'},
        'task6': {id: 'task6', content: 'Another one'},
    },

    // Todo make selection state one of the props

    columns: {
        'Backlog': {
            id: 'Backlog',
            title: 'Backlog',
            taskIds: ['task1', 'task2'],
        },
        'In Progress': {
            id: 'In Progress',
            title: 'In Progress',
            taskIds: ['task3', 'task4'],
        },
        'Today\'s Tasks': {
            id: 'Today\'s Tasks',
            title: 'Today\'s Tasks',
            taskIds: ['task5', 'task6'],
        },
    },

    columnOrder: ['Backlog', 'In Progress', 'Today\'s Tasks'],
};

export default TaskBoardSampleData;