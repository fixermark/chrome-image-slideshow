// Fetches photos from picasaweb
// Requires: jquery, signals.js
//
// Copyright 2011 Mark T. Tomczak
//       
// See the README file for license information


// Retrieves photos from the specified albums.
// Args:
//  album_names: Array of albums from which to fetch.
//  username: User name of the Picasa user.
//  photo_handler: function that accepts an array of URLs of
//   photo images.
function fetch_photos(album_names, username, photo_handler) {
  get_album_name_url_map(username, function (name_url_map) {
      var album_urls = [];
      $.each(album_names, function(idx, name) {
	  url = name_url_map[name];
	  album_urls.push(url);
	});
      get_photos_from_albums(album_urls, photo_handler);
    });
}

function push_photo_urls(jsondata, url_targets) {
  $.each(jsondata.feed.entry, function (idx, entry) {
      url_targets.push(entry.content.src);
    });
}

function get_photos_from_albums(album_urls, photo_handler) {
  var count_read =  0;
  var photo_urls = [];

  $.each(album_urls, function (idx, url) {
      var query = $.ajax(url, {
	  type: "GET",
	    dataType: "json",
	});
      query
	.error(function () {
	  Signal("error",{msg: "Error retrieving photos from " + url});
	  Signal("needs-authentication");
	})
	.success(function(jsondata) {
	  push_photo_urls(jsondata, photo_urls);
	  count_read += 1;
	  if (count_read == album_urls.length) {
	    photo_handler(photo_urls);
	  }
	});
    });
}

// Retrieves a map from album names to URLs from picasaweb.
function get_album_name_url_map(username, map_receiver) {
  var query = $.ajax("http://picasaweb.google.com/data/feed/base/user/"+username+"?alt=json&kind=album&access=all", {
      type: "GET",
      dataType: "json",
    });
  query
    .error(function() {
      Signal("error",{msg: "Error connecting to Picasa."});
      Signal("needs-authentication");
    })
    .success(function(jsondata) {
	var album_name_url_map={};
	$.each(jsondata.feed.entry, function(idx, entry) {
	    var album_url = null;
	    $.each(entry.link, function(idx, link) {
		if (link.rel == "http://schemas.google.com/g/2005#feed") {
		  album_url = link.href;
		}
	      });
	    if (album_url != null) {
	      album_name_url_map[entry.title.$t]=
		album_url;
	    }
	  });
	map_receiver(album_name_url_map);
      });
}