var fs = require('fs'); 		// ÒýÈëfsÄ£¿é

var deleteFolderRecursive = function(path) {

    var files = [];

    if( fs.existsSync(path) ) {

        files = fs.readdirSync(path);

        files.forEach(function(file,index){

            var curPath = path + "/" + file;

            if(fs.statSync(curPath).isDirectory()) { // recurse

                deleteFolderRecursive(curPath);

            } else { // delete file
				if(file.indexOf(".js") > -1)
                fs.unlinkSync(curPath);

            }
			console.log(curPath);
        });

        //fs.rmdirSync(path);

    }

};
deleteFolderRecursive("./app");