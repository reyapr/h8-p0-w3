var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(input){
	input.splice(1,4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
	console.log(input);
	var date = input[3].split('/');
	var bulan = date[1];
	switch(bulan){
		case '01': bulan = 'Januari';
		break;
		case '02': bulan = 'Februari';
		break;
		case '03': bulan = 'Maret';
		break;
		case '04': bulan = 'April';
		break;
		case '05': bulan = 'Mei';
		break;
		case '06': bulan = 'Juni';
		break;
		case '07': bulan = 'Juli';
		break;
		case '08': bulan = 'Agustus';
		break;
		case '09': bulan = 'September';
		break;
		case '10': bulan = 'Oktober';
		break;
		case '11': bulan = 'Nopember';
		break;
		case '12': bulan = 'Desember';
		break;
		};
	console.log(bulan);
	console.log(date.sort(function(a,b){return b-a}));
	console.log(input[3].split('/').join('-'));
	var nama = input[1].split(' ').slice(0,2).join(' ')
	console.log(nama)
};
dataHandling2(input)