<script>
    export let text;
    export let textColor = "text-gray-200";
    export let bgColor = "bg-purple-900";
</script>

<div class='has-tooltip'>
    <span class='tooltip rounded shadow-lg py-1 px-3 {bgColor} {textColor} -mt-5'>{text}</span>
    <slot>
    </slot>
</div>