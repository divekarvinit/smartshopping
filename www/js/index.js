/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var macAddress = "CC:61:E5:B6:9A:66";
var totalCartValue = 0;

var app = {
    // Application Constructor
    initialize: function() {
        // $( ".alertpara" ).after( "<b>Min Event Initialised</b>" );
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        // $( ".alertpara" ).after( "<b>On ready Called</b>" );
        // bluetoothSerial.connect(macAddress, app.onConnect, app.onDisconnect);
        nfc.addNdefListener(app.onNfc, app.success, app.failure);
        nfc.addTagDiscoveredListener(app.onNfc);
    },

    onNfc : function(nfcEvent){
           // alert(JSON.stringify(nfcEvent.tag));
            updateCartItems(nfcEvent.tag);
            populateCart();
    },

    success : function(){
       // alert("Success NFC");
    },

    failure : function(){
        alert("Failure NFC");
    },

    onConnect: function() {
        bluetoothSerial.subscribe("\n", app.onMessage, app.subscribeFailed);
        //$( ".alertpara" ).after( "<b>Connected to a device</b>" );
       message.innerHTML="Connected to " + macAddress + ".";        
    },
    onDisconnect: function() {
        alert("Disconnected");
        $( ".alertpara" ).after( "<b>Disconnected</b>" );
        message.innerHTML="Disconnected.";
    },
    onMessage: function(data) {
        alert('Received' + data);
        //$( ".alertpara" ).after( "<b>Message Received: </b>" + "<b>" + data + "</b>" );
        message.innerHTML = data;
    },

    subscribeFailed: function() {
        // $( ".alertpara" ).after( "<b>Subscribe Failed</b>" );
        alert("subscribe failed");
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

//app.initialize();

//nfc.addNdefListener(onNfc, success, failure);
app.initialize();
