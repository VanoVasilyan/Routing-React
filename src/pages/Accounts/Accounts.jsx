import { Link } from 'react-router-dom'
import data from '../../data'

const Accounts = () => {
    return <table border="1" align="center">
        <tbody>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Created On</th>
                <th>Owner</th>
                <th>Action</th>
            </tr>
            {
                data.map(elem => {
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