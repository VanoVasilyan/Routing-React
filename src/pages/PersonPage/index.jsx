import { useParams, Navigate } from "react-router-dom";
import { useGlobalContext } from "../../context";

const PersonPage = () => {
    const { getUserById } = useGlobalContext();
    const { id } = useParams();
    const currentPerson = getUserById(id)

    if (currentPerson) {
        const { id, name, owner, createdOn } = currentPerson;

        return <table border="1" align="center">
            <tbody>
                <tr>
                    <th>ID</th>
                    <td>{id}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{name}</td>
                </tr>
                <tr>
                    <th>Owner</th>
                    <td>{owner}</td>
                </tr>
                <tr>
                    <th>CreatedOn</th>
                    <td>{createdOn}</td>
                </tr>
                <tr>
                    <th>Updated On</th>
                    <td>{createdOn}</td>
                </tr>
            </tbody>
        </table>
    }
    
    return <Navigate to="/accounts" />
}

export default PersonPage

