var playlist = {
  bruno: "uptown",
  zayn: "pillowtalk",
  malone: "rockstar"
}

function updatePlaylist(obj, key, value){
  return Object.assign({}, obj, {[key]: value})
}
function removeFromPlaylist(key,value){
  delete playlist.bruno;
}