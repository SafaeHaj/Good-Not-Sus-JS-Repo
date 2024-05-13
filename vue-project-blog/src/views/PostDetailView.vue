<template>
  <div class="blogpost">
    <h2 class="title">{{ title }}</h2>
    <div class="content">
      {{ content }}
    </div>
    <div class="tagslist">
      <p class="tagelement" v-for="(tag, index) in tags" :key="index">{{ tag }}</p>
    </div>
  </div>
</template>

<script>
import getPost from "@/composables/getPost";
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      title: '',
      content: '',
      tags: []
    };
  },
  computed: {
    postId() {
      return this.$route.params.id; 
    }
  },
  async created() {
    try {
      const { post, error, load }  = getPost(this.postId);
      await load(); 
      this.title = post.value.title;
      this.content = post.value.content;
      this.tags = post.value.tags;
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
