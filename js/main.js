// init bootstrap's tooltip plugin
$(function () {
  $("[data-toggle='tooltip']").tooltip({
    // attach all tooltips to body
    container: "body"
  });
  
  // ## list.js
  ['results'].forEach(function (container) {
    
    var options = {
        valueNames: [ 'name', 'study', 'filesize', 'loc' ]
    };
    
    var list = new List(container, options);
    
    // attach functions
    list.on('updated', function () {
      // fix grid on every list update
      fixTheGrid('#'+container);
    });
    
    list.on('sortComplete', function () {
    
    });
    
    // trigger initial sorting
    // list.sort('name', { order: "asc" }); // does not set class :(
    // fallback hack: simulate click on sort button
    $(list.listContainer).find('[data-sort="name"]').click();
    
  });
  
  
  // ## helper functions
  
  // function to dynamically clearfix the grid
  function fixTheGrid(container) {
    
    // find the list
    var $list = $(container).find('.list');
    
    // remove old clearfixes
    $list.find('.clearfix').remove();
    
    // add new clearfixes
    $list.children().each(function (i) {
      
      // build the right kind of clearfix
      var $clearfix = $('<div class="clearfix"></div>');
      
      if (isNth(2, i)) {
        $clearfix.addClass('visible-xs');
      }
      if (isNth(3, i)) {
        $clearfix.addClass('visible-sm');
      }
      if (isNth(4, i)) {
        $clearfix.addClass('visible-md visible-lg');
      }
      
      // attach the clearfix it if has a visible-* class
      if ($clearfix.prop('class').match(/visible-/)) {
        $(this).after($clearfix);
      }
    });
  }
  
  function isNth(n, v) {
    if (((v+1) % n) === 0) {
      return true;
    } else {
      return false;
    }
  }
});

