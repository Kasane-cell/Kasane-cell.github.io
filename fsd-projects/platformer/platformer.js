$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(600, 500, 150, 900);
createPlatform(550, 625, 50, 50, "purple");
createPlatform(300, 700, 150, 900);
createPlatform(900, 300, 150, 200);
createPlatform(1300, 625, 150, 200)
createPlatform(1150, 500, 100, 20)

    // TODO 3 - Create Collectables
createCollectable("image", 1150, 475);
createCollectable("image", 1200, 475);
createCollectable("image", 1250, 475);
    
    // TODO 4 - Create Cannons
createCannon("top",0400, 1000);
createCannon("right", 400, 1000);
createCannon("top", 1100, 1000);



    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
