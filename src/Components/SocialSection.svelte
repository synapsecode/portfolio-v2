<script>
  import { createEventDispatcher } from "svelte";
  import getLink from "../helpers";
  const dispatch = createEventDispatcher();
</script>

<div class="mt-3">
  <div class="flex -ml-1">
    <img
      src="images/twitter.png"
      on:click={() => getLink("twitter")}
      alt="Twitter Contact"
      class="h-10 w-10 cursor-pointer"
    />
    <img
      src="images/instagram.png"
      alt="Instagram Contact"
      class="h-10 w-10 cursor-pointer"
      on:click={() => getLink("instagram")}
    /><img
      src="images/github.png"
      alt="Github Contact"
      class="h-10 w-10 cursor-pointer"
      on:click={() => getLink("github")}
    /><img
      src="images/gmail.png"
      alt="Gmail Contact"
      class="h-10 w-10 cursor-pointer"
      on:click={() => {
        dispatch("gmail");
      }}
    />
  </div>
</div>
