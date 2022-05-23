<script>
  export let orbDataList = [];
  function generateClass(data) {
    let top = `${data.top != undefined ? (data.top >= 0 ? `top-${data.top}` : `-top-${Math.abs(data.top)}`) : ""}`;
    let left = `${
      data.left != undefined ? (data.left >= 0 ? `left-${data.left}` : `-left-${Math.abs(data.left)}`) : ""
    }`;
    let right = `${
      data.right != undefined ? (data.right >= 0 ? `right-${data.right}` : `-right-${Math.abs(data.right)}`) : ""
    }`;
    let animdelay = data.delay != undefined ? `${data.delay != 0 ? `animation-delay-${data.delay}` : ''}` : '';
    let classData = `absolute ${[top, left, right].filter((x)=>x!="").join(" ").trim()} w-96 h-96 ${data.color} opacity-${data.opacity} rounded-full filter blur-3xl animate-blob ${animdelay}`;
    console.log(classData);
    return classData;
  }
</script>

<div class="relative -z-40">
  {#each orbDataList as orbData}
    <div
      class={generateClass(orbData)}
    />
  {/each}
</div>