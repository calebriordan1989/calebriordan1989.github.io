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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

     //TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 650, 200, 20, "red")
    createPlatform(700, 550, 200, 20, "orange")
    createPlatform(1100, 450, 200, 20, "yellow")
    createPlatform(700, 350, 200, 20, "green")
    createPlatform(300, 250, 200, 20, "blue")
    createPlatform(100, 400, 200, 20, "indigo")
    createPlatform(1100, 250, 200, 20, "violet")
    createPlatform(700, 150, 200, 20, "black")

    // TODO 3 - Create Collectables
    createCollectable("diamond", 180, 350, 0.5, 0.7)
    createCollectable("kennedi", 1180, 200, 0.5, 0.7)
    createCollectable("steve", 780, 105, 0.5, 0.7)


    
    // TODO 4 - Create Cannons
    createCannon("top", 600, 1500)
    createCannon("top", 1000, 1500)
    createCannon("right", 500, 2500)
    createCannon("left", 150, 2000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
