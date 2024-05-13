<template>
  <div class="sep">
    <PostList />
    <TagCloud />
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import TagCloud from "@/components/TagCloud.vue";

export default {
  components: {
    PostList,
    TagCloud,
  }
}
</script>

<style>
.sep {
  display: flex;
  gap: 30px;
  justify-content: center;
}
</style>
