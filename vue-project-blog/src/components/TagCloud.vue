<template>
    <div class="tag-cloud">
        <p class="trend">Trending</p>
        <ul>
            <li class="tag" v-for="(tag, index) in tags.slice(0, 5)" :key="index">
                <router-link :to="`/tags/${tag}`">{{ tag }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    data() {
        return {
            tags: []
        };
    },
    created() {
        this.getTagsFromFirestore();
    },
    methods: {
        getTagsFromFirestore() {
            const db = firebase.firestore();
            db.collection('posts').get()
                .then(querySnapshot => {
                    const tagFrequency = {};
                    querySnapshot.forEach(doc => {
                        doc.data().tags.forEach(tag => {
                            tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
                        });
                    });
                    this.tags = Object.keys(tagFrequency).sort((a, b) => tagFrequency[b] - tagFrequency[a]);
                })
                .catch(error => {
                    console.error('Error getting tags from Firestore:', error);
                });
        }
    }
}
</script>

<style>
.tag-cloud {
    background-color: #2A3A4D;
    width: 150px;
    padding: 20px;
    margin-top: 20px;
    height: inherit;
    margin-left: 20px;
    overflow-y: hidden;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI';
}
.trend {
    color: #fff;
    font-size: 1.2em;
    text-align: center;
    margin-top: 0;
    font-weight: 600;
}

.tag-cloud ul {
    list-style-type: none;
    padding: 0;
}

.tag-cloud li {
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid transparent;
    margin: 5px;
    padding: 3px;
    width: fit-content;
}

.tag * {
    text-decoration: none;
    color: #fff;
    background-color: #529ecc;
    padding: 2px 5px;
    border-radius: 5px;
}

.tag:hover {
    background-color: #529ecc;
}
</style>
