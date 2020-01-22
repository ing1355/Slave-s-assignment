import database from '../config';
import { message } from 'antd';

function RandomId() {
    let tempPassword = "";
    for (let i = 0; i < 16; i++) {
        let rndVal = parseInt(Math.random() * 62);
        if (rndVal < 10) {
            tempPassword += rndVal;
        } else if (rndVal > 35) {
            tempPassword += String.fromCharCode(rndVal + 61);
        }
        else {
            tempPassword += String.fromCharCode(rndVal + 55);
        }
    }
    return tempPassword;
}

const Create = (data, input) => {
    if (input.length === 0) {
        message.error('시설이름을 기입해주세요');
    }
    else {
        if (data === null) {
            database.ref('/data').set({
                id : RandomId(),
                name : input
            });
        }
        else {
            const result = data;
            result.push({
                id: RandomId(),
                name: input
            })
            database.ref('/data').set(result);
        }
    }
}

export default Create;