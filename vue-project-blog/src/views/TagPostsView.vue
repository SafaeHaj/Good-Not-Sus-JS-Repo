<template>
    <div>
        <h2>Results for {{ $route.params.tag }}</h2>
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script>
import { projectFirestore } from '@/firebase/config.js';
import SinglePost from '@/components/SinglePost.vue'; 

export default {
    data() {
        return {
            posts: []
        };
    },
    created() {
        const tag = this.$route.params.tag;
        projectFirestore.collection('posts').where('tags', 'array-contains', tag).get()
            .then(querySnapshot => {
                this.posts = querySnapshot.docs.map(doc => doc.data());
            });
    },
    components: {
        SinglePost,
    }
}
</script>

<style scoped>
h2 {
    color: #fff;
    font-size: 1.5em;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
}
</style>