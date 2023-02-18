<script setup>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { format_text as convertMarkdown } from "../util";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  setDoc,
} from "firebase/firestore";
import { config } from "../config";

const firebaseApp = initializeApp(config.firebase);
const firestore = getFirestore(firebaseApp);
const markdownCol = collection(firestore, "markdowns");
const route = useRoute();
const markdownDoc = doc(markdownCol, route.params.id);
const state = reactive({});

onMounted(() => {
  onSnapshot(markdownDoc, (snapShot) => {
    const data = snapShot.data();
    state.converted = data.converted;
    state.markdown = data.markdown;
  });
});

function convert(event) {
  const markdown = event.target.value;
  const converted = convertMarkdown(markdown);
  setDoc(markdownDoc, { markdown, converted });
  // state.converted = converted;
}
</script>

<template>
  <div>
    <h3>Editor</h3>
    <router-link to="/dashboard">&lt; Dashboard</router-link>
    <div id="editor">
      <textarea @keyup="convert" v-model="state.markdown"></textarea>
      <div class="output" v-html="state.converted"></div>
    </div>
  </div>
</template>

<style>
#editor {
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 1fr;
  margin-block-start: 8px;
  max-height: 90vh;
}
#editor h1,
#editor h2,
#editor h3,
#editor h4,
#editor h5 {
  margin-block-end: 8px;
}
#editor .output  {
  padding: 10px 30px;
  border: 1px solid #bbb;
  border-radius: 8px;
}
#editor .output p {
  line-height: 1.5;
  margin-block-end: 12px;
}
</style>