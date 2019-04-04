const Traveller = function(journeys) {
  this.journeys = journeys;
 };

Traveller.prototype.getJourneyStartLocations = function() {
   return this.journeys.map((journey) => {
   return journey.startLocation
 });
 } ;

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
  return journey.endLocation
});

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journey)=> {
    return journey.transport === transport
  });
  return result;

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey)=> {
    return journey.distance >= minDistance
  });
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let totalDistance = 0
  let result = this.journeys.reduce( (sum, journey) => {
    return sum += journey.distance
  }, 0);
  return result;

};

Traveller.prototype.getUniqueModesOfTransport = function (journeys, transport) {

      let result = this.journeys.map((journey) =>{
      return journey.transport
      });

     let uniqueTransports = new Set(result);
     return Array.from(uniqueTransports);
   };



module.exports = Traveller;
