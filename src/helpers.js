function getHostOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform ?? window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'mac';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'ios';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'windows';
    } else if (/Android/.test(userAgent)) {
        os = 'android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'linux';
    }
    return os;
}
function getLink(x) {
    if(x==='atlas'){
        let os = getHostOS();
        if(os === 'windows' || os === 'linux' || os === 'android') os = 'android';
        if(os === 'mac' || os === 'ios') os = 'ios';
        x = `${x}-${os}`;
    }
    if(x==='gmail'){
        let os = getHostOS();
        x = `gmail-direct`;
        if(os === 'ios' || os === 'android') x = `gmail-mailto`;
    }
    const d = {
      'atlas-android':
        "https://play.google.com/store/apps/details?id=fm.atlas.atlas",
      'atlas-ios':
        "https://apps.apple.com/lt/app/atlas-knowledge-curation/id1586021959",
      "voteflow": "https://github.com/synapsecode/VoteFlow",
      "schoolcompanion": "https://github.com/synapsecode/SchoolCompanion-App",
      "dendrite": "https://github.com/synapsecode/Dendrite-1.1",
      "faceswap": "https://github.com/synapsecode/Flask-FaceSwapWebApp",
      "microblogger":"https://github.com/synapsecode/Microblogger",
      "fireauth":"https://pub.dev/packages/fireauth",
      "firesetup":"https://github.com/synapsecode/FireSetup",
      "fbct":"https://github.com/synapsecode/FlaskBlueprint-Creation-Tool",
      "mlblog":"https://ethereumcs.wordpress.com/",
      "gmail-direct": "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=manashejmadi@gmail.com",
      "gmail-mailto":"mailto:manashejmadi@gmail.com"
    };
    return d[x];
  }
export default getLink; 