<script>
    import ToolTip from './ToolTip.svelte';
    export let name;
    export let img;
</script>

<ToolTip text="{name}">
    <img src="{img}" alt="{name}" class="h-16 w-16" />
</ToolTip>