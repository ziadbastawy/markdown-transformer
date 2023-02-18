<script setup>
import { onMounted, reactive, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  setDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { config } from "../config";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp(config.firebase);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const markdownCol = collection(firestore, "markdowns");

const state = reactive({ markdowns: [] });
const router = useRouter();

onBeforeMount(async () => {
  // Get a user
  state.user = auth.currentUser;
  console.log(auth.currentUser);
});

onMounted(() => {
  onSnapshot(markdownCol, (snapshot) => {
    state.markdowns = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  });
});

function newMarkdown() {
  const newDoc = doc(markdownCol);
  setDoc(newDoc, { converted: "", markdown: "" });
  router.push(`/editor/${newDoc.id}`);
}
</script>

<template>
  <h1>My list</h1>

  <div :class="!state.markdowns.length ? 'shimmer' : ''">
    <ul class="dashboard-list">
      <li
        class="dashboard-list-item"
        v-for="(markdown, index) in state.markdowns"
        :key="markdown.id"
      >
        <router-link :to="{ path: `/editor/${markdown.id}` }"
          >Doc Num: {{ markdown.id }}</router-link
        >
      </li>
    </ul>
  </div>

  <div class="dashboard-button-container">
    <button class="dashboard-button" @click="newMarkdown">
      Add new Document
    </button>
  </div>
</template>

<style scoped>
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }

  100% {
    background-position: 1000px 0;
  }
}
.shimmer {
  height: 300px;
  animation: shimmer 2s infinite linear;
  background: linear-gradient(to right, #eff1f3 4%, #eeecec 25%, #eff1f3 36%);
  background-size: 1000px 100%;
}
.dashboard-list {
  margin: 20px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
}
.dashboard-list-item {
  width: 30%;
  background-color: white;
  margin: 15px 10px;
  min-height: 80px;
  /* text-align: center; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  border: 1px solid #bbb;
  border-radius: 8px;
}
.dashboard-list-item a,
.dashboard-list-item a:focus,
.dashboard-list-item a:visited {
  color: #7b7b7b;
  text-decoration: none;
}

.dashboard-button-container {
  display: flex;
  justify-content: center;
}

.dashboard-button {
  margin-top: 20px;
  padding: 12px 18px;
  background-color: #00c4761c;
  border: 1px solid #00800070;
  color: #008000cf;
  font-size: 18px;
  font-weight: 700;
}
</style>