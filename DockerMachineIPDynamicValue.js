'use strict'

// define dependancies
var exec = require('child_process').execSync

// define extension class
var DockerMachineIPDynamicValue = function DockerMachineIPDynamicValue() {
  this.title = function title() {
    return 'Docker Machine'
  }

  this.text = function text() {
    return 'IP Address'
  }

  this.evaluate = function evaluate() {
    var dynamicValue;

    try {
      dynamicValue = exec('docker-machine ip ' + this.dockerMachineName)
    } catch (err) {
      console.log('ERROR getting docker machine IP address: ' + JSON.stringify(err, null, '\t'));
    } finally {
      return dynamicValue.toString() || null;
    }

  }

  return
}

DockerMachineIPDynamicValue.identifier = 'com.galenandrew.DockerMachineIPDynamicValue'
DockerMachineIPDynamicValue.title = 'Docker Machine IP Dynamic Value'
DockerMachineIPDynamicValue.inputs = [
  DynamicValueInput('dockerMachineName', 'Docker Machine Name', 'String')
]

egisterDynamicValueClass(DockerMachineIPDynamicValue)
