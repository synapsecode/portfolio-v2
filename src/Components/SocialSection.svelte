<script>
  // This Function is responsible for showing the Snackbar when the Gmail icon is clicked
  function showSnackBar() {
    var x = document.getElementById("sbar");
    x.className = x.className.replace("invisible", "visible");
    setTimeout(function () {
      x.className = x.className.replace("visible", "invisible");
    }, 3000);
  }
  const linkData = {
    instagram: "https://www.instagram.com/synapse.code/",
    github: "https://github.com/synapsecode",
    twitter: "https://twitter.com/manashejmadi",
    facebook: "",
    linkedin: "https://www.linkedin.com/in/manas-hejmadi-0b3920183/",
  };

  const goto = (x) => {
    if (x === "gmail") {
      showSnackBar();
      return;
    }
    console.log(`Going to ${x}`);
    window.open(linkData[x], "_blank").focus();
  };
</script>

<div class="mt-3">
  <div class="flex -ml-1">
    <img
      src="https://www.manashejmadi.ml/Images/twitter.png"
      on:click={() => goto("twitter")}
      alt="Twitter Contact"
      class="h-10 w-10"
    />
    <img
      src="https://www.manashejmadi.ml/Images/instagram.png"
      alt="Instagram Contact"
      class="h-10 w-10"
      on:click={() => goto("instagram")}
    /><img
      src="https://www.manashejmadi.ml/Images/github.png"
      alt="Github Contact"
      class="h-10 w-10"
      on:click={() => goto("github")}
    /><img
      src="https://www.manashejmadi.ml/Images/gmail.png"
      alt="Gmail Contact"
      class="h-10 w-10"
      on:click={()=>{}}
    />
  </div>
</div>
