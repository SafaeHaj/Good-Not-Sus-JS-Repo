<template>
  <h2>Our Jobs List</h2>
  <main>
    <ul id="jobs-list">
      <li class="elems" v-for="(job, index) in jobs" :key="index">
        <p @click="router.push(`/detail/${job.id}`)"> 
          {{ job.title }} 
        </p>
        <button class="edit" @click="router.push(`/edit/${job.id}`)">Edit</button>
        <button class="delete" @click="deleteJob(job.id)">Delete</button>
      </li>
    </ul>
  </main>
</template>

<script setup>
  import router from "../router.js"
</script>
<script>
  export default {
    data() {
      return {
        jobs: []
      }
    },
    mounted() {
      fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then(data => this.jobs = data)
      .catch(err => console.log(err.message))
    },
    methods: {
      deleteJob (id) {
        fetch("http://localhost:3000/jobs/" + id, {method: 'DELETE'}) 
                .then(this.$emit('delete', this.jobs.id)) 
                .catch(err => console.log(err));
      }
    }
  }
</script>

<style scoped>
  h2 {
    text-align: center;
    font-size: 2.5em;
    font-weight: 700;
    color: #023047;
  }
  main {
    background-color: #fff;
    width: 500px;
    margin: auto;
    padding: 20px;
    border: 10px solid #fb8500;
    border-radius: 25px;
    max-height: 500px;
    height: 500px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  main::-webkit-scrollbar {
    display: none;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin:0 auto;
  }

  li {
    border: 2px solid transparent;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  li button {
    border: none;
    padding: 10px;
    border-radius: 10px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
  }

  .edit {
    background-color: #219ebc;
  }

  .edit:hover {
    transition-delay: 20ms;
    background-color: #023047;
  }
  
  .delete {
    background-color: #e63946;
  }
  .delete:hover{
    transition-delay: 20ms;
    background-color: #d62828;
  }

  li p {
    width: 200px;
  }

  li:hover {
    border: 2px solid #ffb703;
  }
</style>