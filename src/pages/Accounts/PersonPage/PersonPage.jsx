import { useParams , Navigate} from "react-router-dom";
import data from "../../../data";


const PersonPage = () => {
    const param = useParams()
    const findedItem = data.find(item => item.id === Number(param.id)) 
    if(findedItem){
        const { id, name, owner, createdOn } = findedItem;
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

    return <Navigate to="/accounts"/>    
}




export default PersonPage