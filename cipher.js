exports.Crypto = Crypto;

function Crypto(keyString, messageString) {
    this.codeTable = codeTable = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    //store key and message into arrays
    this.key = keyString.split('');
    this.message = messageString.split('');

    //encodes the message using the key as a cipher
    this.encoder = function(){
        
        //create array to hold encoded message
        var encoded = new Array();

        //loop through message to find values for key/message indexes from cipher
        for (var i = 0; i < this.message.length; i++){
            
            //add index of key with index i of message
            //if message larger than key, wrap to the beginning of key
            preCode = this.codeTable.indexOf(this.message[i]) + this.codeTable.indexOf(this.key[i%this.key.length]);
            
            //sum%26 will be the index of the code
            code = preCode%26;
            console.log(code);
            
            //push value of index into array
            encoded.push(this.codeTable[code]);
        }
        //return string of encoded array
        return encoded.join('');
                     
    }

    //decodes the encrypted message using the key as a cipher
    this.decoder = function(){
        
        //create array to hold decoded message
        var decoded = new Array();

        //loop through message to find values for key/message indexes from cipher
        for (var i = 0; i < this.message.length; i++){
            //add index of key with index i of message
            //if message larger than key, wrap to the beginning of key
            preCode = this.codeTable.indexOf(this.message[i]) - this.codeTable.indexOf(this.key[i%this.key.length]);

            //sum%26 will be the index of the code
            code = preCode%26;
            if (code < 0) {
                code = 26 + code;  
            }
            console.log(code);
            //push value of index into array
            decoded.push(this.codeTable[code]);
        }
        //return string of decoded array
        return decoded.join('');
                     
    }
}    