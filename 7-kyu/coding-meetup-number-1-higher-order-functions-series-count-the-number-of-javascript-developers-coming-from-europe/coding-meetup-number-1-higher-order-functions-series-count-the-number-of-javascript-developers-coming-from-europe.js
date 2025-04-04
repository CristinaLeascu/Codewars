function countDevelopers(list) {
  // your awesome code here :)
   return list.filter(function(l) {
    return (l.continent == 'Europe' && l.language == 'JavaScript');
  }).length; 
  }
​
​