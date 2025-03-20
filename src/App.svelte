<script>
  import SocialSection from "./Components/SocialSection.svelte";
  import DataLine from "./Components/DataLine.svelte";
  import Orbs from "./Components/Orbs.svelte";
  import getLink from "./helpers";
  import ToolTipIcon from "./Components/ToolTipIcon.svelte";
  import ToolTip from "./Components/ToolTip.svelte";
  let toggle_testimonial = false;
  let toggle_snackbar = false;
</script>

<body class="min-h-screen bg-black overflow-x-hidden">
  <!-- SnackBar -->
  <div
    class="{toggle_snackbar
      ? 'block'
      : 'hidden'} absolute w-[300px] bottom-10 bg-white-100 left-[calc((100%-300px)/2)] z-40 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-md text-white p-3 text-center border border-gray-400"
  >
    <p class="text-md mb-3">manashejmadi@gmail.com</p>
    <button
      on:click={() => window.open(getLink("gmail"), "_blank")}
      type="button"
      class="py-2.5 px-10 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-gray-300 rounded-lg hover:bg-gray-600 hover:text-white focus:z-10"
    >
      Send Mail
    </button>
  </div>
  <!-- ColorfulOrbs -->
  <div class="relative -z-40">
    <div
      class="absolute top-80 -left-10 w-96 h-96 bg-purple-900 opacity-40 rounded-full filter blur-3xl animate-blob"
    />
    <div
      class="absolute top-10 -right-0 w-96 h-96 bg-pink-700 opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-2000"
    />
  </div>
  <!-- <Orbs
    orbDataList={[
      { top: 80, left: -10, color: "bg-purple-900", opacity: 40 },
      { top: -10, right: 0, color: "bg-pink-700", opacity: 20, delay: 2000 },
    ]}
  /> -->
  <div class="content px-10 xl:px-20 text-white opacity-90">
    <br /><br /><br /><br /><br />
    <img src="images/profile.png" class="rounded-2xl h-40 w-40" alt="" />
    <!-- OLDIMG: https://pbs.twimg.com/profile_images/1518524395110940672/6SsgkQk-_400x400.jpg -->
    <h1 class="text-4xl mb-1 mt-4 font-bold">Manas Hejmadi</h1>
    <p class="text-md opacity-50">
      21. Freelance Software Developer with an expertise in Flutter. Enjoyer of
      puns
    </p>
    <div class="flex mt-1">
      <!-- <button
        class="py-2 my-2 mr-2 px-3 bg-transparent hover:bg-white rounded-md border border-gray-200 text-white hover:text-black transition ease-in-out delay-75"
        on:click={() => alert("HI")}
      >
        Projects
      </button> -->
      <button
        class="py-2 my-2 mr-2 px-3 bg-transparent hover:bg-white rounded-md border border-gray-200 text-white hover:text-black transition ease-in-out delay-75"
        on:click={() => {
          window.open(getLink("gmail"), "_blank").focus();
        }}
      >
        Work With Me
      </button>
      <button
        class="py-2 my-2 mr-2 px-3 bg-transparent hover:bg-white rounded-md border border-gray-200 text-white hover:text-black transition ease-in-out delay-75"
        on:click={() => {
          window.open("images/MANAS_RESUME.pdf", "_blank").focus();
        }}
      >
        View Resume
      </button>
    </div>
    <SocialSection
      on:gmail={() => {
        if (toggle_snackbar) return;
        toggle_snackbar = !toggle_snackbar;
        setTimeout(() => {
          toggle_snackbar = !toggle_snackbar;
        }, 4000);
      }}
    />
    <p class="text-gray-400 mt-1">Bengaluru, India</p>

    <br /><br /><br /><br />

    <p class="text-4xl mb-3">experience</p>
    <ul class="space-y-3 xl:space-y-1">
      <DataLine
        name="Crezam"
        desc="an AI based talent hiring and assessment platform"
        link={getLink("crezam")}
        role="Lead Mobile Developer"
        stack="2022-Present"
      />
      <DataLine
        name="FitChoice World"
        desc="a fitness and wellness centric daily-pass booking application"
        link={getLink("ratofy")}
        role="Mobile Lead"
        stack="2024-Present"
      />
      <DataLine
        name="Ratofy"
        desc="a community-building platform leveraging the power of Web3 and AI"
        link={getLink("ratofy")}
        role="Head of Product"
        stack="2023-2024"
      />
      <DataLine
        name="Atlas Knowledge"
        desc="collect, summarise and share knowledge rich content from around the web."
        link={getLink("atlas")}
        role="Lead Mobile Developer"
        stack="2021"
      />
    </ul>
    <br /><br />

    <p class="text-4xl mb-3">builds</p>
    <ul class="space-y-3 xl:space-y-1">
      <DataLine
        name="Microblogger"
        desc="a social media and microblogging platform"
        link={getLink("microblogger")}
        stack="Flutter & Flask"
      />
      <DataLine
        name="FlutterGym"
        desc="A feature-rich platform for fitness enthusiasts"
        link={getLink("fluttergym")}
        stack="Flutter & Flask"
      />
      <DataLine
        name="Voteflow"
        desc="a complete election system devised for schools, colleges and other institutions"
        link={getLink("voteflow")}
        stack="Flask"
      />
      <DataLine
        name="SchoolCompanion"
        desc="synchronise and share notes, circulars, results, attendance info and more easily between students and teachers!"
        link={getLink("schoolcompanion")}
        stack="Flutter & Flask"
      />
      <!-- <DataLine
        name="Dendrite"
        desc="integrating the blockchain and the supply chain!"
        link={getLink("dendrite")}
        stack="Flask & BigchainDB"
      /> -->
      <DataLine
        name="FaceSwap"
        desc="swap faces over the web!"
        link={getLink("faceswap")}
        stack="Python"
      />
    </ul>
    <!-- <Orbs
      orbDataList={[
        { right: -10, color: "bg-purple-900", opacity: 30 },
        { top: 10, right: 0, color: "bg-pink-700", opacity: 10, delay: 2000 },
      ]}
    /> -->
    <!-- ColorfulOrbs -->
    <div class="relative">
      <div
        class="absolute -right-10 w-96 h-96 bg-purple-900 opacity-30 rounded-full filter blur-3xl animate-blob"
      />
      <div
        class="absolute top-10 -right-0 w-96 h-96 bg-pink-700 opacity-10 rounded-full filter blur-3xl animate-blob animation-delay-2000"
      />
    </div>
    <div class="opacity-95">
      <br /><br />
      <p class="text-4xl mb-3">other work</p>
      <ul class="space-y-3 xl:space-y-1">
        <DataLine
          name="FFPNS"
          desc="A Flutter Package that simplifies the usage of in-app push notifications"
          link={getLink("ffpns")}
        />
        <DataLine
          name="Machine Learning Blog"
          desc="text based easy to understand Machine Learning tutorials for beginners"
          link={getLink("mlblog")}
        />
        <DataLine
          name="Flask Blueprints Creation Tool"
          desc="Generate flask blueprint templates using the console!"
          link={getLink("fbct")}
        />
        <DataLine
          name="Fireauth"
          desc="simplify firebase authentication in flutter using this package"
          link={getLink("fireauth")}
        />
      </ul>
      <br /><br />
      <p class="text-4xl mb-3">tools and skills</p>
      <div class="flex flex-wrap">
        <ToolTipIcon img="images/flutter.png" name="flutter" />
        <ToolTipIcon img="images/python.png" name="python" />
        <ToolTipIcon img="images/js.png" name="javascript" />
        <ToolTipIcon img="images/svelte.png" name="svelte" />
        <ToolTipIcon img="images/java.png" name="java" />
        <ToolTipIcon img="images/ps.png" name="photoshop" />
        <ToolTipIcon img="images/ae.png" name="after effects" />
      </div>
      <br /><br />
      <p class="text-4xl mb-5">recommendations</p>
      <p class="text-gray-400 text-lg">
        Manas is a bright, incredibly talented engineer with years of experience
        developing software. His ability far outweighs his age and working with
        him has been an absolute pleasure. He is attentive, communicative,
        polite and prompt with his work. His ability to think critically means
        no task is too much of a challenge. He truly is an exponentially
        valuable asset to any team he is a part of, and I'd be delighted to work
        with him again in future. This guy is going places!
      </p>
      <div class="h4 text-left mt-3 mr-2 text-blue-200">
        Matthew Ruddy (Freelance Client)
      </div>
      <br /><br />
      <p class="text-gray-400 text-lg">
        Manas is a young developer who already has multiple years of experience
        developing software, and it shows. Manas sees software as a medium to
        achieve an end goal which makes him come up with creative ways to
        accomplish any goal than sticking within the boundaries of conventional
        development methods used to achieve it. Manas developed a feature-rich
        mobile app for Atlas from scratch within two weeks. He is a quick
        learner and exceptional at maintaining a log of the backlog, bugs &
        blockers and crisply communicating them to the stakeholders - which is
        extremely valuable as a developer. It might be too early to say, but
        Manas is on a path to become a 10x dev if he continuous to progress in
        the direction he's moving in.
      </p>
      <div class="h4 text-left mt-3 mr-2 text-blue-200">
        Harshal Kokane (Atlas Knowledge)
      </div>

      <p
        class="text-blue-200 mt-10 cursor-pointer opacity-80 hover:text-blue-400"
        on:click={() => {
          toggle_testimonial = !toggle_testimonial;
        }}
      >
        show {toggle_testimonial ? "less" : "more"}
      </p>

      <div
        class="hidden-reviews mt-5 {toggle_testimonial ? 'block' : 'hidden'}"
      >
        <p class="text-gray-400 text-lg">
          Manas was pleasure to work with! He is so kind and truly awesome at
          what he does. He delivered a product that I was pleased with. He made
          sure to communicate his progress and kept me informed throughout this
          process. He was so helpful in making any changes that I asked. He was
          also very helpful in explaining things that I had questions about, He
          is very timely and always exceeded my expectations. He built the
          Backend very professionally and will definitely be using his services
          again as well as recommending him to all of my family and friends.
        </p>
        <div class="h4 text-left mt-3 mr-2 text-blue-200">
          Ismail Abdirahman (Freelance Client)
        </div>
        <br /><br />
        <p class="text-gray-400 text-lg">
          Manas was given a tough and challenging job of creating an innovative
          software application for the school elections. His creativity and
          ingenuity was very obvious and he did an outstanding job! He deserves
          all the praise and accolade for this very succcssful and full proof
          achievement
        </p>
        <div class="h4 text-left mt-3 mr-2 text-blue-200">
          Susan Roy (Principal, St. Paul's English School)
        </div>
      </div>

      <div class="mb-20" />
      <p class="text-gray-300 mb-10">
        (c) Manas Hejmadi {new Date().getFullYear()}
      </p>
    </div>
  </div></body
>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;

  .tooltip {
    @apply invisible absolute;
  }

  .has-tooltip:hover .tooltip {
    @apply visible z-50;
  }

  @tailwind utilities;
  @layer utilities {
    .animation_delay-2000 {
      animation-delay: 2s;
    }
  }

  html {
    background-color: black;
  }
</style>
