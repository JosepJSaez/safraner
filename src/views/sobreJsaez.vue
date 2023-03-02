<script lang="ts">
    import { Timeline, TimelineTitle, TimelineItem } from 'vue3-cute-component'
</script>

<template>
  
  <div class="flex flex-wrap place-content-center justify-center">
    <Timeline theme="lightblue" class="w-2/5" >
        <!-- <TimelineTitle>2022</TimelineTitle> -->
        <timeline-item bg-color="red" font-color="blue">TEST</timeline-item>
        <timeline-item :hollow="true" bg-color="blue">TEST</timeline-item>
        <timeline-item bg-color="red" font-color="blue">TEST</timeline-item>
        <timeline-item :hollow="true" bg-color="blue">TEST</timeline-item>
        <timeline-item bg-color="red" font-color="blue">TEST</timeline-item>
        <timeline-item :hollow="true" bg-color="blue">TEST</timeline-item>
        <timeline-item bg-color="red" font-color="blue">TEST</timeline-item>
        <timeline-item :hollow="true" bg-color="blue">TEST</timeline-item>
        <timeline-item bg-color="red" font-color="blue">TEST</timeline-item>
        <timeline-item :hollow="true" bg-color="blue">TEST</timeline-item>
        <timeline-item bg-color="red" font-color="blue">TEST</timeline-item>
    </Timeline>
  </div>
  
</template>