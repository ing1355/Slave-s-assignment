import database from '../config';

const Update = (data, select, input) => {
    const Idx = data.findIndex(function(item) {
        return item.id === select.id && item.name === select.name;
    })
    data.splice(Idx,1,{
        id : select.id,
        name : input
    })
    database.ref('/data').set(data);
}

export default Update;