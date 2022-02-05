<script>
// import Books from '../Books'
// import Books from './Books.vue'


export default {
    name: 'Books',
    props: ['id', 'slug', 'title', 'author', 'link', 'description'],
    data() {
        return {
            
            // books: Books,
            // book: null
        }
    },
    methods: {
        goBack() {
            this.$router.push({name: 'Home'})
        }
    },
    // mounted() {
    //    fetch('http://localhost:3000/jobs/' + this.id)
    //    .then(res => res.json())
    //    .then(data => this.job = data)
    //    .catch(err => console.log(err.message))
    // }
    // methods: {
    //     thisBook2() {
    //                 let theBook = this.books.filter(ss => ss.id.indexOf(this.id))
    //                 console.log(theBook)
                   
                    
    //     },
    // },
    // computed: {
    //     thisBook() {
    //         let theBook = this.books.filter(ss => ss.id.indexOf(this.id))
    //         console.log(theBook)
    //         return theBook
            
    //     },
    // }
}
</script>

<template>
    <transition name="fade">
        <div class="container">
            <div>
                <button>
                    <router-link :to="{name: 'Home'}">Back to books</router-link>
                </button>
            </div>
    
            <div>
                <h2>{{author}} <br> {{title}}</h2>
            </div>
            <div>
                <img :src="`../images/${slug}.jpg`" :alt="`Book cover of ${title}`">
            </div>
            <div>
                <p v-html="description"></p>
            </div>
        </div>
    </transition>
    <!-- <div v-else>
        <p>Book details are loading...</p>
        <p>{{id}} - {{slug}}</p>
    </div>     -->
    <!-- <div>
       <h1>Test</h1>
       <h2>{{title}}</h2>
    </div> -->
</template>

<style scoped>
.container {
    max-width: 400px;
    margin: 0 auto;
    background-color: beige;
    padding: 0 3rem;
}

.container img {
    width: 100%;
}

button {
    background: black;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    margin-top: 1rem;
}
button a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
}

@media (max-width: 500px) {
    .container {
        max-width: 75%;
    }
}
</style>