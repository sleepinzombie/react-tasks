import mysql from 'mysql2';

const pool = mysql.createConnection({
    host: '127.0.0.1',
    user: 'vishseen',
    password: '',
    database: 'tasksP'
}).promise();