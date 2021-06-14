var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

// play the video 
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

// pause the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause the video");
	video.pause();
});

// slow down 
document.querySelector("#slower").addEventListener("click", function() {
	console.log("The video has been slow down 5%");
	const newVideoSlow = video.playbackRate * 0.95;
	video.playbackRate = newVideoSlow;
	console.log("the new speed is: ",video.playbackRate);
});

// speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("The video has been speed up 5%");
	const newVideoSpeed = video.playbackRate * (1/0.95);
	video.playbackRate = newVideoSpeed;
	console.log("The new speed is :",video.playbackRate);
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location", video.currentTime);
	if (video.currentTime + 15 > video.duration) {
		video.currentTime = 0;
		console.log("Going back to the beginning!");
		console.log("New location: ",video.currentTime);
		video.play();
	} else {
		video.currentTime += 15;
		console.log("New location: ", video.currentTime);
		video.play();
	}
});

// mute
document.querySelector("#mute").addEventListener("click", function() {
	console.log(video.muted);
	if(video.muted === false) {
		console.log("Mute the video!");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		console.log("unmute the video!");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

// volume slider
const slider = document.querySelector("#slider");
const videoVolume = document.querySelector("#volume");
slider.addEventListener("click", function() {
	const sliderValue = slider.value;
	video.volume = sliderValue / 100;
	videoVolume.innerHTML = sliderValue + "%";
	console.log("current video volume is: ",video.volume);
});


// oldSchool 
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Change to the old school version");
	video.classList.add("oldSchool");
});

// original 
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Change to the original version");
	video.classList.remove("oldSchool");
});