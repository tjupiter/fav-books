<template>
<div>
  <section id="div1" class="div-container">
    <h2>Because once you've made up your mind, <br> there's nothing to stop you.</h2>
  </section>

  <section class="div-container">
    <h2><q>Just remember that your real job is that if you are free, you need to free somebody else. If you have some power, then your job is to empower somebody else.</q> - Toni Morrison</h2>
  </section>

  <section class="div-container">
    <h2><q>God, grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.</q> - Reinhold Niebuhr</h2>
  </section>

  <section class="div-container">
    <h2>How do I contribute my conseciousness to the collective?</h2>
  </section>

  <section class="div-container">
    <h2>Yass!</h2>
  </section>
</div>

 <!-- <div class="container">
    <div class="bgimg-1">
      <div class="caption-1">
      <p>JUJJDEJO</p>
      </div>
    </div>
    <div class="about2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium itaque, id soluta explicabo modi cupiditate porro ad repudiandae minus quam debitis praesentium labore quae quo temporibus maxime deleniti fuga blanditiis error, facilis reiciendis aut sit alias. Earum dolor velit aspernatur cupiditate nesciunt labore dignissimos fugit provident, libero atque eligendi quas mollitia recusandae tempora a eveniet, officia consequatur, quia voluptate dolorum.</div>
    
    <div class="bgimg-2">
      <div class="caption-2">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit vitae ea temporibus nobis expedita asperiores. Facilis, maxime saepe. Delectus, beatae incidunt! Deserunt repellendus debitis illum.</p>
      </div>
    </div>
  
    <div class="bgimg-3">
    </div>
 </div> -->
</template>

<script>
// export default {
//   methods: {
//     parralax() {
//       const par = document.getElementById('#div1')
//       let offset = window.pageYOffset;
//       par.style.backgroundPositionY = offset * 0.7 + 'px'
//     }
//   },

//   created() {
//      this.document.addEventlistener('scroll', () => {
//         requestAnimationFrame(this.parralax)
//       })
//   }

// }
</script>


<style scoped>
* {
  border: 0;
  padding: 0;
  margin: 0;
}

.div-container {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  font-weight: bold;
  width: 100%;
  height: 100vh;
  }

  h2 {
    /* font-size: 5rem; */
    background: #eee;
    padding: .3rem 1rem;
    border-radius: .8rem;
  }

.div-container:nth-child(1) {
  background-image: url('../assets/1.jpg');
  background-size: cover;
  background-attachment: fixed;
}

.div-container:nth-child(1) h2 {
  font-size: 2.5rem;
  padding: 2rem 4rem;
  margin: 0 2rem;
  opacity: .65;
}

.div-container:nth-child(2) {
  background-color: black;
  height: 80vh;
}

.div-container:nth-child(2) h2 {
  font-size: 1rem;
  max-width: 60%;
  padding: 2rem 4rem;
  background-color: blueviolet;
  color: white;
  opacity: .8;
}

.div-container:nth-child(3) {
  background-image: url('../assets/2.jpg');
  background-size: cover;
  background-attachment: fixed;
}

.div-container:nth-child(3) h2 {
  font-size: 1.2;
  max-width: 60%;
  padding: 2rem 4rem;
  background-color: white;
  color: darkslategray;
  opacity: .8;
}

.div-container:nth-child(4) {
  background-color: rgb(160, 183, 226);
  height: 60vh;
}

.div-container:nth-child(4) h2 {
  font-size: 3rem;
  max-width: 60%;
  padding: 2rem 1rem;
  background-color: black;
  color: greenyellow;
}

.div-container:nth-child(5) {
  background-image: url('../assets/4.jpg');
  background-size: cover;
  background-attachment: fixed;
}

.div-container:nth-child(5) h2 {
  font-size: 6rem;
  max-width: 80%;
  padding: 1rem 6rem;
  background-color: white;
  color: rgb(44, 44, 103);
}


@media (min-width: 768px) {
  .div-container:nth-child(2) h2 {
    font-size: 2.5rem;
    max-width: 40%;
  }
}


  /* .container {
    height: 100%;
  }

  .bgimg-1, .bgimg-2, .bgimg-3 {
    background-attachment: fixed;
    background-position: center;
    background-repeat: none;
    background-size: cover;
    /* opacity: .8; */
  /* }

  .bgimg-1 {
    background-image: url('../assets/1.jpg');
    min-height: 92vh;
  }

  .bgimg-2 {
    background-image: url('../assets/2.jpg');
    min-height: 100vh;
  }

  .bgimg-3 {
    background-image: url('../assets/3.jpg');
    min-height: 100vh;
  }

  
  .caption-1 {
    position: absolute;
    left: 21%;
    top: 50%;
    width: 60%;
    text-align: center;
  }
  .caption-2 {
    position: absolute;
    left: 21%;
    top: 50%;
    width: 80%;
    text-align: center;
  }

  .caption-1 p {
    background-color: rgb(238, 205, 142, .5);
    color: black;
    padding: 20px;
  }

  .about2 {
    position: relative;
    margin: 0 auto;
    padding: 2rem 5rem;
    background-color: #ddd;
    top: 50%;
  } */


   
</style>
