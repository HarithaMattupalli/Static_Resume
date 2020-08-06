function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}

var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basic(data.details);
});

var child1 = document.querySelector(".child1");

function basic(det){
  var image1 = document.createElement("img");
  image1.src = det.image;
  child1.appendChild(image1);

  var name = document.createElement("h4");
  name.textContent = det.name;
  child1.appendChild(name);

  var number = document.createElement("h4");
  number.textContent = det.number;
  child1.appendChild(number);

}
