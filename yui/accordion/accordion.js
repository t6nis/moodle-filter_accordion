YUI.add('moodle-filter_accordion-accordion', function(Y) {
    // Define a name space to call
    M.filter_accordion = M.filter_accordion || {};
    M.filter_accordion.accordion = {
        init: function() {
            Y.all('#accordion-content').setStyle('display', 'none'); //UT Only
            var handleAccordion = function(e) {
                var content = e.currentTarget.get('nextSibling');
                var trigger_icon = e.currentTarget.get('firstChild');
                if (trigger_icon.get('className') == 'fa fa-caret-right') {
                    trigger_icon.removeClass('fa-caret-right').addClass('fa-caret-down');
                } else if (trigger_icon.get('className') == 'fa fa-caret-down') {
                    trigger_icon.removeClass('fa-caret-down').addClass('fa-caret-right')
                }
                content.toggleView();
            };
            Y.delegate('click',handleAccordion, document, '.accordion-trigger');
        }
    };
}, '1.0', {
    requires: ['node']
});