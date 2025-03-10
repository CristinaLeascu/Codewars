var number = function(busStops){
    let busStopsLength = busStops.length;
    let peopleOn = 0;
    let peopleOff = 0;
    for (let i = 0; i < busStopsLength; i++){
        peopleOn += busStops[i][0];
        peopleOff += busStops[i][1];
    }
    return (peopleOn - peopleOff);
​
  }
  
  
​