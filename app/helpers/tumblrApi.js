var $ = require('jquery');

var _APIKEY = '3lRlLdZi1GsTGCpvpwXdHR2FwkCApeoK3hneUzy4e7YkEabdRq';
var _baseURL = 'https://api.tumblr.com/v2/';

function generateUrl(blogID, tag) {
  if (blogID === '' && tag === '') {
    return;
  }
  
  if (blogID === '' && tag !== '') {
    return _baseURL + 'tagged?tag=' + tag + "&api_key=" + _APIKEY;
  }

  if (tag !== '') {
    tag = '/?tag=' + tag + '&';
  } else {
    tag = '?';
  }

  if (blogID.indexOf('.') === -1) {
    blogID += '.tumblr.com';
  }

  return _baseURL + 'blog/' + blogID + '/posts' + tag + "api_key=" + _APIKEY;
}

function formatTumblrData(data) {
  data = data.response;
  data = !!data.posts ? data.posts : data;
  
  return data;
}

function getTumblrPosts(blogID, tag, callback) {
  var url = generateUrl(blogID, tag);
  $.ajax({
    type: 'GET',
    url: url,
    dataType: 'jsonp',
    success: function(tumblrData) {
      callback(formatTumblrData(tumblrData));
    }
  });
}

module.exports = {
  getTumblrPosts: getTumblrPosts
};