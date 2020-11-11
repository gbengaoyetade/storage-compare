<template>
  <p>{{ user.name }}</p>
  <router-link to="/indexed">Indexed</router-link> |
  <router-link to="/local">Local</router-link>
  <button @click="handleClick">Generate User Data</button>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import faker from 'faker';

 const firebaseConfig = {
    apiKey: "AIzaSyAPX8kuCMJ7FuPPanSBT9IVLSxmCDnLpjc",
    authDomain: "storage-compare-c045f.firebaseapp.com",
    databaseURL: "https://storage-compare-c045f.firebaseio.com",
    projectId: "storage-compare-c045f",
    storageBucket: "storage-compare-c045f.appspot.com",
    messagingSenderId: "733032743634",
    appId: "1:733032743634:web:6d74867c4ca8787b2aa30b",
    measurementId: "G-CWTBWZ2CSE"
  };

const app = firebase.initializeApp(firebaseConfig);



const request = indexedDB.open("usersDatabase");
request.onerror = function(event) {
  alert("Indexeddb not allowed");
};

request.onsuccess = function(event) {
  const db = event.target.result;
  console.log({ db })
};
 
const database = app.database();

const ref = database.ref('users');
ref.on('child_added', (data) => {
  const val  = data.val();
})

export default {
  name: 'App',
  methods: {
    handleClick(event) {
      database.ref('users').push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        dob: faker.date.past(),
        address: faker.address.streetAddress(),
        time: Date.now(),
        bvn: faker.finance.iban()
      });
    }
  },
  data(){
    return {
      user: {name:'Niger delta'}
    }
  }
}
</script>
