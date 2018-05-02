const pageBehaviours = function(){
  const ayeButton = document.querySelector("#aye");
  ayeButton.addEventListener('click', function (){
    scrollTo({
      top: 1000,
      behavior: "smooth"
    });
    let splashImage = document.querySelector("#splash-screen");
    // splashImage.style.height = '30vh';
    setTimeout(removeSplashImage, 500);

  });
};

const removeSplashImage = function(){
  let splashImage = document.querySelector("#splash-screen");
  splashImage.style.display = 'none';
}
}
