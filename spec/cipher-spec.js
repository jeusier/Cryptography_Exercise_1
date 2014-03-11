var Crypto = require("../cipher").Crypto;

describe("Using the key KINGTAK", function () {
    
    it("the encoded message of OCTOKITTEN IS YKGUDIDDMA", function () {
        var encodedMessage = new Crypto("KINGTAK","OCTOKITTEN");
        expect(encodedMessage.encoder() ).toEqual("YKGUDIDDMA");
    });

    it("the decoded message of YKGUDIDDMA IS OCTOKITTEN", function () {
        var decodedMessage = new Crypto("KINGTAK","YKGUDIDDMA");
        expect(decodedMessage.decoder() ).toEqual("OCTOKITTEN");
    });
});

describe("Using the key JCURRAY", function () {
    
    it("the encoded message of OCTOKITTEN IS XENFBIRCGH", function () {
        var encodedMessage = new Crypto("JCURRAY","OCTOKITTEN");
        expect(encodedMessage.encoder() ).toEqual("XENFBIRCGH");
    });

    it("the decoded message of PIMDMIFUKG IS OCTOKITTEN", function () {
        var decodedMessage = new Crypto("JCURRAY","XENFBIRCGH");
        expect(decodedMessage.decoder() ).toEqual("OCTOKITTEN");
    });
});