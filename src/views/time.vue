<script setup>
document.addEventListener("DOMContentLoaded", function() {
    const time = document.getElementById("time");
    const now = new Date();
    time.textContent = `Current time: ${now}`;
});
</script>

<template>
    <h1>TIME</h1>
    <div id="time"></div>
</template>



<style>

</style>