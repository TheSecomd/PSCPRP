//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "";

// Center logo?
// 'true' or 'false'
var l_centerLogo = false;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = true;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "Psychotic Serious SCPRP";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "bluefall.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"SCP-049(2).jpg",
	"SCP-049(3).jpg",
	"SCP-049.jpg",
	"SCP-096.jpg",
	"SCP-106.png",
	"SCP-999.jpg",
	"SCP-Logo(2).jpg",
	"SCP-Logo(3).jpg",
	"SCP-Logo(4).png",
	"SCP-Logo.jpg",
	"SC{-096(2).jpg",
	"SCP Facility.png",
	"SCP-162.jpg",

];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 60000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 25;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{ogg: "Damned 100AE - Treyarch.ogg", name: "Damned 100AE - Treyarch"},
	{ogg: "115 - Treyarch.ogg", name: "115 - Treyarch"},
	{ogg: "Beauty Of Annihilation - Treyarch.ogg", name: "Beauty Of Annihilation - Treyarch"},
	{ogg: "The One - Treyarch.ogg", name: "The One - Treyarch"},
	{ogg: "Avenged Sevenfold - Shepherd of Fire.ogg", name: "Avenged Sevenfold - Shepherd of Fire"},
	{ogg: "Black Ops 2 - Multiplayer Theme.ogg", name: "Black Ops 2 Multiplayer Theme"},
	{ogg: "Courage the Cowardly Dog - Crisis Theme.ogg", name: "Courage the Cowardly Dog - Crisis Theme"},
	{ogg: "Black Ops 2 - Main Theme.ogg", name: "Black Ops 2 Main Theme"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 25;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"Join the Discord: https://discord.gg/YspEpYH",
	"Steam Workshop: https://steamcommunity.com/sharedfiles/filedetails/?id=1341805901",
	"Forms Page: https://psychoticsseriousrp.mistforums.com/",
	"Do not be afraid.. I am the Cure.",
	"Human.. Human.. ",
	"[DATA EXPUNGED]",
	"Secure. Contain. Protect.",
	"[REDACTED]",
	"Watch out for SCP-[REDACTED]",
	"MY NAME.. IS.. NOT.. SCP-[REDACTED]",
	"Screw SCP-[EXPUNGED], all my Homies hate SCP-[EXPUNGED]",
	"Dr.[Redacted] is the Best.",
];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 30000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};