<script lang="ts">
    import { Timeline, TimelineTitle, TimelineItem } from 'vue3-cute-component'
</script>

<template>

<Timeline theme="lightblue">
    <TimelineTitle>2022</TimelineTitle>
    <timeline-item bg-color="red" font-color="blue">TEST</timeline-item>
    <timeline-item :hollow="true" bg-color="blue">TEST</timeline-item>
    <timeline-item bg-color="red" font-color="blue">TEST</timeline-item>
    <timeline-item>
  <template #others>
    <img
      src="https://user-images.githubusercontent.com/12069729/36057805-80cfc3d2-0e4e-11e8-8851-6fda091ff389.png"
      class="icon-heart"
  />
  </template>
</timeline-item>
</Timeline>

</template>