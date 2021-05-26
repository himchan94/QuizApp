//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZ4op68iAkrSPSECpLQTDpX2qx-6NlmSo",
  authDomain: "quizapp-7d56d.firebaseapp.com",
  projectId: "quizapp-7d56d",
  storageBucket: "quizapp-7d56d.appspot.com",
  messagingSenderId: "60995772292",
  appId: "1:60995772292:web:f5f0859b1c2a6543ae47d1",
  measurementId: "G-KB36Y4J8GB",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
