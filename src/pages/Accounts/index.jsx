import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import './Accounts.css'

const Accounts = () => {
    const { getAllUsers } = useGlobalContext();
    const allUsers = getAllUsers()
    return <table className='table'>
        <tbody>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Created On</th>
                <th>Owner</th>
                <th>Action</th>
            </tr>
            {
                allUsers.map(elem => {
                    const { id, name, owner, createdOn, action } = elem;
                    return <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{createdOn}</td>
                        <td>{owner}</td>
                        <td>
                            <Link to={`/accounts/${action}`}>View</Link>
                        </td>
                    </tr>
                })
            }
        </tbody>
    </table>
}

export default Accounts
