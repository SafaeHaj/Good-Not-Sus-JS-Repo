<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/add">Add Job</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
  
</template>

<style>
  body {
  margin: 0;
  background-color: #ffb703;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 }

  nav {
    background-color: #fb8500;
    padding: 10px;
    display: flex;
    gap: 20px;
    margin: 0;
    justify-content: center;
  }

  nav * {
    text-decoration: none;
    color: #023047;
    font-weight: 700;
  }

</style>


