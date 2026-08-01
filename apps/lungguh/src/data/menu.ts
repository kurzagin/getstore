export type MenuCategory = "Nasi Kucing"|"Bakaran"|"Gorengan"|"Makanan Berkuah"|"Wedang"|"Es & Minuman";
export type MenuItem = { name:string; description:string; price:number; category:MenuCategory; spice:"Tidak pedas"|"Sedang"|"Pedas"; vegetarian:boolean; availability:string; image:string; umkm?:boolean };
const rice="/images/menu-nasi.png";
const grill="/images/menu-bakaran.png";
const fried="/images/menu-gorengan.png";
const soup="/images/menu-berkuah.png";
const wedang="/images/menu-wedang.png";
const iced="/images/menu-es.png";
export const menuItems:MenuItem[]=[
 {name:"Nasi Kucing Teri Sambal",description:"Nasi pulen, teri gurih, sambal bawang.",price:5000,category:"Nasi Kucing",spice:"Pedas",vegetarian:false,availability:"Harian",image:rice},
 {name:"Nasi Kucing Oseng Tempe",description:"Nasi hangat dengan oseng tempe manis gurih.",price:5000,category:"Nasi Kucing",spice:"Tidak pedas",vegetarian:true,availability:"Harian",image:rice,umkm:true},
 {name:"Nasi Kucing Ayam Suwir",description:"Ayam suwir kecap, bawang goreng, nasi pulen.",price:7000,category:"Nasi Kucing",spice:"Sedang",vegetarian:false,availability:"Harian",image:rice},
 {name:"Sate Usus Bakar",description:"Usus berbumbu, dibakar sampai wangi.",price:4000,category:"Bakaran",spice:"Sedang",vegetarian:false,availability:"Harian",image:grill},
 {name:"Sate Telur Puyuh",description:"Telur puyuh bacem dengan olesan kecap.",price:5000,category:"Bakaran",spice:"Tidak pedas",vegetarian:true,availability:"Harian",image:grill},
 {name:"Sate Ati Ampela",description:"Ati ampela ungkep, dibakar per tusuk.",price:5000,category:"Bakaran",spice:"Sedang",vegetarian:false,availability:"Mulai 16.00",image:grill},
 {name:"Sate Kulit",description:"Kulit ayam gurih dengan sambal kecap.",price:4000,category:"Bakaran",spice:"Sedang",vegetarian:false,availability:"Harian",image:grill},
 {name:"Tempe Mendoan",description:"Tempe tipis, tepung gurih, masih lembut.",price:4000,category:"Gorengan",spice:"Tidak pedas",vegetarian:true,availability:"Harian",image:fried,umkm:true},
 {name:"Tahu Isi Sayur",description:"Tahu goreng berisi sayur renyah.",price:4000,category:"Gorengan",spice:"Tidak pedas",vegetarian:true,availability:"Harian",image:fried,umkm:true},
 {name:"Pisang Goreng",description:"Pisang matang dalam balutan tepung tipis.",price:5000,category:"Gorengan",spice:"Tidak pedas",vegetarian:true,availability:"Harian",image:fried},
 {name:"Bakwan Jagung",description:"Jagung manis, daun bawang, goreng dadakan.",price:4000,category:"Gorengan",spice:"Tidak pedas",vegetarian:true,availability:"Harian",image:fried,umkm:true},
 {name:"Soto Ayam Kampung",description:"Kuah bening hangat, ayam suwir, nasi terpisah.",price:15000,category:"Makanan Berkuah",spice:"Sedang",vegetarian:false,availability:"Harian",image:soup},
 {name:"Lontong Opor",description:"Lontong, ayam, dan kuah santan ringan.",price:16000,category:"Makanan Berkuah",spice:"Tidak pedas",vegetarian:false,availability:"Harian",image:soup},
 {name:"Wedang Jahe Gula Batu",description:"Jahe bakar, gula batu, disajikan panas.",price:7000,category:"Wedang",spice:"Tidak pedas",vegetarian:true,availability:"Harian",image:wedang,umkm:true},
 {name:"Wedang Uwuh",description:"Rempah wangi, kayu secang, gula batu.",price:9000,category:"Wedang",spice:"Tidak pedas",vegetarian:true,availability:"Harian",image:wedang},
 {name:"Teh Tubruk",description:"Teh panas dengan aroma melati.",price:4000,category:"Wedang",spice:"Tidak pedas",vegetarian:true,availability:"Harian",image:wedang},
 {name:"Es Jeruk Peras",description:"Jeruk segar, es, sedikit gula.",price:8000,category:"Es & Minuman",spice:"Tidak pedas",vegetarian:true,availability:"Harian",image:iced,umkm:true},
 {name:"Es Teh Kampung",description:"Teh manis dingin untuk teman ngobrol.",price:5000,category:"Es & Minuman",spice:"Tidak pedas",vegetarian:true,availability:"Harian",image:iced},
 {name:"Kopi Tubruk",description:"Kopi hitam seduh langsung, tanpa mesin.",price:7000,category:"Es & Minuman",spice:"Tidak pedas",vegetarian:true,availability:"Harian",image:iced},
];
export const categories:Array<"Semua"|MenuCategory>=["Semua","Nasi Kucing","Bakaran","Gorengan","Makanan Berkuah","Wedang","Es & Minuman"];
