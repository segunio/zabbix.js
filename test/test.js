var zabbix = require ('../lib/zabbix');
var should = require ('should');
var assert = require ('assert');

var url = 'http://zabbix.test.sparebank1.no/api_jsonrpc.php';
var user = 'e3130';
var password =  'zabbix';
describe('Zabbix', function(){
    describe('Get Api version', function() {
      it('should return a valid result', function(done){
        var client = new zabbix.Client(url, user, password);
        client.getApiVersion(function (err, resp, body) {
          if (err) throw err;
          else {
            resp.statusCode.should.be.equal(200);
            should.exist(body);
            body.should.have.property('result');
            body.result.should.be.equal('1.2');
            done();
          }

        });
      })
    })
})
