(function() {

  // define dependencies
  var exec = require('child_process').execSync;

  // define extension class
  var DockerMachineIPDynamicValue = function() {
    this.ipAddress = 'localhost';

    this.evaluate = function() {

      try {
        this.ipAddress = exec('docker-machine ip ' + this.dockerMachineName).toString();
      } catch (err) {
        console.log('ERROR getting docker machine IP address: ' + JSON.stringify(err, null, '\t'));
      }

      return this.ipAddress;

    };

    this.title = function() {
      return 'Docker Machine IP Address';
    };

    this.text = function() {
      return this.ipAddress;
    };

  };

  DockerMachineIPDynamicValue.identifier = 'io.galenandrew.PawExtensions.DockerMachineIPDynamicValue';
  DockerMachineIPDynamicValue.title = 'Docker Machine IP Dynamic Value';
  DockerMachineIPDynamicValue.inputs = [
    DynamicValueInput('dockerMachineName', 'Docker Machine Name', 'String')
  ];

  registerDynamicValueClass(DockerMachineIPDynamicValue);

}).call(this);
