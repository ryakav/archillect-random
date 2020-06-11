<template> 
  <div id="app">
    <a href="https://archillect.com/">
      <img id="logo" src="logo.svg"> 
    </a> 
    <br>
    <br>
    <a id="id" :href="'https://archillect.com/' + id"> {{id}} </a> 
    <img id="image" :src="image"/>
    <br>
    <a href="https://github.com/ryan-uk/archillect-random"> 
      <img id="github" src="github.png" alt="github">
    </a>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() { 
    return {
      image: undefined,
         id: undefined  
    }
  },
  mounted() {
    fetch( '/image' )
    .then( data => data.json() ) 
    .then( data => {
      this.image = data.url 
      this.id = data.id 
    })
    .catch( console.log )
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');
  body {
    font-family: 'IBM Plex Sans', sans-serif;
  }
  a {
    color: black;
  }
  #logo {
    padding-top: 20px;
  }
  #image {
    max-height: 70vh;
    max-width: 70vw;
    padding-top: 30px; 
    display: block;
    margin-left: auto;
    margin-right: auto; 
  }
  #app {
    text-align: center;
  }
  #id {
    font-size: 18px;
  }
  #github {
    padding-top: 20px;
    height: 25px;
    width: 25px;
  }
</style>
