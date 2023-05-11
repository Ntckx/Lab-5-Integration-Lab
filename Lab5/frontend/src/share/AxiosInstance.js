// import Axios from '../../axios';
// import Axios from '../../../AxiosInstance';
import axios from 'axios';
const Axios = axios.create({ baseURL: 'http://localhost:8000', withCredentials: true });
export default Axios;
