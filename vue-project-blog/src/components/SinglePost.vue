<template>
    <div class="blogpost">
        <router-link :to="`/editpost/${post.id}`"><p class="edit">Edit</p></router-link>
        <h2 class="title">{{ title }}</h2>
        <div class="content">
            {{ content }}
        </div>
        <router-link :to="`/postdetail/${post.id}`"><p class="read">Read more</p></router-link>
        <div class="tagslist">
            <p class="tagelement" v-for="(tag, index) in tags" :key="index">{{ tag }}</p>
        </div>
        <button class="delete" @click="deletePost">x</button>
    </div>
</template>

<script>
import { projectFirestore } from '@/firebase/config.js';
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            title: this.post.title,
            content: this.post.content.substring(0, 50) + "...",
            tags: this.post.tags
        };
    },
    methods: {
        deletePost() {
            projectFirestore.collection('posts').doc(this.post.id).delete();
            location.replace(location.href);
        }
    }
}
</script>

<style scoped>
    .blogpost {position: relative;}

    .read {
        color: #529ECC;
        text-decoration: none;
        text-align: center;
    }

    .edit {
        position: absolute;
        right: 20px;
        top: 0;
        color: #1d5b81;
        margin-right: 10px;
    }

    .delete{
        position: absolute;
        right: 10px;
        top: 15px;
        background-color: rgb(237, 112, 112);
        border-radius: 5px;
        color: #fff;
    }

    .delete:hover {
        background-color: rgb(245, 84, 84);
    }
</style>
