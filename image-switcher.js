(function() {
    var action = document.getElementById("image-switcher-action");
    
    if(action){
        action.addEventListener("click", function(event) {
            var animation = $(action).hasClass('image-switch-animation');
            switchImage(animation);
        });
        function switchImage(animation) {
            $(".image-switcher").each(function( index ) {
                let xSrc = $(this).data("switch-src");
                let ySrc = this.src;
                $(this).attr("src", xSrc);
                $(this).data("switch-src", ySrc);
                if(animation === true){
                    let animationType = $(this).data('animation');
                    this.classList.add('animate__animated', 'animate__'+animationType);
                    this.addEventListener('animationend', () => {
                    this.classList.remove('animate__animated', 'animate__'+animationType);
                  });
                }
            });
        }
    }
})();