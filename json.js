const user={
    id:1,name:'amir',job:'gorib'};
    //javaScript object notation(JSON)
console.log(user)
const stringified =JSON.stringify(user);
console.log(stringified)

//{ id: 1, name: 'amir', job: 'gorib' }
//{"id":1,"name":"amir","job":"gorib"}


const shop={
    owner:'Alia',
  address:{
    city:'noagon',
    country:'BD'
    },
    products:['laptop','mic','pc','phone'],
    isOpen:true,
    isNew:true
};
console.log(shop);
const stringified1=JSON.stringify(shop)