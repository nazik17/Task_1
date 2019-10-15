 document.write('<br>');
 document.write('<br>');
 ////№2

 document.write("Сортування Групи за ім’ям");
 
 document.write('<br>');

let Students = [{ lastName: 'Kosiuk', firstName: 'Nazar', ratting: 80 },
{ lastName: 'Vitenco', firstName: 'Vadym', ratting: 84 },
{ lastName: 'Michutkin', firstName: 'Yuara', ratting: 79 },
{ lastName: 'Grincev', firstName: 'Andriy', ratting: 88 },
{ lastName: 'Semchicin', firstName: 'Vlad', ratting: 84 },
{ lastName: 'Mogilska', firstName: 'Maria', ratting: 95 },
{ lastName: 'Lipac', firstName: 'Nazar', ratting: 76 },
{ lastName: 'Phil', firstName: 'Dmitro', ratting: 92 },
{ lastName: 'Shindor', firstName: 'Dimitro', ratting: 79 },
{ lastName: 'Berkita', firstName: 'Vitaliy', ratting: 75 },
{ lastName: 'Krupnic', firstName: 'Artem', ratting: 95 },
{ lastName: 'Sidaga', firstName: 'Nazar', ratting: 60 },
{ lastName: 'Chorniy', firstName: 'Nazar', ratting: 90 },
{ lastName: 'Timchyc', firstName: 'Rovan', ratting: 92 },
{ lastName: 'Barida', firstName: 'Sergiy', ratting: 80 },
{ lastName: 'Vasiliv', firstName: 'Svatoslav', ratting: 85 },
{ lastName: 'Ivanitsciy', firstName: 'Roman', ratting: 82 }]; 


Students.sort(function(a, b) {//Sor по  ім’ям



 if (a.firstName.toUpperCase() <  b.firstName.toUpperCase()) {
      return -1;
 }
 if (a.firstName.toUpperCase() >  b.firstName.toUpperCase()) {
      return 1;
 }
    return 0;
 });

for(let i=0;i<Students.length;i++)

   showStudents(i);

 document.write('<br>');

 document.write('<br>');

 document.write("Сортування Групи за балом");

 document.write('<br>');
 
 function showStudents(i){

 	document.write(Students[i].lastName + "   " + Students[i].firstName + "   " + Students[i].ratting);

    document.write('<br>');
 };
 
 
 
Students.sort(function(a,b){//Сортування за балами

if(a.ratting > b.ratting){

		return 1;

	}
if(a.ratting < b.ratting){
		return -1;
	}
		return 0;
});

for(let i=0;i<Students.length;i++)
 showStudents(i);

 document.write('<br>');
 
let minRatting=Students[0].ratting;

let maxRatting=Students[Students.length-1].ratting;

function Max_and_Min(){//Пошук студентів з макс і мін балом.
	
for(let i=0;i<Students.length;i++){

if(Students[i].ratting==minRatting){

document.write("Найгірша оцінка: "+Students[i].lastName + "   " + Students[i].firstName + "   " + Students[i].ratting);

document.write('<br>');
}
if(Students[i].ratting==maxRatting){

document.write("Найкраща оцінкоа: "+Students[i].lastName + "   " + Students[i].firstName + "   " + Students[i].ratting);

document.write('<br>');		
}
}
};
Max_and_Min(); 

