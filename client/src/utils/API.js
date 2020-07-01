import axios from "axios";

export default {
    getEmployees: function(query){
        return axios.get("/api/employees", { params: { q: query } })
    }
}