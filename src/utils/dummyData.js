const moment = require('moment');

module.exports = Object.freeze({
    CALENDAR_INITIAL_EVENTS: [
        {
            title: 'Product call',
            theme: 'GREEN',
            startTime: moment().add(-12, 'd').startOf('day'),
            endTime: moment().add(-12, 'd').endOf('day'),
        },
        {
            title: 'Meeting with tech team',
            theme: 'PINK',
            startTime: moment().add(-8, 'd').startOf('day'),
            endTime: moment().add(-8, 'd').endOf('day'),
        },
        {
            title: 'Meeting with Cristina',
            theme: 'PURPLE',
            startTime: moment().add(-2, 'd').startOf('day'),
            endTime: moment().add(-2, 'd').endOf('day'),
        },
        {
            title: 'Meeting with Alex',
            theme: 'BLUE',
            startTime: moment().startOf('day'),
            endTime: moment().endOf('day'),
        },
        {
            title: 'Product Call',
            theme: 'GREEN',
            startTime: moment().startOf('day'),
            endTime: moment().endOf('day'),
        },
        {
            title: 'Client Meeting',
            theme: 'PURPLE',
            startTime: moment().startOf('day'),
            endTime: moment().endOf('day'),
        },
        {
            title: 'Client Meeting',
            theme: 'ORANGE',
            startTime: moment().add(3, 'd').startOf('day'),
            endTime: moment().add(3, 'd').endOf('day'),
        },
        {
            title: 'Product meeting',
            theme: 'PINK',
            startTime: moment().add(5, 'd').startOf('day'),
            endTime: moment().add(5, 'd').endOf('day'),
        },
        {
            title: 'Sales Meeting',
            theme: 'GREEN',
            startTime: moment().add(8, 'd').startOf('day'),
            endTime: moment().add(8, 'd').endOf('day'),
        },
        {
            title: 'Product Meeting',
            theme: 'ORANGE',
            startTime: moment().add(8, 'd').startOf('day'),
            endTime: moment().add(8, 'd').endOf('day'),
        },
        {
            title: 'Marketing Meeting',
            theme: 'PINK',
            startTime: moment().add(8, 'd').startOf('day'),
            endTime: moment().add(8, 'd').endOf('day'),
        },
        {
            title: 'Client Meeting',
            theme: 'GREEN',
            startTime: moment().add(8, 'd').startOf('day'),
            endTime: moment().add(8, 'd').endOf('day'),
        },
        {
            title: 'Sales meeting',
            theme: 'BLUE',
            startTime: moment().add(12, 'd').startOf('day'),
            endTime: moment().add(12, 'd').endOf('day'),
        },
        {
            title: 'Client meeting',
            theme: 'PURPLE',
            startTime: moment().add(16, 'd').startOf('day'),
            endTime: moment().add(16, 'd').endOf('day'),
        },
    ],

    RECENT_TRANSACTIONS: [
        {
            name: 'Alex',
            avatar: 'https://reqres.in/img/faces/1-image.jpg',
            email: 'alex@hChip.com',
            phone: '0912345678',
            location: 'Bàn 5 tầng 2',
            amount: 1000000,
            date: moment().endOf('day'),
        },
        {
            name: 'Ereena',
            avatar: 'https://reqres.in/img/faces/2-image.jpg',
            email: 'ereena@hChip.com',
            phone: '0912345678',
            location: 'Bàn 1 tầng 1',
            amount: 1900000,
            date: moment().add(-1, 'd').endOf('day'),
        },
        {
            name: 'John',
            avatar: 'https://reqres.in/img/faces/3-image.jpg',
            email: 'jhon@hChip.com',
            phone: '0912345678',
            location: 'Bàn 2 tầng 1',
            amount: 11200000,
            date: moment().add(-1, 'd').endOf('day'),
        },
        {
            name: 'Matrix',
            avatar: 'https://reqres.in/img/faces/4-image.jpg',
            email: 'matrix@hChip.com',
            phone: '0912345678',
            location: 'Bàn 3 tầng 1',
            amount: 11010000,
            date: moment().add(-1, 'd').endOf('day'),
        },
        {
            name: 'Virat',
            avatar: 'https://reqres.in/img/faces/5-image.jpg',
            email: 'virat@hChip.com',
            phone: '0912345678',
            location: 'Bàn 1 tầng 1',
            amount: 1900000,
            date: moment().add(-2, 'd').endOf('day'),
        },
        {
            name: 'Miya',
            avatar: 'https://reqres.in/img/faces/6-image.jpg',
            email: 'miya@hChip.com',
            phone: '0912345678',
            location: 'Bàn 5 tầng 2',
            amount: 2300000,
            date: moment().add(-2, 'd').endOf('day'),
        },
        {
            name: 'Virat',
            avatar: 'https://reqres.in/img/faces/3-image.jpg',
            email: 'virat@hChip.com',
            phone: '0912345678',
            location: 'Bàn 2 tầng 1',
            amount: 3310000,
            date: moment().add(-2, 'd').endOf('day'),
        },
        {
            name: 'Matrix',
            avatar: 'https://reqres.in/img/faces/1-image.jpg',
            email: 'matrix@hChip.com',
            phone: '0912345678',
            location: 'Bàn 1 tầng 1',
            amount: 5810000,
            date: moment().add(-2, 'd').endOf('day'),
        },
        {
            name: 'Ereena',
            avatar: 'https://reqres.in/img/faces/3-image.jpg',
            email: 'ereena@hChip.com',
            phone: '0912345678',
            location: 'Bàn 6 tầng 2',
            amount: 1510000,
            date: moment().add(-2, 'd').endOf('day'),
        },
        {
            name: 'John',
            avatar: 'https://reqres.in/img/faces/2-image.jpg',
            email: 'jhon@hChip.com',
            phone: '0912345678',
            location: 'Bàn 8 tầng 2',
            amount: 9100000,
            date: moment().add(-2, 'd').endOf('day'),
        },
        {
            name: 'Virat',
            avatar: 'https://reqres.in/img/faces/3-image.jpg',
            email: 'virat@hChip.com',
            phone: '0912345678',
            location: 'Bàn 2 tầng 1',
            amount: 1610000,
            date: moment().add(-3, 'd').endOf('day'),
        },
        {
            name: 'Matrix',
            avatar: 'https://reqres.in/img/faces/4-image.jpg',
            email: 'matrix@hChip.com',
            phone: '0912345678',
            location: 'Bàn 4 tầng 1',
            amount: 1210000,
            date: moment().add(-3, 'd').endOf('day'),
        },
        {
            name: 'Ereena',
            avatar: 'https://reqres.in/img/faces/6-image.jpg',
            email: 'jhon@hChip.com',
            phone: '0912345678',
            location: 'Bàn 6 tầng 2',
            amount: 7130000,
            date: moment().add(-3, 'd').endOf('day'),
        },
        {
            name: 'John',
            avatar: 'https://reqres.in/img/faces/2-image.jpg',
            email: 'ereena@hChip.com',
            phone: '0912345678',
            location: 'Bàn 1 tầng 1',
            amount: 2170000,
            date: moment().add(-3, 'd').endOf('day'),
        },
        {
            name: 'Virat',
            avatar: 'https://reqres.in/img/faces/3-image.jpg',
            email: 'virat@hChip.com',
            phone: '0912345678',
            location: 'Bàn 5 tầng 2',
            amount: 1170000,
            date: moment().add(-3, 'd').endOf('day'),
        },
        {
            name: 'Miya',
            avatar: 'https://reqres.in/img/faces/7-image.jpg',
            email: 'jhon@hChip.com',
            phone: '0912345678',
            location: 'Bàn 2 tầng 1',
            amount: 6120000,
            date: moment().add(-3, 'd').endOf('day'),
        },
        {
            name: 'Matrix',
            avatar: 'https://reqres.in/img/faces/3-image.jpg',
            email: 'matrix@hChip.com',
            phone: '0912345678',
            location: 'Bàn 1 tầng 1',
            amount: 6310000,
            date: moment().add(-3, 'd').endOf('day'),
        },
        {
            name: 'Virat',
            avatar: 'https://reqres.in/img/faces/2-image.jpg',
            email: 'ereena@hChip.com',
            phone: '0912345678',
            location: 'Bàn 6 tầng 2',
            amount: 1510000,
            date: moment().add(-3, 'd').endOf('day'),
        },
        {
            name: 'Ereena',
            avatar: 'https://reqres.in/img/faces/3-image.jpg',
            email: 'virat@hChip.com',
            phone: '0912345678',
            location: 'Bàn 5 tầng 2',
            amount: 6170000,
            date: moment().add(-3, 'd').endOf('day'),
        },
    ],
});
