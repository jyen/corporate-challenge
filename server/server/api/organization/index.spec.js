'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var organizationCtrlStub = {
    index: 'organizationCtrl.index',
    show: 'organizationCtrl.show',
    create: 'organizationCtrl.create',
    upsert: 'organizationCtrl.upsert',
    patch: 'organizationCtrl.patch',
    destroy: 'organizationCtrl.destroy'
};

var routerStub = {
    get: sinon.spy(),
    put: sinon.spy(),
    patch: sinon.spy(),
    post: sinon.spy(),
    delete: sinon.spy()
};

// require the index with our stubbed out modules
var organizationIndex = proxyquire('./index.js', {
    express: {
        Router() {
            return routerStub;
        }
    },
    './organization.controller': organizationCtrlStub
});

describe('Organization API Router:', function () {
    it('should return an express router instance', function () {
        organizationIndex.should.equal(routerStub);
    });

    describe('GET /api/organizations/:id', function () {
        it('should route to organization.controller.show', function () {
            routerStub.get
                .withArgs('/:id', 'organizationCtrl.show')
                .should.have.been.calledOnce;
        });
    });

    describe('POST /api/organizations', function () {
        it('should route to organization.controller.create', function () {
            routerStub.post
                .withArgs('/', 'organizationCtrl.create')
                .should.have.been.calledOnce;
        });
    });

    describe('PUT /api/organizations/:id', function () {
        it('should route to organization.controller.upsert', function () {
            routerStub.put
                .withArgs('/:id', 'organizationCtrl.upsert')
                .should.have.been.calledOnce;
        });
    });

    describe('DELETE /api/organizations/:id', function () {
        it('should route to organization.controller.destroy', function () {
            routerStub.delete
                .withArgs('/:id', 'organizationCtrl.destroy')
                .should.have.been.calledOnce;
        });
    });
});
