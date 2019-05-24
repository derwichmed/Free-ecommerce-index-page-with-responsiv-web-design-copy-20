$(function (){
   $('.liste_view_products_one section .item').mouseenter(function (){
       $('.liste_view_products_one section .item .icons_nav:visible').hide();
       $(this).find('.icons_nav').fadeIn("slow");
   });
   
   $('.liste_product_grid .item').mouseenter(function (){
      $('.liste_product_grid .item .icons_nav:visible').hide();
      $(this).find('.icons_nav').fadeIn("slow"); 
   });
});