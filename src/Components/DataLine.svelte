<script>
    export let name;
    export let desc;
    export let stack = null;
    export let link;
    export let role = null;
</script>

<li class="text-2xl text-gray-6 mb-1 ml-5">
    {#if role !== null}
        <span class="text-yellow-500 py-1 px-2 bg-gray-700 rounded text-lg opacity-90">
            {role ?? ""}
        </span>
    {/if}
    <a class="text-blue-300 hover:text-pink-400" href={link} target="_blank">
        {name}
    </a>
    — {desc}
    {#if stack != null}
        <span class="text-gray-700">({stack})</span>
    {/if}
</li>
