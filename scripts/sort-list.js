var fs = require('fs');

var file = fs.readFileSync('../jugend-forscht.json');

data = JSON.parse(file);

data.results = data.results.sort(function (a, b) {
	return(a.lastname > b.lastname);
});

fs.writeFileSync('../jugend-forscht.json', JSON.stringify(data, null, 2))
