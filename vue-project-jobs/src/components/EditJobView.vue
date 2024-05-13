<template>
    <h2>Edit Job: {{ title }}</h2>
    <main>
        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="title">
            <input type="text" v-model="description">
            <input type="number" v-model="salary">
            <input type="date" v-model="date_creation">
            <input type="number" v-model="years_experience">
            <div class="buttons">
                <input type="submit" class="add" value="Edit">
                <input type="reset" class="cancel" value="Cancel" @click="$router.push(`/`)">
            </div>
        </form>
    </main>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            description: '',
            salary: 0,
            date_creation: '',
            years_experience: 0,
        }
    },
    mounted() {
        const str = "http://localhost:3000/jobs/" + this.$route.params.id;
        
        
        fetch(str)
            .then((res) => res.json())
            .then(data => {
                this.title = data.title;
                this.description = data.description;
                this.salary = data.salary;
                this.date_creation = data.date_of_creation;
                this.years_experience = data.years_of_experience;
                this.id = data.id;
            })
            .catch(err => console.log(err.message))
    },
    methods: {
        handleSubmit() {
            const editJob = {
                title: this.title,
                description: this.description,
                salary: this.salary,
                date_of_creation: this.date_creation,
                years_of_experience: this.years_experience,
                id: this.id
            };

            console.log(editJob);
            const str = "http://localhost:3000/jobs/" + this.$route.params.id;

            fetch(str , {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editJob)
            });
            this.$router.push("/");
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
   position: relative;
 }

 main::-webkit-scrollbar {
   display: none;
 }

 form {
   display: flex;
   flex-direction: column;
   gap: 30px;
   margin: 30px;
 }

 .add, .cancel {
   border: none;
   padding: 10px;
   border-radius: 10px;
   font-weight: 600;
   color: #fff;
   cursor: pointer;
   margin: 10px;
   width: 100px;
 }

 .add {
   background-color: #fb8500;
 }

 .add:hover {
   transition-delay: 20ms;
   background-color: #023047;
 }
 
 .cancel {
   background-color: #8ecae6;
 }
 .cancel:hover{
   transition-delay: 20ms;
   background-color: #219ebc;
 }

 input {
   padding: 10px;
   border: 2px solid #8ecae6;
   border-radius: 10px;
 }

 .buttons {
   margin: 20px auto;
 }
</style>
