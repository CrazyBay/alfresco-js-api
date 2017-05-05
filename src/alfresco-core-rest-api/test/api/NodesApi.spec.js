/**
 * Alfresco Content Services REST API
 * **Core API**  Provides access to the core features of Alfresco Content Services. 
 *
 * OpenAPI spec version: 1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AlfrescoCoreRestApi);
  }
}(this, function(expect, AlfrescoCoreRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AlfrescoCoreRestApi.NodesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('NodesApi', function() {
    describe('copyNode', function() {
      it('should call copyNode successfully', function(done) {
        //uncomment below and update the code to test copyNode
        //instance.copyNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAssocation', function() {
      it('should call createAssocation successfully', function(done) {
        //uncomment below and update the code to test createAssocation
        //instance.createAssocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createNode', function() {
      it('should call createNode successfully', function(done) {
        //uncomment below and update the code to test createNode
        //instance.createNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSecondaryChildAssocation', function() {
      it('should call createSecondaryChildAssocation successfully', function(done) {
        //uncomment below and update the code to test createSecondaryChildAssocation
        //instance.createSecondaryChildAssocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAssocation', function() {
      it('should call deleteAssocation successfully', function(done) {
        //uncomment below and update the code to test deleteAssocation
        //instance.deleteAssocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNode', function() {
      it('should call deleteNode successfully', function(done) {
        //uncomment below and update the code to test deleteNode
        //instance.deleteNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSecondaryChildAssocation', function() {
      it('should call deleteSecondaryChildAssocation successfully', function(done) {
        //uncomment below and update the code to test deleteSecondaryChildAssocation
        //instance.deleteSecondaryChildAssocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNode', function() {
      it('should call getNode successfully', function(done) {
        //uncomment below and update the code to test getNode
        //instance.getNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNodeContent', function() {
      it('should call getNodeContent successfully', function(done) {
        //uncomment below and update the code to test getNodeContent
        //instance.getNodeContent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNodeChildren', function() {
      it('should call listNodeChildren successfully', function(done) {
        //uncomment below and update the code to test listNodeChildren
        //instance.listNodeChildren(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listParents', function() {
      it('should call listParents successfully', function(done) {
        //uncomment below and update the code to test listParents
        //instance.listParents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listSecondaryChildren', function() {
      it('should call listSecondaryChildren successfully', function(done) {
        //uncomment below and update the code to test listSecondaryChildren
        //instance.listSecondaryChildren(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listSourceAssociations', function() {
      it('should call listSourceAssociations successfully', function(done) {
        //uncomment below and update the code to test listSourceAssociations
        //instance.listSourceAssociations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listTargetAssociations', function() {
      it('should call listTargetAssociations successfully', function(done) {
        //uncomment below and update the code to test listTargetAssociations
        //instance.listTargetAssociations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('lockNode', function() {
      it('should call lockNode successfully', function(done) {
        //uncomment below and update the code to test lockNode
        //instance.lockNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('moveNode', function() {
      it('should call moveNode successfully', function(done) {
        //uncomment below and update the code to test moveNode
        //instance.moveNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unlockNode', function() {
      it('should call unlockNode successfully', function(done) {
        //uncomment below and update the code to test unlockNode
        //instance.unlockNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateNode', function() {
      it('should call updateNode successfully', function(done) {
        //uncomment below and update the code to test updateNode
        //instance.updateNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateNodeContent', function() {
      it('should call updateNodeContent successfully', function(done) {
        //uncomment below and update the code to test updateNodeContent
        //instance.updateNodeContent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));