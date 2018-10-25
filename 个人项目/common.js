function $(id){
  return document.getElementById(id);
}

function createXhr(){
  if(window.XMLHttpRequest){
    var xhr=null;
	xhr =new XMLHttpRequest();
  }else{
    xhr =new ActiveXObject(Microsoft.XMLHttp);
  }
  return xhr;
}