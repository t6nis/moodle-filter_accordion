YUI.add('moodle-filter_accordion-accordion', function(Y) {
    // Define a name space to call
    M.filter_accordion = M.filter_accordion || {};
    M.filter_accordion.accordion = {
        init: function() {
            var handleAccordion = function(e) {
                var content = e.currentTarget.get('nextSibling');
                content.toggleView();
            };
            Y.delegate('click',handleAccordion, document, '.accordion-trigger');
        }
    };
}, '1.0', {
    requires: ['node']
});