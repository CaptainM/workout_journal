// $(function() {
// 	console.log("this is the youtube page");
// });
// window.onload= function() {
// 	onClientLoad()
// }

// // Helper function to display JavaScript value on HTML page.
// function showResponse(response) {
//     var responseString = JSON.stringify(response, '', 2);
//     document.getElementById('response').innerHTML += responseString;
// }

// // Called automatically when JavaScript client library is loaded.
// function onClientLoad() {
// 		console.log('hi')
//     gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
//     console.log('hi')
// }

// // Called automatically when YouTube API interface is loaded (see line 9).
// function onYouTubeApiLoad() {
//     // This API key is intended for use only in this lesson.
//     // See http://goo.gl/PdPA1 to get a key for your own applications.
//     gapi.client.setApiKey('AIzaSyAk4KO7795jq910nc5MVwwll6peSFKw8TA');
//     search();
// }

// function search() {
//     // Use the JavaScript client library to create a search.list() API call.
//     var request = gapi.client.youtube.search.list({
//         part: 'snippet',
//         q: "walking lunges"
//     });
    
//     // Send the request to the API server,
//     // and invoke onSearchRepsonse() with the response.
//     request.execute(onSearchResponse);
// }

// // Called automatically with the response of the YouTube API request.
// function onSearchResponse(response) {
//     showResponse(response);
// }