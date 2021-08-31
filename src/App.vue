<template>
    <div id="app">
        <div id="map_container" ref="map_container"></div>
    </div>
</template>

<script>
import { drawMap } from "./map/drawMap";
import * as echarts from "echarts";
export default {
    name: "App",
    mounted() {
        drawMap(echarts, this.$refs.map_container);
    },
};
</script>

<style>
#app {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
}
#map_container {
    width: 100%;
    height: 90%;
}
</style>
