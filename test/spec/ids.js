'use strict';

var _ = require('lodash');

var Ids = require('../../');


describe('IDs', function() {

  describe('#next', function() {

    it('should create id', function() {

      // given
      var ids = new Ids();

      // when
      var i1 = ids.next();

      // then
      expect(i1).to.be.defined;
    });

  });


  describe('#claim', function() {

    it('should set id as used', function() {

      // given
      var ids = new Ids();

      // when
      ids.claim('foo');

      // then
      expect(ids.assigned('foo')).to.be.true;
    });

  });


  describe('#assigned', function() {

    it('should answer whether id got already used', function() {

      // given
      var ids = new Ids();

      // assume
      expect(ids.assigned('foo')).to.be.false;

      // when
      ids.claim('foo');

      // then
      expect(ids.assigned('foo')).to.be.true;
    });

  });


  describe('performance', function() {

    it('should generate 100000 ids', function() {

      // given
      var ids = new Ids();

      var time = new Date().getTime();

      // when
      for (var i = 0; i < 100000; i++) {
        ids.next();
      }

      var total = new Date().getTime() - time;

      expect(total).to.be.below(1000);
    });

  });

});