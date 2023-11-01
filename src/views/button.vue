<script>
// import { elbutton } from 'element-plus';
// export default{
//     components: { elbutton },
// }


</script>

<template>
<div id="btn"><button type="button" onclick="alert('很酷炫的按钮')">点我</button></div>


</template>


<style>
#btn {
    padding-top: 20px;
    text-align: center;
}

#btn button {
    width: 100px;
    height: 50px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    line-height: 50px;
    transition: all 0.3s ease;
}

#btn button:hover {
    transform: scale(1.1);
    color: black;

    background-color: blue;
}
</style>