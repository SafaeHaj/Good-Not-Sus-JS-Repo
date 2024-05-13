<template>
  <form @submit.prevent="submitPost" class="blogpost">
    <input type="text" placeholder="Title" class="title" v-model="title">
    <textarea v-model="content" class="content" placeholder="Type something here..."></textarea>
    <input type="text" class="tag" v-model="tagInput" @keydown.enter.prevent="addTag" placeholder="write your tags here">
    <ul class="tagslist">
      <li class="tagelement" v-for="(tag, index) in tags" :key="index">{{ tag }} <button class="delete"
          @click="removeTag(index)">x</button></li>
    </ul>
    <input type="submit" value="Post">
  </form>
</template>

<script>
import { projectFirestore } from '@/firebase/config.js';
export default {
  data() {
    return {
      title: '',
      content: '',
      tags: [],
      tagInput: ''
    };
  },
  methods: {
    addTag() {
      if (this.tagInput.trim() !== '') {
        this.tags.push(this.tagInput.trim());
        this.tagInput = '';
      }
    },
    removeTag(index) {
      this.tags.splice(index, 1);
    },
    submitPost() {
      const postData = {
        title: this.title,
        content: this.content,
        tags: this.tags
      };
      console.log(postData);
      projectFirestore.collection('posts').add(postData);
      this.title = '';
      this.content = '';
      this.tags = [];
      this.$router.push({ name: 'home'});
    }

  }
};
</script>
