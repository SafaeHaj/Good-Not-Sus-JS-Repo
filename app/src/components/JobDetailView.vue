<script setup>
import { useRoute, useRouter } from "vue-router"
import { ref, onBeforeMount } from "vue"

const job = ref(null);
const route = useRoute();
const router = useRouter();
const { id } = route.params;

let jobs = [];

onBeforeMount(() => {
    fetch("http://localhost:3000/jobs")
        .then((res) => res.json())
        .then(data => {
            jobs = data;
            const jobDetails = jobs.find(j => j.id === id)
            job.value = jobDetails;})
        .catch(err => console.log(err.message));
});

</script>

<template>
  <h2>Our Jobs List</h2>
  <main>
    <div class="desc" v-if="job">
        <p> <span>Title:</span>{{ job.title }}</p>
        <p> <span>Description: </span>{{ job.description }}</p>
        <p> <span>Salary: </span>{{ job.salary }}</p>
        <p> <span>Date Posted: </span> {{ job.date_of_creation }}</p>
        <p> <span>Years of experience: </span>{{ job.years_of_experience }}</p>
    </div>
    <div v-else>
        <h2>Job not found</h2>
    </div>
    <button @click="router.back()">Go Back</button>
  </main>
</template>

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
    position: relative;
  }

  main::-webkit-scrollbar {
    display: none;
  }

  span {
    color: #219ebc;
    font-weight: 700;
  }

  .desc {
    margin: auto;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    background-color: #fb8500;
    border: 1px solid transparent;
    padding: 10px;
    font-weight: 600;
    font-size: 1em;
    position: absolute;
    border-radius: 10px;
    left: 225px;
    bottom: 40px;
    cursor: pointer;
  }

  button:hover {
    transition-delay: 20ms;
    background-color: #ffb703;
  }
</style>
