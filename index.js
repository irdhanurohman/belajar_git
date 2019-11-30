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

function relationMatkul(id)
{
   return mataKuliah.filter(val => val._id == id)[0].title;
}


// console.log(relationMatkul(1));
mahasiswa.map(val => {
   
      console.log(`mahasiswa ${val.nama} punya matkul -> ${relationMatkul(val._id)}`);
      console.log(`------------`);
});
