import React, { useState, useEffect } from 'react';
import './App.css';
import { Card, Table, Input, Button } from 'antd';
import { Create, Update, Delete } from './CRUD';
import database from './config';
import { useInput } from './reducers';
import { schema } from './Schema'

const App = () => {
  const [data, setData] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [input, onchange] = useInput("");
  const [rowdata, setRowdata] = useState(-1);

  useEffect(() => {
    let db = null;
    database.ref('/').once("value").then(function (snap) {
      db = snap.val();
    }).then(function () {
      setData( db === null ? null :
        Array.isArray(db.data) ? db.data : [db.data])
    }).then(
      setIsloading(false)
    )
  }, []);
  
  const Cancel = () => {
    setClicked(false);
    onchange("");
  }

  return (
    <div className='content'>
      <Card className='card'>
        <h1>FILDSHARE</h1>
      </Card>
      <div className='table'>
        <Table
          loading={true}
          style={{ width: 2000 }}
          columns={schema}
          bordered
          className='table'
          pagination={false}
          dataSource={data}
          footer={() =>
            <div className='foot'>
              <b >시설이름</b>
              <Input value={input} onChange={onchange}/>
            </div>
          }
          onRowClick={(record, rowIndex) => {
            onchange(record.name);
            setRowdata(record);
            setClicked(true);
          }}
          >
        </Table>
      </div>
      {
        clicked ?
          <div className='but'>
            <Button type="primary" onClick={() => Cancel()}>취소</Button>
            <Button type="primary" onClick={() => {Delete(data,rowdata); onchange("");}}>삭제</Button>
            <Button type="primary" onClick={() => {Update(data,rowdata,input); onchange("");}}>수정</Button>
          </div> :
          <Button 
          type="primary" 
          className='save'
          disabled={isloading}
          onClick={() => { Create(data,input); onchange(""); }}
          >저장</Button>
          
      }
    </div>
  );
}

export default App;

