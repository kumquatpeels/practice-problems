function getPath(aString){
  var splitArr = aString.split('/');
  return splitArr;
}

function getPathParts(url){
  const spl = url.split('/')
  const protocol = spl[0]
  console.log(spl, protocol)
  // const hostport = spl[2].split(':')
  // const host = hostport[0]
  // const port = hostport[1]
  // const file = split[-1]
  // console.log(protocol, host, port, file)
}
// function getPathParts(url){
//   var pattern = / #(?i)\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))#iS /;
//   var splitUrl = pattern.exec(url);
//   console.log(splutUrl);
// }
//   var splitUrl = url.split('/');
//   console.log(splitUrl);
// }


  // console.log((urlHack.href).attributes('host'));

//   var splitUrl = {};
//   splitUrl.protocol = urlHack.protocol;
//   splitUrl.host = urlHack.host;

//   console.log('urlHack.protocol', urlHack.protocol);
//   console.log('host', urlHack.host);
//   console.log('hostname',urlHack.hostname);
//   console.log('port',urlHack.port);
//   console.log('pathname', urlHack.path);
//   console.log('hash',urlHack.hash);
//   console.log('search',urlHack.search);
//   console.log('origin',urlHack.origin);
// return splitUrl;

// debugger;
  // var urlSplit = url.split('/');
  // console.log(urlSplit);
  // // var pathPartsObj = {};
  // function pathParts(protocol,host,port,path,file) {
  //   this.protocol = protocol;
  //   this.host = host;
  //   this.port = port;
  //   this.path = path;
  //   this.file = file;
  // }
  // var hostPort = urlSplit[2].split(':');
  // for (parts in pathParts) {
  //   pathParts.protocol=urlSplit[0];
  //   pathParts.host=hostPort[0];
  //   pathParts.port=hostPort[1];
  //   pathParts.path=urlSplit[3];
  //   pathParts.file=urlSplit[4];
  // }
  // return pathParts;
// }

function getCapitalCount(arr){
  var upper = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].slice(0,1) === arr[i].slice(0,1).toUpperCase()) {
      upper++;
    }
  }
  return upper;
}

function correctCalcChecker(arr){
  return arr.filter(obj => {
    switch (obj.op) {
      case '+':
        return obj.num1 + obj.num2 === obj.result
        break
      case '-':
        return obj.num1 - obj.num2 === obj.result
        break
      case '*':
        return obj.num1 * obj.num2 === obj.result
        break
      case '/':
        return obj.num1 / obj.num2 === obj.result
        break
    }
  })
}
