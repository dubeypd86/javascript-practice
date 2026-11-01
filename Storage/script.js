/*
Local storage ----> Apke browser ke andar data store karna 
jo ki browser band karne pe bhi delete naa ho

Session storage ----> ye data temporaray save karta hai 
matlab tab(current dekstop) band hua to data gayab

Cookies ----> Ye  bhi data store karta hai and data browser ke cookies naam ke property mein save hota hai 
and ye cookie concept kam data ya light data ke liye use hota hai

*/ 
/*
localStorage :
1.store kaise kare ---> setItem()
2.data fetch kaise kare ---> getItem()
3.remove kaise kare --->removeItem()
4.update kaise kare ---->setItem()
*/

localStorage.setItem("name","Prince");
console.log(localStorage.getItem("name"));
localStorage.setItem("name","princess");
localStorage.clear()

sessionStorage.setItem("name","prince");
sessionStorage.getItem("name","prince");