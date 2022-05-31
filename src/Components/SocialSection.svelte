<script>
  import { createEventDispatcher } from "svelte";
  import getLink from "../helpers";
  const dispatch = createEventDispatcher();

  const goto = (s) =>   window.open(getLink(s),'_blank').focus();
</script>

<div class="mt-3">
  <div class="flex -ml-1">
    <img
      src="images/twitter.png"
      on:click={() => goto("twitter")}
      alt="Twitter Contact"
      class="h-10 w-10 cursor-pointer"
    />
    <img
      src="images/instagram.png"
      alt="Instagram Contact"
      class="h-10 w-10 cursor-pointer"
      on:click={() => goto("instagram")}
    /><img
      src="images/github.png"
      alt="Github Contact"
      class="h-10 w-10 cursor-pointer"
      on:click={() => goto("github")}
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
