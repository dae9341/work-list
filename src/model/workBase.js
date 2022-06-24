import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDcsIRnfoshTi0ekIlRcCwLCRbLijalgas",
    authDomain: "todolist-e8b0d.firebaseapp.com",
    databaseURL: "https://todolist-e8b0d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todolist-e8b0d",
    storageBucket: "todolist-e8b0d.appspot.com",
    messagingSenderId: "610067574429",
    appId: "1:610067574429:web:646102d20c1d54c3f76e74",
    measurementId: "G-C995XJXW05"
  };
  
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const starCountRef = ref(db, 'todos/' );
var todoList=[];

// DB데이터 읽기
function readData(){
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    for(var i in data){
      todoList.push({
        key:i,
        value:data[i]
      });
    }

  });

  return todoList
}

// DB데이터 쓰기
function writeData(id,listData){
  set(starCountRef+id),{
    category:listData.category,
    deadline:listData.deadline,
    isCompeted:listData.isCompeted,
    memo:listData.memo,
    startTime:listData.startTime,
    title:listData.title
  }
}

function settingKey(){
  var date = new Date();
  
}

// DB데이터 삭제
function deleteData(){

}


export default {
    readList:function(){
      return readData();
    },
    writeList:function(id,listData){
      writeData(id,listData)
    }

}