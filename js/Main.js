//  Banner Change Event
const images=[
   'src/Banner1.jpg',
   'src/Banner2.jpg'
]
let image=$('#bannerimage img')
let i=0;
setInterval(()=>{
   i=(i+1)% images.length
   $(document).ready(()=>{
      image.fadeOut(2000,()=>{
         image.attr('src',`${images[i]}`)
         image.fadeIn(1000)     
      })
   })
},2000)

// NavigationBar Background-color Change Event
$(document).ready(()=>{
   $(window).scroll(function () {
      if ($(this).scrollTop() > 600) {
         $('.Nav_menu').css('background-color','#fff')
      }else{
         $('.Nav_menu').css('background-color','transparent')
      }
   });
});






//Using javascript Method
//    setInterval(()=>{
//       var el = document.getElementById('Main_header');
//          if (i< images.length - 1){
//             i++;
//             el.style.backgroundImage = `${images[1]}`
//          }else{
//             el.style.backgroundImage = `${images[0]}`
//          }

// },1000)
// window.onload = changeImage;
// console.log(image)