import axios from "axios";
import { useState, useEffect } from "react";

export default function GetUsers() {

    const [users, setUsers] = useState([]);

    const getData = async () => {
        await axios({
            method: 'get',
            url: process.env.NODE_ENV === 'development' ? '/api/users' : 'https://selem3lalcode.tech/api/users',
        }).then((res) => {
            console.log(res.data);
            setUsers(res.data.data);
        }).catch((err) => { console.log(err) });
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="text-center">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Login</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Team</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{user.login}</td>
                                <td>{user.email}</td>
                                <td>{user.phone_number}</td>
                                <td></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}