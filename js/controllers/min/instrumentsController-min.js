app.controller("instrumentsCtrl",["$scope","$http",function(t,n){t.title="My Instruments",n.get("data/instruments/instruments.json").success(function(n){t.instruments=n})}]);