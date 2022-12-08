function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('body').style.opacity = '-2';
   
    
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('body').style.opacity='1';
}



