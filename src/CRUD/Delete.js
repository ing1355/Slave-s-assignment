import database from '../config';
import { message } from 'antd';

const Delete = (data, select) => {
    const Idx = data.findIndex(function(item) {
        return item.id === select.id && item.name === select.name;
    })
    if (Idx > -1) data.splice(Idx,1);
    else message.error("뭔가 잘못된게 틀림 없어요!!");
    database.ref('/data').set(data);
}

export default Delete;