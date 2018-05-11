module.exports = {
    swap(json) {
        var ret = {};
        for(var key in json){
          ret[json[key]] = key;
        }
        return ret;
      }
}