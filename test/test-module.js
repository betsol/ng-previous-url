describe('Module', function () {

  //==============//
  // INITIALIZING //
  //==============//

  beforeEach(module('betsol.previousUrl'));

  var previousUrl;
  beforeEach(inject(function (_previousUrl_) {
    previousUrl = _previousUrl_;
  }));


  //=========//
  // TESTING //
  //=========//

  it('service should be present', function () {
    expect(previousUrl).to.be.an('object');
  });

  it('service public API is correct', function () {
    expect(previousUrl.redirectBack).to.be.a('function');
    expect(previousUrl.hasUrl).to.be.a('function');
  });

});
