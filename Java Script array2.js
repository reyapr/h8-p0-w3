var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
                ["0005", "Renal Apriansyah", "Sukabumi", "10/4/1995", "Sukabumi"]
            ]
var form = ['Nomor ID: ', 'Nama Lengkap: ', 'TTL: ','Hobi: ']

function dataHandling(arg,form){
  var result = '';
	for(i=0;i<arg.length;i++){
		arg[i].splice(2,2,arg[i][2]+' '+arg[i][3]);
	  var lengthInArg = arg[i].length;
		for(j=0;j<lengthInArg;j++){
			result = result + form[j] + arg[i][j];
			result += '\n';
		}
  result += '\n';
	}
	return result;
}
console.log(dataHandling(input,form))
