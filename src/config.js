import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyArswydzWe0ObdMCDxq0--9S2KDe5KNbXA ",
    projectId: "test-7d937",
    databaseURL: "https://test-7d937.firebaseio.com",
    authDomain: "https://fs-slave.web.app/",
  };

  
firebase.initializeApp(config);

var database = firebase.database();

export default database;