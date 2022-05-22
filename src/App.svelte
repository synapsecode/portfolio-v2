<script>
  import Snackbar from "./Components/Snackbar.svelte";
  import SocialSection from "./Components/SocialSection.svelte";
  import DataLine from "./Components/DataLine.svelte";
</script>

<body class="min-h-screen bg-black overflow-x-hidden">
  <div class="relative -z-40">
    <div
      class="absolute top-80 -left-10 w-96 h-96 bg-purple-900 opacity-40 rounded-full filter blur-3xl  animate-blob"
    />
    <div
      class="absolute top-10 -right-0 w-96 h-96 bg-pink-700 opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-2000"
    />
  </div>
  <div class="content px-10 xl:px-20 text-white opacity-90">
    <br /><br /><br /><br /><br />
    <img
      src="https://pbs.twimg.com/profile_images/1518524395110940672/6SsgkQk-_400x400.jpg"
      class="rounded-2xl h-40 w-40"
      alt=""
    />
    <h1 class="text-4xl mb-1 mt-4 font-bold">Manas Hejmadi</h1>
    <p class="text-md opacity-50">
      18. Flutter Freelance App Developer. Learning Web3
    </p>
    <div class="flex mt-1">
      <button
        class="py-2 my-2 mr-2 px-3 bg-transparent hover:bg-white rounded-md border border-gray-200 text-white hover:text-black transition ease-in-out delay-75"
        on:click={() => alert("HI")}
      >
        Projects
      </button>
      <button
        class="py-2 my-2 mr-2 px-3 bg-transparent hover:bg-white rounded-md border border-gray-200 text-white hover:text-black transition ease-in-out delay-75"
        on:click={() => alert("HI")}
      >
        Work With Me
      </button>
    </div>
    <SocialSection />
    <p class="text-gray-400 mt-1">Bengaluru, India</p>
    <br /><br /><br /><br />
    <p class="text-4xl mb-3">builds</p>
    <ul class="space-y-3 xl:space-y-1">
      <DataLine
        name="Atlas Knowledge"
        desc="collect, summarise and share knowledge rich content from around the web."
        link=""
        stack="Flutter"
      />
      <DataLine
        name="Microblogger"
        desc="a social media and microblogging platform"
        link=""
        stack="Flutter & Flask"
      />
      <DataLine
        name="Voteflow 2.0"
        desc="voting made easy!"
        link=""
        stack="Flask"
      />
      <DataLine
        name="SchoolCompanion"
        desc="synchronise and share notes, circulars, results, attendance info and more easily between students and teachers!"
        link=""
        stack="Flutter & Flask"
      />
      <DataLine
        name="Dendrite"
        desc="integrating the blockchain and the supply chain!"
        link=""
        stack="Flask & BigchainDB"
      />
    </ul>
    <div class="relative">
      <div
        class="absolute -right-10 w-96 h-96 bg-purple-900 opacity-30 rounded-full filter blur-3xl  animate-blob"
      />
      <div
        class="absolute top-10 -right-0 w-96 h-96 bg-pink-700 opacity-10 rounded-full filter blur-3xl animate-blob animation-delay-2000"
      />
    </div>
    <div class="opacity-90">
      <br /><br />
      <p class="text-4xl mb-3">other work</p>
      <ul class="space-y-3 xl:space-y-1">
        <DataLine
          name="fireauth"
          desc="simplify firebase authentication in flutter using this package"
          link=""
        />
        <DataLine
          name="Flask Blueprints Creation Tool"
          desc="Generate flask blueprint templates using the console!"
          link=""
        />
        <DataLine
          name="Machine Learning Blog"
          desc="text based easy to understand Machine Learning tutorials for beginners"
          link=""
        />
      </ul>
      <br /><br />
      <p class="text-4xl mb-3">tools and skills</p>
      <div class="flex flex-wrap">
        <img
          src="https://www.manashejmadi.ml/Images/flutter.png"
          alt="Flutter"
          class="h-16 w-16"
        />
        <img
          src="https://www.manashejmadi.ml/Images/python.png"
          alt="Python"
          class="h-16 w-16"
        />
        <img
          src="https://www.manashejmadi.ml/Images/js.png"
          alt="Javascript"
          class="h-16 w-16"
        />
        <img
          src="https://www.manashejmadi.ml/Images/svelte.png"
          alt="Svelte"
          class="h-16 w-16"
        />
        <img
          src="https://www.manashejmadi.ml/Images/java.png"
          alt="Java"
          class="h-16 w-16"
        />
        <img
          src="https://www.manashejmadi.ml/Images/ps.png"
          alt="Photoshop"
          class="h-16 w-16"
        />
        <img
          src="https://www.manashejmadi.ml/Images/ae.png"
          alt="AfterEffects"
          class="h-16 w-16"
        />
      </div>

      <br /><br />
      <p class="text-4xl mb-3">recommendations</p>
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

      <div class="mb-20" />
      <p class="opacity-40 mb-10">(c) Manas Hejmadi 2022</p>
    </div>
  </div></body
>
<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
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
