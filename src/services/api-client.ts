import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'819c1f572e1d425b80a1be33aeada88e'
    }
})