// vanilla accordion - from codepen - I don't understand this yet...

// (function () {
//   var accordions, i;
  
//   // Make sure the browser supports what we are about to do.
//   if (!document.querySelectorAll || !document.body.classList) return;
  
//   // Using a function helps isolate each accordion from the others
//   function makeAccordion(accordion) {
//     var targets, currentTarget, i;
    
//     targets = accordion.querySelectorAll('.accordion > * > h1');
//     for(i = 0; i < targets.length; i++) {
//       targets[i].addEventListener('click', function () {
//         if (currentTarget)
//           currentTarget.classList.remove('expanded');
        
//         currentTarget = this.parentNode;
//         currentTarget.classList.add('expanded');
//       }, false);
//     }

//     accordion.classList.add('js');
//   }

//   // Find all the accordions to enable
//   accordions = document.querySelectorAll('.accordion');
  
//   // Array functions don't apply well to NodeLists
//   for(i = 0; i < accordions.length; i++) {
//     makeAccordion(accordions[i]);
//   }
  
// })();

// var largeImage = document.getElementById("large_image");
// var thumbnails = document.getElementsByClassName("thumbnail");

// for (var i = 0; i < thumbnails.length; i++) {
//   var thumb = thumbnails[i];
//   thumb.addEventListener("click", function(){
//     var thumbHtml = this.innerHTML;
//     largeImage.innerHTML=thumbHtml;
//     this.setAttribute("id", "selected_thumb");
//   });
// }


