import axios from 'axios';

const getTree: any = async () => {
    try {
        const response = await axios.get('/_hiring/c61823e1/trees.json')
        console.dir(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export { getTree };