<script setup>
import { ref, reactive, computed } from 'vue';


const services = reactive([
    {
        name: 'Web Development',
        price: 300,
        active: true
    }, {
        name: 'Design',
        price: 400,
        active: false
    }, {
        name: 'Integration',
        price: 250,
        active: false
    }, {
        name: 'Training',
        price: 220,
        active: false
    }
])

function toggleActive(s) {
    s.active = !s.active;
}

function total() {
    var total = 0;

    this.services.forEach(function (s) {
        if (s.active) {
            total += s.price;
        }
    })
    return total;
}


// Define a custom filter called "currency".
// Vue.filter('currency', function (value) {
//     return '$' + value.toFixed(2);
// });

function currency(value) {
    // console.log("hi")
    return '$ ' + value;
}

</script>

<template>
    <!-- v-cloak hides any un-compiled data bindings until the Vue instance is ready. -->

    <form id="main" v-cloak class="kyaPata-form">

        <h1>Services</h1>

        <ul>
            <!-- Loop through the services array, assign a click handler, and set or remove the "active" css class if needed -->
            <li v-for="service in services" v-on:click="toggleActive(service)" v-bind:class="{ 'active': service.active }">
                <!-- Display the name and price for every entry in the array . Vue.js has a built in currency filter for formatting the price -->
                {{ service.name }} <span>{{ currency(service.price) }}</span>
            </li>
        </ul>

        <div class="total">
            <!-- Calculate the total price of all chosen services. Format it as currency. -->
            Total: <span>{{ currency(total()) }}</span>
        </div>

    </form>
</template>


<style>
@import url(https://fonts.googleapis.com/css?family=Cookie);


/* Hide un-compiled mustache bindings until the Vue instance is ready */

[v-cloak] {
    display: none;
}

* {
    margin: 0;
    padding: 0;
}

body {
    font: 15px/1.3 'Open Sans', sans-serif;
    color: #5e5b64;
    text-align: center;
}

a,
a:visited {
    outline: none;
    color: #389dc1;
}

a:hover {
    text-decoration: none;
}

section,
footer,
header,
aside,
nav {
    display: block;
}

/*-------------------------
    The order form
--------------------------*/

.kyaPata-form {
    background-color: #61a1bc;
    border-radius: 2px;
    box-shadow: 0 1px 1px #ccc;
    /* width: 400px; */
    padding: 35px 60px;
    margin: 50px auto;
}

.kyaPata-form h1 {
    color: #fff;
    font-size: 64px;
    font-family: 'Cookie', cursive;
    font-weight: normal;
    line-height: 1;
    text-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
}

.kyaPata-form ul {
    list-style: none;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    margin: 20px 0 15px;
}

.kyaPata-form ul li {
    padding: 20px 30px;
    background-color: #e35885;
    margin-bottom: 8px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.kyaPata-form ul li span {
    float: right;
}

.kyaPata-form ul li.active {
    background-color: #8ec16d;
}

div.total {
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    padding: 15px 30px;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    color: #fff;
}

div.total span {
    float: right;
}
</style>