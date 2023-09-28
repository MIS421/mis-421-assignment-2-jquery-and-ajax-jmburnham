var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "f0c55407ae3b4a818edd386c4e974694");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

function time() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var timenow = + hours + ":"
        + minutes + ":"
        + seconds;
    var currTime = "Current time: " + timenow
    $("#timeBtn").text(currTime);
}

setInterval(time, 1000)

const searchButton = $("#searchButton")

searchButton.click( function () {
    $("#searchResults").css("visibility", "visible");
    apiSearch();
})

const luckyButton = $("#luckyButton")

luckyButton.click(function () {
    apiSearch();
    setTimeout(function () {
        const firstResult = $("#searchResults a:first");
        resultURL = firstResult.attr('href');
        console.log(resultURL);
        window.location.href = resultURL;
    }, 1500)
})

const header = $("#header");
const back = $("#site")

header.click(function () {
    const min = 1;
    const max = 5;
    const randomInt = Math.floor(Math.random() * (max - min) + 1) + min;
    if (randomInt == 1) {
        back.css("background-image", 'url("https://wallpapers.com/images/hd/egg-background-e28y27y0h7933mml.jpg")')
    } else if (randomInt == 2) {
        back.css("background-image", 'url("https://cdn.vectorstock.com/i/1000x1000/27/86/fried-eggs-background-seamless-vector-4042786.webp")')
    } else if (randomInt == 3) {
        back.css("background-image", 'url("https://cdn.vectorstock.com/i/1000x1000/00/77/eggs-seamless-vector-1630077.webp")')
    } else if (randomInt == 4) {
        back.css("background-image", 'url("https://w0.peakpx.com/wallpaper/331/769/HD-wallpaper-lazy-egg5-egg-gudetama-kawaii-lazy-egg.jpg")')
    } else if (randomInt == 5) {
        back.css("background-image", 'url("https://cdn1.vectorstock.com/i/1000x1000/36/55/fried-eggs-background-seamless-2-vector-4043655.jpg")')
    }

    setTimeout(function () {

        const randomInt2 = Math.floor(Math.random() * (max - min) + 1) + min;
        if (randomInt2 == 1) {
            back.css("background-image", 'url("https://wallpapers.com/images/hd/egg-background-e28y27y0h7933mml.jpg")')
        } else if (randomInt2 == 2) {
            back.css("background-image", 'url("https://cdn.vectorstock.com/i/1000x1000/27/86/fried-eggs-background-seamless-vector-4042786.webp")')
        } else if (randomInt2 == 3) {
            back.css("background-image", 'url("https://cdn.vectorstock.com/i/1000x1000/00/77/eggs-seamless-vector-1630077.webp")')
        } else if (randomInt2 == 4) {
            back.css("background-image", 'url("https://w0.peakpx.com/wallpaper/331/769/HD-wallpaper-lazy-egg5-egg-gudetama-kawaii-lazy-egg.jpg")')
        } else if (randomInt2 == 5) {
            back.css("background-image", 'url("https://cdn1.vectorstock.com/i/1000x1000/36/55/fried-eggs-background-seamless-2-vector-4043655.jpg")')
        }
    }, 1000)
})