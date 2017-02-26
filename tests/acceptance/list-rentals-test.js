import { test } from 'qunit';
import moduleForAcceptance from 'super-rental/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('should redirect to rental route', function(assert){
  visit('/');
  andThen(function(){
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });
});

test('shoule list available rentals', function(assert){
  visit('/');
  andThen(function(){
    assert.equal(find('.listing').length, 3, 'should show three listings');
  });
});

test('should link to information about the company', function(assert){
  visit('/');
  click('a:contains("about")');
  andThen(function(){
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should like to contact information', function(assert){
  visit('/');
  click('a:contains("Contact")');
  andThen(function(){
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

test('should filter the list of rentals by city', function(assert){
  visit('/');
  fillIn('.list-filter', 'input', 'seattle');
  keyEvent('.list-filter', 'keyup', 69);
  andThen(function(){
    assert.equal(find('.listings').length, 1, 'should show 1 listing');
    assert.equal(find('.listing .location:contains("Seattle")').length, 1, 'should contain 1 listing with location Seattle');
  });
});

test('should show details for a specific rental', function(assert){
  visit('/rentals');
  click('a:contains("Grand Old Manssion")');
  andThen(function(){
    assert.equal(currentURL(), '/rentals/grand-ol-mansion', 'should navigate to show route');
    assert.equal(find('.show-listing h2').text(), "Grand Old Manssion", 'should list rental title');
    assert.equal(find('.description').length, 1, 'should list a description for the property');
  });
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
