

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", iclick);

    function iclick() {
        var buttonin = this.innerHTML;
        switch (buttonin) {
            case "w":
                this.style.color = "purple";
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                this.style.color = "yellow";

                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                this.style.color = "black";

                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                this.style.color = "brown";

                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

            case "j":
                this.style.color = "red";

                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                this.style.color = "green";

                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                this.style.color = "violet";

                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;


            default:
                alert("not allowed");
                break;
        }
    }

}