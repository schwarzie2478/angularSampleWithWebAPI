describe("testing productService", function() {

var productService;
beforeEach(module('productService'));

  beforeEach(inject(function (_productServicee_) {
    productService = _productServicee_;
  }));

  it("contains spec with an expectation", function() {

    productService.get();
    expect(true).toBe(true);

  });
});
