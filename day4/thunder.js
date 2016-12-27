function Thunder() {
  this.thunder = true;
  this.color = 51;

  this.fade = function() {
    // fade out
    if (this.thunder) {
      if (this.color >= 51) {
        this.color = this.color - 3;
      }
      else {
        this.thunder = false;
      }
    }
  };

  this.activateThunder = function() {
    if (floor(random(200)) == 1) {
      this.color = 200;
      this.thunder = true;
    }
  };

  this.bgColor = function() {
    this.activateThunder();
    this.fade();

    return this.color;
  };
}
