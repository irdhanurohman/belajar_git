const mahasiswa = [
  {
    _id: 1,
    nama:"irdha",
    nim:89
  },
    {
      _id:2,
    nama:"azman",
    nim:12
  },
  {
     _id:3,
     nama:"sandhika",
     nim : 99
 }

];

const mataKuliah = [
   {
      title:"Algoritma dan pemograman",
      _id:1
   },
   {
      title:"jaringan komputer",
      _id:3
   },
   {
      title:"Basis Data",
      _id:2
   },
]


const jobs = [
   {
      _id: 1,
      job:"programmer",
      mahasiswa_id : [1,2],
   },
   {
      _id: 2,
      job:"Kontrusi bangunan",
      mahasiswa_id : 3,
   }
];

function relationMatkul(id)
{
   return mataKuliah.filter(val => val._id == id)[0].title;
}


function relationJobs(id)
{
   return jobs.filter(val => {
      if(checkArray(val.mahasiswa_id))
      {
         return val.mahasiswa_id.includes(id) && val.mahasiswa_id;
      }else{
         return  val.mahasiswa_id;
      }


   })[0].job;
}


function checkArray(array)
{
   if(array.length > 0)
   {
      return true;
   }else{
      return false;
   }
}





// console.log(relationMatkul(1));
mahasiswa.map(val => {

      console.log(`mahasiswa ${val.nama} punya job -> ${relationJobs(val._id)}`);
      console.log(`------------`);
});
