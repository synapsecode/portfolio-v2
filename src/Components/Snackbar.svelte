<script>
    import DeviceDetector from "svelte-device-detector";

    function openGmail(device) {
        if (device === "desktop") {
            window
                .open(
                    "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=manashejmadi@gmail.com",
                    "_blank"
                )
                .focus();
        } else {
            window.location.href = "mailto:manashejmadi@gmail.com";
        }
    }
</script>


<!-- <div id="snackbar">
    <p class="">My Gmail Address is manashejmadi@gmail.com</p>
    <DeviceDetector showInDevice="desktop">
        <button class="snackbtn" on:click={() => openGmail("desktop")}
            >Send Mail</button>
    </DeviceDetector>
    <DeviceDetector showInDevice="mobile">
        <button class="snackbtn" on:click={() => openGmail("mobile")}
            >Send Mail</button>
    </DeviceDetector>
</div> -->

<div id="sbar" class="invisible p-6 max-w-sm bg-transparent rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-4">
    <a href="#">
        <h5 class="mb-3 text-2xl font-bold tracking-tight text-white dark:text-white">Connect via email!</h5>
    </a>
    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-black hover:text-white bg-white rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Send Mail
        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
</div>



<style>
    /* SnackBar Stuff */
    .snackbtn {
        padding: 10px 30px;
        color: white;
        background-color: transparent;
        border: 1px solid white;
    }

    #snackbar {
        /* visibility: hidden; Hidden by default. Visible on click */
        min-width: 250px; /* Set a default minimum width */
        margin-left: -160px; /* Divide value of min-width by 2 */
        background-color: #333; /* Black background color */
        color: #fff; /* White text color */
        text-align: center; /* Centered text */
        border-radius: 2px; /* Rounded borders */
        padding: 20px 1px; /* Padding */
        position: fixed; /* Sit on top of the screen */
        z-index: 1; /* Add a z-index if needed */
        left: 50%; /* Center the snackbar */
        bottom: 30px; /* 30px from the bottom */
    }

    #snackbar > p {
        margin-bottom: 10px;
    }

    /* Mobile View */

    @media (max-width: 920px) {
        #snackbar {
            padding: 26px 16px;
            left: 0;
            margin-left: 0;
        }
    }

    /* Show the snackbar when clicking on a button (class added with JavaScript) */
    #snackbar.show {
        visibility: visible; /* Show the snackbar */
        /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
	However, delay the fade out process for 2.5 seconds */
        -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
        animation: fadein 0.5s, fadeout 0.5s 2.5s;
    }

    /* Animations to fade the snackbar in and out */
    @-webkit-keyframes fadein {
        from {
            bottom: 0;
            opacity: 0;
        }
        to {
            bottom: 30px;
            opacity: 1;
        }
    }

    @keyframes fadein {
        from {
            bottom: 0;
            opacity: 0;
        }
        to {
            bottom: 30px;
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeout {
        from {
            bottom: 30px;
            opacity: 1;
        }
        to {
            bottom: 0;
            opacity: 0;
        }
    }

    @keyframes fadeout {
        from {
            bottom: 30px;
            opacity: 1;
        }
        to {
            bottom: 0;
            opacity: 0;
        }
    }
</style>
