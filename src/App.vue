<template> 
  <div id="app">
    <a href="https://archillect.com/">
      <img id="logo" src="logo.svg"> 
    </a> 
    <br><br>
    <a :href="'https://archillect.com/' + id"> {{id}} </a> 
    <img id="image" :src="image"/>
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
    max-height: 75vh;
    max-width: 75vw;
    padding-top: 30px; 
    display: block;
    margin-left: auto;
    margin-right: auto; 
  }
  #app {
    text-align: center;
    font-size: 18px;
  }
</style>
