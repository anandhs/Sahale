$(document).ready(function() {

  var params = URI(window.location.href).search(true);

  // populate and render tables
  $.get('/flows/running', function(data) {
      ViewUtil.renderRunningJobs(DataUtil.unpackFlows(data), params.cluster);
  });

  $.get('/flows/completed', function(data) {
      ViewUtil.renderCompletedJobs(DataUtil.unpackFlows(data), params.cluster);
  });

  // set refresh interval
  setTimeout( function() { location.reload(); }, 25 * 1000 );
});
