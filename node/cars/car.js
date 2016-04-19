car = {
  color: 'red',
  convertable: true,
  currentSpeed: 0,
  accelerate: function(accelspeed){
  this.currentSpeed += accelspeed },
  decelerate: function(decelspeed){
  this.currentSpeed -= decelspeed }
};
module.exports = car;
