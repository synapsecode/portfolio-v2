<script>
  import { createEventDispatcher } from "svelte";
  import getLink from "../helpers";
  const dispatch = createEventDispatcher();

  const goto = (s) =>   window.open(getLink(s),'_blank').focus();
  const commonClass = "h-10 w-10 cursor-pointer hover:w-12 hover:h-12";
</script>

<div class="mt-3">
  <div class="flex -ml-1">
    <img
      src="images/twitter.png"
      on:click={() => goto("twitter")}
      alt="Twitter Contact"
      class={commonClass}
    />
    <img
      src="images/instagram.png"
      alt="Instagram Contact"
      class={commonClass}
      on:click={() => goto("instagram")}
    /><img
      src="images/github.png"
      alt="Github Contact"
      class={commonClass}
      on:click={() => goto("github")}
    /><img
      src="images/gmail.png"
      alt="Gmail Contact"
      class={commonClass}
      on:click={() => {
        dispatch("gmail");
      }}
    /><img
    src="images/linkedin.png"
    alt="Linkedin Contact"
    class={commonClass}
    on:click={() => {
      goto("linkedin");
    }}
  />
  </div>
</div>
