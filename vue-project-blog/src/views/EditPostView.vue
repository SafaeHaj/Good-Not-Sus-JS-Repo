<template>
    <form @submit.prevent="submitPost" class="blogpost">
        <input type="text" placeholder="Title" class="title" v-model="title">
        <textarea v-model="content" class="content" placeholder="Type something here..."></textarea>
        <input type="text" class="tag" v-model="tagInput" @keydown.enter.prevent="addTag"
            placeholder="write your tags here">
        <ul class="tagslist">
            <li class="tagelement" v-for="(tag, index) in tags" :key="index">{{ tag }} <button class="delete"
                    @click="removeTag(index)">x</button></li>
        </ul>
        <input type="submit" value="Post">
    </form>
</template>

<script>
import { projectFirestore } from '@/firebase/config.js';
import getPost from "@/composables/getPost";
export default {
    data() {
        return {
            title: '',
            content: '',
            tags: [],
            tagInput: ''
        };
    }
    ,
    computed: {
        postId() {
            return this.$route.params.id;
        }
    },
    async created() {
        try {
            const { post, error, load } = getPost(this.postId);
            await load();
            this.title = post.value.title;
            this.content = post.value.content;
            this.tags = post.value.tags;
            console.log(error);
        } catch (error) {
            console.log(error);
        }
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
        computed: {
            postId() {
                return this.$route.params.id;
            }
        }
        ,
        submitPost() {
            const postData = {
                title: this.title,
                content: this.content,
                tags: this.tags
            };
            const postRef = projectFirestore.collection('posts').doc(this.postId);
            async function updatePost() {
                await postRef.update(postData);
            }
            updatePost();
            this.title = '';
            this.content = '';
            this.tags = [];
            this.$router.push({ path: '/postdetail/' + this.postId });
        }

    }
};
</script>