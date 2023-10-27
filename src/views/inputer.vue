<template>
    <h1>这是一个长久的BUG：输入法中英文无法切换</h1>
    <input type="color" name="">
    <input type="text">
    <h1>说明：</h1>
    <p>这是一个很少见但是从未被修复过的BUG，只要你在选项色卡吸色，就会出现输入法中英文无法切换</p>
    <br>
    <br>
    <h1>修复后：</h1>
    <input type="color" onblur="fixIME()">
    <input type="text">
    <p>让浏览器失去焦点，就能正常切换</p>
</template>

<script>
/**
 * Fixes the input method editor (IME) by opening and closing a new window.
 *
 * @return {undefined} No return value.
 */
    function fixIME() {
        let fixIMEWin = window.open();
        fixIMEWin.close();
    }
</script>