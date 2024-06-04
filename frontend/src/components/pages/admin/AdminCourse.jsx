import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import ApiService from '../../../services/ApiService';

export default function AdminCourse() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        ApiService.fetchData('course')
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);

    const title = 'Khoá học';

    return (
        <div>
            <h1 className='font-bold text-xl mb-10'>{title}</h1>
            <Table dataSource={users.data} rowKey="id" />
        </div>
    );
}
