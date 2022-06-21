<script>
export let name;
export let desc;
export let stack = null;
export let link;
</script>

<li class='text-2xl text-gray-6 '>
    <a class="text-blue-300 hover:text-pink-400" href="{link}" target="_blank">
        {name}
    </a> — {desc} 
    {#if stack != null}
        <span class="text-gray-500">({stack})</span>
    {/if}
</li>