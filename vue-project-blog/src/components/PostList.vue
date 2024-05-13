<template>
    <div class="postcontainer">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
import getPosts from "@/composables/getPosts";

export default {
    data() {
        return {
            posts: []
        };
    },
    methods: {
        async getAllPosts() {
            try {
                const { load, posts } = getPosts();
                await load();
                console.log(posts);
                this.posts = posts.value;
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getAllPosts();
    },
    components: {
        SinglePost,
    }
}
</script>

<style>
.error-msg {
    color: #fff;
    text-align: center;
    margin-top: 20px;
}

.postcontainer {
    display: flex;
    flex-direction: column;
    width: 500px;
}
</style>