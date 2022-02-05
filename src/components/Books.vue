<script>
import Books from '../Books'


export default {
    name: 'Books',
    data() {
        return {
            books: Books,
            favs: 'book-cards-fav',
        }
    },
     methods: {
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
}
</script>

<template>
    <div class="books-container">
        <div 
            v-for="book in books" 
            :key="book.id"
            class="book-cards"
            :class="{ 'book-cards-fav': book.isFav }"
            @dblclick="toggleFav(book)"
        >
            <router-link
                :to="{ name: 'SingleBook', 
                params: { id: book.id, slug: book.slug, title: book.title, author: book.author, link: book.grLink, description: book.description } }"
                :title="book.title"
            >
                <div class="img-container">
                    <img 
                        :src="`images/${book.slug}.jpg`" 
                        :alt="`Book cover of ${book.title}`"
                    >
                </div>
                <div>
                    <h2 class="authTitle">
                        <strong>{{book.author}}</strong> <br> {{book.title}}
                    </h2>
                    <!-- <p><a :href="">Read more</a></p> -->
                </div>
            </router-link>
        </div>
        <!-- <div>
            {{ filteredBooks }}
        </div> -->
        
    </div>
</template>



<style>
.boxes {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.box {
    width: 200px;
    height: 200px;
    background: rgb(1,1,1,.3);
    margin: 0 20px;
}

ul li {
    list-style: none;
    padding: .5rem;
}

.bgRed {
    background-color: red;
}

.bgGreen {
    background-color: green;
}

.txtWh {
    color: white;
}

.txtYl {
    color: yellow;
}

.books-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 100%;
    margin: 0 auto;
    margin-top: 3rem;
    gap: 2rem 1rem;
}

.book-cards {
    background-color: rgb(235, 232, 232);
    color: #333;
    border-radius: .8rem;
    box-shadow: 0 3px 10px rgba(0, 0, 0, .2);
    padding: 1.2rem;
    margin: .8rem;
    height: 28rem;
    width: 14rem;
    
}

/* .book-cards-fav {
    background-color:rgb(185, 206, 245);
    color: #333;
} */

.book-cards:hover {
    transform: scale(1.1);
}

.img-container {
    width: 90%;
    margin: 0 auto;
}

.book-cards img{
    max-width: 100%;
    height: 20rem;
    object-fit: cover;
    border-radius: 10px;

}

.books-container a {
    text-decoration: none;
    color: inherit;
}

.books-container a:visited {
    color: inherit
}

</style>