QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

module( "Contact Backbone Model Tests" );
  QUnit.test("Can be instantiated with correct default values", function() {
      // Number of Assertions we Expect
      expect( 2 );

      // Instantiate Local Contact Backbone Model Object
      var contact = new app.Todo();

      // Default Attribute Value Assertions
      equal( contact.get("title"), "" );
      equal( contact.get("completed"), false );
	 // deepEqual( contact.get("tasks"), [] );
  });