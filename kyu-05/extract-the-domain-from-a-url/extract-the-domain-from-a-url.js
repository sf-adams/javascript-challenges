// function domainName(url) {
//   url = url.replace("http://", "");
//   url = url.replace("https://", "");
//   url = url.replace("www.", "");

//   return url.split(".")[0];
// }

// Refactored solution

function domainName(url) {
  url = url.replace("http://", "").replace("https://", "").replace("www.", "");

  return url.split(".")[0];
}

module.exports = domainName;