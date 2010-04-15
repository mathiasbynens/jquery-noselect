/*!
 * noSelect jQuery Plugin
 * @link http://github.com/mathiasbynens/noSelect-jQuery-Plugin
 * @author Mathias Bynens <http://mathiasbynens.be/>
 */
;(function($) {
 $.fn.noSelect = function() {
  function f() {
   return false;
  };
  return $(this).each(function() {
   this.onselectstart = this.ondragstart = f; // Webkit & IE
   $(this)
    .mousedown(f) // Webkit & Opera
    .css({ MozUserSelect: 'none', WebkitUserSelect: 'none', userSelect: 'none' });
  });
 };
})(jQuery);